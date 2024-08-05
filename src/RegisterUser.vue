<template>
    <div>
        <section class="gradient-form">
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-xl-10">
                        <div class="card rounded-3 text-black">
                            <div class="row g-0">
                                <div class="col-lg-12">
                                    <div class="card-body p-md-5 mx-md-4">

                                        <div class="text-center">
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                                                 style="width: 185px;" alt="logo">
                                            <h4 class="mt-1 mb-5 pb-1">Sistema de Gestão de Eventos</h4>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-12 col-md-12 col-12 text-end">
                                                <routerLink :to="{ name: 'login' }">
                                                    <button class="btn btn-outline-danger m-left mb-3">
                                                        voltar ao Login
                                                    </button>
                                                </routerLink>
                                            </div>
                                        </div>
                                        <FormKit type="form"
                                                 :config="{ validationVisibility: 'submit' }"
                                                 @submit="handleSubmit"
                                                 submit-label="Cadastrar">

                                            <div class="row mb-2">
                                                <div class=" col-12">
                                                    <FormKit type="text" name="name" id="nome-evento" label="Nome"
                                                             validation="required|maxlen:200" v-model="formData.name" placeholder="Nome" />
                                                </div>
                                            </div>
                                            <div class="row  mb-2">
                                                <div class=" col-6">
                                                    <FormKit type="email" name="email" id="email" label="E-mail"
                                                             validation="required|email|maxlen:200" v-model="formData.email" placeholder="E-mail" />
                                                </div>

                                                <div class=" col-6">
                                                    <FormKit type="text" name="telefone" id="telefone" label="Telefone" v-mask="'(##) ####-####'"
                                                             validation="required" v-model="formData.telefone" placeholder="(00) 0000-0000" />
                                                </div>
                                            </div>

                                            <div class="row  mb-2">
                                                <div class=" col-6">
                                                    <FormKit type="password" name="password" id="password" label="Senha"
                                                             validation="required" v-model="formData.password" />
                                                </div>

                                                <div class=" col-6">
                                                    <FormKit type="password" name="confirma_senha" id="confirma_senha" label="Confirmar Senha"
                                                             validation="required" v-model="formData.password_confirmation" />
                                                </div>
                                            </div>
                                        </FormKit>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style>
.m-left {
    margin-left: 20px;
}
</style>

<script setup>
import axios from 'axios';
import { ref } from 'vue'
import Swal from 'sweetalert2';

const formData = ref({
    name: '',
    email: '',
    telefone: '',
    password: '',
    password_confirmation: '',
});

function handleSubmit() {

    axios.post('/register', formData.value)
        .then(response => {
            Swal.fire({
                icon: 'success',
                title: 'Sucesso!',
                text: 'Cadastrado com sucesso!',
            });
            console.log(response.data);
        })
        .catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'error!',
                text: 'Erro ao enviar so dados!',
            });
            console.error('Erro ao enviar dados:', error);
        });
}


</script>