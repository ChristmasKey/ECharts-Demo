# ECharts Note

![first image](https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg-blog.csdnimg.cn%2F20200526104447718.png%3Fx-oss-process%3Dimage%2Fwatermark%2Ctype_ZmFuZ3poZW5naGVpdGk%2Cshadow_10%2Ctext_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1Z1ZTIwMTg%3D%2Csize_16%2Ccolor_FFFFFF%2Ct_70&refer=http%3A%2F%2Fimg-blog.csdnimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1662340868&t=e0f9634836157f1895b55eaca2b32734)



## Hello World

创建一个Vue项目：`vue create myapp`

安装echarts依赖：`npm install echarts --save`

在项目中使用echarts：`About.vue`

```vue
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
    // 2.设置参数
    myEcharts.setOption({
      title: {
        //echarts标题
        text: "Hello World"
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
```



## 配置项

==Title配置项==

```vue
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
        //设置标题文字样式
        textStyle: {
            color: "yellow",
            fontSize: 20
        },
        //为标题设置超链接
        link: "http://www.baidu.com",
        target: "self",//当前页打开超链接
        backgroundColor:"pink",//设置背景色
        borderColor: "red",//设置边框色
        borderWidth: 2,//设置边框线条宽度
        x: "center",//设置标题位置居中
          
        //副标题相关设置
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
```



==Tooltip配置项==

```vue
```

