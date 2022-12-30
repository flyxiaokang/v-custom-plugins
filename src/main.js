/*
 * @Description: 
 * @Version: 
 * @Author: kangjinrui
 * @Date: 2022-11-21 14:07:58
 * @LastEditors: kangjinrui
 * @LastEditTime: 2022-11-23 10:32:05
 */
import Vue from 'vue'
import App from './App.vue'


import 'element-ui/lib/theme-chalk/index.css';
import Element from 'element-ui'

Vue.use(Element, {
    // size: Cookies.get('size') || 'mini', // set element-ui default size
    // locale: zhLang // 如果使用中文，无需设置，请删除
})

import VcPlugins from './index'
// import 'k-custom-plugins/dist/k-custom-plugins.css'
// import KPlugins from 'k-custom-plugins'
// import VcPlugins from 'v-custom-plugins'
VcPlugins.install(Vue)

Vue.config.productionTip = false



new Vue({
    render: h => h(App),
}).$mount('#app')