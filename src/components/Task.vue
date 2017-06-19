<template>
  <li class="Task">
    <input type="checkbox" class="Task__Checkbox"></input>
    <label class="Task__Label">{{task.title}}</label>
    <icon name="remove_circle" class="Task__RemoveIcon" :scale="100"></icon>
  </li>
</template>

<script>
export default {
  name: 'task-element',
  props:['task'],
}
</script>

<style>
</style>