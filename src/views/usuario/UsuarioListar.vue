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
                    <tfoot>
                        <tr>
                            <th>Evento</th>
                            <th class="text-center">Ação</th>
                        </tr>
                    </tfoot>
                    <tbody>
                        <tr v-for="(usuario, index) in usuarios" :key="index">
                            <td>
                                <div class="row">
                                    <div class="col-lg-2 col-md-3 col-6">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" width="80px" height="80px" alt="avatar" />
                                    </div>

                                    <div class="col-lg-10 col-md-9 col-6">
                                        <span>{{ usuario.name }}</span><br>
                                        <span><b>Telefone:</b> {{ usuario.telefone }}</span><br>
                                        <span><b>E-mail:</b> {{ usuario.email }}</span><br>
                                    </div>
                                </div>

                            </td>
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


const usuarios = ref([]);

listaUsuario();
function listaUsuario() {
    axios.get('/usuario/index')
        .then(response => {
            usuarios.value = response.data.data;
            listaUsuario();
        })
        .catch(error => {
            console.error('Erro ao carregar usuarios:', error);
            console.log(error)
        });
}

</script>