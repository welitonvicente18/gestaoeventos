<template>

    <SectionNavegacao>
        <template v-slot:title>Usuários</template>
    </SectionNavegacao>

    <CardForm>
        <template v-slot:title>Adicionar Usuário</template>
        <template v-slot:body>

            <form @submit.prevent="submitForm">
                <div class="row">
                    <div class="col-md-12 col-lg-12">
                        <div class="row form-group">
                            <div class="col-lg-6 col-md-6">
                                <FormKit type="text" name="name" id="name" label="Nome"
                                         validation="required" v-model="formData.name" placeholder="Nome do usuário" />
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
                            <div class="col-lg-6 col-md-6">
                                <FormKit type="password" name="password" v-model="formData.password" label="Senha"
                                         validation="required" validation-visibility="live" />
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <FormKit type="password" name="password_confirmation" v-model="formData.password_confirmation" label="Confirmar Senha"
                                         validation="required|confirm" validation-visibility="live"
                                         validation-label="Confirmar Senha" />
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
import CardForm from "@/components/CardForm.vue";
import SectionNavegacao from '@/components/SectionNavegacao.vue';
import axios from 'axios';

const formData = ref({
    name: '',
    email: '',
    telefone: '',
    password: '',
    password_confirmation: '',
});

function submitForm() {
    
    console.log(formData.value)
    axios.post('/register', formData.value)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

</script>