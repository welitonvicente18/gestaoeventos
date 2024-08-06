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
                    <span class="btn btn-outline-info btn-round" @click="exportPDF">
                        <fa :icon="['fas', 'print']" size="xl" />
                    </span>
                    <RouterLink :to="{ name: 'InscritoForm', params: { id: $route.params.id } }"><span class="btn btn-primary btn-round">Adicionar Inscrição</span></RouterLink>
                </div>
            </div>
        </template>
        <template v-slot:body>
            <div class="table-responsive" id="inscritos">
                <table id="multi-filter-select" class="display table table-bordered table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>E-mail</th>
                            <th>Telefone</th>
                            <th class="text-center coluna-oculta w-15">Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(inscrito, index) in inscritos" :key="index">
                            <td>
                                <div class="row">
                                    <div class="col-lg-10 col-md-9 col-6">
                                        <span v-if="inscrito.nome">{{ inscrito.nome }}</span> <span v-if="inscrito.sobrenome">{{ inscrito.sobrenome }}</span><br>
                                    </div>
                                </div>
                            </td>
                            <td><span v-if="inscrito.email">{{ inscrito.email }}</span></td>
                            <td><span v-if="inscrito.telefone">{{ inscrito.telefone }}</span></td>
                            <td class="text-center coluna-oculta">
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
                <nav aria-label="..." class="coluna-oculta">
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
import html2pdf from 'html2pdf.js';

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

function exportPDF() {

    const colunaAcoes = document.querySelectorAll('.coluna-oculta');

    // Itera sobre cada elemento e aplica o estilo de ocultação
    colunaAcoes.forEach(element => {
        element.style.display = 'none';
    });

    html2pdf(document.getElementById('inscritos'), {
        margin: [10, 10, 10, 10],
        filename: 'inscritos.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { dpi: 192, letterRendering: true },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    });
}
</script>

<style>
.w-15 {
    width: 15% !important;
}
</style>