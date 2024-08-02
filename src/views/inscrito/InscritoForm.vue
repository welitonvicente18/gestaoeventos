<template>
    <CardForm>
        <template v-slot:title>Adicionar Inscrição</template>
        <template v-slot:body>

            <form @submit.prevent="submitForm">
                <div class="row">
                    <div class="col-md-12 col-lg-12">
                        <div class="row form-group">
                            <div class="col-lg-6 col-md-6">
                                <FormKit type="text" name="data_inicio" id="nome" label="Nome"
                                         validation="required" v-model="formData.nome" placeholder="Participante" />
                            </div>
                        </div>

                        <div class="row form-group">
                            <div class="col-lg-3 col-md-3">
                                <FormKit type="text" name="cpf" id="cpf" label="CPF" v-mask="'###.###.###-##'"
                                         validation="required" v-model="formData.cpf" placeholder="CPF" />
                            </div>
                            <div class="col-lg-3 col-md-3">
                                <FormKit type="text" name="rg" id="rg" label="RG"
                                         validation="required|max:20" v-model="formData.rg" placeholder="RG" />
                            </div>
                            <div class="col-lg-3 col-md-3">
                                <FormKit type="date" name="data_nascimento" id="data_nascimento" label="Data de Nascimento"
                                         validation="required" v-model="formData.data_nascimento" placeholder="__/__/____" />
                            </div>
                        </div>

                        <div class="row form-group">
                            <div class="col-lg-3 col-md-3">
                                <FormKit type="text" name="telefone" id="telefone" label="Telefone" v-mask="'(##) ####-####'"
                                         validation="required" v-model="formData.telefone" placeholder="(00) 0000-0000" />
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <FormKit type="email" name="email" id="email" label="E-mail"
                                         validation="required|email" v-model="formData.email" placeholder="E-mail" />
                            </div>
                        </div>

                        <div class="row form-group">
                            <div class="col-lg-3 col-md-2">
                                <SelectUfForm name="uf" v-model="formData.uf" />
                            </div>
                            <div class="col-lg-4 col-md-4">
                                <FormKit type="text" name="cidade" id="cidade" label="Cidade"
                                         validation="required" v-model="formData.cidade" placeholder="Cidade" />
                            </div>
                            <div class="col-lg-4 col-md-4">
                                <FormKit type="text" name="endereco" id="endereco" label="Endereço"
                                         validation="required" v-model="formData.endereco" placeholder="Endereço" />
                            </div>
                            <div class="col-lg-3 col-md-3">
                                <FormKit type="text" name="cep" id="cep" label="CEP" v-mask="'######-###'"
                                         validation="required" v-model="formData.cep" placeholder="CEP" />
                            </div>
                        </div>

                    </div>
                </div>
                <div class="row form-group">
                    <hr>
                </div>
                <button type="submit" class="btn btn-success">Salvar</button>
            </form>
        </template>
    </CardForm>

</template>

<script setup>

import { ref } from 'vue';
import { useRouter } from 'vue-router';
import CardForm from "@/components/CardForm.vue";
import SelectUfForm from "@/components/SelectUfForm.vue";
import Swal from 'sweetalert2';
import axios from 'axios';

const router = useRouter();
const id_eventos = router.currentRoute.value.params.id;

const formData = ref({
    id_eventos: id_eventos,
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

function submitForm() {

    axios.post('inscrito/store', formData.value)
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