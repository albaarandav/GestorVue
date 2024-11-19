<template>
  <div>
    <AddTask @add-task="addTaskToList" />
    <TaskList :tasks="tasks" @delete-task="deleteTask" @toggle-completion="toggleCompletion" />
    <router-link to="/" class="btn btn-secondary mt-4">Volver a Inicio</router-link>
  </div>
</template>

<script>
import AddTask from './AddTask.vue';
import TaskList from './TaskList.vue';

export default {
  components: {
    AddTask,
    TaskList,
  },
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    addTaskToList(task) {
      this.tasks.push(task);
    },
    deleteTask(task) {
      this.tasks = this.tasks.filter(t => t.id !== task.id);
    },
    toggleCompletion(task) {
      task.completed = !task.completed;
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 900px;
  margin: 0 auto;
}
</style>