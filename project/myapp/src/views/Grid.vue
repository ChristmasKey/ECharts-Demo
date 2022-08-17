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
        text: "柱状统计图",
      },
      legend: {},
      xAxis: {
        type: "category",
        data: ["美食", "数码", "日化", "蔬菜", "熟食"],
      },
      yAxis: {
        type: "value",
      },
      // 网格相关设置
      grid: {
        left: "20%",
        top: "20%",
        right: "20%",
        bottom: "20%",
        show: true,
        backgroundColor: "pink",
        borderColor: "yellow",
      },
      series: [
        {
          name: "销量",
          type: "bar",
          data: [88, 75, 20, 210, 35],
        },
      ],
    });
  },
};
</script>

<style>
</style>