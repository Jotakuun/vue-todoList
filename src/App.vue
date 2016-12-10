<template>
  <div id="app">
    <todo></todo>
  </div>
</template>

<script>
import toDo from './components/ToDo.vue'

export default {
  name: 'app',
  components: {
    'todo' : toDo
  }
}
</script>

<style lang="sass">
@import "./sass/main.scss";
</style>