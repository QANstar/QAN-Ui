import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
// import QANbutton from './plugin/components/button/index.js'
import QAN_Ui from './plugin/qan-ui.js'
import './plugin/assets/css/qan-ui.css'

Vue.config.productionTip = false
Vue.use(QAN_Ui)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
