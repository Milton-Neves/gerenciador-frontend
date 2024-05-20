import { createRouter, createWebHistory } from 'vue-router'
import ClientesView from '../views/ClientesView.vue'
import ProjetosView from '../views/ProjetosView.vue'
import ProjetoDetalheView from '../views/ProjetoDetalheView.vue'
import AtividadesView from '../views/AtividadesView.vue'

const routes = [
  { path: '/', redirect: '/projetos' },
  { path: '/clientes', component: ClientesView },
  { path: '/projetos', component: ProjetosView },
  { path: '/projetos/:id', component: ProjetoDetalheView, props: true },
  { path: '/atividades', component: AtividadesView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
