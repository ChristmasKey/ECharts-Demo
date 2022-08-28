import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引用响应式布局
import 'lib-flexible/flexible'

createApp(App).use(store).use(router).mount('#app')
