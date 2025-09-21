<template>

<div class="register-container">
	<h2>注册界面</h2>
	<!-- form标签方便我们处理整个表单的提交事件-->
	<form @submit.prevent="handleRegister">
		<div class="form-group">
			<label for="phone">手机号：</label>
			<input 
				type="text" 
				id="phone" 
				v-model="phone"
				:class="{'input-error' : !isPhoneValid && phone.length > 0}" 
				placeholder="请输入手机号"
			>
			<p v-if="!isPhoneValid && phone.length > 0" class="error-text">
				手机号的格式不正确
			</p>
			
		</div>
		<div class="form-group">
			<label for="username">用户名:</label>
			<input 
				type="text" 
				id="username" 
				v-model="username" 
				:class="{'input-error' : !isUsernameValid && username.length > 0}"
				placeholder="请输入账户">
		</div>
		<div class="form-group">
			<label for="password">密码:</label>
			<!--密码框的 type="password" 会让用户输入的内容显示为星号或圆点，保证安全。-->
			<input 
				type="password" 
				id="password" 
				v-model="password"
				:class="{'input-error' : !isPasswordValid && password.length > 0}" 
				placeholder="请输入密码">
		</div>
		<button type="submit" :disabled="!isFormValid">注册</button>

		<p v-if="registSuccess" class="success-text">注册成功！</p>
	</form>


</div>
</template>

<script>
//<script>
export default {
  name: 'Register',
  
  // 1. data: 用来存放组件的所有响应式数据
  data() {
    return {
      phone: '',
      username: '',
      password: '',
      registSuccess: false,
    };
  },

  // 2. computed: 用来存放所有的计算属性
  computed: {
    isPhoneValid() {
      // 在选项式 API 中，通过 `this` 来访问 data 中的数据
      return /^\d{11}$/.test(this.phone); 
    },
    isUsernameValid() {
      return /^[a-zA-Z0-9]{3,15}$/.test(this.username);
    },
    isPasswordValid() {
      return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(this.password);
    },
    isFormValid() {
      // 这里也通过 `this` 来访问其他的计算属性
      return this.isPhoneValid && this.isUsernameValid && this.isPasswordValid;
    }
  },

  // 3. methods: 用来存放所有的方法
  methods: {
    handleRegister() {
      if (this.isFormValid) {
        // 更新 data 中的数据，也要用 `this`
        this.registSuccess = true;
        console.log('注册信息:', {
          phone: this.phone,
          username: this.username,
          password: this.password
        });
      } else {
        console.log('表单错误');
      }
    }
  }
};
</script>


<style scoped>
	h2 {
		text-align: center;
		margin-bottom: 30px;
		color: #333;
		font-weight: 500;
	}

	.register-container {
		max-width: 400px;
		margin: 0 auto;
		padding: 20px;
		border: 1px solid #ddd;
		border-radius: 8px;
	}


	.form-group {
		margin-bottom: 20px;
		text-align: left;
	}

	label {
		display: block;
		text-align: left;
	}


	input {
		width: 100%;
		padding: 10px;
		box-sizing: border-box;	
		border: 1px solid #ccc;
		border-radius: 4px;
	}

	.input-error {
		border-color: red;
		background-color: #fff0f0;
	}
	.error-text {
		color: red;
		font-size: 12px;
		margin-top: 5px;
		text-align: left;
	}

	button {
		width: 100%;
		padding: 12px;
		font-size: 16px;
		cursor: pointer;
		background-color: #42b983;
		color: white;
		border: none;
		border-radius: 5px;
	}

	button:disabled {
		background-color: #a5d6b8;
		cursor: not-allowed;
	}

	.success-text {
		color :green;
		font-weight: bold;
	}


</style>


