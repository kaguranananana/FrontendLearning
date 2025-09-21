import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // 引入创建的路由实例

const app = createApp(App)

app.use(router)

app.mount('#app')
