import { createRouter, createWebHashHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import App from '../App.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: App
    },
    {
        path: '/evento/form',
        name: 'eventoform',
        component: () => import('@/views/evento/EventoForm.vue'),
    },
    {
        path: '/evento/listar',
        name: 'eventoListar',
        component: () => import('@/views/evento/EventoListar.vue')
    },
    {
        path: '/evento/detalhe/:id',
        name: 'eventoDetalhe',
        component: () => import('@/views/evento/EventoDetalhes.vue'),
        children: [
            {
                path: '/evento/form/:id',
                name: 'eventoeditar',
                component: () => import('@/views/evento/EventoForm.vue'),
            },
            {
                path: '/inscrito/listar/:id',
                name: 'inscritoListarDetalhe',
                component: () => import('@/views/inscrito/InscritoListar.vue')
            }

        ]
    },
    {
        path: '/inscrito/listar',
        name: 'inscritoListar',
        component: () => import('@/views/inscrito/InscritoListar.vue')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
