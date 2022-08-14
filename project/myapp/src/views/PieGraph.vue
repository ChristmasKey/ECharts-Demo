<template>
    <div id="myDiv" ref="myChart"></div>
</template>

<script>
import * as echarts from 'echarts'

export default {
    mounted() {
        let myEcharts = echarts.init(this.$refs.myChart)
        // 设置数据（同时设置颜色）
        let data = [
            { value: 67, name: '美食', itemStyle: { normal: { color: 'rgb(0,175,80)' } } },
            { value: 175, name: '日化', itemStyle: { normal: { color: 'rgb(175,0,80)' } } },
            { value: 27, name: '数码', itemStyle: { normal: { color: 'rgb(175,80,0)' } } },
            { value: 89, name: '家电', itemStyle: { normal: { color: 'rgb(0,80,175)' } } },
        ]
        let option = {
            title: {
                text: '饼状图',
                left: 'center'
            },
            legend: {
                left: 'left', //居左
                // 图例的布局朝向 垂直排列
                orient: 'vertical'
            },
            series: {
                name: '销量统计',
                type: 'pie', //饼状图
                data,
                radius: ['40%', '70%'], //设置饼图的半径：第一项内半径；第二项外半径
                // 设置环形图的文本标签
                label: {
                    show: true, //是否显示文本标签
                    position: "inside", //标签显示位置：outside 外侧展示、inside 内侧展示、center 中心展示
                },
                roseType: "area", //是否设置成南丁格尔玫瑰图
                //单项样式设置
                itemStyle: {
                    // color: '#c23531',
                    shadowBlur: 200,
                    shadowColor: 'reba(0,0,0,0.5)'
                }
            }
        }
        myEcharts.setOption(option)
    }
}
</script>

<style>
#myDiv {
    width: 500px;
    height: 500px;
    border: 1px solid red;
}
</style>