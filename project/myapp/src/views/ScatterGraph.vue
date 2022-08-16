<template>
  <div id="myDiv" ref="myChart"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
  mounted() {
    let myEcharts = echarts.init(this.$refs.myChart);
    let option = {
      xAxis: {},
      yAxis: {},
      tooltip: {},
      series: [
        {
          type: "scatter", //散点图
          symbolSize: 20, //点大小
          // 图形的样式
          //color: 'red',
          color: {
            // 线性渐变
            type: "linear",
            // 相当于在图形包围盒中的百分比
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [
              {
                offset: 0,
                color: "#00ccff",
              },
              {
                offset: 1,
                color: "rgba(255, 173, 2, 0.9)",
              },
            ],
          },
          // 高亮设置
          emphasis: {
            itemStyle: {
              borderColor: "rgba(100, 200, 50, 0.5)",
              borderWidth: 30,
            },
          },
          data: [
            [10.0, 8.04],
            [8.07, 6.95],
            [13.0, 7.58],
            [9.05, 8.81],
            [11.0, 8.33],
            [14.0, 7.66],
            [13.4, 6.81],
            [10.0, 6.33],
            [14.0, 8.96],
            [12.5, 6.82],
            [9.15, 7.2],
            [11.5, 7.2],
            [3.03, 4.23],
            [12.2, 7.83],
            [2.02, 4.47],
            [1.05, 3.33],
            [4.05, 4.96],
            [6.03, 7.24],
            [12.0, 6.26],
            [12.0, 8.84],
            [7.08, 5.82],
            [5.02, 5.68],
          ],
        },
      ],
    };
    myEcharts.setOption(option);
  },
};
</script>

<style>
</style>