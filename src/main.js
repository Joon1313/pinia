import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import joonPlugin from './plugins/joonPlugin'

createApp(App)
.use(createPinia())
.use(joonPlugin) // 플러그인 주입/제공 한 객체
.mount('#app')
