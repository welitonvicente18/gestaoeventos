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
                                        <div class="row">
                                            <div class="col-lg-4 col-md-4 col-sm-6">
                                                <img v-if="evento" src="{{ evento.evento_logo }}" style="width: 185px;" alt="logo">
                                            </div>
                                            <div class="col-lg-8 col-md-8 col-sm-6 text-end">
                                                <h4 class="mt-1 mb-5 pb-1">Sistema de Gestão de Eventos</h4>
                                            </div>
                                        </div>
                                        <div class="text-center">
                                            <h4 class="mt-1 mb-5 pb-1" v-if="evento">{{ evento.nome_evento }}</h4>
                                        </div>
                                        <div id="form">
                                            <FormKit type="form"
                                                     :config="{ validationVisibility: 'submit' }"
                                                     @submit="submitForm"
                                                     submit-label="Cadastrar">

                                                <div class="row">
                                                    <div class="col-md-12 col-lg-12">
                                                        <div class="row form-group">
                                                            <div class="col-lg-6 col-md-6">
                                                                <FormKit type="text" id="nome" name="nome" label="Nome"
                                                                         validation="required" v-model="formData.nome" placeholder="Nome" />
                                                            </div>
                                                            <div class="col-lg-6 col-md-6">
                                                                <FormKit type="text" id="sobrenome" name="sobrenome" label="Sobrenome"
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
                                                            <div class="col-lg-4 col-md-4" v-if="permisaoCampo.cpf">
                                                                <FormKit type="text" name="cpf" id="cpf" label="CPF" v-mask="'###.###.###-##'"
                                                                         validation="required" v-model="formData.cpf" placeholder="CPF" />
                                                            </div>
                                                            <div class="col-lg-4 col-md-4" v-if="permisaoCampo.datanascimento">
                                                                <FormKit type="date" name="data_nascimento" id="data_nascimento" label="Data de Nascimento"
                                                                         validation="required" v-model="formData.data_nascimento" placeholder="__/__/____" />
                                                            </div>
                                                            <div class="col-lg-2 col-md-2" v-if="permisaoCampo.sexo">
                                                                <FormKit type="select" label="Sexo" name="sexo"
                                                                         validation="required" v-model="formData.sexo" :options="[
                                                                            { label: '', value: '' },
                                                                            { label: 'Masculino', value: 'M' },
                                                                            { label: 'Feminino', value: 'F' },
                                                                        ]" />
                                                            </div>
                                                        </div>

                                                        <div class="row form-group">
                                                            <div class="col-lg-3 col-md-2" v-if="permisaoCampo.estado">
                                                                <SelectUfForm name="uf" validation="required" v-model="formData.uf" />
                                                            </div>
                                                            <div class="col-lg-4 col-md-4" v-if="permisaoCampo.cidade">
                                                                <FormKit type="text" name="cidade" id="cidade" label="Cidade"
                                                                         validation="required" v-model="formData.cidade" placeholder="Cidade" />
                                                            </div>
                                                            <div class="col-lg-5 col-md-5" v-if="permisaoCampo.endereco">
                                                                <FormKit type="text" name="endereco" id="endereco" label="Endereço"
                                                                         validation="required" v-model="formData.endereco" placeholder="Endereço" />
                                                            </div>
                                                            <div class="col-lg-3 col-md-3" v-if="permisaoCampo.cep">
                                                                <FormKit type="text" name="cep" id="cep" label="CEP" v-mask="'######-###'"
                                                                         validation="required" v-model="formData.cep" placeholder="CEP" />
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </FormKit>
                                        </div>
                                        <div id="confirmacao">
                                            <div class="row">
                                                <div class="col-lg-12 col-md-12 col-sm-12 col-12 alert alert-success">
                                                    <h3 class="">Cadastrado com sucesso!</h3>
                                                    <p>Cadastro realizado, foi enviado um e-mail de confirmação para o seu e-mail.</p>
                                                    <p><b>Email:</b> {{ formData.email }}</p>
                                                </div>
                                            </div>
                                        </div>
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
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router';
import axios from 'axios';

const router = useRouter();
const evento = ref(null);
const formData = ref({});

const permisaoCampo = ref({
    sexo: false,
    cep: false,
    cidade: false,
    cpf: false,
    datanascimento: false,
    endereco: false,
    estado: false,
});

onMounted(async () => {
    document.querySelector("#confirmacao").style.display = 'none';

    try {
        const id = router.currentRoute.value.params.id;
        const response = await axios.get(`evento/show/${id}`);
        evento.value = response.data.data;

        // Se necessário, definir formData e permisaoCampo aqui
        formData.value.id_eventos = evento.value.id;
        permisaoCampo.value = {
            ...evento.value.campo_extra
        };
    } catch (error) {
        console.log('Erro ao buscar detalhes do evento', error);
    }
});


function submitForm() {

    const insert = {
        id_eventos: evento.value.id,
        ...formData.value,
    };
    axios.post('inscrito/store', insert)
        .then(response => {
            document.querySelector("#form").style.display = 'none'; // oculta o formulário
            document.querySelector("#confirmacao").style.display = 'block'; // oculta o formulário
            console.log('Dados enviados com sucesso:', response.data);
        })
        .catch(error => {
            console.error('Erro ao enviar dados:', error);
        });
}

</script>