import '@/assets/css/input.css';

// external libraries imports
import { createPinia } from 'pinia';
import { createApp } from 'vue';

// internal application code imports
import App from '@/app/App.vue';
import router from '@/app/router';

// main code execution
const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
