# Example - Extend DruxtMenu

Custom component, extending DruxtMenu, rendering raw menu data.

> This method allows full control using data made available by the module component.

---

```vue
<Menu1 name="main" />
```

`Menu1.vue`
```vue
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

---

<menu1 name="main"></menu1>

---
