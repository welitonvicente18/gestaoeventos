import { createRouter, createWebHashHistory } from 'vue-router'
import AppLayout from '../layout/AppLayout.vue'
import LoginForm from '../LoginForm .vue'
import RegisterUser from '../RegisterUser.vue'
import CadastroExterno from '../CadastroExterno.vue'
import servicesMiddleware from '../router/services/middleware.js';

const routes = [
    {
        path: '/login',
        name: 'login',
        component: LoginForm
    },
    {
        path: '/register',
        name: 'register',
        component: RegisterUser
    },
    {
        path: '/cadastroexterno/:id',
        name: 'casdastroExterno',
        component: CadastroExterno
    },
    {
        path: '/',
        component: AppLayout,
        beforeEnter: servicesMiddleware.auth,
        children: [
            {
                path: '/dashboard',
                name: 'dashboard',
                component: () => import('@/views/DashboardApp.vue'),
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
                        path: 'evento/info/:id',
                        name: 'EventoInfo',
                        component: () => import('@/views/evento/EventoInfo.vue'),
                    },
                    {
                        path: 'evento/edit/:id',
                        name: 'eventoeditar',
                        component: () => import('@/views/evento/EventoEdit.vue'),
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
                    {
                        path: 'inscrito/edit/:id',
                        name: 'InscritoEdit',
                        component: () => import('@/views/inscrito/InscritoEdit.vue')
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
            {
                path: 'usuario/edit/:id',
                name: 'usuarioEdit',
                component: () => import('@/views/usuario/UsuarioEdit.vue'),
            },

        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
