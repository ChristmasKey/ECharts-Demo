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



==Legend配置项==

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



==Grid配置项==

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
        text: "柱状统计图",
      },
      legend: {},
      xAxis: {
        type: "category",
        data: ["美食", "数码", "日化", "蔬菜", "熟食"],
      },
      yAxis: {
        type: "value",
      },
      // 网格相关设置
      grid: {
        left: "20%",
        top: "20%",
        right: "20%",
        bottom: "20%",
        show: true,
        backgroundColor: "pink",
        borderColor: "yellow",
      },
      series: [
        {
          name: "销量",
          type: "bar",
          data: [88, 75, 20, 210, 35],
        },
      ],
    });
  },
};
</script>

<style>
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



## 折线图

==基本设置==

```vue
<template>
  <div id="myDiv" ref="myChart"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
  mounted() {
    let myEcharts = echarts.init(this.$refs.myChart);
    // 设置数据
    let xData = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    let data = [150, 230, 224, 218, 135, 147, 260];
    // 配置项
    let option = {
      title: {
        text: "周统计",
      },
      xAxis: {
        type: "category",
        data: xData,
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          type: "line", //折线图
          data,
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



==更多设置==

```vue
<template>
  <div id="myDiv" ref="myChart"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
  mounted() {
    let myEcharts = echarts.init(this.$refs.myChart);
    // 设置数据
    let xData = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    let data = [150, 230, 224, 218, 135, 147, 260];
    // 配置项
    let option = {
      title: {
        text: "周统计",
      },
      xAxis: {
        type: "category",
        data: xData,
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          type: "line", //折线图
          data,
          smooth: true, //开启平滑过渡
          areaStyle: {}, //设置填充
          markPoint: {
            data: [
              { type: "max", name: "最大值" },
              { type: "min", name: "最小值" },
            ],
          },
          markLine: {
            data: [{ type: "average", name: "平均值" }],
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



==堆叠效果==

```vue
<template>
  <div id="myDiv" ref="myChart"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
  mounted() {
    let myEcharts = echarts.init(this.$refs.myChart);
    let xData = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    let dataA = [130, 125, 234, 164, 89, 188, 79];
    let dataB = [77, 24, 85, 164, 89, 115, 120];
    let dataC = [123, 225, 88, 46, 89, 90, 50];
    let dataD = [20, 28, 200, 164, 180, 76, 100];
    let option = {
      xAxis: {
        type: "category",
        data: xData,
      },
      yAxis: {
        type: "value",
      },
      legend: {},
      tooltip: {},
      series: [
        {
          name: "美食",
          type: "line",
          // 数据的堆叠
          stack: "num", //同类型的数据需要匹配相同的stack属性值
          data: dataA,
          // 样式填充
          areaStyle: {},
        },
        {
          name: "日化",
          type: "line",
          // 数据的堆叠
          stack: "num", //同类型的数据需要匹配相同的stack属性值
          data: dataB,
          // 样式填充
          areaStyle: {},
        },
        {
          name: "数码",
          type: "line",
          // 数据的堆叠
          stack: "num", //同类型的数据需要匹配相同的stack属性值
          data: dataC,
          // 样式填充
          areaStyle: {},
        },

        {
          name: "蔬菜",
          type: "line",
          // 数据的堆叠
          stack: "num", //同类型的数据需要匹配相同的stack属性值
          data: dataD,
          // 样式填充
          areaStyle: {},
          // 选中高亮状态
          emphasis: {
            focus: "series", //聚焦当前的区域高亮
          },
        },
      ],
    };
    myEcharts.setOption(option);
  },
};
</script>

<style>
    ...
</style>
```



## 散点图

==基本设置==

```vue
<template>
  <div id="myDiv" ref="myChart"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
  mounted() {
    let myEcharts = echarts.init(this.$refs.myChart);
    let option = {
      xAxis: {},
      yAxis: {},
      series: [
        {
          type: "scatter", //散点图
          symbolSize: 15, //点大小
          data: [
            [10.0, 8.04],
            [8.07, 6.95],
            [13.0, 7.58],
            [9.05, 8.81],
            [11.0, 8.33],
            [14.0, 7.66],
            [13.4, 6.81],
            [10.0, 6.33],
            [14.0, 8.96],
            [12.5, 6.82],
            [9.15, 7.2],
            [11.5, 7.2],
            [3.03, 4.23],
            [12.2, 7.83],
            [2.02, 4.47],
            [1.05, 3.33],
            [4.05, 4.96],
            [6.03, 7.24],
            [12.0, 6.26],
            [12.0, 8.84],
            [7.08, 5.82],
            [5.02, 5.68],
          ],
        },
      ],
    };
    myEcharts.setOption(option);
  },
};
</script>

<style>
</style>
```



==效果定制==

```vue
<template>
  <div id="myDiv" ref="myChart"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
  mounted() {
    let myEcharts = echarts.init(this.$refs.myChart);
    let option = {
      xAxis: {},
      yAxis: {},
      tooltip: {},
      series: [
        {
          type: "scatter", //散点图
          symbolSize: 20, //点大小
          // 图形的样式
          //color: 'red',
          color: {
            // 线性渐变
            type: "linear",
            // 相当于在图形包围盒中的百分比
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [
              {
                offset: 0,
                color: "#00ccff",
              },
              {
                offset: 1,
                color: "rgba(255, 173, 2, 0.9)",
              },
            ],
          },
          // 高亮设置
          emphasis: {
            itemStyle: {
              borderColor: "rgba(100, 200, 50, 0.5)",
              borderWidth: 30,
            },
          },
          data: [
            [10.0, 8.04],
            [8.07, 6.95],
            [13.0, 7.58],
            [9.05, 8.81],
            [11.0, 8.33],
            [14.0, 7.66],
            [13.4, 6.81],
            [10.0, 6.33],
            [14.0, 8.96],
            [12.5, 6.82],
            [9.15, 7.2],
            [11.5, 7.2],
            [3.03, 4.23],
            [12.2, 7.83],
            [2.02, 4.47],
            [1.05, 3.33],
            [4.05, 4.96],
            [6.03, 7.24],
            [12.0, 6.26],
            [12.0, 8.84],
            [7.08, 5.82],
            [5.02, 5.68],
          ],
        },
      ],
    };
    myEcharts.setOption(option);
  },
};
</script>

<style>
</style>
```



## K线图

==基本设置==

```vue
<template>
  <div id="myDiv" ref="myChart"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
  mounted() {
    let myEcharts = echarts.init(this.$refs.myChart);
    let option = {
      xAxis: {
        data: ["日化", "蔬菜", "电器", "美妆"],
      },
      yAxis: {},
      series: [
        {
          type: "candlestick", //K线图
          data: [
            [20, 34, 10, 38],
            [40, 35, 30, 50],
            [31, 38, 33, 44],
            [38, 15, 5, 42],
          ],
        },
      ],
    };
    myEcharts.setOption(option);
  },
};
</script>

<style>
</style>
```



==效果优化==

```vue
```

