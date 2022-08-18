<template>
  <div id="myDiv" ref="myChart"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
  data() {
    return {
      list: [
        //创建关系图的节点数据
        {
          name: "韦小宝",
          id: "1",
          symbolSize: 30,
        },
        {
          name: "方怡",
          id: "2",
          symbolSize: 30,
        },
        {
          name: "双儿",
          id: "3",
          symbolSize: 30,
        },
        {
          name: "茅十八",
          id: "4",
          symbolSize: 30,
        },
        {
          name: "五六七",
          id: "5",
          symbolSize: 30,
        },
      ],
      num: [
        //创建关系图的关系数据
        {
          source: "1", //边的源节点名称
          target: "2", //目标节点名称
          relation: {
            name: "老婆",
            id: "1",
          },
        },
        {
          source: "1",
          target: "4",
          relation: {
            name: "兄弟",
            id: "1",
          },
        },
        {
          source: "4",
          target: "1",
          relation: {
            name: "兄弟",
            id: "1",
          },
        },
        {
          source: "3",
          target: "5",
          relation: {
            name: "义妹",
            id: "1",
          },
        },
      ],
    };
  },
  mounted() {
    let myEcharts = echarts.init(this.$refs.myChart);
    let option = {
      title: {
        text: "关系图",
      },
      series: [
        {
          type: "graph", //关系图
          data: this.list,
          layout: "force", //力引导布局
          itemStyle: {
            color: "#95dcb2",
          },
          label: {
            //图形上的文字
            show: true,
            position: "bottom",
            distance: 6, //距离图形的位置
            fontSize: 16,
            align: "center",
          },
          //力引导布局相关的配置项
          force: {
            repulsion: 100, //斥力因子
            gravity: 0.01, //引力因子
            edgeLength: 200, //边的两个节点之间的距离
          },
          links: this.num,
          edgeLabel: {
            show: true, //显示标签
            position: "middle", //标签位置
            //设置标签格式
            formatter: (params) => {
              return params.data.relation.name;
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