<template>
  <div id="myDiv" ref="myChart"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  mounted() {
    let myEcharts = echarts.init(this.$refs.myChart);
    myEcharts.setOption({
      title: {
        text: "我是标题",
      },
      xAxis: {
        data: ["苹果", "西瓜", "香蕉", "橘子"],
      },
      tooltip: {
        //触发类型：axis坐标轴触发；item图形触发
        trigger: "axis",
        //坐标轴指示器
        axisPointer: {
          type: "shadow", //默认line，显示一个实线；shadow阴影效果；cross十字准星
        },
        //显示悬浮框，默认true
        // showContent: false,
        //悬浮框样式
        backgroundColor: "pink",
        borderColor: "red",
        borderWidth: 2,
        textStyle: {
          color: "yellow",
        },
        //自定义提示框信息
        formatter(params) {
          for(let i = 0; i < params.length; i++) {
            return "名字："+params[i].name+"--价格："+params[i].data.value+"--采摘日期："+params[i].data.date
          }
        },
      },
      yAxis: {},
      series: [
        {
          name: "水果",
          type: "bar",
          data: [
            {
              value: 5,
              date: "2022年8月8日",
            },
            {
              value: 6,
              date: "2022年8月9日",
            },
            {
              value: 8,
              date: "2022年8月10日",
            },
            {
              value: 10,
              date: "2022年8月12日",
            },
          ],
        },
      ],
    });
  },
};
</script>

<style>
#myDiv {
  width: 500px;
  height: 500px;
  border: 1px solid red;
}
</style>