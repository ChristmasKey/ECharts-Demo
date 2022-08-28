<template>
    <router-view/>
</template>

<script>
    import {provide} from 'vue'
    import * as echarts from 'echarts'

    export default {
        setup() {
            //param1：名字
            //param2：传递内容
            provide("echarts", echarts)
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
