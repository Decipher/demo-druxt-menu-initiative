<logo></logo>

# Druxt Drupal module

[drupal.org/project/druxt](https://www.drupal.org/project/druxt)

> **Drupal: `^8.8 || ^9`**

> `composer require drupal/druxt`

## Quickstart

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
