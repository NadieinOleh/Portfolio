
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import './assets/main.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createI18n } from 'vue-i18n';
import en from './locale/en.json';
import uk from './locale/uk.json';

import App from './App.vue';
import router from './router';
import { localeStore } from './stores/locale';



const app = createApp(App);
app.use(createPinia());

const store = localeStore();

const i18n = createI18n({
  locale: store.lang,
  messages: {
    en: en,
    uk: uk,
  },
});


app.use(router);
app.use(i18n);

app.mount('#app');
