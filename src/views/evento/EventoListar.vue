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
                    <tfoot>
                        <tr>
                            <th>Evento</th>
                            <th>Ação</th>
                        </tr>
                    </tfoot>
                    <tbody>
                        <tr v-for="(evento, index) in eventos" :key="index">
                            <td>
                                <div class="row">
                                    <div class="col-lg-2 col-md-3 col-6">
                                        <!-- <img v-if="evento" :src="evento.logo_evento" width="100px" height="100px" alt="avatar" /> -->
                                    </div>
                                    <div class="col-lg-10 col-md-9 col-6">
                                        <h5 v-if="evento">{{ evento.nome_evento }}</h5>
                                        <span v-if="evento"><b>Datas: </b>{{ evento.data_inicio }} - {{ evento.data_fim }} - {{ evento.data_prazo_inscricao }}</span><br>
                                        <span v-if="evento"><b>Local: </b>{{ evento.local }}</span><br>
                                        <span v-if="evento"><b>Responsável: </b>{{ evento.responsavel }}</span><br>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <a @click="redirect(evento.id)">
                                    <fa :icon="['fas', 'share-square']" size="xl" /> &nbsp;
                                </a>
                                <a @click="deleteFunction(evento.id)">
                                    <fa :icon="['fas', 'circle-xmark']" size="xl" class="red" />
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
                            <a v-if="link.label == '1'" class="page-link" href="#" @click.prevent="redirectPagination(link.url)">1</a>
                            <a v-if="link.label == '2'" class="page-link" href="#" @click.prevent="redirectPagination(link.url)">2</a>
                            <a v-if="link.label == '3'" class="page-link" href="#" @click.prevent="redirectPagination(link.url)">3</a>
                            <a v-if="link.label == '4'" class="page-link" href="#" @click.prevent="redirectPagination(link.url)">4</a>
                        </li>
                        <li class="page-item">
                            <a v-if="paginantion.last_page_url" class="page-link" href="#" @click.prevent="redirectPagination(paginantion.next_page_url)">Próximo</a>
                        </li>
                        <li class="">
                            <span class="page-link"> Total: {{ paginantion.total }}</span>
                        </li>
                    </ul>
                </nav>
            </div>
        </template>
    </CardForm>

</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import Swal from 'sweetalert2';
import CardForm from "@/components/CardForm.vue";
import SectionNavegacao from '@/components/SectionNavegacao.vue';

const eventos = ref([]);
const paginantion = ref([]);

axios.get('evento/index')
    .then(response => {
        console.log(response.data);
        eventos.value = response.data.data.data;
        paginantion.value = response.data.data;
    })
    .catch(error => {
        console.error('Erro ao carregar eventos:', error);
    });

const router = useRouter();

const redirect = (eventId) => {
    router.push({ name: 'eventoDetalhe', params: { id: eventId } });
};

const redirectPrevious = (paginantion) => {
    console.log(paginantion);
};

function deleteFunction(id) {

    axios.delete(`evento/delete/${id}`)
        .then(response => {
            Swal.fire({
                icon: 'success',
                title: 'Sucesso!',
                text: 'Excluído com sucesso!',
            });
            console.log(response.data);
        })
        .catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'error!',
                text: 'Erro ao enviar os evento!',
            });
            console.log('Erro ao buscar detalhes do evento', error);
        })

}

</script>
<style>
.red {
    color: #ed6565;
}
</style>