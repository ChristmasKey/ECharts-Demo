<template>
  <div id="myDiv" ref="myChart"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
  mounted() {
    let myEcharts = echarts.init(this.$refs.myChart);
    let xData = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    let dataA = [130, 125, 234, 164, 89, 188, 79];
    let dataB = [77, 24, 85, 164, 89, 115, 120];
    let dataC = [123, 225, 88, 46, 89, 90, 50];
    let dataD = [20, 28, 200, 164, 180, 76, 100];
    let option = {
      xAxis: {
        type: "category",
        data: xData,
      },
      yAxis: {
        type: "value",
      },
      legend: {},
      tooltip: {},
      series: [
        {
          name: "美食",
          type: "line",
          // 数据的堆叠
          stack: "num", //同类型的数据需要匹配相同的stack属性值
          data: dataA,
          // 样式填充
          areaStyle: {},
        },
        {
          name: "日化",
          type: "line",
          // 数据的堆叠
          stack: "num", //同类型的数据需要匹配相同的stack属性值
          data: dataB,
          // 样式填充
          areaStyle: {},
        },
        {
          name: "数码",
          type: "line",
          // 数据的堆叠
          stack: "num", //同类型的数据需要匹配相同的stack属性值
          data: dataC,
          // 样式填充
          areaStyle: {},
        },

        {
          name: "蔬菜",
          type: "line",
          // 数据的堆叠
          stack: "num", //同类型的数据需要匹配相同的stack属性值
          data: dataD,
          // 样式填充
          areaStyle: {},
          // 选中高亮状态
          emphasis: {
            focus: "series", //聚焦当前的区域高亮
          },
        },
      ],
    };
    myEcharts.setOption(option);
  },
};
</script>

<style>
</style>