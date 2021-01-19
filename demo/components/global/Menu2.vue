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
