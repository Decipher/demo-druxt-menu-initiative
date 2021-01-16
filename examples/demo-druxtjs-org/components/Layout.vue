<template>
  <div>
    <b-card class="my-4">
      <slot name="preview" />
    </b-card>

    <b-card no-body>
      <slot name="editor" />
    </b-card>
  </div>
</template>
