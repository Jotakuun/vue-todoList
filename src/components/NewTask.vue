<template>
  <div class="NewTask" v-bind:class="{'NewTask--Focus': isFocus, 'NewTask--Adding': isAdding}">
    <input type="text" id="NewTask" name="NewTask" class="NewTask__Input" placeholder="What's next..."
    v-bind:value="value"
    v-on:keyup.enter="emitAdd"
    v-on:input="updateValue($event.target.value)"
    v-on:focus="focus()"
    v-on:blur="blur()"></input>
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
  data: function () {
    return {
      isFocus: false,
      isAdding: false
    }
  },
  methods: {
    updateValue: function(value) {
      this.$emit('input', value);
    },
    addTask: function() {
      this.$emit('addtask');
      this.$emit('adding', false)
      document.getElementById("NewTask").blur();
      setTimeout(this.isAdding = false, 750)      
    },
    emitAdd: function() {
      this.isFocus = false;
      document.getElementById("NewTask").blur();
      this.isAdding = true;
      this.$emit('adding', true);
      setTimeout(this.addTask, 750)
    },
    focus: function() {
      this.isFocus = true;
      this.$emit('focus', this.isFocus);
    },
    blur: function() {
      this.isFocus = false;
      this.$emit('focus', this.isFocus);      
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../sass/components/newtask.scss";
</style>