<template>
  <li class="Task">
    <input :id="'Task'+index" type="checkbox" class="Task__Checkbox" checked></input>
    <label :for="'Task'+index" class="Task__Label">{{task.title}}</label>
    <icon name="remove_circle" class="Task__RemoveIcon" :scale="100"></icon>
  </li>
</template>

<script>
export default {
  name: 'task-element',
  props: {
    task: Object,
    index: Number
  }
}
</script>

<style lang="scss" scoped>
.Task {
  position: relative;
  width: 100%;
  padding: 10px;
}

.Task:hover .Task__RemoveIcon {
  opacity: 1;
  transition: all .2s ease;
}

.Task__Checkbox {
  opacity: 0;
  &:checked {
    +.Task__Label:before {
      border-color: blue;
    }
  }
}

.Task__Label:before {
  content: '';
  position: absolute;
  left: 0;
  width: 14px;
  height: 14px;
  border: 2px solid #333333;
  border-radius: 3px;
  cursor: pointer;
}

.Task__RemoveIcon {
  opacity: 0;
  transition: all .2 ease;
}
</style>