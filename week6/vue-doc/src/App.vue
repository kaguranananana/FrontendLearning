<template>
  <div>
    <h1>用户预定信息</h1>
    <div v-if="loading">
      <p>正在加载预定信息...</p>
    </div>
    <div v-else-if="error">
      <p style="color: red;">{{ error }}</p>
      <h3>使用模拟数据：</h3>
      <p>房间类型：{{ mockReservation.roomType }}</p>
      <p>预定日期：{{ mockReservation.reservationStartDate }} 至 {{ mockReservation.reservationEndDate }}</p>
      <p>客户姓名：{{ mockReservation.customerName }}</p>
      <p>预定状态：{{ mockReservation.status }}</p>
    </div>
    <div v-else>
      <p>房间类型：{{ reservation.roomType }}</p>
      <p>预定日期：{{ reservation.reservationStartDate }} 至 {{ reservation.reservationEndDate }}</p>
      <p>客户姓名：{{ reservation.customerName }}</p>
      <p>预定状态：{{ reservation.status }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      reservation: {},  // 用来存储预定数据
      loading: true,
      error: null,
      mockReservation: {
        roomType: '豪华大床房',
        reservationStartDate: '2024-12-25',
        reservationEndDate: '2024-12-27',
        customerName: '张三',
        status: '已确认'
      }
    };
  },
  mounted() {
    // 组件加载时发送请求
    axios.get('http://localhost:3001/api/reservations/101')
      .then(response => {
        this.reservation = response.data.data;  // 获取数据并赋值
        this.loading = false;
      })
      .catch(error => {
        console.error('请求失败:', error);
        this.error = `API 请求失败: ${error.message || '未知错误'}`;
        this.loading = false;
        // 使用模拟数据
        this.reservation = this.mockReservation;
      });
  }
};
</script>