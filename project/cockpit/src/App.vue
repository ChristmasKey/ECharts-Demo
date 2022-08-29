<template>
    <router-view/>
</template>

<script>
    import axios from 'axios'
    import {provide} from 'vue'
    import * as echarts from 'echarts'

    //设置基准路径
    axios.defaults.baseURL = "http://localhost:3000"
    export default {
        setup() {
            //param1：名字
            //param2：传递内容
            provide("echarts", echarts)
            provide("axios", axios)
        }
    }
</script>
<style lang="less">
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: url("~@/assets/bg.png") top center no-repeat;
    }
</style>
