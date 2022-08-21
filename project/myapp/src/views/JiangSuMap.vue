<template>
    <div id="myDiv" ref="myChart"></div>
</template>

<script>
    import * as echarts from 'echarts'
    import {jsMap} from "@/assets/jiangsuMap";

    export default {
        name: "JiangSuMap",
        mounted() {
            let myEcharts = echarts.init(this.$refs.myChart)
            echarts.registerMap('jiangsuMap', jsMap)
            let option = {
                geo: {
                    type: 'map',
                    map: 'jiangsuMap',
                    roam: true,
                    //地图标签相关设置
                    label: {
                        show: true,
                        color: 'blue',
                        fontSize: 10
                    },
                    //地图区域的多边形 图形样式
                    itemStyle: {
                        areaColor: 'orange'
                    }
                }
            }
            myEcharts.setOption(option)
        }
    }
</script>

<style scoped>

</style>
