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
<template>
  <div id="myDiv" ref="myChart"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  mounted() {
    let myEcharts = echarts.init(this.$refs.myChart);
    myEcharts.setOption({
      title: {
        text: "我是标题",
      },
      xAxis: {
        data: ["苹果", "西瓜", "香蕉", "橘子"],
      },
      tooltip: {
        //触发类型：axis坐标轴触发；item图形触发
        trigger: "axis",
        //坐标轴指示器
        axisPointer: {
          type: "shadow", //默认line，显示一个实线；shadow阴影效果；cross十字准星
        },
        //显示悬浮框，默认true
        // showContent: false,
        //悬浮框样式
        backgroundColor: "pink",
        borderColor: "red",
        borderWidth: 2,
        textStyle: {
          color: "yellow",
        },
        //自定义提示框信息
        formatter(params) {
          for(let i = 0; i < params.length; i++) {
            return "名字："+params[i].name+"--价格："+params[i].data.value+"--采摘日期："+params[i].data.date
          }
        },
      },
      yAxis: {},
      series: [
        {
          name: "水果",
          type: "bar",
          data: [
            {
              value: 5,
              date: "2022年8月8日",
            },
            {
              value: 6,
              date: "2022年8月9日",
            },
            {
              value: 8,
              date: "2022年8月10日",
            },
            {
              value: 10,
              date: "2022年8月12日",
            },
          ],
        },
      ],
    });
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
```



==legend配置项==

```vue
<template>
    <div id="myDiv" ref="myChart"></div>
</template>

<script>
import * as echarts from 'echarts'

export default {
    mounted() {
        let myEcharts = echarts.init(this.$refs.myChart);
        myEcharts.setOption({
            title: {
                text: '主标题'
            },
            tooltip: {},
            legend: {
                show: true, //设置图例的开启或者关闭
                // icon: 'circle', //设置图例形状 圆形
                top: '10%', //设置位置
                //图例宽高
                itemWidth: 10,
                itemHeight: 20,
                //设置图例文本的样式
                textStyle: {
                    color: "red",
                    fontSize: 30,
                    backgroundColor: "yellow"
                }
            },
            xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        })
    }
}
</script>

<style>
#myDiv {
    width: 500px;
    height: 500px;
    border: 1px solid red;
}
</style>
```



## 柱状图

==基本设置==

```vue
<template>
    <div id="myDiv" ref="myChart"></div>
</template>

<script>
import * as echarts from 'echarts'

export default {
    mounted() {
        // 1.初始化
        let myEcharts = echarts.init(this.$refs.myChart)
        // 2.设置echarts数据
        // 设置轴
        let xData = ["美食", "数码", "日化", "蔬菜"]
        let yData = [99, 67, 45, 87]
        // 3.设置配置项
        let option = {
            title: {
                text: '主标题'
            },
            xAxis: {//配置x轴的参数
                data: xData,
                type: "category" //坐标轴的类型，value 数据轴；category 类目轴
            },
            yAxis: {//配置y轴的参数
            },
            series: [//系列，配置图表的类型
                {
                    name: '销量',
                    type: 'bar', //系列类别
                    data: yData
                }
            ]
        }
        // 4.设置图表/绘制图表
        myEcharts.setOption(option)
    }
}
</script>

<style>
#myDiv {
    width: 500px;
    height: 500px;
    border: 1px solid red;
}
</style>
```



==更多效果==

```vue
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
```



==水平柱状图==

```vue
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
```



## 饼状图

==基本设置==

```vue
<template>
    <div id="myDiv" ref="myChart"></div>
</template>

<script>
import * as echarts from 'echarts'

export default {
    mounted() {
        let myEcharts = echarts.init(this.$refs.myChart)
        // 设置数据
        let data = [
            {value: 67, name: '美食'},
            {value: 175, name: '日化'},
            {value: 27, name: '数码'},
            {value: 89, name: '家电'},
        ]
        let option = {
            title: {
                text: '饼状图',
                left: 'center'
            },
            legend: {
                left: 'left', //居左
                // 图例的布局朝向 垂直排列
                orient: 'vertical'
            },
            series: {
                name: '销量统计',
                type: 'pie', //饼状图
                data
            }
        }
        myEcharts.setOption(option)
    }
}
</script>

<style>
#myDiv {
    width: 500px;
    height: 500px;
    border: 1px solid red;
}
</style>
```



==更多设置==

```vue
<template>
    <div id="myDiv" ref="myChart"></div>
</template>

<script>
import * as echarts from 'echarts'

export default {
    mounted() {
        let myEcharts = echarts.init(this.$refs.myChart)
        // 设置数据（同时设置颜色）
        let data = [
            { value: 67, name: '美食', itemStyle: { normal: { color: 'rgb(0,175,80)' } } },
            { value: 175, name: '日化', itemStyle: { normal: { color: 'rgb(175,0,80)' } } },
            { value: 27, name: '数码', itemStyle: { normal: { color: 'rgb(175,80,0)' } } },
            { value: 89, name: '家电', itemStyle: { normal: { color: 'rgb(0,80,175)' } } },
        ]
        let option = {
            title: {
                text: '饼状图',
                left: 'center'
            },
            legend: {
                left: 'left', //居左
                // 图例的布局朝向 垂直排列
                orient: 'vertical'
            },
            series: {
                name: '销量统计',
                type: 'pie', //饼状图
                data,
                radius: ['40%', '70%'], //设置饼图的半径：第一项内半径；第二项外半径
                // 设置环形图的文本标签
                label: {
                    show: true, //是否显示文本标签
                    position: "inside", //标签显示位置：outside 外侧展示、inside 内侧展示、center 中心展示
                },
                roseType: "area", //是否设置成南丁格尔玫瑰图
                //单项样式设置
                itemStyle: {
                    // color: '#c23531',
                    shadowBlur: 200,
                    shadowColor: 'reba(0,0,0,0.5)'
                }
            }
        }
        myEcharts.setOption(option)
    }
}
</script>

<style>
#myDiv {
    width: 500px;
    height: 500px;
    border: 1px solid red;
}
</style>
```

