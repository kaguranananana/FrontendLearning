<template>
  <div id="app">
    <h1>欢迎来到动漫推荐系统</h1>
    <Info />
  </div>
</template>

<script>
// 导入Info组件
import Info from './components/Info.vue';

export default {
  name: 'App',
  components: {
    Info
  }
};
</script>

<style scoped>
#app {
  font-family: 'Arial', sans-serif;
  text-align: center;
  padding: 20px;
}
</style>