<template>

    <SectionNavegacao v-if="!$route.params.id">
        <template v-slot:title>Eventos</template>
        <template v-slot:navegacao1>
            <routerLink :to="{ name: 'eventoListar' }">Listar</routerLink>
        </template>
    </SectionNavegacao>

    <CardForm>
        <template v-slot:title>Criar Evento</template>
        <template v-slot:body>

            <FormKit
                     type="form"
                     :config="{ validationVisibility: 'submit' }"
                     @submit="submitForm"
                     submit-label="Salvar Evento">
                <div class="row">
                    <div class="col-md-6 col-lg-6">
                        <div class="row form-group">
                            <div class="col-lg-12 col-md-12 col-12">
                                <FormKit type="text" name="nome_evento" id="nome-evento" label="Nome do evento"
                                         help="Obrigatório" validation="required|maxlen:200" v-model="formData.nome_evento" placeholder="Nome do evento" />
                            </div>
                        </div>

                        <div class="row form-group">
                            <div class=" col-lg-4 col-md-4">
                                <FormKit type="date" name="data_inicio" id="data_inicio" label="Data de Início"
                                         help="Obrigatório" validation="required" v-model="formData.data_inicio" placeholder="Nome do evento" />
                            </div>
                            <div class="col-lg-4 col-md-4">
                                <FormKit type="date" name="data_fim" id="data-fim" label="Data Fim"
                                         help="Obrigatório" validation="required" v-model="formData.data_fim" placeholder="Data Fim" />
                            </div>
                            <div class="col-lg-4 col-md-4">
                                <FormKit type="date" name="data_prazo_inscricao" id="data_prazo_inscricao" label="Prazo de inscrição"
                                         help="Obrigatório" validation="required" v-model="formData.data_prazo_inscricao" placeholder="Prazo de inscrição" />
                            </div>
                        </div>

                        <div class="row form-group">
                            <div class="col-lg-12 col-md-12">
                                <FormKit type="text" name="responsavel" id="responsavel" label="Responsável"
                                         help="Obrigatório" validation="required|maxlen:150|maxlen:3" v-model="formData.responsavel" placeholder="Nome Responsável" />
                            </div>
                        </div>

                        <div class="row form-group">
                            <div class="col-lg-4 col-md-12">
                                <FormKit type="text" name="telefone_responsavel" id="telefone_responsavel" label="Telefone" v-mask="'(##) ####-####'"
                                         help="Obrigatório" validation="required" v-model="formData.telefone_responsavel" placeholder="(00) 0000-0000" />
                            </div>
                            <div class="col-lg-8 col-md-12">
                                <FormKit type="email" name="email_responsavel" id="email_responsavel" label="E-mail"
                                         help="Obrigatório" validation="required|email|maxlen:200" v-model="formData.email_responsavel" placeholder="E-mail" />
                            </div>
                        </div>

                        <div class="row form-group">
                            <div class="col-lg-2 col-md-6">
                                <SelectUfForm name="uf" v-model="formData.uf" />
                            </div>
                            <div class="col-lg-10 col-md-6">
                                <FormKit type="text" name="cidade" id="cidade" label="Cidade"
                                         validation="maxlen:100" v-model="formData.cidade" placeholder="Cidade" />
                            </div>
                        </div>

                        <div class="row form-group">
                            <div class="col-lg-12 col-md-12">
                                <FormKit type="text" name="local" id="local" label="Local"
                                         validation="maxlen:100" v-model="formData.local" placeholder="Local" />
                            </div>
                        </div>

                        <div class="row form-group">
                            <div class=" col-lg-12 col-md-12">
                                <FormKit type="textarea"
                                         name="descricao"
                                         label="Descrição do Evento"
                                         v-model="formData.descricao"
                                         :help="`${formData.descricao ? formData.descricao.length : 0} / 500`"
                                         validation="length:0,500"
                                         validation-visibility="live" />
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-6">
                        <div class="row form-group">
                            <div class="col-lg-12 col-md-12">
                                <FormKit type="file" name="logo_evento" label="Logo do Evento" accept=".jpg,.jpeg,.png" placeholder="Local" />
                            </div>
                        </div>

                        <div class="row form-group">
                            <div class="col-lg- col-md-">
                                <FormKit type="number" name="limite_inscritos" id="limiteInscritos" label="Limite de Inscritos"
                                         help="Obrigatório"
                                         validation="required|number" v-model="formData.limite_inscritos" placeholder="Limite de Inscritos" />
                            </div>
                        </div>

                        <div class="row form-group">
                            <div class="col-lg-12 col-md-12">
                                <FormKit type="text" name="url_inscricao" id="local" label="Link de Inscrição"
                                         validation="max:150" v-model="formData.url_inscricao" placeholder="Link de Inscrição" />
                            </div>
                        </div>

                        <div class="row form-group">
                            <div class="col-lg-12 col-md-12">
                                <b>Habilitar campos da Inscrição</b>
                            </div>
                            <hr>
                        </div>

                        <div class="row form-group">
                            <div class="col-lg-6 col-md-12 form-check form-switch">
                                <input name="campo_nome" class="form-check-input" type="checkbox" role="switch" v-model="formData.campo_extra.nome" value="1" checked disabled="disabled">
                                <label class="form-check-label" for="nome">Nome</label>
                            </div>
                            <div class="col-lg-6 col-md-12 form-check form-switch">
                                <input name="campo_sobrenome" class="form-check-input" type="checkbox" v-model="formData.campo_extra.sobrenome" value="1" role="switch" id="sobrenome" checked disabled="disabled">
                                <label class="form-check-label" for="sobrenome">Sobrenome</label>
                            </div>
                            <div class="col-lg-6 col-md-12 form-check form-switch">
                                <input name="campo_telefone" class="form-check-input" type="checkbox" v-model="formData.campo_extra.telefone" value="1" role="switch" id="telefone" checked disabled="disabled">
                                <label class="form-check-label" for="telefone">Telefone</label>
                            </div>
                            <div class="col-lg-6 col-md-12 form-check form-switch">
                                <input name="campo_email" class="form-check-input" type="checkbox" v-model="formData.campo_extra.email" value="1" role="switch" id="email" checked disabled="disabled">
                                <label class="form-check-label" for="email">E-mail</label>
                            </div>
                            <div class="col-lg-6 col-md-12 form-check form-switch">
                                <input name="campo_cpf" class="form-check-input" type="checkbox" v-model="formData.campo_extra.cpf" value="1" role="switch" id="cpf">
                                <label class="form-check-label" for="cpf">CPF</label>
                            </div>
                            <div class="col-lg-6 col-md-12 form-check form-switch">
                                <input name="campo_datanascimento" class="form-check-input" type="checkbox" v-model="formData.campo_extra.datanascimento" value="1" role="switch" id="datanascimento">
                                <label class="form-check-label" for="datanascimento">Data de Nascimento</label>
                            </div>
                            <div class="col-lg-6 col-md-12 form-check form-switch">
                                <input name="campo_sexo" class="form-check-input" type="checkbox" v-model="formData.campo_extra.sexo" value="1" role="switch" id="sexo">
                                <label class="form-check-label" for="sexo">Sexo</label>
                            </div>
                            <div class="col-lg-6 col-md-12 form-check form-switch">
                                <input name="campo_estado" class="form-check-input" type="checkbox" v-model="formData.campo_extra.estado" value="1" role="switch" id="estado-campos">
                                <label class="form-check-label" for="estado-campos">Estado</label>
                            </div>
                            <div class="col-lg-6 col-md-12 form-check form-switch">
                                <input name="campo_cidade" class="form-check-input" type="checkbox" v-model="formData.campo_extra.cidade" value="1" role="switch" id="cidade">
                                <label class="form-check-label" for="cidade">Cidade</label>
                            </div>
                            <div class="col-lg-6 col-md-12 form-check form-switch">
                                <input name="campo_endereco" class="form-check-input" type="checkbox" v-model="formData.campo_extra.endereco" value="1" role="switch" id="endereco">
                                <label class="form-check-label" for="endereco">Endereço</label>
                            </div>
                            <div class="col-lg-6 col-md-12 form-check form-switch">
                                <input name="campo_cep" class="form-check-input" type="checkbox" v-model="formData.campo_extra.cep" value="1" role="switch" id="cep">
                                <label class="form-check-label" for="cep">CEP</label>
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
import { ref } from 'vue';
import CardForm from "@/components/CardForm.vue";
import SelectUfForm from "@/components/SelectUfForm.vue";
import SectionNavegacao from '@/components/SectionNavegacao.vue';
import Swal from 'sweetalert2';
import axios from '../../router/services/axiosConfig.js';

const formData = ref({
    nome_evento: '',
    data_inicio: '',
    data_fim: '',
    data_prazo_inscricao: '',
    responsavel: '',
    telefone_responsavel: '',
    email_responsavel: '',
    uf: '',
    cidade: '',
    local: '',
    descricao: '',
    logo_evento: null,
    limite_inscritos: '',
    url_inscricao: '',
    campo_extra: {
        nome: true,
        sobrenome: true,
        telefone: true,
        email: true,
        cpf: false,
        datanascimento: false,
        sexo: false,
        estado: false,
        cidade: false,
        endereco: false,
        cep: false
    },
});

const submitForm = async () => {
    try {
        const response = await axios.post('evento/store/', formData.value);
        Swal.fire({
            icon: 'success',
            title: 'Sucesso!',
            text: 'Registrado com sucesso!',
        });
        console.log(response.data);
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Erro!',
            text: 'Erro ao enviar o evento!',
        });
        console.error('Erro ao enviar dados:', error);
    }
};

</script>