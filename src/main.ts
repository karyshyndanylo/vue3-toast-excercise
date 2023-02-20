import { createApp } from 'vue'
import AppProvider from './AppProvider.vue'
import 'virtual:windi.css'
import 'virtual:windi-devtools'
import './index.css'

createApp(AppProvider).mount('#app')
