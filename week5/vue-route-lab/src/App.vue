<template>
	<div id="app">
		<!--导航按扭-->
		<div class="nav-button">
			<router-link to="/game">
				<button>游戏产品</button>
			</router-link>
			<router-link to="/person">
				<button>美术组</button>
			</router-link>
		</div>
		<!--根据当前路由显示不同组件-->
		<div class="content">
			<router-view></router-view>
		</div>
	</div>
	

</template>



<script>


export default {
	name : 'App',
};


</script>