<template>
  <div>
    <h2>This is the list of task</h2>
    <new-task></new-task>
    <div v-for="task in tasks">
      <task :task="task"></task>
    </div>
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
  },
  data: function (){
    return {
      newtask: '',
      tasks: [
        {title: 'Learn Javascript', complete: false},
        {title: 'Do something else', complete: false}
      ]
    }
  }
}
</script>