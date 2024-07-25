<template>
    <div>
        <section class="gradient-form">
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-xl-10">
                        <div class="card rounded-3 text-black">
                            <div class="row g-0">
                                <div class="col-lg-6">
                                    <div class="card-body p-md-5 mx-md-4">

                                        <div class="text-center">
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                                                 style="width: 185px;" alt="logo">
                                            <h4 class="mt-1 mb-5 pb-1">Sistema de Gestão de Eventos</h4>
                                        </div>
                                        <form @submit.prevent="handleSubmit">
                                            <div data-mdb-input-init class="form-outline mb-4">
                                                <label class="form-label" for="form2Example11">Usuário</label>
                                                <input type="email" id="form2Example11" class="form-control" placeholder="Digite seu usuário" />
                                            </div>

                                            <div data-mdb-input-init class="form-outline mb-4">
                                                <label class="form-label" for="form2Example22">Senha</label>
                                                <input type="password" id="form2Example22" class="form-control" />
                                            </div>

                                            <div class="text-center pt-1 mb-5 pb-1">
                                                <button
                                                        data-mdb-button-init
                                                        data-mdb-ripple-init
                                                        class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                                                        type="submit">
                                                    Entrar
                                                </button>
                                                <routerLink :to="{ name: 'eventoform' }" class="m-left"><span class="sub-item">Esqueci minha senha?</span></routerLink>
                                            </div>

                                            <div class="d-flex align-items-center justify-content-center pb-4">
                                                <p class="mb-0 me-2">Não tenho uma conta?</p>
                                                <routerLink :to="{ name: 'register' }">
                                                    <button  class="btn btn-outline-danger">Nova Conta</button>
                                                </routerLink>
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
    name: 'UsuarioLogin',
    data() {
        return {
            formData: {
                username: '',
                password: ''
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