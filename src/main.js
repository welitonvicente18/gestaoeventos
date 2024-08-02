import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/axios.js';
import axios from 'axios';
import VueTheMask from 'vue-the-mask'
import { plugin, defaultConfig } from '@formkit/vue'
import '@formkit/themes/genesis'
// import Cookies from 'js-cookie';

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';

// // Configuração global do axios para adicionar o token
// axios.interceptors.request.use(config => {
//     const token = Cookies.get('_myapp_token');
//     if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
// }, error => {
//     return Promise.reject(error);
// });

import "../node_modules/bootstrap/dist/css/bootstrap.css";
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap';
import '@/assets/css/kaiadmin.min.css';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


/* import specific icons */
import { faUserSecret, faUser, faEnvelope, faUserLock, faShareFromSquare, faLayerGroup, faHouse, faChevronRight, faEdit, faTimesCircle, faPlus, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { faFontAwesome, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFileAlt, faCalendarAlt, faBookmark } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faUser, faUserLock, faEnvelope, faFileAlt, faCalendarAlt, faBookmark, faFontAwesome, faGithub, faTwitter, faShareFromSquare, faLayerGroup, faHouse, faChevronRight, faEdit, faTimesCircle, faPlus, faCircleXmark)

// VueSweetalert2
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

createApp(App)
    .component('fa', FontAwesomeIcon)
    .use(router)
    .use(VueSweetalert2)
    .use(VueTheMask)
    .use(plugin, defaultConfig)
    .mount('#app')