<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">
          <i class="bi bi-house-door-fill"></i> Gestor de Tareas
        </router-link>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/addtask">
                <i class="bi bi-plus-circle"></i> Añadir Tarea
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/tasklist">
                <i class="bi bi-list-task"></i> Lista de Tareas
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/combinedview">
                <i class="bi bi-ui-checks-grid"></i> Vista Combinada
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
.navbar {
  margin-bottom: 20px;
}
</style>