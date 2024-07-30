<template>

    <SectionNavegacao>
        <template v-slot:title>Eventos</template>
        <template v-slot:navegacao1>
            <routerLink :to="{ name: 'eventoListar' }">Listar</routerLink>
        </template>
    </SectionNavegacao>

    <div class="row">
        <div class="col-lg-12 col-md-12">
            <div class="card">
                <div class="card-header">
                    <h4 class="card-title" v-if="evento">{{ evento.nome_evento }}</h4>
                </div>
                <div class="card-body">
                    <ul class="nav nav-pills nav-secondary  nav-pills-no-bd nav-pills-icons justify-content-center" id="pills-tab-with-icon" role="tablist">
                        <li class="nav-item submenu">
                            <routerLink :to="{ name: 'eventoeditar', params: { id: evento.id } }" class="nav-link" v-if="evento">
                                Editar Evento
                            </routerLink>
                        </li>
                        <li class="nav-item submenu">
                            <routerLink :to="{ name: 'inscritoListarDetalhe', params: { id: evento.id } }" class="nav-link" v-if="evento">
                                <i class="far fa-user"></i>
                                Inscritos
                            </routerLink>
                        </li>
                        <!-- <li class="nav-item submenu">
                            <routerLink :to="{ name: 'eventoform' }" class="nav-link">
                                <i class="far fa-user"></i>
                                Agenda
                            </routerLink>
                        </li>
                        <li class="nav-item submenu">
                            <routerLink :to="{ name: 'eventoform' }" class="nav-link">
                                <i class="far fa-envelope"></i>
                                Financeiro
                            </routerLink>
                        </li>
                        <li class="nav-item submenu">
                            <routerLink :to="{ name: 'eventoform' }" class="nav-link">
                                <i class="far fa-envelope"></i>
                                Lista de Tarefas
                            </routerLink>
                        </li> -->
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-12 col-md-12">
            <RouterView />
        </div>
    </div>


</template>

<script setup>

import SectionNavegacao from '@/components/SectionNavegacao.vue'
import axios from 'axios';
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter();
const evento = ref(null);

onMounted(() => {

    const id = router.currentRoute.value.params.id;

    axios.get(`http://localhost:70/appgestaoevento/evento/show/${id}`)
        .then(response => {
            evento.value = response.data.data;
            console.log(evento.value)
        })
        .catch(error => {
            console.log('Erro ao buscar detalhes do evento', error);
        })
});

</script>