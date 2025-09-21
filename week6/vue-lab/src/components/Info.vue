<template>
<h1>为你推荐的动漫</h1>
	<div v-if="animeData">
		<p><strong>标题：</strong> {{animeData.title}}</p>
		<p><strong>年份</strong>{{ animeData.year }}</p>
		<p><strong>类型</strong>{{ animeData.genre }}</p>
		<img :src="animeData.imageUrl" alt="动漫封面">
	</div>
	<div v-else> 
		<p>加载中....</p>
	</div>
	<div v-if="error" class="error-message">
		<p>获取数据失败，请稍后再试</p>
	</div>

</template>




<script>
import {ref} from 'vue';
import axios from 'axios';
export default {
	name : 'Info',
	setup() {
		const animeData = ref(null);
		const error = ref(false);

		// 获取动漫数据的函数
		const fetchAnimeData = async () => {
			try {
				const response = await axios.get('http://localhost:3001/api/anime');
				animeData.value = response.data; // 存储api返回的数据
				error.value = false;
				console.log('成功获取动漫数据：', response.data);
			} catch (err){
				error.value = true;
				console('获取舒俱失败',err);
			}

		};

		// 页面加载时自动获取数据
		fetchAnimeData();

		return {
			animeData,
			error
		};
	}



}


</script>