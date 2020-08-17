import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import APropos from '@/views/aPropos.vue'
import EntrepreneurDetails from '@/views/entrepreneurDetails.vue'
import Entrepreneurs from '@/views/entrepreneurs.vue'
import Fonctionnement from '@/views/fonctionnement.vue'
import FormContact from '@/views/formContact.vue'
import FormEntrepreneur from '@/views/formEntrepreneur.vue'
import FormInvestisseur from '@/views/formInvestisseur.vue'
import Investisseur from '@/views/investisseur.vue'
import MentionsLegales from '@/views/mentionsLegales.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/',
    name: 'APropos',
    component: APropos,
  },
  {
    path: '/',
    name: 'EntrepreneurDetails',
    component: EntrepreneurDetails,
  },
  {
    path: '/',
    name: 'Entrepreneurs',
    component: Entrepreneurs,
  },
  {
    path: '/',
    name: 'Fonctionnement',
    component: Fonctionnement,
  },
  {
    path: '/',
    name: 'FormContact',
    component: FormContact,
  },
  {
    path: '/',
    name: 'FormEntrepreneur',
    component: FormEntrepreneur,
  },
  {
    path: '/',
    name: 'FormInvestisseur',
    component: FormInvestisseur,
  },
  {
    path: '/',
    name: 'Investisseur',
    component: Investisseur,
  },
  {
    path: '/',
    name: 'MentionsLegales',
    component: MentionsLegales,
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
