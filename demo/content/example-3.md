# Example - Slotless wrapper

Main menu, 2 levels, using `b-nav > b-nav-item-dropdown > b-nav-item` via custom slotless wrapper component.

> This method allows full control using data made available by the module component.

---

```vue
<DruxtMenu name="main" />
```

`global/DruxtMenuMain.vue`
```vue
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

---
