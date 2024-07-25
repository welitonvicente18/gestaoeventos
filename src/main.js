import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/axios.js';

import "../node_modules/bootstrap/dist/css/bootstrap.css";
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap';
import '@/assets/css/kaiadmin.min.css';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faUser, faEnvelope, faUserLock, faShareFromSquare, faLayerGroup, faHouse, faChevronRight, faEdit, faTimesCircle, faPlus } from '@fortawesome/free-solid-svg-icons'
import { faFontAwesome, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFileAlt, faCalendarAlt, faBookmark } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faUser, faUserLock, faEnvelope, faFileAlt, faCalendarAlt, faBookmark, faFontAwesome, faGithub, faTwitter, faShareFromSquare, faLayerGroup, faHouse, faChevronRight, faEdit, faTimesCircle, faPlus)

createApp(App)
    .component('fa', FontAwesomeIcon)
    .use(router)
    .mount('#app')