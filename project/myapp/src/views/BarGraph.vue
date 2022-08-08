<template>
    <div id="myDiv" ref="myChart"></div>
</template>

<script>
import * as echarts from 'echarts'

export default {
    mounted() {
        // 1.初始化
        let myEcharts = echarts.init(this.$refs.myChart)
        // 2.设置echarts数据
        // 设置轴
        let xData = ["美食", "数码", "日化"]
        let yData = [99, 67, 45, 87]
        // 3.设置配置项
        let option = {
            title: {
                text: '主标题'
            },
            xAxis: {//配置x轴的参数
                data: xData,
                type: "category" //坐标轴的类型，value 数据轴；category 类目轴
            },
            yAxis: {//配置y轴的参数
                //
            }
        }
        myEcharts.setOption({
            title: {
                text: '基本柱状图'
            },
            tooltip: {},
            legend: {
                show: true
            },
            xAxis: {
                data: []
            },
            yAxis: {},
            series: [
                {
                    name: '',
                    type: 'bar',
                    data: []
                }
            ]
        })
    }
}
</script>

<style>
#myDiv {
    width: 500px;
    height: 500px;
    border: 1px solid red;
}
</style>