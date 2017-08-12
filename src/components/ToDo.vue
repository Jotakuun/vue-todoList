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

var STORAGE_KEY = 'vue-todo'
var todoStorage = {
  fetch: function () {
    var tasks = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    if (tasks.length > 0) {
    tasks.forEach(function (todo, index) {
      todo.id = index
    })
    todoStorage.uid = tasks.length
    return tasks
  }
  else {
    return [
        { id: 1, title: 'Learn Javascript', completed: false, editing: false },
        { id: 0, title: 'Do something else', completed: false, editing: false }
      ]
  }
  },
  save: function (tasks) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
  }
}

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
      tasks: todoStorage.fetch()
    }
  },
  computed:{
    nextId: function() {
      let tasks = this.tasks.map((task) => task);
      return tasks.sort((a,b) => a.id < b.id)[0].id + 1;
    }
  },
  watch: {
    tasks: {
      handler: function (tasks) {
        todoStorage.save(tasks)
      },
      deep: true
    }
  },
  methods: {
    createNewTask: function() {
      let newTaskString = this.newtask.length > 24 ? this.newtask.substring(0,24) + '...': this.newtask;    
      this.tasks.unshift(
        { id: this.nextId, 
          title: newTaskString,
          completed: false,
          editing: false
        }
      );
      this.tasks.filter((a) => a);
      this.newtask = '';      
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../sass/components/todo.scss";
</style>