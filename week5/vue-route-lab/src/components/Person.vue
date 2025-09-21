<template>
	<div class="person">
		<h1>美术组成员</h1>

		<!-- 人物卡片-->
		<div class="card" :style="{backgroundColor : cardColor}">
			<div class="avatar-container">
				<img :src="currentPerson.image" alt="人物头像" class="avatar">
			</div>
			<div class="info">
				<h2>{{ currentPerson.name }}</h2>
				<p>{{ currentPerson.title }}</p>
				<p>{{ currentPerson.description }}</p>
			</div>
		</div>

		<!--按扭切换人物-->
		<div class="buttons">
			<button @click="switchPerson('青叶')">凉风青叶</button>
			<button @click="switchPerson('日富美')">泷本日富美</button>
     		<button @click="switchPerson('结音')">饭岛结音</button>

		</div>

		<!--返回首页-->
		<router-link to="/game">
			<button class="back-button">返回首页</button>

		</router-link>



	</div>


</template>

<script>
	import personImage1 from '../assets/8e999c36afa4e9ec0f3ee940ecc469ff.jpg'
	import personImage2 from '../assets/fd68468ab4d631a034ba1bd085a2da92_720.jpg'
	import personImage3 from '../assets/d313969828f94bd4d01e9dcb6e570bf4.jpg'

	export default {
		name : 'Person',
		data() {
			return {
				// 定义人物数据
				persons : {
					青叶 : {
						name : '凉风青叶',
						title : '前端开发',
						description : '青叶是游戏公司"飞鹰跃动"的前端开发者，负责产品页面的实现。',
						image : personImage1
					},
					日富美: {
						name: '泷本日富美',
						title: '美术组长',
						description: '日富美是公司美术组的组长，负责视觉效果和界面设计。',
						image: personImage2,
					},
					结音 : {
						name: '饭岛结音',
						title: '美术设计师',
						description: '结音是美术组的设计师，负责游戏中的人物和场景设计。',
						image: personImage3,
					}
				},
				currentPerson : {},
				cardColor : '#ffffff',
			}
		},
		methods : {
			switchPerson(personKey) {
				this.currentPerson = this.persons[personKey];
				if (personKey === '青叶') {
					this.cardColor = '#bde0fe'; // 青叶的卡片颜色
				} else if (personKey === '日富美') {
					this.cardColor = '#ffd3b6'; // 日富美的卡片颜色
				} else if (personKey === '结音') {
					this.cardColor = '#d4f1c7'; // 结音的卡片颜色
				}
			}

		},
		mounted() {
			// 默认显示青叶的信息
			this.switchPerson('青叶');
		}

	}
</script>




<style scoped>
	.person {
		text-align: center;
	}
	.card {
		position: relative;
		display: flex;
		align-items: center;
		padding: 20px 20px 20px 0;
		border-radius: 15px;
		margin-top: 20px;
		overflow: hidden;
	}
	.avatar-container {
		position: relative;
		margin-right: 20px;
		margin-left: 20px;
	}

	.card .avatar {
		width: 320px;
		height: 240px;
		border-radius: 15px;
		object-fit: cover;
	}

	.card .info {
		text-align: left;
		flex : 1;
	}

	.card .info h2 {
		font-size: 22px;
		font-weight: bold;
	}

	.card .info p {
		font-size: 16px;
		color: #555;
	}

	.buttons {
		margin-top: 30px;
	}

	.buttons button {
		padding: 10px 20px;
		font-size: 16px;
		color: white;
		background-color: #42b983;
		border: none;
		border-radius: 5px;
		cursor: pointer;
		margin: 0 10px;

	}
	.buttons button:hover {
		background-color: #35495e;
	}

	.back-button {
		margin-top: 20px;
		padding: 10px 20px;
		background-color: #f76c6c;
		border: none;
		border-radius: 15px;
	}
	.back-button:hover {
		background-color: #e04e4e;
	}

</style>