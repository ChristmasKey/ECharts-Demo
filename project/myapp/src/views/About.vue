<template>
    <div ref="mychart" id="demoDiv"></div>
</template>

<script>
// 1.引用echarts
import * as echarts from 'echarts'
export default {
    mounted() {
        let myEcharts = echarts.init(this.$refs.mychart)
        // 设置参数
        myEcharts.setOption({
            title: {//echarts标题
                text: "Hello World"
            },
            xAxis: {
                data: ["EZ", "VN", "NOC", "MF"]
            },
            yAxis:{
                data: []
            },
            series: {//系列
                name: "LOL英雄大全",
                type: "bar",
                data: [6300, 4800, 3200, 600]
            }
        })
    }
}
</script>

<style>
.demoDiv{
    width: 500px;
    height: 500px;
    border: 1px solid red;
}
</style>