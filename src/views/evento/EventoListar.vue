<template>

    <SectionNavegacao>
        <template v-slot:title>Eventos</template>
    </SectionNavegacao>

    <CardForm>

        <template v-slot:title>Meus Eventos</template>
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
                            <td>{{ evento.title }}</td>
                            <td>{{ evento.userId }}</td>
                            <td>{{ evento.userId }}</td>
                            <td>{{ evento.userId }}</td>
                            <td>
                                <a @click="redirect(evento.id)">
                                    <fa :icon="['fas', 'share-square']" size="xl" />
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
import axios from 'axios';
import { ref } from 'vue';
import CardForm from "@/components/CardForm.vue";
import { useRouter } from 'vue-router';
import SectionNavegacao from '@/components/SectionNavegacao.vue';

const eventos = ref([]);

axios.get('http://localhost:3000/eventos')
    .then(response => {
        eventos.value = response.data;
    })
    .catch(error => {
        console.error('Erro ao carregar eventos:', error);
    });

const router = useRouter();

const redirect = (eventId) => {
    router.push({ name: 'eventoDetalhe', params: { id: eventId } });
};

</script>