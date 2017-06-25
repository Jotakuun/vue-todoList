<template>
  <div class="ToDo">
    <new-task v-model="newtask" v-on:addtask="createNewTask()"></new-task>
    <ul>
      <task v-for="(task, index) in tasks" :task="task" :index="index"></task>
    </ul>
  </div>
</template>

<script>
import task from './Task.vue'
import newTask from './NewTask.vue'

export default {
  name: 'todo',
  components: {
    'task' : task,
    'new-task' : newTask
  },
  data: function() {
    return {
      newtask: '',
      tasks: [
        { title: 'Learn Javascript', complete: false, editing: false },
        { title: 'Do something else', complete: false, editing: false }
      ]
    }
  },
  methods: {
    createNewTask: function() {
      this.tasks.unshift({title: this.newtask, complete: false, editing: false});
      this.newtask = '';      
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../sass/components/todo.scss";
</style>