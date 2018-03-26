import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
   	path:'/',
   	name:'home',
   	component:resolve => {require(['@/view/home.vue'], resolve)}
   },
   {
   	path:'/wode',
   	name:'wode',
   	component:resolve => {require(['@/view/my.vue'], resolve)}
   }
    
  ]
})
