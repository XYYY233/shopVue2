import Vue from 'vue'
import App from './App.vue'

import router from '@/router'
import "swiper/css/swiper.css"
import Carousel from '@/components/Carousel'

// 注册全局组件
import TypeNav from '@/components/TypeNav' 
import Pagination from '@/components/Pagination'
Vue.component(TypeNav.name,TypeNav)
Vue.component(Carousel.name,Carousel)
Vue.component(Pagination.name,Pagination)
import store from '@/store'
import '@/mock/mockServe'

//懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload,{
})
//自定义插件
import myPlugins from './plugins/myPlugins'
Vue.use(myPlugins)

new Vue({
  render: h => h(App),
  //只要挂在了路由，则每个组件都有$route
  router,store,
  //全局事件总线$bus
  beforeCreate(){
    Vue.prototype.$bus = this;
  }
}).$mount('#app')
