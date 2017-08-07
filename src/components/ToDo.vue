<template>
  <div class="ToDo">
    <new-task v-model="newtask" v-on:addtask="createNewTask()" v-on:focus="newtaskfocus = $event" v-on:adding="addingTask = $event"></new-task>
    <div class="TasksList__Container">
      <ul class="TaskList" v-bind:class="{'TasksList--Focus': newtaskfocus, 'TasksList--Adding': addingTask}">
      <task v-for="(task, index) in tasks" :task="task" :index="index"></task>
    </ul>
    </div>
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
      newtaskfocus: false,
      addingTask: false,
      nextId: 2,
      tasks: [
        { id: 1, title: 'Learn Javascript', completed: false, editing: false },
        { id: 0, title: 'Do something else', completed: false, editing: false }
      ]
    }
  },
  methods: {
    createNewTask: function() {
      this.tasks.unshift(
        { id: this.nextId, 
          title: this.newtask,
          completed: false,
          editing: false
        }
      );
      this.nextId++;
      this.newtask = '';      
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../sass/components/todo.scss";
</style>