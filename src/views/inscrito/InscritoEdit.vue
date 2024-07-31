<template>
    <CardForm>
        <template v-slot:title>Adicionar Inscrição</template>
        <template v-slot:body>

            <form @submit.prevent="submitForm">
                <div class="row">
                    <div class="col-md-12 col-lg-12">
                        <div class="row form-group">
                            <div class="col-lg-6 col-md-6">
                                <label for="nome">Nome</label>
                                <input type="text" class="form-control" id="nome" name="nome" v-model="formData.nome" placeholder="Participante" />
                            </div>
                        </div>

                        <div class="row form-group">
                            <div class="col-lg-3 col-md-3">
                                <label for="cpf">CPF: </label>
                                <input type="text" class="form-control" id="cpf" name="cpf" v-model="formData.cpf" v-mask="'###.###.###-##'" placeholder="CPF" />
                            </div>
                            <div class="col-lg-3 col-md-3">
                                <label for="rg">RG</label>
                                <input type="text" class="form-control" id="rg" name="rg" v-model="formData.rg" placeholder="RG" />
                            </div>
                            <div class="col-lg-3 col-md-3">
                                <label for="data_nascimento">Data de Nascimento</label>
                                <input type="date" class="form-control" id="data_nascimento" name="data_nascimento" v-model="formData.data_nascimento" placeholder="__/__/____" />
                            </div>
                        </div>

                        <div class="row form-group">
                            <div class="col-lg-3 col-md-3">
                                <label for="telefone">Telefone</label>
                                <input type="text" class="form-control" id="telefone" name="telefone" v-model="formData.telefone" v-mask="'(##) ####-####'" placeholder="(00) 0000-0000" />
                            </div>

                            <div class="col-lg-6 col-md-6">
                                <label for="email">E-mail</label>
                                <input type="email" class="form-control" id="email" name="email" v-model="formData.email" placeholder="E-mail" />
                            </div>
                        </div>

                        <div class="row form-group">
                            <div class="col-lg-3 col-md-2">
                                <label for="uf">Estado</label>
                                <select class="form-control" name="uf" v-model="formData.uf">
                                    <option></option>
                                </select>
                            </div>
                            <div class="col-lg-4 col-md-4">
                                <label for="cidade">Cidade</label>
                                <input type="text" class="form-control" id="cidade" name="cidade" v-model="formData.cidade" placeholder="Cidade" />
                            </div>
                            <div class="col-lg-4 col-md-4">
                                <label for="endereco">Endereço</label>
                                <input type="text" class="form-control" id="endereco" name="endereco" v-model="formData.endereco" placeholder="Endereço" />
                            </div>
                            <div class="col-lg-3 col-md-3">
                                <label for="cep">CEP</label>
                                <input type="text" class="form-control" id="cep" name="cep" v-model="formData.cep" v-mask="'######-###'" placeholder="CEP" />
                            </div>
                        </div>

                    </div>
                </div>
                <div class="row form-group">
                    <hr>
                </div>
                <button type="submit" class="btn btn-success" @click="submitForm(formData)">Salvar</button>
            </form>
        </template>
    </CardForm>

</template>

<script setup>

import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import CardForm from "@/components/CardForm.vue";
import Swal from 'sweetalert2';
import axios from 'axios';

const formData = ref({
    id: '',
    nome: '',
    cpf: '',
    rg: '',
    data_nascimento: '',
    telefone: '',
    email: '',
    uf: '',
    cidade: '',
    endereco: '',
    cep: '',
});

onMounted(() => {

    const router = useRouter();
    const id = router.currentRoute.value.params.id;

    axios.get(`inscrito/show/${id}`)

        .then(response => {
            const inscritos = response.data.data;
            formData.value = {
                ...formData.value,
                ...inscritos
            };
            console.log('asdf');
        })
        .catch(error => {
            console.log('Erro ao buscar o inscritos', error);
            Swal.fire({
                icon: 'error',
                title: 'error!',
                text: 'Erro ao buscar o inscrito!',
            });
        })
});


function submitForm() {

    const update = {
        id: formData.value.id,
        nome: formData.value.nome,
        cpf: formData.value.cpf,
        rg: formData.value.rg,
        data_nascimento: formData.value.data_nascimento,
        telefone: formData.value.telefone,
        email: formData.value.email,
        uf: formData.value.uf,
        cidade: formData.value.cidade,
        endereco: formData.value.endereco,
        cep: formData.value.cep,
    };
    console.log(update)
    axios.put(`inscrito/update/${formData.value.id}`, update)
        .then(response => {
            Swal.fire({
                icon: 'success',
                title: 'Sucesso!',
                text: 'Registrado com sucesso!',
            });
            console.log('Dados enviados com sucesso:', response.data);
        })
        .catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'error!',
                text: 'Erro ao enviar os evento!',
            });
            console.error('Erro ao enviar dados:', error);
        });
}
</script>