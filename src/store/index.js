import { createStore } from 'vuex';
import axios from 'axios';
import Cookies from 'js-cookie';

const store = createStore({
    state() {
        return {
            user: {
                user: null,
                autenticado: false,
            },
        };
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
            state.isAuthenticated = !!user;
        },
        logout(state) {
            state.user = null;
            state.isAuthenticated = false;
        },
    },
    actions: {
        async login({ commit }, credentials) {
            try {
                const response = await axios.post('/login', credentials);
                const { access_token, user } = response.data.data.original;

                commit('setToken', access_token);
                commit('setUser', user);
                Cookies.set('_myapp_token', access_token); // Salvando token em cookie
            } catch (error) {
                console.error('Erro ao fazer login:', error);
                throw error; // Lançar erro para que o componente possa lidar com ele
            }
        },
        logout({ commit }) {
            Cookies.remove('_myapp_token');
            commit('logout');
        }
    },
    getters: {
        isAuthenticated: state => state.isAuthenticated,
        user: state => state.user,
    }
});

export default store;