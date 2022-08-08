<template>
    <div id="myDiv" ref="myChart"></div>
</template>

<script>
import * as echarts from 'echarts'

export default {
    mounted() {
        let myEcharts = echarts.init(this.$refs.myChart);
        myEcharts.setOption({
            title: {
                text: '主标题'
            },
            tooltip: {},
            legend: {
                show: true, //设置图例的开启或者关闭
                // icon: 'circle', //设置图例形状 圆形
                top: '10%', //设置位置
                //图例宽高
                itemWidth: 10,
                itemHeight: 20,
                //设置图例文本的样式
                textStyle: {
                    color: "red",
                    fontSize: 30,
                    backgroundColor: "yellow"
                }
            },
            xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        })
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