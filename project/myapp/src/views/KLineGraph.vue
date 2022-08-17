<template>
  <div id="myDiv" ref="myChart"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
  data() {
    return {
      kData: [
        [20, 34, 10, 38],
        [40, 35, 30, 50],
        [31, 38, 33, 44],
        [38, 15, 5, 42],
      ]
    }
  },
  computed: {
    newData() {
      return this.kData.map(v => v[0])
    }
  },
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
          data: this.kData,
          //设置颜色
          itemStyle: {
            color: '#ec5566', //上涨颜色
            color0: '#55da3c', //下跌颜色
            borderColor: '#8A0000', //上涨的边框色
            borderColor0: '#008f28', //下跌的边框色
          },
          //设置最值
          markPoint: {
            data: [
              {
                name: '最大值',
                type: 'max',
                valueDim: 'highest', //在哪个维度上设置最值
              },
              {
                name: '最小值',
                type: 'min',
                valueDim: 'lowest'
              },
              {
                name: '平均值',
                type: 'average',
                valueDim: 'close'
              }
            ]
          }
        },
        {
          type: 'line',
          smooth: true,
          data: this.newData
        }
      ],
    };
    myEcharts.setOption(option);
  },
};
</script>

<style>
</style>