<template>
  <div id="myDiv" ref="myChart"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
  data() {
    return {
      list: {
        //最外层的数据就是数据的根节点
        name: "根节点", //名字
        children: [
          {
            name: "层级2",
            children: [
              {
                name: "层级3-1",
                children: [
                  {
                    name: "数据1",
                    value: 2345,
                  },
                  {
                    name: "数据2",
                    value: 3212,
                  },
                  {
                    name: "数据3",
                    value: 2464,
                  },
                  {
                    name: "数据4",
                    value: 2467,
                  },
                ],
              },
              {
                name: "层级3-2",
                children: [
                  { name: "", value: 2345 },
                  { name: "", value: 3212 },
                  { name: "", value: 2464 },
                  { name: "", value: 2467 },
                ],
              },
            ],
          },
        ],
      },
    };
  },
  mounted() {
    let myEcharts = echarts.init(this.$refs.myChart);
    let option = {
      title: {
        text: "基本树形图",
      },
      tooltip: {
        trigger: "item",
      },
      series: [
        {
          type: "tree",
          data: [this.list],
          symbolSize: 15, //设置节点大小
          //配置节点标签
          label: {
            //设置标签位置居左
            position: "left",
            verticalAlign: "middle",
            fontSize: 10,
          },
          //配置叶子节点
          leaves: {
            //配置标签
            label: {
              position: "right",
              verticalAlign: "middle",
            },
          },
          // 配置高亮样式
          emphasis: {
            focus: "descendant", //聚焦于所有子孙节点
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