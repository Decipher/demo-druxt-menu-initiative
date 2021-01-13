# Drupal Menu Initiative DruxtJS presentation.

## 1. Drupal 9 backend - Quickstart.

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


## 2. NuxtJS frontend.

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


## Misc

- Cleanup Drupal install.

  `sudo rm -rf web/sites/default/files web/sites/default/settings.php && chmod +w web/sites/default`
