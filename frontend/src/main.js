import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store'; // Đảm bảo import store
import './assets/main.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

createApp(App)
  .use(store) // Sử dụng Vuex store
  .use(router)
  .mount('#app');
