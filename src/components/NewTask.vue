<template>
  <div class="NewTask">
    <input type="text" id="NewTask" name="NewTask" class="NewTask__Input"
    v-bind:value="value"
    v-on:keyup.enter="addTask"
    v-on:input="updateValue($event.target.value)"></input>
    <label for="NewTask" class="NewTask__Label">{{placeholder}}</label>
  </div>
</template>

<script>
export default {
  name: 'new-task',
  props: {
    value: {
      value: String,
      default: ''
    },
    placeholder: {
      value: String,
      default: 'Add'
    }
  },
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

<style lang="sass">
</style>