/*
 * @Description: 
 * @Version: 
 * @Author: kangjinrui
 * @Date: 2022-11-21 14:07:58
 * @LastEditors: kangjinrui
 * @LastEditTime: 2022-11-22 14:11:04
 */
const {
    defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    css: { // 这一步配置将css强行内联，否则发布后的组件在使用时不会携带css
        extract: false
    },
    configureWebpack: (config) => {
        if (process.env.NODE_ENV === 'production') { // 为生产环境修改配置...
            config.mode = 'production';
            config["performance"] = { //打包文件大小配置
                "maxEntrypointSize": 10000000,
                "maxAssetSize": 30000000
            }
        }
    }
})