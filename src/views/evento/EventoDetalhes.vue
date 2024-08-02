<template>

    <SectionNavegacao>
        <template v-slot:title>Eventos</template>
        <template v-slot:navegacao1>
            <routerLink :to="{ name: 'eventoListar' }">Listar</routerLink>
        </template>
    </SectionNavegacao>

    <div class="row">
        <div class="col-lg-8 col-md-8 col-12">
            <RouterView />
        </div>
        <div class="col-lg-4 col-md-4 col-12">
            <div class="card">
                <div class="card-header">
                    <h4 class="card-title" v-if="evento">{{ evento.nome_evento }}</h4>
                </div>
                <div class="card-body">
                    <div class="col-lg-12 col-md-12 col-12 text-center">
                        <img v-if="evento" :src="evento.logo_evento" width="300px" height="200px" alt="Logo" />
                    </div>
                    <div class="col-lg-12 col-md-12 col-12 text-center">
                        <p v-if="evento" class="text-justify mt-2">{{ evento.descricao }}</p>
                    </div>
                    <div class="clearflix"></div>
                    <br>
                    <ul class="nav nav-pills nav-secondary  nav-pills-no-bd nav-pills-icons justify-content-center" id="pills-tab-with-icon" role="tablist">
                        <li class="nav-item submenu">
                            <!-- <routerLink :to="{ name: 'EventoInfo', params: { id: evento.id } }" class="nav-link" v-if="evento">
                                Informação
                            </routerLink> -->
                        </li>
                        <li class="nav-item submenu">
                            <routerLink :to="{ name: 'eventoeditar', params: { id: evento.id } }" class="nav-link" v-if="evento">
                                Editar
                            </routerLink>
                        </li>
                        <li class="nav-item submenu">
                            <routerLink :to="{ name: 'inscritoListarDetalhe', params: { id: evento.id } }" class="nav-link" v-if="evento">
                                <i class="far fa-user"></i>
                                Inscritos
                            </routerLink>
                        </li>
                    </ul>
                </div>
            </div>
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
    axios.get(`evento/show/${id}`)
        .then(response => {
            evento.value = response.data.data;
            console.log(evento.value.logo_evento)
        })
        .catch(error => {
            console.log('Erro ao buscar detalhes do evento', error);
        })
});

</script>