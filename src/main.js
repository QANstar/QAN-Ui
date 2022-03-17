import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import './assets/css/style.css'
import QAN_Ui from './plugin/qan-ui.js'
import './plugin/assets/css/qan-ui.css'


Vue.config.productionTip = false
Vue.use(QAN_Ui)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
