import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

import demos from "../demos";

export const playDemos = Object.keys(demos).map((k:string) => ({
      path: k.match(/(\w+).vue/)[1] || k,
      component: demos[k]
    }))

const routes:RouteRecordRaw[] = [
  {
    path: '/',
    component: ()=>import('../views/HelloWorld.vue')
  },
  {
    path: '/play',
    component: () => import('../views/PlayDemo.vue'),
    children: playDemos
  },
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})