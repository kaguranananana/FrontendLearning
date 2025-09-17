<template>
  <transition name="notification-fade">
    <div v-if="visible" class="notification">
      <h3>{{ notification.title }}</h3>
      <p>{{ notification.content }}</p>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'NotificationDisplay',

  // props 声明该组件可以从父组件那里接收数据
  props: {
    notification: {
      type: Object,
      required: true, // 表示这个 prop 是必须传递的
    },
  },

  // 组件的响应式数据
  data() {
    return {
      visible: false,
      // 配置常量
      NOTIFICATION_DURATION: 2000, // 通知显示时长（毫秒）
      ANIMATION_DELAY: 1000, // 切换动画延迟（毫秒）
      // 用于存储定时器引用，方便清理
      showTimer: null,
      hideTimer: null,
    }
  },

  methods: {
    showNotification() {
      // 清除之前的定时器
      this.clearTimers()

      // 先将 visible 设置为 true，让通知在页面上显示出来
      this.visible = true

      // 通知停留指定时间后自动隐藏
      this.hideTimer = setTimeout(() => {
        this.visible = false
        // 发出事件告知父组件此通知已显示完毕
        this.$emit('notification-shown')
      }, this.NOTIFICATION_DURATION)
    },

    // 清理定时器
    clearTimers() {
      if (this.showTimer) {
        clearTimeout(this.showTimer)
        this.showTimer = null
      }
      if (this.hideTimer) {
        clearTimeout(this.hideTimer)
        this.hideTimer = null
      }
    },
  },

  watch: {
    // 监听 notification prop 的变化
    notification: {
      // 确保侦听器在组件首次创建时就会立即执行一次 handler 函数
      // 对于展示第一条通知很重要
      immediate: true,

      // notification 变化时要执行的函数
      handler() {
        // 清除之前的定时器
        this.clearTimers()

        // 重置状态
        this.visible = false

        // 等待动画完成后显示新通知
        this.showTimer = setTimeout(() => {
          this.showNotification()
        }, this.ANIMATION_DELAY)
      },
    },
  },

  // 组件销毁前清理定时器
  beforeUnmount() {
    this.clearTimers()
  },
}
</script>

<style scoped>
.notification {
  padding: 16px 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 8px;
  margin: 10px 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  border-left: 4px solid #ffffff;
  max-width: 400px;
}

.notification h3 {
  margin: 0 0 8px 0;
  font-size: 16px;
  font-weight: 600;
}

.notification p {
  margin: 0;
  font-size: 14px;
  line-height: 1.4;
  opacity: 0.9;
}

/* Vue transition 动画 */
.notification-fade-enter-active,
.notification-fade-leave-active {
  transition: all 0.5s ease;
}

.notification-fade-enter-from {
  opacity: 0;
  transform: translateY(-20px) scale(0.95);
}

.notification-fade-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.95);
}
</style>
