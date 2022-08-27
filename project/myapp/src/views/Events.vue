<template>
    <div id="myDiv" ref="myChart"></div>
</template>

<script>
    import * as echarts from 'echarts'

    export default {
        name: "Events",
        mounted() {
            let myEcharts = echarts.init(this.$refs.myChart)
            //事件
            //on方法监听
            myEcharts.on("click", params => {
                console.log("事件", params)
            })
            myEcharts.on("click", "series.line", params => {
                console.log("折线图事件", params)
            })
            myEcharts.on("click", {name: "数码"}, params => {
                console.log("数码项事件", params)
            })
            myEcharts.on("click", {name: "数码", seriesIndex: 1}, params => {
                console.log("折线图数码项事件", params)
            })
            let xData = ["美食", "数码", "日化", "蔬菜", "熟食"];
            let yData = [88, 75, 20, 210, 35];
            let option = {
                title: {
                    text: "Echarts事件"
                },
                xAxis: {
                    type: 'value'
                },
                yAxis: {
                    type: "category",
                    data: xData
                },
                series: [
                    {
                        name: "销量",
                        type: 'bar',
                        data: yData,
                        barWidth: 50,
                        itemStyle: {
                            normal: {
                                color: function (params) {
                                    let colorList = [
                                        "#c23531",
                                        "#2f4554",
                                        "#61a0a8",
                                        "#d48265",
                                        "#91c7ae",
                                    ]
                                    return colorList[params.dataIndex]
                                }
                            }
                        }
                    },
                    //折线图
                    {
                        type: "line",
                        data: [150, 230, 224, 218, 135]
                    }
                ]
            }
            myEcharts.setOption(option)
        }
    }
</script>

<style scoped>

</style>