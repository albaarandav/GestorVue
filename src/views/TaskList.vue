<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">Lista de Tareas</h1>
    <div v-if="tasks.length === 0" class="alert alert-warning text-center">
      No hay tareas. ¡Añade una!
    </div>

    <div v-for="task in tasks" :key="task.id" class="card mb-3">
      <div class="card-body d-flex justify-content-between align-items-center">
        <div>
          <h5 :style="{ textDecoration: task.completed ? 'line-through' : 'none' }">
            {{ task.todo }}
          </h5>
          <span :class="task.completed ? 'badge bg-success' : 'badge bg-warning'">
            {{ task.completed ? 'Completada' : 'Pendiente' }}
          </span>
        </div>

        <div>
          <button @click="toggleCompletion(task)" class="btn btn-success ms-2">
            <i class="bi bi-check-circle"></i> {{ task.completed ? 'Pendiente' : 'Completada' }}
          </button>
          <button @click="deleteTask(task)" class="btn btn-danger ms-2">
            <i class="bi bi-trash"></i> Eliminar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['tasks'],
  methods: {
    toggleCompletion(task) {
      task.completed = !task.completed;
    },
    deleteTask(task) {
      this.$emit('delete-task', task);
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
}

.card {
  border: 1px solid #ccc;
}

.card-body {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-body h5 {
  margin: 0;
}

.badge {
  font-size: 1rem;
}
</style>