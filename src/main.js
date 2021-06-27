import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/js/mock'
import toast from 'components/common/toast'
import FastClick from 'fastclick'
import VueLazyLoad from "vue-lazyload";
Vue.config.productionTip = false
Vue.use(toast)
Vue.use(VueLazyLoad,{
  loading:require('./assets/img/common/loading.png')
})

//解决移动端300ms延迟
FastClick.attach(document.bodyn)

Vue.prototype.$bus=new Vue()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
