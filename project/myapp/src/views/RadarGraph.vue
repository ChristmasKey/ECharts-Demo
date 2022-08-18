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
        text: "雷达图",
      },
      //新属性radar，用于指定雷达图坐标系
      radar: [
        {
          indicator: [
            //雷达图的指示器，用来指定雷达图中的多个变量（维度）
            { name: "蔬菜", max: 6500 },
            { name: "水果", max: 16000 },
            { name: "熟食", max: 30000 },
            { name: "数码", max: 38000 },
            { name: "家电", max: 52000 },
            { name: "日化", max: 25000 },
          ],
          shape: "circle", //设置雷达图的形状
          radius: 200, //设置雷达图的半径
          startAngle: 180, //设置坐标系的起使角度（顺时针）
          splitNumber: 7, //设置指示器轴的分割端数
          //雷达图每个指示器名称的配置项
          axisName: {
            //格式
            formatter: "【{value}】",
            //颜色
            color: "#428BD4",
          },
          //配置分割区域效果
          splitArea: {
            //设置样式
            areaStyle: {
              //颜色
              color: [
                "#FF0000",
                "#FF7F00",
                "#FFFF00",
                "#00FF00",
                "#00FFFF",
                "#0000FF",
                "#8B00FF",
              ],
              //阴影色
              shadowColor: "rgba(0,0,0,0.9)",
              shadowBlur: 10,
            },
          },
        },
      ],
      series: [
        {
          type: "radar",
          data: [
            {
              value: [4200, 8300, 16666, 22345, 31234, 14567],
              areaStyle: {
                color: 'black'
              }
            },
          ],
          //设置线条样式
          lineStyle: {
            type: 'dashed'
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