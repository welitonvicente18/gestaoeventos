<template>
    <CardForm>
        <template v-slot:title>Adicionar Inscrição</template>
        <template v-slot:body>

            <FormKit
                     type="form"
                     :config="{ validationVisibility: 'submit' }"
                     @submit="submitForm"
                     submit-label="Salvar Inscrição">

                <div class="row">
                    <div class="col-md-12 col-lg-12">
                        <div class="row form-group">
                            <div class="col-lg-6 col-md-6">
                                <FormKit type="text" id="nome" name="nome" label="Nome"
                                         validation="required" v-model="formData.nome" placeholder="Nome" />
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <FormKit type="text" id="sobrenome" name="sobrenome" label="Nome"
                                         validation="required" v-model="formData.sobrenome" placeholder="Sobrenome" />
                            </div>
                        </div>

                        <div class="row form-group">
                            <div class="col-lg-3 col-md-6">
                                <FormKit type="text" name="telefone" id="telefone" label="Telefone" v-mask="'(##) ####-####'"
                                         validation="required" v-model="formData.telefone" placeholder="(00) 0000-0000" />
                            </div>
                            <div class="col-lg-9 col-md-6">
                                <FormKit type="email" name="email" id="email" label="E-mail"
                                         validation="required|email" v-model="formData.email" placeholder="E-mail" />
                            </div>
                        </div>

                        <div class="row form-group">
                            <div class="col-lg-4 col-md-4">
                                <FormKit type="text" name="cpf" id="cpf" label="CPF" v-mask="'###.###.###-##'"
                                         validation="required" v-model="formData.cpf" placeholder="CPF" />
                            </div>
                            <div class="col-lg-4 col-md-4">
                                <FormKit type="text" name="rg" id="rg" label="RG"
                                         validation="required|max:20" v-model="formData.rg" placeholder="RG" />
                            </div>
                            <div class="col-lg-4 col-md-4">
                                <FormKit type="date" name="data_nascimento" id="data_nascimento" label="Data de Nascimento"
                                         validation="required" v-model="formData.data_nascimento" placeholder="__/__/____" />
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
                            <div class="col-lg-5 col-md-5">
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
            </FormKit>

        </template>
    </CardForm>

</template>

<script setup>

import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import CardForm from "@/components/CardForm.vue";
import Swal from 'sweetalert2';
import axios from 'axios';
import SelectUfForm from "@/components/SelectUfForm.vue";

const formData = ref({
    id: '',
    nome: '',
    sobrenome: '',
    telefone: '',
    email: '',
    cpf: '',
    rg: '',
    data_nascimento: '',
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