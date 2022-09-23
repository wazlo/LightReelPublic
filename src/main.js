import { createApp } from 'vue'
import App from './App.vue'
import $ from 'jquery'
import { createPinia } from 'pinia'
import VueNumberInput from '@chenfengyuan/vue-number-input';
window.$ = $;
window.global = globalThis;

const app = createApp(App)

const pinia = createPinia()
app.use(pinia)
app.component(VueNumberInput.name, VueNumberInput);
app.mount('#app')
