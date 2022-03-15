import Vue from 'vue'
import VueRouter from 'vue-router'
import ComponentView from '../views/ComponentView.vue'
import Button from '../components/button.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/component/button'
  },
  {
    path: '/component',
    component: ComponentView,
    redirect: '/component/button',
    children: [
      {
        path: '/component/button',
        component: Button,
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
