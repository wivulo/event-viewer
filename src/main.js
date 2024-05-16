import './assets/fonts/fontawesome-free-6.5.2-web/css/all.min.css'
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config';
import aura from './preset/aura';

const app = createApp(App);

app.use(PrimeVue, {
    unstyled: true,
    pt: aura
});


app.mount('#app')
