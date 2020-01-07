import Vue from 'vue'
import App from './App'
import './assets/common.scss'
// import vueFilters from './lib/filters'

Vue.config.productionTip = false
App.mpType = 'app'
/**
 * [vueFilters description]
 * mpvue 暂不支持filter属性 - -！
 */
const app = new Vue(App)
app.$mount()
