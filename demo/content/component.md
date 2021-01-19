# `<DruxtMenu />`

> **`async fetch()` > `druxtMenu/get` > `DruxtMenu::getMenu()` > JSON:API > `druxtMenu/addEntities`**

## Properties

- depth
- itemClass
- itemComponent
- name
- parentClass
- parentComponent
- parentWrapperClass
- parentWrapperComponent

## Methods

- getMenuItems

## Example

```vue
<DruxtMenu
  :depth="1"
  name="main"
  item-component="marquee"
/>
```
<druxt-menu name="main" :depth="1" item-component="marquee"></druxt-menu>