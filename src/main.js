import "bootstrap/dist/css/bootstrap.css";

import { createApp } from 'vue'
import App from './App.vue'
import VueGoogleMaps from '@fawmi/vue-google-maps';


const app = createApp(App);

app.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyBEXqBBlYB-dhPOO7eKdAYsT6X01kwDNrI',
        libraries: "places"
        // language: 'de',
    },
}).mount('#app')


import "bootstrap/dist/js/bootstrap.js"

import "bootstrap-icons/font/bootstrap-icons.css";