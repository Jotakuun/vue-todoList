<style lang="sass">
</style>

<template>
  <div>
    <input type="text" name="newtask"
    v-bind:value="value"
    v-on:keyup.enter="addTask"
    v-on:input="updateValue($event.target.value)"></input>
  </div>
</template>

<script>
export default {
  name: 'new-task',
  props: ['value'],
  methods: {
    updateValue: function(value) {
      this.$emit('input', value);
    },
    addTask: function(){
      this.$emit('addtask');
    }
  }
}
</script>