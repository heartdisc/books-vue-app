import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

import bookRoutes from '@/modules/books/books.routes'

Vue.use(Router)

const baseRoutes = [
  {
    path: '',
    redirect: { name: 'book-list'}
  },
  {
    path: '*',
    component: () => import('@/layouts/page-not-found.vue'),
  }
]

const routes = baseRoutes.concat(
  bookRoutes,
)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes,
})
