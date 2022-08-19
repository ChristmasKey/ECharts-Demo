<template>
    <div id="myDiv" ref="myChart"></div>
</template>

<script>
    import * as echarts from 'echarts'

    export default {
        name: "InstalledTheme",
        mounted() {
            //echarts的init方法的第二个参数可以指定内置主题：light、dark
            let myEcharts = echarts.init(this.$refs.myChart, "dark")
            let xData = ['美食', '数码', '日化', '蔬菜', '熟食']
            let yData = [88, 75, 20, 210, 35]
            let option = {
                title: {
                    text: '内置主题'
                },
                xAxis: {
                    type: 'category',
                    data: xData
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: '销量',
                        type: 'bar',
                        data: yData
                    }
                ]
            }
            myEcharts.setOption(option)
        }
    }
</script>

<style scoped>

</style>
