<template>
  <div class="add-task-container">
    <h1>Añadir Tarea</h1>
    <input
      type="text"
      class="form-control"
      v-model="newTask"
      placeholder="Escribe una nueva tarea"
    />
    <button class="btn btn-primary mt-2" @click="addTask">Añadir Tarea</button>
    <ul class="task-list mt-3">
      <li v-for="task in tasks" :key="task.id" class="task-item">
        <span
          :class="[
            'badge',
            task.completed ? 'bg-success' : 'bg-warning text-dark',
          ]"
        >
          {{ task.completed ? "Completada" : "Pendiente" }}
        </span>
        <span class="task-text">{{ task.todo }}</span>
        <button class="btn btn-success btn-sm" @click="markCompleted(task)">
          <i class="bi bi-check-lg"></i> Completar
        </button>
        <button class="btn btn-danger btn-sm" @click="deleteTask(task)">
          <i class="bi bi-trash"></i> Eliminar
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AddTask",
  data() {
    return {
      newTask: "",
      tasks: [],
    };
  },
  methods: {
    addTask() {
      if (!this.newTask.trim()) return;
      this.tasks.push({
        id: Date.now(),
        todo: this.newTask,
        completed: false,
      });
      this.newTask = "";
    },
    markCompleted(task) {
      task.completed = !task.completed; // Cambiar estado de la tarea a completada
    },
    deleteTask(task) {
      this.tasks = this.tasks.filter((t) => t.id !== task.id);
    },
  },
};
</script>

<style scoped>
.add-task-container {
  text-align: center;
  padding: 20px;
}
.task-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
}
.task-text {
  flex-grow: 1;
  margin: 0 10px;
}
</style>