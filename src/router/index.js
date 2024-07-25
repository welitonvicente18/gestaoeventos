import { createRouter, createWebHashHistory } from 'vue-router'
import AppLayout from '../layout/AppLayout.vue'
import Login from '../Login.vue'
import Register from '../Register.vue'

const routes = [
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/',
        component: AppLayout,
        children: [
            {
                path: '',
                name: 'dashboard',
                component: () => import('@/views/evento/EventoForm.vue'),
            },
            {
                path: 'evento/form',
                name: 'eventoform',
                component: () => import('@/views/evento/EventoForm.vue'),
            },
            {
                path: 'evento/listar',
                name: 'eventoListar',
                component: () => import('@/views/evento/EventoListar.vue')
            },
            {
                path: 'evento/detalhe/:id',
                name: 'eventoDetalhe',
                component: () => import('@/views/evento/EventoDetalhes.vue'),
                children: [
                    {
                        path: 'evento/form/:id',
                        name: 'eventoeditar',
                        component: () => import('@/views/evento/EventoForm.vue'),
                    },
                    {
                        path: 'inscrito/listar/:id',
                        name: 'inscritoListarDetalhe',
                        component: () => import('@/views/inscrito/InscritoListar.vue')
                    },
                    {
                        path: 'inscrito/form',
                        name: 'InscritoForm',
                        component: () => import('@/views/inscrito/InscritoForm.vue')
                    },

                ]
            },
            {
                path: 'usuario/listar',
                name: 'usuarioListar',
                component: () => import('@/views/usuario/UsuarioListar.vue'),
            },
            {
                path: 'usuario/form',
                name: 'usuarioForm',
                component: () => import('@/views/usuario/UsuarioForm.vue'),
            },

        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
