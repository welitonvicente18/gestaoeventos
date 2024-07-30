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
                            <th>Data</th>
                            <th>Local</th>
                            <th>Responsável</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>Evento</th>
                            <th>Data</th>
                            <th>Local</th>
                            <th>Responsável</th>
                            <th>Ação</th>
                        </tr>
                    </tfoot>
                    <tbody>
                        <tr v-for="(evento, index) in eventos" :key="index">
                            <td>{{ evento.nome_evento }}</td>
                            <td>{{ evento.data_inicio }}</td>
                            <td>{{ evento.local }}</td>
                            <td>{{ evento.responsavel }}</td>
                            <td>
                                <a @click="redirect(evento.id)">
                                    <fa :icon="['fas', 'share-square']" size="xl" /> &nbsp;
                                </a>
                                <a @click="redirectDelete(evento.id)">
                                    <fa :icon="['fas', 'circle-xmark']" size="xl" class="red" />
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <nav aria-label="...">
                    <ul class="pagination">
                        <li class="page-item disabled">
                            <span class="page-link">Previous</span>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item active">
                            <span class="page-link">
                                2
                                <span class="sr-only">(current)</span>
                            </span>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                            <a class="page-link" href="#">Next</a>
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

axios.get('http://localhost:70/appgestaoevento/evento/index')
    .then(response => {
        eventos.value = response.data.data;
        console.log(response.data);
    })
    .catch(error => {
        console.error('Erro ao carregar eventos:', error);
    });

const router = useRouter();

const redirect = (eventId) => {
    router.push({ name: 'eventoDetalhe', params: { id: eventId } });
};

function redirectDelete(id) {

    axios.delete(`http://localhost:70/appgestaoevento/evento/delete/${id}`)
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