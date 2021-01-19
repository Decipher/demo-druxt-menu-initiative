# Example - Props and Slots

Main menu, multi level, using `b-nav > b-nav-item-dropdown > b-nav-item` via slot templates.

> This method allows customisation of templates used by the module component.

---

```vue
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
```vue
<template>
  <b-nav>
    <slot />
  </b-nav>
</template>
```

---
