# Example - Props and Slots

Main menu, single level, using `b-nav > b-nav-item` structure.

> This method allows customisation of the props used by the default templates of the module component.

---

```vue
<DruxtMenu
  :depth="1"
  item-component="b-nav-item"
  name="main"
/>
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

<druxt-menu :depth="1" item-component="b-nav-item" name="main"></druxt-menu>

---
