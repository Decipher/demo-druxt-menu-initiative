# Drupal Menu Initiative DruxtJS presentation.

## Drupal 9 - Quickstart.

1. Ceate Drupal 9 codebase:

   `composer create-project -s dev drupal/recommended-project:9.1.x drupal-9 && cd $_`

2. Add [Druxt](https://www.drupal.org/project/druxt) module:

    `composer require drupal/druxt:^0.4.1`

3. Quickstart Drupal installation:

    `php -d memory_limit=-1 web/core/scripts/drupal quick-start`

4. Install **DruxtJS** module:

    http://127.0.0.1:8888/en/admin/modules

5. Add **Access DruxtJS JSON:API resources.** permission to **Anonymous user** role:

    http://127.0.0.1:8888/en/admin/people/permissions


## NuxtJS.

1. Create Nuxt codebase:

    `npx create-nuxt-app nuxt && cd $_`

2. Add [Druxt Menu](https://menu.druxtjs.org) module:

    `npm i druxt-menu`

3. Install and configured module:

    `nuxt.config.js`
    ```
    modules: [
      ...
      'druxt-menu'
    ],

    druxt: {
      baseUrl: 'http://127.0.0.1:8888',
      menu: {
        jsonApiMenuItems: true
      }
    },
    ```

4. Add `<DruxtMenu name="main" />` to `pages/index.vue`.


## Example 1 - Props and Slots.

Main menu, single level, using `b-nav>b-nav-item` structure.

This method allows customisation of the props used by the default templates of the module component.

```
<DruxtMenu
  depth="1"
  item-component="b-nav-item"
  name="main"
/>
```

`global/DruxtMenuMain.vue`
```
<template>
  <b-nav>
    <slot />
  </b-nav>
</template>
```

## Example 2 - Templates.

Main menu, multi level, using `b-nav>b-nav-item-dropdown>b-nav-item` via slot templates.

This method allows customisation of templates used by the module component.

```
<DruxtMenu name="main">
  <template #item="{ item: { entity } }">
    <b-nav-item :to="entity.attributes.link.uri.replace('internal:', '')">
      {{ entity.attributes.title }}
    </b-nav-item>
  </template>

  <template #parent="{ item: { children, entity } }">
    <b-nav-item-dropdown :text="entity.attributes.title">
      <DruxtMenuItem :item="{ entity, children: [] }" />

      <DruxtMenuItem
        v-for="item of children"
        :key="item.entity.id"
        :item="item"
      />
    </b-nav-item-dropdown>
  </template>
</DruxtMenu>
```

`global/DruxtMenuMain.vue`
```
<template>
  <b-nav>
    <slot />
  </b-nav>
</template>
```

## Example 3 - Slotless wrapper.

Main menu, 2 levels, using `b-nav>b-nav-item-dropdown>b-nav-item` via custom slotless wrapper component.

This method allows full control using data made available by the module component.

```
<DruxtMenu name="main" />
```

`global/DruxtMenuMain.vue`
```
<template>
  <b-nav>
    <component
      v-for="item of items"
      :key="item.entity.id"
      :is="!!item.children.length ? 'b-nav-item-dropdown' : 'b-nav-item'"
      v-bind="propsData(item.entity, !!item.children.length)"
    >
      <span v-if="!item.children.length">{{ item.entity.attributes.title }}</span>

      <span v-else>
        <b-nav-item
          v-for="child of item.children"
          :key="child.entity.id"
          v-bind="propsData(child.entity, false)"
        >
          <span>{{ child.entity.attributes.title }}</span>
        </b-nav-item>
      </span>
    </component>
  </b-nav>
</template>

<script>
import { DruxtMenuMixin } from 'druxt-menu'

export default {
  mixins: [DruxtMenuMixin],

  methods: {
    propsData(entity, hasChildren) {
      if (hasChildren) {
        return {
          text: entity.attributes.title
        }
      }
      return {
        to: entity.attributes.link.uri.replace('internal:', '')
      }
    }
  }
}
</script>
```

## Example 4 - Extend component.

Custom component, extending DruxtMenu, rendering raw menu data.

This method allows full override of the module component.

```
<Menu />
```

`Menu.vue`
```
<template>
  <div>{{ getMenuItems() }}</div>
</template>

<script>
import { DruxtMenuComponent } from 'druxt-menu'

export default {
  extends: DruxtMenuComponent
}
</script>
```

## Example 5 - Nuxt plugin.

Custom component, using DruxtMenu plugin, rendering raw menu data using both communication methods.

This method allows full control without using the DruxtMenu component methods or Vuex store.


```
<Menu />
```

`Menu.vue`
```
<template>
  <div v-if="!$fetchState.pending">
    <div>
      <strong>/jsonapi/menu_link_content--menu_link_content/{{ menuName }}</strong>
      {{ menuLinkContent }}
    </div>

    <div>
      <strong>/jsonapi/menu_items/{{ menuName }}</strong>
      {{ jsonApiMenuItems }}
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    menuName: 'main',
    menuLinkContent: null,
    jsonApiMenuItems: null
  }),

  async fetch() {
    this.menuLinkContent = await this.$druxtMenu.getMenuLinkContent(this.menuName)
    this.jsonApiMenuItems = await this.$druxtMenu.getJsonApiMenuItems(this.menuName)
  }
}
</script>
```


## Example 6 - Node app

Sandbox: https://codesandbox.io/s/github/Decipher/druxt-menu-initiative/tree/master/examples/node-basic

Custom node app, no Vue/React/Framework.

1. Create codebase:

    `mkdir node && cd $_ && npm init -y && touch index.js`

2. Add [Druxt Menu](https://menu.druxtjs.org) module:

    `npm i druxt-menu`

3. Add `index.js`:

    ```
    const DruxtMenuClass = require('druxt-menu').DruxtMenu

    const baseUrl = 'https://demo-api.druxtjs.org/'
    const menuName = 'main'

    const DruxtMenu = new DruxtMenuClass(baseUrl)
    DruxtMenu.getJsonApiMenuItems(menuName).then((res) => {
      for (const item of res.entities) {
        console.log(item)
      }
    })
    ```

  4. Run:

     `node index.js`

## Issues

- Active menu items: https://github.com/druxt/druxt-menu/issues/40
- External links: https://github.com/druxt/druxt-menu/issues/41

## Misc

- Cleanup Drupal install.

  `sudo rm -rf web/sites/default/files web/sites/default/settings.php && chmod +w web/sites/default`
