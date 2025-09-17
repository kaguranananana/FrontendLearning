<template>

  <div class="converter-container">
    <!--顶部操作区域-->
    <header class="header">
      <h1>温度换算工具</h1>
      <!-- 关联-->
      <button @click="clearAll">清空</button>
    </header>

    <!--主体区域-->
    <main class="main-content">
      <!--左侧区域 ： 输入和操作区域-->
      <div class="input-section">
        <!--输入温度-->
        <div class="form-group">
          <label for="temperature">当前温度：</label>
          <!--绑定-->
          <input type="text" id="temperature" v-model="inputValue" placeholder="请输入温度值">
        </div>

        <!--选择当前单位-->
        <div class="form-group">
          <label for="current-unit">当前单位：</label>
          <!--绑定-->
          <select  id="current-unit" v-model="formUnit">
            <option value="celsius">摄氏度(°C)</option>
            <option value="fahrenheit">华氏度(°F)</option>
            <option value="kelvin">开尔文(K)</option>
          </select>
        </div>

        <!--选择目标单位-->
        <div class="form-group">
          <label >目标单位：</label>
          <div class="radio-group">
            <label ><input type="radio" value="celsius" v-model="toUnit"> 摄氏度(°C)</label>
            <label ><input type="radio" value="fahrenheit" v-model="toUnit"> 华氏度(°F)</label>
            <label ><input type="radio" value="kelvin" v-model="toUnit"> 开尔文(K)</label>
          </div>
        </div>

        <!--换算按扭关联 --> 
        <button @click="convertTemperature" class="convert-button">换算</button>
        <!-- 当errorMessage不为空的时候，显示这个p标签-->
         <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>


      </div>
      <!--右侧区域：换算结果-->
      <div class="result-section">
          <h2>换算结果</h2>
          <!-- 显示resuly数据-->
          <p class="result-display">{{ result }}</p>
      </div>

    </main>

  </div>

</template>



<script>
export default {
  data() {
    return { 
      inputValue:'', // 对应输入框中的值
      formUnit : 'celsius', // 当前单位的下拉选择默认是摄氏度
      toUnit : 'fahrenheit',
      result : '-', // 存放换算结果
      errorMessage : '' // 存放错误信息 
    };
  },
  methods: {
    // 清空功能的函数
    clearAll() {
      this.inputValue = '';
      this.formUnit = 'celsius';
      this.toUnit = 'fahrenheit';
      this.result = '-';
      this.errorMessage = '';
    },

    // 换算功能函数
    convertTemperature() {
      // 输入校验
      if (this.inputValue === '' || isNaN(this.inputValue)) {
        this.errorMessage = '请输入有效数字';
        this.result = '-';
        return ;
      }

      const temp = parseFloat(this.inputValue);
      if (this.formUnit === 'kelvin' && temp < 0) {
        this.errorMessage = '开尔文温度不能为负值';
        this.result = '-';
        return;
      } 

      // 校验通过则清除错误信息
      this.errorMessage = '';


      // 统一转换为摄氏度
      let celsiusTemp;
      switch (this.formUnit) {
        case 'celsius':
          celsiusTemp = temp;
          break;
        case 'fahrenheit':
          celsiusTemp = (temp -32) * 5 / 9;
          break;
        case 'kelvin':
          celsiusTemp = temp -273.15;
          break; 
      }


      //从摄氏度转换为目标单位
      let finalResult;
      switch (this.toUnit) {
        case 'celsius':
          finalResult = celsiusTemp;
          break;
        case 'fahrenheit':
          finalResult = (celsiusTemp * 9 / 5) + 32;
          break;
        case 'kelvin':
          finalResult = celsiusTemp + 273.15;
          break;
      }

      // 更新结果保留两位小数
      this.result = finalResult.toFixed(2);




    }


  }
}

</script>

<style scoped>
.converter-container {

  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-family: sans-serif;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #eee;
  padding-bottom: 15px;
  margin-bottom: 20px;

}


.header h1 {
  margin: 0;
  font-size: 24px;
}

.header button {
  padding: 8px 16px;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}


.header button:hover {
  background-color: #d32f2f;
}

.main-content {
  display: flex;
  gap: 20px;
}

.input-section, .result-section {
  flex : 1;
  padding: 20px;
  border : 1px solid #ddd;
  border-radius: 8px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom:  8px;
  font-weight: bold;
}
.form-group input[type="text"], .form-group select {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid #ccc;
} 


.radio-group label {
  margin-right: 15px;
  font-weight: normal;
}

.convert-button {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  background-color: #4cAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.convert-button:hover {
  background-color: #45a049;
}


.error-message {
  color : #f44336;
  margin-top: 10px;
}

.result-section h2 {
  margin-top: 0;
}

.result-display {
  font-size: 32px;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-top: 20px;
}
</style>


1111