
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'filmes', component: () => import('pages/Filmes.vue') },
      { path: 'personagens', component: () => import('pages/Personagens.vue') },
      { path: 'planetas', component: () => import('pages/Planetas.vue') }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
