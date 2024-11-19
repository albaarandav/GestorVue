<template>
  <div class="home container">
    <div class="text-center my-5">
      <img alt="Vue logo" src="../assets/logo.png" class="img-fluid">
      <h1>Bienvenido a tu Gestor de Tareas</h1>
      <p class="lead">Gestiona tus tareas fácilmente con nuestra aplicación.</p>
      <router-link to="/combinedview" class="btn btn-primary btn-lg my-3">Agregar Tarea</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
}
</script>

<style scoped>
.home {
  background-color: #f8f9fa;
  min-height: 100vh;
}

img {
  max-width: 200px;
}
</style>