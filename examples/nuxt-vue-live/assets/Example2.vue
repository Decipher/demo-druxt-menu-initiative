<template>
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
</template>
