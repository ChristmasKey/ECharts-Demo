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
        text: "仪表盘",
      },
      series: [
        {
          type: "gauge",
          data: [
            {
              value: "45",
              name: "提示信息",
              detail: {
                //开启数字动画
                valueAnimation: true,
              },
            },
          ],
          //进度条配置
          progress: {
            //显示进度条
            show: true,
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