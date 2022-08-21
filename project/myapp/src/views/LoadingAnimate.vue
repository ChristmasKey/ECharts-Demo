<template>
    <div id="myDiv" ref="myChart"></div>
</template>

<script>
    import * as echarts from 'echarts'
    import axios from 'axios'

    export default {
        /*
        1、全局下载 npm install -g json-server
        2、新建文件夹 mock 与文件 data.json 用来模拟数据
        3、启动json-server：json-server --watch data.json --port 8888
         */
        name: "LoadingAnimate",
        data() {
            return {
                eData: []
            }
        },
        methods: {
            async linkData() {
                let echartsData = await axios({
                    url: 'http://localhost:8888/one'
                })
                this.eData = echartsData.data
            }
        },
        mounted() {
            let myEcharts = echarts.init(this.$refs.myChart)
            //开始等待
            myEcharts.showLoading()
            this.linkData().then(() => {
                //结束等待
                myEcharts.hideLoading()
                let option = {
                    title: {
                        text: "加载动画",
                        subtext: '基本设置',
                        left: 'center'
                    },
                    tooltip: {
                        trigger: 'item'
                    },
                    legend: {
                        orient: 'vertical',
                        left: "left"
                    },
                    series: [
                        {
                            name: '销售量',
                            type: 'pie',
                            radius: ['40%', '70%'],
                            label: {
                                show: true,
                                position: 'inside',
                                color: 'yellow'
                            },
                            labelLine: {
                                show: false
                            },
                            roseType: 'area',
                            itemStyle: {
                                color: '#c23531',
                                shadowBlur: 200,
                                shadowColor: 'rgba(0,0,0,0.5)'
                            },
                            data: this.eData,
                        }
                    ]
                }
                myEcharts.setOption(option)
            })
        }
    }
</script>

<style scoped>

</style>