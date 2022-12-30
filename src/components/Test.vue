<template>
    <div class="hello">
        <!-- <KUploadFile :onSuccess="handleSuccess"></KUploadFile> -->
    </div>
</template>

<script>
// import KPlugins from 'k-custom-plugins'
// const {KSplitPanel} = KPlugins.components
export default {
    name: "HelloWorld",
    components:{
		// KSplitPanel
    },
    props: {
        msg: String,
    },

    methods:{
        handleSuccess(data){
            console.log(data)
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
    height: 100px;
}
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
