import { createRouter, createWebHistory } from 'vue-router'
import AlunosNovo from "../views/Alunos/Novo/AlunosNovo.vue"
import AlunosGerenciamento from "../views/Alunos/Gerenciamento/AlunosGerenciamento.vue"
import Cadastro from "../views/Cadastro/CadastroView.vue"
import Dashboard from "../views/Dashboard/DashboardView.vue"
import Exercicios from "../views/Exercicios/ExerciciosView.vue"
import Login from '../views/Login/LoginView.vue'
import TreinoNovo from "../views/Treino/Novo/TreinoNovo.vue"
import TreinoVizualizacao from "../views/Treino/Vizualizacão/TreinoVizualizacao.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: Cadastro
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/alunos/novo',
      name: 'novo aluno',
      component: AlunosNovo
    },
    {
      path: '/alunos',
      name: 'alunos',
      component: AlunosGerenciamento
    },
    {
      path: '/exercicios',
      name: 'exercicios',
      component: Exercicios
    },
    {
      path: '/treinos/:id/:name/novo',
      name: 'novo treino',
      component: TreinoNovo
    },
    {
      path: '/treino/:id/:name',
      name: 'treino',
      component: TreinoVizualizacao
    }
  ]
})

export default router
