// import './assets/main.css'
import '@tabler/core/dist/css/tabler.css'
import '@tabler/core/dist/js/tabler.esm'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
