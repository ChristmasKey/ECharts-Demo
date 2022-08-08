<template>
  <!-- echarts的容器，默认宽高是0，如果我们不进行设置的话，页面是不显示的 -->
  <div ref="mychart" id="demoDiv"></div>
</template>

<script>
// 1.引用echarts
import * as echarts from "echarts";
export default {
  mounted() {
    let myEcharts = echarts.init(this.$refs.mychart);
    // 设置参数
    myEcharts.setOption({
      title: {
        //echarts标题
        text: "Hello World",
        textStyle: {
            color: "yellow",
            fontSize: 20
        },
        link: "http://www.baidu.com",
        target: "self",//当前页打开超链接
        backgroundColor:"pink",
        borderColor: "red",
        borderWidth: 2,
        x: "center",
        subtext: "副标题",
        sublink: "https://www.baidu.com",
        subtextStyle: {
            color: "blue",
            fontSize: 15
        }
      },
      xAxis: {
        data: ["EZ", "VN", "NOC", "MF"],
      },
      yAxis: {
      },
      series: {
        //系列
        name: "LOL英雄大全",
        type: "bar",
        data: [6300, 4800, 3200, 600],
      },
    });
  },
};
</script>

<style>
#demoDiv {
  width: 500px;
  height: 500px;
  border: 1px solid red;
}
</style>