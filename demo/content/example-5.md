# Example - Plugin

Custom component, using DruxtMenu plugin, rendering raw menu data using both communication methods.

> This method allows full control without using the DruxtMenu component methods or Vuex store.

---

```vue
<Menu2 />
```

`Menu2.vue`
```vue
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

---

<menu2></menu2>

---
