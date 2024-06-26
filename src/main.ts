import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Import Bootstrap JS (opcional)
import 'bootstrap';

const app = createApp(App);
app.use(router);
app.mount('#app');
