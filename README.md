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

### Properties.

API Docs: https://menu.druxtjs.org/api/components/DruxtMenu.html#props

```
<DruxtMenu
  depth="1"
  item-component="b-nav-item"
  name="main"
/>
```

### Wrapper.

API Docs: https://druxtjs.org/guide/#druxtcomponentmixin-component-system

`DruxtMenuMain.vue`
```
<template>
  <b-nav>
    <slot />
  </b-nav>
</template>
```

## Example 2 - Props and templates.

Main menu, multi level, using `b-nav>b-nav-item-dropdown>b-nav-item` and templates.

### Templates.

@TODO - https://github.com/druxt/druxt-menu/issues/38

```
<DruxtMenu name="main">
  <template #item="{ item: { entity } }">
    <b-nav-item :to="entity.attributes.link.uri.replace('internal:/', '')">
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

## Misc

- Cleanup Drupal install.

  `sudo rm -rf web/sites/default/files web/sites/default/settings.php && chmod +w web/sites/default`
