import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import Vux from '../pages/details/Vux'
import BetterScroll from '../pages/details/BetterScroll'
import MeScroll from '../pages/details/MeScroll'
import VueInfiniteScroll from '../pages/details/VueInfiniteScroll'
import VueScroll from '../pages/details/VueScroll'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/vux',
      name: 'Vux',
      component: Vux
    },
    {
      path: '/better-scroll',
      name: 'BetterScroll',
      component: BetterScroll
    },
    {
      path: '/mescroll',
      name: 'MeScroll',
      component: MeScroll
    },
    {
      path: '/vue-infinite-scroll',
      name: 'VueInfiniteScroll',
      component: VueInfiniteScroll
    },
    {
      path: '/vue-scroll',
      name: 'VueScroll',
      component: VueScroll
    },


    {
      path: '*',
      component: Home
    }
  ]
})
