<template>
  <div id="myDiv" ref="myChart"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
  mounted() {
    let myEcharts = echarts.init(this.$refs.myChart);
    let option = {
      xAxis: {
        data: ["日化", "蔬菜", "电器", "美妆"],
      },
      yAxis: {},
      //设置提示框
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
        },
      },
      series: [
        {
          type: "candlestick", //K线图
          data: [
            [20, 34, 10, 38],
            [40, 35, 30, 50],
            [31, 38, 33, 44],
            [38, 15, 5, 42],
          ],
          //设置颜色
          itemStyle: {
            color: '#ec5566', //上涨颜色
            color0: '#00da3c', //下跌颜色
            borderColor: '#8A0000', //上涨的边框色
            borderColor0: '#008f28', //下跌的边框色
          }
        },
      ],
    };
    myEcharts.setOption(option);
  },
};
</script>

<style>
</style>