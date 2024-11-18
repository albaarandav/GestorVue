<template>
  <!-- Contenedor principal del ítem de tarea -->
  <div>
    <!-- Contenedor del título y el estado de la tarea -->
    <div>
      <h5 :style="{ textDecoration: completed ? 'line-through' : 'none' }">
        {{ title }}
      </h5>

      <span>{{ completed ? 'Completada' : 'Pendiente' }}</span>
    </div>

    <!-- Contenedor de botones de acción -->
    <div>
      <button @click="$emit('toggle-completion')" class="btn btn-success btn-sm">
        {{ completed ? 'Desmarcar' : 'Completar' }}
      </button>
      <button @click="$emit('delTodo')" class="btn btn-danger btn-sm ml-2">
        Eliminar
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    title: String,
    completed: Boolean,
  },
};
</script>

<style scoped>
/* agregar más estilos */
</style>
