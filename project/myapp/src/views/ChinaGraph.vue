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
                },
                series: [
                    {
                        type: 'scatter', //散点图
                        data: [
                            {name: '北京市', value: [116.46, 39.92, 4000]}
                        ],
                        //指定坐标系类型为 地理坐标系
                        coordinateSystem: 'geo',
                        symbolSize: 30, //设置标记大小
                        // label: {
                        //     show: true
                        // }
                    },
                    {
                        type: "effectScatter", // 带有涟漪特效动画的散点（气泡）图
                        coordinateSystem: 'geo',
                        data: [
                            {name: '西安市', value: [108.95, 34.26]}
                        ],
                        //设置涟漪效果的相关配置
                        rippleEffect: {
                            number: 2, //波纹数量
                            scale: 4, //波纹最大缩放比例
                        },
                        itemStyle: {
                            color: 'red'
                        }
                    }
                ]
            }
            myEcharts.setOption(option)
        }
    }
</script>

<style scoped>

</style>
