<template>
<div class="home">
	<router-link to="/register">
		<button>立即注册</button>
	</router-link>
</div>

</template>

<script>
	export default {
		name : 'Home',
	}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
}
button {
  padding: 12px 25px;
  font-size: 18px;
  cursor: pointer;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s;
}
button:hover {
  background-color: #36a473;
}
</style>