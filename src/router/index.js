import { createRouter, createWebHistory } from 'vue-router'
import StartView from "../views/StartView.vue";
import AddProductView from "../views/AddProductView.vue";
import UpdateProductView from "../views/UpdateProductView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path: '/start',
      name: 'start',
      component: StartView
    },
    {
      path: '/addProduct',
      name: 'addProduct',
      component: AddProductView
    },
    {
      path: '/updateProduct/:id',
      name: 'updateProduct',
      component: UpdateProductView
     
    }
  ]
})

export default router
