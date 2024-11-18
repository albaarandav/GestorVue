import Vue from 'vue';
import Router from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AddTask from '@/views/AddTask.vue';
import TaskList from '@/views/TaskList.vue';
import CombinedView from '@/views/CombinedView.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView, // Página de inicio
    },
    {
      path: '/addtask',
      name: 'addtask',
      component: AddTask, // Vista para agregar una tarea
    },
    {
      path: '/tasklist',
      name: 'tasklist',
      component: TaskList, // Vista para ver la lista de tareas
    },
    {
      path: '/combinedview',
      name: 'combinedview',
      component: CombinedView, // Vista combinada (agregar y ver tareas)
    },
  ],
});
