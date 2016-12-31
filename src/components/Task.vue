<style lang="sass">
</style>

<template>
  <div>
    <h3>{{task.title}}</h3>
  </div>
</template>

<script>
export default {
  name: 'task-element',
  props:[
    'task'
  ]
}
</script>