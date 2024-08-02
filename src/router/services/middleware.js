import Cookie from 'js-cookie'; axios
import axios from 'axios';

export default {
    auth(to, from, next) {
        const token = Cookie.get('_myapp_token');

        if (token) {
            // const tokenAuth = 'Bearer ' + token;

            // axios.get('login/validate', {
            //     headers: {
            //         'Authorization': tokenAuth
            //     }
            // })
            //     .then(response => {
            //         console.log('Token Válido:', response.data);
            //         next();
            //     })
            //     .catch(error => {
            //         console.log('Erro ao validar token:', error);
            //         next({ name: 'login' });
            //     });
            next();
        } else {
            next({ name: 'login' });
        }
    }
}