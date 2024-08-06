import Cookie from 'js-cookie'; axios
import axios from 'axios';
import store from '../../store/index.js';

export default {
    auth(to, from, next) {
        const token = Cookie.get('_myapp_token');

        if (token) {
            console.log(store.getters.user);

            next();
        } else {
            next({ name: 'login' });
        }
    }
}