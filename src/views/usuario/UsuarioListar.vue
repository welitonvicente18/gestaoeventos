<template>

    <SectionNavegacao v-if="!$route.params.id">
        <template v-slot:title>Usuários</template>
    </SectionNavegacao>

    <CardForm>

        <template v-slot:title>
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6 col-6 text-start">
                    Usuários: {{ eventos.length }}
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-6 text-end">
                    <RouterLink :to="{ name: 'usuarioForm' }"><span class="btn btn-primary btn-round">Adicionar Inscrição</span></RouterLink>
                </div>
            </div>
        </template>
        <template v-slot:body>
            <div class="table-responsive">
                <table id="multi-filter-select" class="display table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Inscrito</th>
                            <th class="text-center">Ação</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>Evento</th>
                            <th class="text-center">Ação</th>
                        </tr>
                    </tfoot>
                    <tbody>
                        <tr v-for="(evento, index) in eventos" :key="index">
                            <td>{{ evento.title }}</td>
                            <td class="text-center">
                                <fa :icon="['fas', 'fa-edit']" size="xl" />
                                &nbsp;
                                <fa :icon="['fas', 'times-circle']" size="xl" style="color: red" />
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
import SectionNavegacao from '@/components/SectionNavegacao.vue';

const eventos = ref([]);

axios.get('http://localhost:3000/eventos')
    .then(response => {
        eventos.value = response.data;
    })
    .catch(error => {
        console.error('Erro ao carregar eventos:', error);
    });

</script>