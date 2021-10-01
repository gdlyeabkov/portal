<template>
  <div style="display: flex; height: 35px; background-color: rgb(235, 235, 235);">
    <p style="margin-left: 15px;">
      Главная
    </p>
    <span class="material-icons" style="margin-left: 15px;">
      east
    </span>
    <p style="color: rgb(175, 175, 175); margin-left: 15px;">
      {{ title }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'PersonalAreaBreadcrumbs',
  props: {
    title: {
      type: String,
      default: '',
      required: true
    }
  }
}
</script>

<style>

</style>