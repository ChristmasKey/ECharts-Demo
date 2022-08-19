<template>
    <div id="myDiv" ref="myChart"></div>
</template>

<script>
    import * as echarts from 'echarts'
    import {mapData} from "@/assets/mapData";

    export default {
        name: "ChinaGraph",
        mounted() {
            let myEcharts = echarts.init(this.$refs.myChart)
            //注册当前使用的地图名
            echarts.registerMap("chinaMap", mapData)
            let option = {
                geo: {//地理坐标组件
                    type: 'map',
                    map: 'chinaMap',
                    roam: true, //开启平移缩放
                    zoom: 5,//设置地图初始缩放等级
                    center: [116.404188, 39.914687],//设置地图初始中心的地理坐标
                }
            }
            myEcharts.setOption(option)
        }
    }
</script>

<style scoped>

</style>
