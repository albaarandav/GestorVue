<template>
  <div class="tasklist-container">
    <h1>Lista de Tareas</h1>
    <button class="btn btn-primary mb-3" @click="fetchTasks">Cargar Tareas</button>
    <ul class="task-list">
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
        <button class="btn btn-success btn-sm" @click="toggleCompletion(task)">
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
  name: "TaskList",
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    fetchTasks() {
      fetch("https://dummyjson.com/todos")
        .then((res) => res.json())
        .then((data) => {
          this.tasks = data.todos;
        });
    },
    toggleCompletion(task) {
      task.completed = !task.completed;
    },
    deleteTask(task) {
      this.tasks = this.tasks.filter((t) => t.id !== task.id);
    },
  },
};
</script>

<style scoped>
.tasklist-container {
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
