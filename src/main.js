import './assets/style.css';
import "./input.css";

import './assets/bootstrap/css/bootstrap.min.css';
import './assets/bootstrap/js/bootstrap.bundle.min.js';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from "./store";
import axios from "axios";

export const eventBus = createApp({});
eventBus.config.globalProperties.eventBus = eventBus;
axios.defaults.withCredentials = true;

const app = createApp(App);
app.use(router);
app.use(store);


app.mount('#app');
