<template>
  <div class="hello">
    <h1>自定义组件列表</h1>
    <ul>
      <li><router-link to="/home">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/tooltip">tooltip</router-link></li>
      <li><router-link to="/legend">legend</router-link></li>
      <li><router-link to="/barGraph">barGraph</router-link></li>
      <li><router-link to="/horizontalBar">horizontalBar</router-link></li>
      <li><router-link to="/pieGraph">pieGraph</router-link></li>
      <li><router-link to="/lineGraph">lineGraph</router-link></li>
      <li><router-link to="/multiLine">multiLine</router-link></li>
      <li><router-link to="/scatterGraph">scatterGraph</router-link></li>
      <li><router-link to="/grid">grid</router-link></li>
      <li><router-link to="/kLine">kLine</router-link></li>
      <li><router-link to="/radar">radar</router-link></li>
      <li><router-link to="/funnel">funnel</router-link></li>
      <li><router-link to="/gauge">gauge</router-link></li>
      <li><router-link to="/relation">relation</router-link></li>
      <li><router-link to="/dataZoom">数据缩放</router-link></li>
      <li><router-link to="/tree">tree</router-link></li>
      <li><router-link to="/dataSort">数据排序</router-link></li>
      <li><router-link to="/installed">内置主题</router-link></li>
      <li><router-link to="/chinaMap">中国地图</router-link></li>
      <li><router-link to="/jiangsuMap">江苏地图</router-link></li>
      <li><router-link to="/autoSize">图表自适应大小</router-link></li>
      <li><router-link to="/loading">加载动画</router-link></li>
      <li><router-link to="/animateConfig">动画配置</router-link></li>
      <li><router-link to="/events">echarts事件</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
