<template>
    <div id="myDiv" ref="myChart"></div>
</template>

<script>
    import * as echarts from 'echarts'

    export default {
        name: "AnimateConfig",
        mounted() {
            let myEcharts = echarts.init(this.$refs.myChart)
            let xData = ["美食", "数码", "日化", "蔬菜", "熟食"]
            let yData = [88, 75, 20, 210, 35]
            let option = {
                animation: true, //是否开启动画
                animationThreshold: 5, //开启动画的阈值
                animationDuration: 5000, //初始动画的时长，支持回调函数
                animationDelay: 2000, //初始动画的延迟，支持回调函数
                animationEasing: "linear", //初始动画的缓动效果
                xAxis: {
                    type: 'value'
                },
                yAxis: {
                    type: 'category',
                    data: xData
                },
                series: [
                    {
                        type: 'bar',
                        name: '销量',
                        data: yData,
                        barWidth: 50
                    }
                ]
            }
            myEcharts.setOption(option)
        }
    }
</script>

<style scoped>

</style>