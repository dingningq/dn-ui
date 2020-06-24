import Vue from 'vue'
import App from './App.vue'
import store from './store'
import DnUI from '../packages'

Vue.config.productionTip = false
Vue.use(DnUI)
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
