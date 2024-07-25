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
                                        <form @submit.prevent="handleSubmit">
                                            <div class="row mb-2">
                                                <div class=" col-12">
                                                    <label class="form-label" for="nome">Nome</label>
                                                    <input type="text" name="nome" id="nome" class="form-control" placeholder="Digite seu nome" />
                                                </div>
                                            </div>
                                            <div class="row  mb-2">
                                                <div class=" col-6">
                                                    <label class="form-label" for="email">E-mail</label>
                                                    <input type="email" name="email" id="email" class="form-control" placeholder="Digite seu e-mail" />
                                                </div>

                                                <div class=" col-6">
                                                    <label class="form-label" for="telefone">Telefone</label>
                                                    <input type="text" name="telefone" id="telefone" class="form-control" placeholder="Digite seu Telefone" />
                                                </div>
                                            </div>

                                            <div class="row  mb-2">
                                                <div class=" col-6">
                                                    <label class="form-label" for="senha">Senha</label>
                                                    <input type="password" name="senha" id="senha" class="form-control" />
                                                </div>

                                                <div class=" col-6">
                                                    <label class="form-label" for="confirmar-senha">Confirmar Senha</label>
                                                    <input type="password" name="confirma_senha" id="confirmar-senha" class="form-control" />
                                                </div>
                                            </div>

                                            <div class="text-center pt-1 mt-5 mb-5">
                                                <button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit">
                                                    Cadastrar
                                                </button>
                                                <routerLink :to="{ name: 'login' }">
                                                    <button class="btn btn-outline-danger m-left mb-3">
                                                        voltar ao Login
                                                    </button>
                                                </routerLink>
                                                <!-- <routerLink :to="{ name: 'eventoform' }"><span class="sub-item">Esqueci minha senha?</span></routerLink> -->
                                            </div>
                                        </form>
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

<script>
import axios from 'axios';

export default {
    name: 'RegisterUser',
    data() {
        return {
            formData: {
                nome: '',
                email: '',
                telefone: '',
                senha: '',
                confirma_senha: '',
            }
        };
    },
    methods: {
        handleSubmit() {
            // Aqui você pode adicionar validações adicionais se necessário
            axios.post('http://localhost:3000/eventos', this.formData)
                .then(response => {
                    console.log(response.data);
                    // Redirecionar ou mostrar mensagem de sucesso
                })
                .catch(error => {
                    console.error('Erro ao enviar dados:', error);
                    // Mostrar mensagem de erro para o usuário
                });
        }
    }
};
</script>