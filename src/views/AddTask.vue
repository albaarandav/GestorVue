<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">Añadir Nueva Tarea</h1>
    <form @submit.prevent="addTask">
      <div class="mb-3">
        <label for="taskInput" class="form-label">Tarea</label>
        <input
          type="text"
          v-model="newTask"
          class="form-control"
          id="taskInput"
          placeholder="Escribe una nueva tarea"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary">Añadir</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: '',
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim()) {
        const task = {
          id: Date.now(),
          todo: this.newTask,
          completed: false,
        };

        this.$emit('add-task', task);
        this.newTask = ''; // Limpiar el campo de texto
      }
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
}
</style>