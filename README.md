<!--
 * @Description: 
 * @Version: 
 * @Author: kangjinrui
 * @Date: 2022-11-21 14:08:03
 * @LastEditors: kangjinrui
 * @LastEditTime: 2022-11-24 17:46:49
-->
# v-custom-plugins

## How to use?
```
#安装
npm install v-custom-plugins

#引入
import VcPlugins from 'v-custom-plugins'

#全局安装
VcPlugins.install(Vue)

```

## components
### VcUploadFile
#### 支持上传shp、geojson等空间数据

#### Attributes
| Param | Type | Description | Default |
| --- | --- | --- | -- |
| accept | <code>string</code> | 支持文件类型 | .shp,.prj,.json,.txt |
| onSuccess | <code>function(result)</code> | 成功回调 |
| onError | <code>function(result)</code> | 失败回调 |

#### event
| Name   | Description |   Param |
| :------------- | :----------: | ------------: |
| on-success        |    成功触发     |         result |
| on-error        |    失败触发     |         result |

### VcSplitPanel
#### 左右分割面板

| Param | Type | Description | Default |
| --- | --- | --- | -- |
| leftWidth | <code>number</code> | 左侧面板宽 | 300 |
| minWidth | <code>number</code> | 面板最小宽度 | 200 |



### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
