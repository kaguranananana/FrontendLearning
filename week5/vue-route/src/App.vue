<!-- /src/App.vue -->
<template>
  <div>
    <!-- 导航链接 -->
    <router-link to="/">首页</router-link> | 
    <router-link to="/person">人员介绍</router-link>

    <!-- 显示路由组件 -->
    <router-view></router-view>
  </div>
</template>