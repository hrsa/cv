import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import i18n from "../i18n.js";
import VueAnimXyz from "@animxyz/vue3";
import '@animxyz/core';


const myCvApp = createApp(App);
myCvApp.use(VueAnimXyz);
i18n(myCvApp).mount('#app');
