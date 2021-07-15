import { createApp } from 'vue'
import nextboxUI from '@nextbox/ui/src'
import App from './App.vue'
import router from './router'

import "@nextbox/ui-theme"

createApp(App).use(nextboxUI, {
  isDark: true,
  local: 'zh'
}).use(router).mount('#app')
