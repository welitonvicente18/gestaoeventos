import Cookie from 'js-cookie'; axios
import axios from 'axios';
export default {
    auth(to, from, next) {
        const token = Cookie.get('_myapp_token');

        if (token) {
            next();
        } else {
            next({ name: 'login' });
        }
    }
}