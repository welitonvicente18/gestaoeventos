<template>

    <SectionNavegacao v-if="!$route.params.id">
        <template v-slot:title>Inscritos</template>
    </SectionNavegacao>

    <CardForm>

        <template v-slot:title>
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6 col-6 text-start">
                    Inscritos: {{ inscritos.length }}
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-6 text-end">
                    <RouterLink :to="{ name: 'InscritoForm', params: { id: $route.params.id } }"><span class="btn btn-primary btn-round">Adicionar Inscrição</span></RouterLink>
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
                    <tbody>
                        <tr v-for="(inscrito, index) in inscritos" :key="index">
                            <td>
                                <div class="row">
                                    <div class="col-lg-2 col-md-3 col-6">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" width="80px" height="80px" alt="avatar" />
                                    </div>

                                    <div class="col-lg-10 col-md-9 col-6">
                                        <span>{{ inscrito.nome }}</span><br>
                                        <span><b>CPF:</b> {{ inscrito.cpf }}</span><br>
                                        <span><b>Telefone:</b> {{ inscrito.telefone }}</span><br>
                                        <span><b>E-mail:</b> {{ inscrito.email }}</span><br>
                                    </div>
                                </div>

                            </td>
                            <td class="text-center">
                                <a @click="redirectEdit(inscrito.id)" v-if="inscrito.id">
                                    <fa :icon="['fas', 'fa-edit']" size="xl" />
                                </a>
                                &nbsp;
                                <a @click="deleteFunction(inscrito.id)" v-if="inscrito.id">
                                    <fa :icon="['fas', 'times-circle']" size="xl" style="color: red" />
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
import axios from 'axios';
import { ref, onMounted } from 'vue';
import CardForm from "@/components/CardForm.vue";
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2';
import SectionNavegacao from '@/components/SectionNavegacao.vue';

const inscritos = ref([]);
const paginantion = ref([]);

onMounted(() => {
    redirectPagination();
});

function redirectPagination(url = '') {

    if (url == null || url.trim() === '') {
        url = '/inscrito/index';
    } else {
        url = url.slice(-21);
    }

    axios.get(url)
        .then(response => {
            inscritos.value = response.data.data.data;
            paginantion.value = response.data.data;
            console.log(paginantion)
        })
        .catch(error => {
            console.error('Erro ao carregar os inscritos:', error);
        });

}
const router = useRouter();

const redirectEdit = (inscritoEdit) => {
    router.push({ name: 'InscritoEdit', params: { id: inscritoEdit } });
};

function deleteFunction(id) {

    axios.delete(`inscrito/destroy/${id}`)
        .then(response => {
            Swal.fire({
                icon: 'success',
                title: 'Sucesso!',
                text: 'Excluído com sucesso!',
            });
            redirectPagination('');
            console.log(response.data);
        })
        .catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'error!',
                text: 'Erro ao excluir o inscrito!',
            });
            console.log('Erro ao excluir o inscrito', error);
        })

}

</script>