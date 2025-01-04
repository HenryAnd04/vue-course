import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

// Importar Bootstrap CSS y JavaScript
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const app = createApp(App)

app.use(router);
app.mount('#app');
