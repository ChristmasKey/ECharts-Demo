<template>
  <div id="myDiv" ref="myChart"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
  mounted() {
    let myEcharts = echarts.init(this.$refs.myChart);
    let xData = ["美食", "数码", "日化", "蔬菜"];
    let yData = [99, 67, 45, 87];
    let option = {
      title: {
        text: "主标题",
      },
      xAxis: {
        type: "value",
      },
      yAxis: {
        data: xData,
        type: "category",
      },
      series: [
        {
          name: "销量",
          type: "bar",
          data: yData,
          barWidth: 20, //设置柱条的宽度
          // color: "red", //设置柱条的颜色
          // 单独设置每个轴的颜色
          itemStyle: {
            normal: {
              color: function (params) {
                let colorList = ["#c23531", "#2f4554", "#61a0a8", "#91c7ae"];
                return colorList[params.dataIndex];
              },
            },
          },
          markPoint: {
            data: [
              {
                type: "max",
                name: "最大值",
              },
              {
                type: "min",
                name: "最小值",
              },
            ],
          },
          markLine: {
            data: [
              {
                type: "average",
                name: "平均值",
              },
            ],
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