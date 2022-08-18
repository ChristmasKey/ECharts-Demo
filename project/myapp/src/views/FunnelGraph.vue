<template>
  <div id="myDiv" ref="myChart"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
  mounted() {
    let myEcharts = echarts.init(this.$refs.myChart);
    let option = {
      title: {
        text: "漏斗图",
      },
      tooltip: {
        trigger: "item",
        formatter: "{a}<br/>{b}:{c}%",
      },
      series: [
        {
          name: "ABA",
          type: "funnel",
          data: [
            { value: 60, name: "美食" },
            { value: 40, name: "日化" },
            { value: 20, name: "数码" },
            { value: 80, name: "家电" },
            { value: 100, name: "蔬菜" },
          ],
          left: "10%",
          sort: "ascending", //排序 ascending descending none
          //设置图形样式
          itemStyle: {
            borderColor: "red",
            borderWidth: "2",
          },
          //设置文字标签
          label: {
            show: true,
            position: "inside",
          },
          //设置高亮
          emphasis: {
            label: {
              fontSize: 30,
            },
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