<template>
  <div>
    <h1>通知显示</h1>
    <NotificationDisplay
      v-if="currentNotificationIndex < notifications.length"
      :notification="notifications[currentNotificationIndex]"
      @notification-shown="showNextNotification"
    />
  </div>
</template>

<script>
import NotificationDisplay from './components/NotificationDisplay.vue'

export default {
  // 注册子组件，这样才能在模板中使用
  components: {
    NotificationDisplay,
  },

  // data 函数返回组件的响应式状态对象
  data() {
    return {
      // 模拟一个从服务器获取的通知列表
      notifications: [
        { title: '通知1', content: '第一个通知' },
        { title: '通知2', content: '第二个通知' },
        { title: '通知3', content: '第三个通知' },
        { title: '通知4', content: '第四个通知' },
      ],
      // 追踪当前应该显示哪一条通知的索引，初始值为 0
      currentNotificationIndex: 0,
    }
  },

  // methods 包含了可以在组件中调用的方法
  methods: {
    // 在子组件完成一次显示后调用，切换到下一个通知
    showNextNotification() {
      if (this.currentNotificationIndex < this.notifications.length - 1) {
        this.currentNotificationIndex++
      }
    },
  },
}
</script>

<style scoped>
h1 {
  text-align: center;
  color: #333;
}
</style>
