import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import QANbutton from './plugin/components/button/index.js'
import QANmenu from './plugin/components/menu/index.js'
import './plugin/assets/css/qan-ui.css'

Vue.config.productionTip = false
Vue.use(QANbutton)
Vue.use(QANmenu)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
