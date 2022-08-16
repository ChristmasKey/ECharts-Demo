<template>
  <div id="myDiv" ref="myChart"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
  mounted() {
    let myEcharts = echarts.init(this.$refs.myChart);
    // 设置数据
    let xData = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    let data = [150, 230, 224, 218, 135, 147, 260];
    // 配置项
    let option = {
      title: {
        text: "周统计",
      },
      xAxis: {
        type: "category",
        data: xData,
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          type: "line", //折线图
          data,
          smooth: true, //开启平滑过渡
          areaStyle: {}, //设置填充
          markPoint: {
            data: [
              { type: "max", name: "最大值" },
              { type: "min", name: "最小值" },
            ],
          },
          markLine: {
            data: [{ type: "average", name: "平均值" }],
          },
        },
      ],
    };
    myEcharts.setOption(option);
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