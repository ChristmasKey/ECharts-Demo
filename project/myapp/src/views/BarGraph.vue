<template>
  <div id="myDiv" ref="myChart"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
  mounted() {
    // 1.初始化
    let myEcharts = echarts.init(this.$refs.myChart);
    // 2.设置echarts数据
    // 设置轴
    let xData = ["美食", "数码", "日化", "蔬菜"];
    let yData = [99, 67, 45, 87];
    // 3.设置配置项
    let option = {
      title: {
        text: "主标题",
      },
      xAxis: {
        //配置x轴的参数
        data: xData,
        type: "category", //坐标轴的类型，value 数据轴；category 类目轴
      },
      yAxis: {
        //配置y轴的参数
      },
      series: [
        //系列，配置图表的类型
        {
          name: "销量",
          type: "bar", //系列类别
          data: yData,
          // 最大值、最小值
          markPoint: {
            data: [
              //标注的数据数组，每一项都是一个对象
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
          // 图表的标线
          markLine: {
            data: [
              {
                type: "average", //平均值
                name: "平均值",
              },
            ],
          },
        },
      ],
    };
    // 4.设置图表/绘制图表
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