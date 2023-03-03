
/*
 * @Description: 
 * @Version: 
 * @Author: kangjinrui
 * @Date: 2022-11-18 11:21:42
 * @LastEditors: kangjinrui
 * @LastEditTime: 2023-02-10 17:28:33
 */

const modulesFiles = require.context('./components', true, /\.vue$/)

const VcPlugins = {
    install: (Vue) => {
        modulesFiles.keys().reduce((modules, modulePath) => {
            const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
            const value = modulesFiles(modulePath)
            modules[moduleName] = value.default
            Vue.component(modules[moduleName].name, modules[moduleName])
            return modules
        }, {})
    },
    components: modulesFiles.keys().reduce((modules, modulePath) => {
        const value = modulesFiles(modulePath)
        const name = value.default.name
        value.default.install = Vue => {
            Vue.component(name,value.default)
        }
        modules[name] = value.default
        return modules
    }, {})
}

export default VcPlugins