<!--
 * @Description: 
 * @Version: 
 * @Author: kangjinrui
 * @Date: 2022-11-21 14:07:58
 * @LastEditors: kangjinrui
 * @LastEditTime: 2022-11-24 11:04:42
-->
<template>
    <div id="app">
        <VcUploadFile
            :accept="'.zip,.shp,.prj,.json,.txt'"
            @on-success="handleSuccess"
        >
        </VcUploadFile>
        <!-- <VcSplitPanel style="height:100px;"/> -->
    </div>
</template>

<script>
import HelloWorld from "./components/Test.vue";

export default {
    name: "App",
    components: {
        HelloWorld,
    },

    methods: {
        handleSuccess(data) {
            console.log(data);
        },
        handleError(e) {
            console.log(e);
        },
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
