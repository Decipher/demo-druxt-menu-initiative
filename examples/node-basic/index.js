const DruxtMenuClass = require('druxt-menu').DruxtMenu

const baseUrl = 'https://demo-api.druxtjs.org/'
const menuName = 'main'

const DruxtMenu = new DruxtMenuClass(baseUrl)
DruxtMenu.getJsonApiMenuItems(menuName).then((res) => {
  for (const item of res.entities) {
    console.log(item)
  }
})
