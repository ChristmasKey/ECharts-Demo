<template>
    <div id="myDiv" ref="myChart"></div>
</template>

<script>
    import * as echarts from 'echarts'

    export default {
        name: "DataSort",
        mounted() {
            let myEcharts = echarts.init(this.$refs.myChart)
            let option = {
                //使用数据集管理数据
                dataset: [
                    {
                        //数据的分类
                        dimensions: ["类别", "数量",],
                        //分类数据
                        source: [
                            ["美食", 123],
                            ["日化", 98],
                            ["熟食", 231],
                            ["数码", 223],
                            ["蔬菜", 23],
                            ["杂项", 263],
                        ],
                    },
                    {
                        transform: {
                            type: 'sort',
                            config: {
                                dimension: '数量',
                                order: 'asc'
                            }
                        }
                    }],
                title: {
                    text: '数据排序'
                },
                xAxis: {
                    type: 'category',
                    //坐标轴刻度标签相关配置
                    axisLabel: {
                        //坐标轴刻度标签的显示间隔，在类目轴中有效
                        interval: 0,
                        //刻度标签旋转的角度，在类目轴的类目标签显示不下的时候可以通过旋转防止标签之间重叠
                        rotate: 30
                    }
                },
                yAxis: {},
                series: [
                    {
                        type: 'bar',
                        encode: {
                            x: '类别',
                            y: '数量',
                        },
                        datasetIndex: 1
                    }
                ]
            }
            myEcharts.setOption(option)
        }
    }
</script>

<style scoped>

</style>
