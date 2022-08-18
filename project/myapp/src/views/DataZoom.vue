<template>
  <div id="myDiv" ref="myChart"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
  mounted() {
    let myEcharts = echarts.init(this.$refs.myChart);
    let xData = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    let data = [150, 230, 224, 218, 135, 147, 260];
    let option = {
      title: {
        text: "数据缩放",
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
          data,
          type: "line",
          smooth: true,
          markPoint: {
            data: [
              {
                type: "max",
                name: "Max",
              },
              {
                type: "min",
                name: "Min",
              },
            ],
          },
          markLine: {
            data: [
              {
                type: "average",
                name: "Avg",
              },
            ],
          },
        },
      ],
      dataZoom: [
        {
          type: "slider",
          xAxisIndex: 0,
          filterMode: "none",
        },
        {
          type: "slider",
          yAxisIndex: 0,
          filterMode: "none",
        },
      ],
    };
    myEcharts.setOption(option);
  },
};
</script>

<style>
</style>