<!-- /src/components/Home.vue -->
<template>
  <div>
    <h1>欢迎来到飞鹰跃动</h1>
    <router-link to="/person">
      <button>前往人员介绍页</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Home'
};
</script>

<style>
button {
  font-size: 16px;
  color: white;
  background-color: #42b983;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>