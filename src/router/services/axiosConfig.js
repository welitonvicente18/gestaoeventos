import axios from 'axios';
import Cookie from 'js-cookie';

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
});

// Adicione um interceptor para incluir o token JWT em todos os headers
instance.interceptors.request.use(
    config => {
        const token = Cookie.get('_myapp_token');

        if (token) {
            // Adicione o token ao cabeçalho Authorization
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export default instance;