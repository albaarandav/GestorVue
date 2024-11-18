<template>
  <div id="app">
    <!-- Barra de navegación con enlaces a diferentes rutas -->
    <nav class="navbar navbar-expand-lg navbar-light bg-primary">
      <div class="container">
        <router-link to="/" class="navbar-brand text-white">
          <i class="bi bi-house-door"></i> Gestor de Tareas
        </router-link>
        <div class="navbar-nav">
          <router-link to="/addtask" class="nav-link text-white">
            <i class="bi bi-plus-circle"></i> Añadir Tarea
          </router-link>
          <router-link to="/tasklist" class="nav-link text-white">
            <i class="bi bi-list-ul"></i> Lista de Tareas
          </router-link>
          <router-link to="/combinedview" class="nav-link text-white">
            <i class="bi bi-view-stacked"></i> Vista Combinada
          </router-link>
        </div>
      </div>
    </nav>

    <!-- Aquí se carga el componente correspondiente -->
    <router-view :tasks="tasks" @add-task="addTaskToList" @delete-task="deleteTask"/>
  </div>
</template>

<script>
export default {
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
  },
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
}

.navbar {
  margin-bottom: 20px;
}

.navbar-nav .nav-link {
  font-weight: bold;
}

.navbar-nav .nav-link:hover {
  color: #007bff;
}

.navbar-brand {
  font-size: 1.5rem;
}

.navbar-light .navbar-nav .nav-link {
  font-size: 1.1rem;
}
</style>