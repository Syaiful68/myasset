import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AssetView from '../views/Assets/Index.vue'
import AssetCreate from '../views/Assets/create.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path:'/asset',
      name:'asset',
      component: AssetView
    },{
      path:'/asset/create',
      name:'assetCreate',
      component: AssetCreate
    }
  ]
})

export default router
