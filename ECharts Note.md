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
```



## 雷达图

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
      title: {
        text: "雷达图",
      },
      //新属性radar，用于指定雷达图坐标系
      radar: [
        {
          indicator: [
            //雷达图的指示器，用来指定雷达图中的多个变量（维度）
            { name: "蔬菜", max: 6500 },
            { name: "水果", max: 16000 },
            { name: "熟食", max: 30000 },
            { name: "数码", max: 38000 },
            { name: "家电", max: 52000 },
            { name: "日化", max: 25000 },
          ],
          shape: 'circle'
        },
      ],
      series: [
        {
          type: "radar",
          data: [
            {
              value: [4200, 8300, 16666, 22345, 31234, 14567],
            },
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



==效果提升==

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
      title: {
        text: "雷达图",
      },
      //新属性radar，用于指定雷达图坐标系
      radar: [
        {
          indicator: [
            //雷达图的指示器，用来指定雷达图中的多个变量（维度）
            { name: "蔬菜", max: 6500 },
            { name: "水果", max: 16000 },
            { name: "熟食", max: 30000 },
            { name: "数码", max: 38000 },
            { name: "家电", max: 52000 },
            { name: "日化", max: 25000 },
          ],
          shape: "circle", //设置雷达图的形状
          radius: 200, //设置雷达图的半径
          startAngle: 180, //设置坐标系的起使角度（顺时针）
          splitNumber: 7, //设置指示器轴的分割端数
          //雷达图每个指示器名称的配置项
          axisName: {
            //格式
            formatter: "【{value}】",
            //颜色
            color: "#428BD4",
          },
          //配置分割区域效果
          splitArea: {
            //设置样式
            areaStyle: {
              //颜色
              color: [
                "#FF0000",
                "#FF7F00",
                "#FFFF00",
                "#00FF00",
                "#00FFFF",
                "#0000FF",
                "#8B00FF",
              ],
              //阴影色
              shadowColor: "rgba(0,0,0,0.9)",
              shadowBlur: 10,
            },
          },
        },
      ],
      series: [
        {
          type: "radar",
          data: [
            {
              value: [4200, 8300, 16666, 22345, 31234, 14567],
              areaStyle: {
                color: 'black'
              }
            },
          ],
          //设置线条样式
          lineStyle: {
            type: 'dashed'
          }
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



## 漏斗图

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
      title: {
        text: "漏斗图",
      },
      tooltip: {
        trigger: "item",
        formatter: "{a}<br/>{b}:{c}%",
      },
      series: [
        {
          name: "ABA",
          type: "funnel",
          data: [
            { value: 60, name: "美食" },
            { value: 40, name: "日化" },
            { value: 20, name: "数码" },
            { value: 80, name: "家电" },
            { value: 100, name: "蔬菜" },
          ],
          left: "10%",
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



==样式设置==

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
      title: {
        text: "漏斗图",
      },
      tooltip: {
        trigger: "item",
        formatter: "{a}<br/>{b}:{c}%",
      },
      series: [
        {
          name: "ABA",
          type: "funnel",
          data: [
            { value: 60, name: "美食" },
            { value: 40, name: "日化" },
            { value: 20, name: "数码" },
            { value: 80, name: "家电" },
            { value: 100, name: "蔬菜" },
          ],
          left: "10%",
          sort: "ascending", //排序 ascending descending none
          //设置图形样式
          itemStyle: {
            borderColor: "red",
            borderWidth: "2",
          },
          //设置文字标签
          label: {
            show: true,
            position: "inside",
          },
          //设置高亮
          emphasis: {
            label: {
              fontSize: 30,
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
```



## 仪表盘

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
            show: true, //开启显示
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
```



## 关系图

```vue
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
```



## 区域缩放

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
    let data = [150, 230, 224, 218, 135, 147, 260];
    let option = {
      title: {
        text: "数据缩放",
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
          data,
          type: "line",
          smooth: true,
          markPoint: {
            data: [
              {
                type: "max",
                name: "Max",
              },
              {
                type: "min",
                name: "Min",
              },
            ],
          },
          markLine: {
            data: [
              {
                type: "average",
                name: "Avg",
              },
            ],
          },
        },
      ],
      dataZoom: [
        {
          type: "slider",
          xAxisIndex: 0,
          filterMode: "none",
        },
        {
          type: "slider",
          yAxisIndex: 0,
          filterMode: "none",
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



## 树形图

==基本设置==

```vue
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
```



==方向切换==

```vue
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
                  { name: "数据1", value: 2345 },
                  { name: "数据2", value: 3212 },
                  { name: "数据3", value: 2464 },
                  { name: "数据4", value: 2467 },
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
          //配置布局方向
          orient: 'BT',
          //配置节点标签
          label: {
            rotate: 90, //设置标签旋转
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
```



## 数据排序

```vue
<template>
    <div id="myDiv" ref="myChart"></div>
</template>

<script>
    import * as echarts from 'echarts'

    export default {
        name: "DataSort",
        mounted() {
            let myEcharts = echarts.init(this.$refs.myChart)
            let option = {
                //使用数据集管理数据
                dataset: [
                    {
                        //数据的分类
                        dimensions: ["类别", "数量",],
                        //分类数据
                        source: [
                            ["美食", 123],
                            ["日化", 98],
                            ["熟食", 231],
                            ["数码", 223],
                            ["蔬菜", 23],
                            ["杂项", 263],
                        ],
                    },
                    {
                        transform: {
                            type: 'sort',
                            config: {
                                dimension: '数量',
                                order: 'desc'
                            }
                        }
                    }],
                title: {
                    text: '数据排序'
                },
                xAxis: {
                    type: 'category',
                    //坐标轴刻度标签相关配置
                    axisLabel: {
                        //坐标轴刻度标签的显示间隔，在类目轴中有效
                        interval: 0,
                        //刻度标签旋转的角度，在类目轴的类目标签显示不下的时候可以通过旋转防止标签之间重叠
                        rotate: 30
                    }
                },
                yAxis: {},
                series: [
                    {
                        type: 'bar',
                        encode: {
                            x: '类别',
                            y: '数量',
                        },
                        datasetIndex: 1
                    }
                ]
            }
            myEcharts.setOption(option)
        }
    }
</script>

<style scoped>

</style>
```



## 内置主题

```vue
<template>
    <div id="myDiv" ref="myChart"></div>
</template>

<script>
    import * as echarts from 'echarts'

    export default {
        name: "InstalledTheme",
        mounted() {
            //echarts的init方法的第二个参数可以指定内置主题：light、dark
            let myEcharts = echarts.init(this.$refs.myChart, "dark")
            let xData = ['美食', '数码', '日化', '蔬菜', '熟食']
            let yData = [88, 75, 20, 210, 35]
            let option = {
                title: {
                    text: '内置主题'
                },
                xAxis: {
                    type: 'category',
                    data: xData
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: '销量',
                        type: 'bar',
                        data: yData
                    }
                ]
            }
            myEcharts.setOption(option)
        }
    }
</script>

<style scoped>

</style>
```



## 地图

### 中国地图

下载地图的json数据：https://datav.aliyun.com/portal/school/atlas/area_selector

```vue
<template>
    <div id="myDiv" ref="myChart"></div>
</template>

<script>
    import * as echarts from 'echarts'
    import {mapData} from "@/assets/mapData";

    export default {
        name: "ChinaGraph",
        mounted() {
            let myEcharts = echarts.init(this.$refs.myChart)
            //注册当前使用的地图名
            echarts.registerMap("chinaMap", mapData)
            let option = {
                geo: {//地理坐标组件
                    type: 'map',
                    map: 'chinaMap',
                    roam: true, //开启平移缩放
                    zoom: 5,//设置地图初始缩放等级
                    center: [116.404188, 39.914687],//设置地图初始中心的地理坐标
                    //使用百度地图的坐标拾取器获取地理坐标
                }
            }
            myEcharts.setOption(option)
        }
    }
</script>

<style scoped>

</style>
```



==地图标记设置与效果==

```vue
<template>
    <div id="myDiv" ref="myChart"></div>
</template>

<script>
    import * as echarts from 'echarts'
    import {mapData} from "@/assets/mapData";

    export default {
        name: "ChinaGraph",
        mounted() {
            let myEcharts = echarts.init(this.$refs.myChart)
            //注册当前使用的地图名
            echarts.registerMap("chinaMap", mapData)
            let option = {
                geo: {//地理坐标组件
                    type: 'map',
                    map: 'chinaMap',
                    roam: true, //开启平移缩放
                    zoom: 5,//设置地图初始缩放等级
                    center: [116.404188, 39.914687],//设置地图初始中心的地理坐标
                },
                series: [
                    {
                        type: 'scatter', //散点图
                        data: [
                            {name: '北京市', value: [116.46, 39.92, 4000]}
                        ],
                        //指定坐标系类型为 地理坐标系
                        coordinateSystem: 'geo',
                        symbolSize: 30, //设置标记大小
                        // label: {
                        //     show: true
                        // }
                    },
                    {
                        type: "effectScatter", // 带有涟漪特效动画的散点（气泡）图
                        coordinateSystem: 'geo',
                        data: [
                            {name: '西安市', value: [108.95, 34.26]}
                        ],
                        //设置涟漪效果的相关配置
                        rippleEffect: {
                            number: 2, //波纹数量
                            scale: 4, //波纹最大缩放比例
                        },
                        itemStyle: {
                            color: 'red'
                        }
                    }
                ]
            }
            myEcharts.setOption(option)
        }
    }
</script>

<style scoped>

</style>
```



### 省份地图

```vue
<template>
    <div id="myDiv" ref="myChart"></div>
</template>

<script>
    import * as echarts from 'echarts'
    import {jsMap} from "@/assets/jiangsuMap";

    export default {
        name: "JiangSuMap",
        mounted() {
            let myEcharts = echarts.init(this.$refs.myChart)
            echarts.registerMap('jiangsuMap', jsMap)
            let option = {
                geo: {
                    type: 'map',
                    map: 'jiangsuMap',
                    roam: true,
                    //地图标签相关设置
                    label: {
                        show: true,
                        color: 'blue',
                        fontSize: 10
                    },
                    //地图区域的多边形 图形样式
                    itemStyle: {
                        areaColor: 'orange'
                    }
                }
            }
            myEcharts.setOption(option)
        }
    }
</script>

<style scoped>

</style>
```



## 图标自适应大小

```vue
<template>
    <div id="myDiv" ref="myChart"></div>
</template>

<script>
    import * as echarts from 'echarts'

    export default {
        name: "AutoSize",
        mounted() {
            let myEcharts = echarts.init(this.$refs.myChart)
            let xData = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
            let option = {
                title: {
                    text: '图表自适应大小'
                },
                xAxis: {
                    type: 'category',
                    data: xData,
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: '美食',
                        type: 'line',
                        data: [120, 132, 101, 134, 90, 230, 210],
                        stack: 'num',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        }
                    },
                    {
                        name: '日化',
                        type: 'line',
                        stack: 'num',
                        data: [220, 182, 191, 234, 290, 330, 310],
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        }
                    },
                    {
                        name: '熟食',
                        type: 'line',
                        stack: 'num',
                        data: [150, 232, 201, 154, 190, 330, 410],
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        }
                    },
                ]
            }
            myEcharts.setOption(option)

            //监听页面大小的改变
            window.addEventListener("resize", () => {
                console.log('浏览器的大小改变了')
                myEcharts.resize()
            })
        }
    }
</script>

<style scoped>
    #myDiv {
        width: 100%;
        height: 500px;
        border: 1px solid red;
    }
</style>
```



## 加载动画效果

安装数据模拟工具`json-server`：npm install -g json-server

安装`axios`包：npm install --save axios

```vue
<template>
    <div id="myDiv" ref="myChart"></div>
</template>

<script>
    import * as echarts from 'echarts'
    import axios from 'axios'

    export default {
        /*
        1、全局下载 npm install -g json-server
        2、新建文件夹 mock 与文件 data.json 用来模拟数据
        3、（在mock目录下）启动json-server：json-server --watch data.json --port 8888
         */
        name: "LoadingAnimate",
        data() {
            return {
                eData: []
            }
        },
        methods: {
            async linkData() {
                let echartsData = await axios({
                    url: 'http://localhost:8888/one'
                })
                this.eData = echartsData.data
            }
        },
        mounted() {
            let myEcharts = echarts.init(this.$refs.myChart)
            //开始等待
            myEcharts.showLoading()
            this.linkData().then(() => {
                //结束等待
                myEcharts.hideLoading()
                let option = {
                    title: {
                        text: "加载动画",
                        subtext: '基本设置',
                        left: 'center'
                    },
                    tooltip: {
                        trigger: 'item'
                    },
                    legend: {
                        orient: 'vertical',
                        left: "left"
                    },
                    series: [
                        {
                            name: '销售量',
                            type: 'pie',
                            radius: ['40%', '70%'],
                            label: {
                                show: true,
                                position: 'inside',
                                color: 'yellow'
                            },
                            labelLine: {
                                show: false
                            },
                            roseType: 'area',
                            itemStyle: {
                                color: '#c23531',
                                shadowBlur: 200,
                                shadowColor: 'rgba(0,0,0,0.5)'
                            },
                            data: this.eData,
                        }
                    ]
                }
                myEcharts.setOption(option)
            })
        }
    }
</script>

<style scoped>

</style>
```

data.json

```json
{
  "one": [
    {
      "value": 67,
      "name": "美食",
      "itemStyle": {
        "normal": {
          "color": "rgb(1,175,80)"
        }
      }
    },
    {
      "value": 85,
      "name": "日化",
      "itemStyle": {
        "normal": {
          "color": "rgb(255,175,80)"
        }
      }
    },
    {
      "value": 45,
      "name": "数码",
      "itemStyle": {
        "normal": {
          "color": "rgb(30,50,70)"
        }
      }
    },
    {
      "value": 98,
      "name": "家电",
      "itemStyle": {
        "normal": {
          "color": "rgb(30,50,70)"
        }
      }
    }
  ]
}
```



## 动画配置

```vue
<template>
    <div id="myDiv" ref="myChart"></div>
</template>

<script>
    import * as echarts from 'echarts'

    export default {
        name: "AnimateConfig",
        mounted() {
            let myEcharts = echarts.init(this.$refs.myChart)
            let xData = ["美食", "数码", "日化", "蔬菜", "熟食"]
            let yData = [88, 75, 20, 210, 35]
            let option = {
                animation: true, //是否开启动画
                animationThreshold: 5, //开启动画的阈值
                animationDuration: 5000, //初始动画的时长，支持回调函数
                animationDelay: 2000, //初始动画的延迟，支持回调函数
                animationEasing: "linear", //初始动画的缓动效果
                xAxis: {
                    type: 'value'
                },
                yAxis: {
                    type: 'category',
                    data: xData
                },
                series: [
                    {
                        type: 'bar',
                        name: '销量',
                        data: yData,
                        barWidth: 50
                    }
                ]
            }
            myEcharts.setOption(option)
        }
    }
</script>

<style scoped>

</style>
```



## 事件
