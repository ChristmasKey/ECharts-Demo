<template>
    <div id="myDiv" ref="myChart"></div>
</template>

<script>
    import * as echarts from 'echarts'

    export default {
        name: "AutoSize",
        mounted() {
            let myEcharts = echarts.init(this.$refs.myChart)
            let xData = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
            let option = {
                title: {
                    text: '图表自适应大小'
                },
                xAxis: {
                    type: 'category',
                    data: xData,
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: '美食',
                        type: 'line',
                        data: [120, 132, 101, 134, 90, 230, 210],
                        stack: 'num',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        }
                    },
                    {
                        name: '日化',
                        type: 'line',
                        stack: 'num',
                        data: [220, 182, 191, 234, 290, 330, 310],
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        }
                    },
                    {
                        name: '熟食',
                        type: 'line',
                        stack: 'num',
                        data: [150, 232, 201, 154, 190, 330, 410],
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        }
                    },
                ]
            }
            myEcharts.setOption(option)

            //监听页面大小的改变
            window.addEventListener("resize", () => {
                console.log('浏览器的大小改变了')
                myEcharts.resize()
            })
        }
    }
</script>

<style scoped>
    #myDiv {
        width: 100%;
        height: 500px;
        border: 1px solid red;
    }
</style>