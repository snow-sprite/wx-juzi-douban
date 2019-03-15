import Vue from 'vue'
import App from './App'
import './assets/common.scss'
// import vueFilters from './utils/filters'
Vue.config.productionTip = false
App.mpType = 'app'
/**
 * [vueFilters description]
 * mpvue 暂不支持filter属性 - -！
 */
// Object.keys(vueFilters).forEach(filter => {
//   Vue.filter(filter, vueFilters[filter])
// })
const app = new Vue(App)
app.$mount()
