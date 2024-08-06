<template>

    <SectionNavegacao>
        <template v-slot:title>Eventos</template>
    </SectionNavegacao>

    <CardForm>

        <template v-slot:title>
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6 col-6 text-start">
                    Meus Eventos: {{ eventos.length }}
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-6 text-end">
                    <router-link :to="{ name: 'eventoform' }"><span class="btn btn-primary btn-round">Adicionar Evento</span></router-link>
                </div>
            </div>
        </template>
        <template v-slot:body>
            <div class="table-responsive">
                <table id="multi-filter-select" class="display table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Evento</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(evento, index) in eventos" :key="index">
                            <td>
                                <div class="row">
                                    <div class="col-lg-2 col-md-3 col-6 align-items-center vertical-align">
                                        <img v-if="evento.logo_evento != ''" :src="evento.logo_evento" width="100px" height="120px" alt="Logo do Evento" />
                                        <!-- <img v-if="!evento" :src="evento.logo_evento" width="100px" height="100px" alt="avatar" /> -->
                                    </div>
                                    <div class="col-lg-10 col-md-9 col-6">
                                        <h5 v-if="evento">{{ evento.nome_evento }}</h5>
                                        <span v-if="evento"><b>Data Início: </b> {{ formatDate(evento.data_inicio) }}</span><br>
                                        <span v-if="evento"><b>Data Fim: </b> {{ formatDate(evento.data_fim) }}</span><br>
                                        <span v-if="evento"><b>Prazo de Inscrição: </b>{{ formatDate(evento.data_prazo_inscricao) }}</span><br>
                                        <span v-if="evento"><b>Local: </b>{{ evento.local }}</span><br>
                                        <span v-if="evento"><b>Responsável: </b>{{ evento.responsavel }}</span><br>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <a @click="redirect(evento.id)">
                                    <span class="btn btn-outline-info btn-round" ><fa :icon="['fas', 'share-square']" size="xl" /></span>
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <nav aria-label="...">
                    <ul class="pagination">
                        <li class="page-item">
                            <a v-if="paginantion.first_page_url" class="page-link" href="#" @click.prevent="redirectPagination(paginantion.first_page_url)">Anterior</a>
                        </li>
                        <li v-for="(link) in paginantion.links" :key="link.label" class="page-item">
                            <a v-if="link.label == '1'" :class="link.active ? 'page-link active' : 'page-link'" href="#" @click.prevent="redirectPagination(link.url)">1</a>
                            <a v-if="link.label == '2'" :class="link.active ? 'page-link active' : 'page-link'" href="#" @click.prevent="redirectPagination(link.url)">2</a>
                            <a v-if="link.label == '3'" :class="link.active ? 'page-link active' : 'page-link'" href="#" @click.prevent="redirectPagination(link.url)">3</a>
                            <a v-if="link.label == '4'" :class="link.active ? 'page-link active' : 'page-link'" href="#" @click.prevent="redirectPagination(link.url)">4</a>
                        </li>
                        <li class="page-item">
                            <a v-if="paginantion.last_page_url" class="page-link" href="#" @click.prevent="redirectPagination(paginantion.next_page_url)">Próximo</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </template>
    </CardForm>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import CardForm from "@/components/CardForm.vue";
import SectionNavegacao from '@/components/SectionNavegacao.vue';
import { format } from "date-fns";


const eventos = ref([]);
const paginantion = ref([]);
const router = useRouter();

const redirect = (eventId) => {
    router.push({ name: 'eventoDetalhe', params: { id: eventId } });
};

onMounted(() => {
    redirectPagination('');
});

const formatDate = (date) => {
    if (!date) return "";
    return format(new Date(date), "dd-MM-yyyy");
};

function redirectPagination(url) {
    if (url == null || url.trim() === '') {
        url = '/evento/index';
    } else {
        url = url.slice(-20);
    }

    axios.get(url)
        .then(response => {
            console.log(response.data.data);
            eventos.value = response.data.data.data;
            paginantion.value = response.data.data;
        })
        .catch(error => {
            console.error('Erro ao carregar eventos:', error);
        });
}

</script>
