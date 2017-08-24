<template>
  <li class="Task" v-bind:class="{'Task--Done': task.completed, 'Task--Removing': task.isRemoving}">
    <div class="Task__Check">
      <input :id="'Task'+task.id" type="checkbox" class="Task__Checkbox" v-model="task.completed"></input>
      <label :for="'Task'+task.id" class="Task__Label">
        <svg width="20px" height="20px" viewBox="0 0 20 20">
          <path d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z"></path>
          <polyline points="4 11 8 15 16 6"></polyline>
        </svg>
      </label>
    </div>
    <span>{{task.title}}</span>
    <div class="Task__RemoveIcon" v-on:click="emitRemove">
      <svg width="15px" height="15px" x="15px" y="15px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
      <g><path d="M849.9,990L990,849.9L639.9,499.9L990,150L849.9,10L499.9,359.9L150,10L10,150l349.9,349.9L10,849.9L150,990l349.9-350.1L849.9,990z"/></g>
      </svg>
    </div>
  </li>
</template>

<script>
export default {
  name: 'task-element',
  props: {
    task: Object,
    index: Number
  },
  data: function() {
    return {
      isRemoving: false      
    }
  },
  methods: {
    emitRemove: function() {
      this.isRemoving = true;
      setTimeout(this.remove, 750);
    },
    remove: function() {
      this.isRemoving = false;
      this.$emit('remove', this.task.id);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../sass/components/task.scss";
</style>