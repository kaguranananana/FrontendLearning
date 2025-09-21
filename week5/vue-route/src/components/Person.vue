<!-- /src/components/Person.vue -->
<template>
  <div>
    <h1>成员介绍</h1>
    <div>
      <button @click="changePerson('凉风青叶')">凉风青叶</button>
      <button @click="changePerson('泷本日富美')">泷本日富美</button>
      <button @click="changePerson('饭岛结音')">饭岛结音</button>
    </div>
    <div class="card" v-bind:style="cardStyle">
      <!-- <img :src="personImage" alt="人物头像" /> 暂时注释掉图片，因为资源文件不存在 -->
      <div class="avatar-placeholder">头像</div>
      <div>
        <h2>{{ personName }}</h2>
        <p>{{ personDescription }}</p>
      </div>
    </div>
    <router-link to="/">
      <button>返回首页</button>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      personName: '凉风青叶',
      personDescription: '凉风青叶是公司的一名前端开发人员。',
      // personImage: require('../assets/qingye.jpg'), // 暂时注释掉，因为图片文件不存在
      cardStyle: {
        'background-color': '#f3a1c0'
      }
    };
  },
  methods: {
    changePerson(person) {
      if (person === '泷本日富美') {
        this.personName = '泷本日富美';
        this.personDescription = '泷本日富美是美术组的组长，负责公司的创意设计工作。';
        // this.personImage = require('../assets/hiromi.jpg');
        this.cardStyle['background-color'] = '#f0a1c4';
      } else if (person === '饭岛结音') {
        this.personName = '饭岛结音';
        this.personDescription = '饭岛结音是前端开发团队的一员，专注于网站性能优化。';
        // this.personImage = require('../assets/yuin.jpg');
        this.cardStyle['background-color'] = '#f6f0b0';
      } else {
        this.personName = '凉风青叶';
        this.personDescription = '凉风青叶是公司的一名前端开发人员。';
        // this.personImage = require('../assets/qingye.jpg');
        this.cardStyle['background-color'] = '#f3a1c0';
      }
    }
  }
};
</script>

<style>
.card {
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}
.card img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 20px;
}
.avatar-placeholder {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 20px;
  background-color: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 14px;
}
.card div {
  flex: 1;
}
button {
  margin-top: 20px;
  font-size: 16px;
  color: white;
  background-color: #42b983;
  padding: 10px;
  border: none;
  border-radius: 5px;
}
</style>