import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/axios.js';
import VueTheMask from 'vue-the-mask'
import { plugin, defaultConfig } from '@formkit/vue'
import '@formkit/themes/genesis'
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import 'bootstrap';
import '@/assets/css/kaiadmin.min.css';
import '../public/css/estilos-personalizados.css';
import '../src/router/services/axiosConfig.js';

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