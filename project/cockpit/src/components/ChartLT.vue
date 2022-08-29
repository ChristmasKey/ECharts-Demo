<template>
    <div>
        <h2>图表1</h2>
        <div class="chart" id="chartLT">容纳后期的图表</div>
    </div>
</template>

<script>
    import {inject, onMounted, reactive} from "vue"

    export default {
        name: "ChartLT",
        setup() {
            let $echarts = inject("echarts")
            let $http = inject("axios")

            let data = reactive({})
            let xData = reactive([])
            let yData = reactive([])

            function setData() {
                xData = data.data.data.chartData.map(v => v.title)
                yData = data.data.data.chartData.map(v => v.num)
            }

            async function getState() {
                data = await $http({
                    url: "/one/data"
                })
            }

            onMounted(() => {
                let myChart = $echarts.init(document.getElementById("chartLT"))
                getState().then(() => {
                    setData()

                    myChart.setOption({
                        grid: {
                            top: "3%",
                            left: "1%",
                            right: "6%",
                            bottom: "3%",
                            containLabel: true
                        },
                        xAxis: {
                            type: "value",
                        },
                        yAxis: {
                            type: "category",
                            data: xData
                        },
                        series: [
                            {
                                type: 'bar',
                                data: yData,
                                itemStyle: {
                                    normal: {
                                        barBorderRadius: [0, 20, 20, 0],
                                        color: new $echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                            offset: 0,
                                            color: '#fce0f4'
                                        }, {
                                            offset: 0.5,
                                            color: '#ec8cf4'
                                        }, {
                                            offset: 1,
                                            color: '#beb4f7'
                                        }]),
                                    }
                                }
                            }
                        ]
                    })
                })
            })

            return {
                getState,
                data,
                xData,
                yData,
                setData
            }
        }
    }
</script>

<style scoped>
    .chart {
        height: 4.5rem;
    }

    h2 {
        height: 0.6rem;
        color: #6445a0;
        line-height: 0.6rem;
        text-align: center;
    }
</style>
