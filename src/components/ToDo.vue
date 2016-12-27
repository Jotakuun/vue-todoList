<template>
  <div>
    <h2>This is the list of task</h2>
    <new-task></new-task>
    <task></task>
  </div>
</template>


<style lang="sass">
    
</style>

<script>
import task from './Task.vue'
import newTask from './NewTask.vue'

export default {
  name: 'todo',
  components: {
    'task' : task,
    'new-task' : newTask
  }
}
</script>