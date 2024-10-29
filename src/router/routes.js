const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },
  {
    path: '/signup',
    component: () => import('src/layouts/SignUp.vue'),
    children: [

    ]
  },
  {
    path: '/login',
    component: () => import('src/layouts/Login.vue'),
    children: [

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
