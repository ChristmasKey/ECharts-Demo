<template>
    <div class="map" id="map"></div>
</template>

<script>
    import axios from 'axios'
    import {onMounted, reactive, inject} from 'vue'

    export default {
        name: "MapPage",
        setup() {
            let $echarts = inject("echarts")

            let mapData = reactive({})

            async function getState() {
                mapData = await axios.get("https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json")
            }

            onMounted(() => {
                getState().then(() => {
                    console.log('map', mapData)
                    $echarts.registerMap("china", mapData.data)

                    let myChart = $echarts.init(document.getElementById('map'))
                    myChart.setOption({
                        geo: {
                            map: "china",
                            itemStyle: {
                                areaColor: "rgba(253, 252, 253,0.5)",
                                borderColor: "blue",
                                shadowColor: "rgba(100, 69, 160, 0.5)",
                                shadowBlur: 20,
                                emphasis: {
                                    focus: "self"
                                }
                            }
                        },
                        series: [
                            {
                                type: "scatter",
                                itemStyle: {
                                    color: "red"
                                },
                                coordinateSystem: "geo",
                                data: [
                                    {name: "北京", value: [116.46, 39.92, 4367]},
                                    {name: "上海", value: [121.48, 31.22, 8675]},
                                    {name: "深圳", value: [114.07, 22.62, 2461]},
                                    {name: "广州", value: [113.23, 23.16, 187]},
                                    {name: "西安", value: [108.45, 34, 3421]},
                                ]
                            }
                        ]
                    })
                })
            })

            return {
                getState,
                mapData
            }
        }
    }
</script>

<style scoped>
    .map {
        width: 100%;
        height: 100%
    }
</style>