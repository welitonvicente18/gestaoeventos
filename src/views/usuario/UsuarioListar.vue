<template>

    <SectionNavegacao v-if="!$route.params.id">
        <template v-slot:title>Usuários</template>
    </SectionNavegacao>

    <CardForm>

        <template v-slot:title>
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6 col-6 text-start">
                    Usuários: {{ usuarios.length }}
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
                    <tbody>
                        <tr v-for="(usuario, index) in usuarios" :key="index">
                            <td>
                                <div class="row">
                                    <div class="col-lg-2 col-md-3 col-6">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" width="80px" height="80px" alt="avatar" />
                                    </div>

                                    <div class="col-lg-10 col-md-9 col-6">
                                        <span>{{ usuario.name }}</span><br>
                                        <span><b>Perfil:</b> {{ usuario.perfil == '2' ? 'Usuário do Sistema' : 'Administrador' }}</span><br>
                                        <span><b>Telefone:</b> {{ usuario.telefone }}</span><br>
                                        <span><b>E-mail:</b> {{ usuario.email }}</span><br>
                                    </div>
                                </div>

                            </td>
                            <td class="text-center">
                                <a @click="redirectEdit(usuario.id)" v-if="usuario.id">
                                    <fa :icon="['fas', 'fa-edit']" size="xl" />
                                </a>
                                &nbsp;
                                <a @click="deleteFunction(usuario.id)" v-if="usuario.id">
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
import { useRouter } from 'vue-router';
import CardForm from "@/components/CardForm.vue";
import SectionNavegacao from '@/components/SectionNavegacao.vue';

const router = useRouter();
const usuarios = ref([]);
const paginantion = ref([]);

onMounted(() => {
    redirectPagination();
});

function redirectPagination(url) {
    if (url == null || url.trim() === '') {
        url = '/usuario/index';
    } else {
        url = url.slice(-21);
    }

    axios.get(url)
        .then(response => {
            usuarios.value = response.data.data.data;
            paginantion.value = response.data.data;
            redirectPagination();
        })
        .catch(error => {
            console.error('Erro ao carregar usuarios:', error);
            console.log(error)
        });
}

const redirectEdit = (id) => {
    router.push({ name: 'usuarioEdit', params: { id: id } });
};
</script>