<template>
  <div class="home-container">
    <img src="@/assets/logo.png" alt="Vue logo" class="logo" />
    <h1 class="title">Gestor de Tareas</h1>
    <p>
      Bienvenido a la Aplicación de Tareas con Vue.
    </p>
    <div class="sections">
      <h2>Secciones de la Aplicación</h2>
      <ul>
        <li>
          <strong>Añadir Tarea:</strong> Permite ingresar nuevas tareas manualmente.
        </li>
        <li>
          <strong>Lista de Tareas:</strong> Muestra todas las tareas extraídas desde la API, permitiendo marcarlas como completadas o eliminarlas.
        </li>
        <li>
          <strong>Vista Combinada:</strong> Combina las funcionalidades de añadir tareas manualmente y ver las tareas de la API al mismo tiempo.
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped>
.home-container {
  text-align: center;
  padding: 20px;
}
.logo {
  width: 120px;
  margin: 20px auto;
  border-radius: 50%;
  box-shadow: 0 0 15px rgba(0, 123, 255, 0.8);
}
.title {
  font-size: 2.5rem;
  color: #007bff;
  font-weight: bold;
  margin: 10px 0;
}
.sections ul {
  text-align: left;
  margin: 0 auto;
  max-width: 600px;
}
.sections h2 {
  font-size: 1.8rem;
  color: #007bff;
  font-weight: bold;
  margin-bottom: 15px;
}
</style>