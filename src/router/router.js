import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/responsive',
    name: 'Responsive',
    component: () => import('@/views/Responsive.vue'),
  },
  {
    path: '/table',
    name: 'Table',
    component: () => import('@/views/Table.vue'),
  },
  {
    path: '/store',
    name: 'Store',
    component: () => import('@/views/Store.vue'),
  },
  {
    path: '/routing',
    name: 'Routing',
    component: () => import('@/views/Routing.vue'),
    children: [
      /* Rajouter les routes manquantes pour les exercices de 'Routing' ici. */
      {
        path: 'ex1/:id',
        name: 'Exercice 1',
        component: () => import('@/components/Routing/Excercise1.vue'),
      },
      {
        path: 'ex2/:id',
        name: 'Exercice 2',
        component: () => import('@/components/Routing/Excercise2.vue'),
        props: true,
      },
      {
        path: 'ex3',
        name: 'Exercice 3',
        component: () => import('@/components/Routing/Excercise3.vue'),
      },
      {
        path: 'ex4',
        name: 'Exercice 4',
        component: () => import('@/components/Routing/Excercise4.vue'),
        props: {
          id: 42,
        },
      },
    ],
  },
  {
    path: '/translations',
    name: 'Translations',
    component: () => import('@/views/Translations.vue'),
  },
  {
    path: '/components',
    name: 'Components',
    component: () => import('@/views/Components.vue'),
  },
  {
    path: '/gmap',
    name: 'Gmap',
    component: () => import('@/views/Gmap.vue'),
  },
  {
    path: '/seo',
    name: 'Seo',
    component: () => import('@/views/Seo.vue'),
  },
  {
    path: '/tests',
    name: 'Tests',
    component: () => import('@/views/Tests.vue'),
  },
  {
    path: '/git',
    name: 'Git',
    component: () => import('@/views/Git.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
