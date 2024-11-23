<template>
  <div class="combined-container">
    <h1>Vista Combinada</h1>
    <!-- Formulario para añadir tarea -->
    <div class="add-task mb-3">
      <input
        v-model="newTask"
        placeholder="Añadir tarea"
        class="form-control"
        @keyup.enter="addTask"
      />
      <button class="btn btn-primary mt-2" @click="addTask">Añadir Tarea</button>
    </div>
    <!-- Lista combinada -->
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
  name: "CombinedView",
  data() {
    return {
      newTask: "",
      tasks: [],
    };
  },
  mounted() {
    this.fetchTasks();
  },
  methods: {
    fetchTasks() {
      fetch("https://dummyjson.com/todos")
        .then((res) => res.json())
        .then((data) => {
          this.tasks = data.todos;
        });
    },
    addTask() {
      if (!this.newTask.trim()) return;
      this.tasks.unshift({
        // Insertar al inicio de la lista
        id: Date.now(),
        todo: this.newTask,
        completed: false,
      });
      this.newTask = "";
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
.combined-container {
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