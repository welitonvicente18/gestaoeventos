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

            <form @submit.prevent="submitForm">
                <div class="row">
                    <div class="col-md-6 col-lg-6">
                        <div class="row form-group">
                            <div class="col-lg-12 col-md-12">
                                <FormKit type="text" name="nome_evento" id="nome-evento" label="Nome do evento"
                                         validation="required" v-model="formData.nome_evento" placeholder="Nome do evento" />
                            </div>
                        </div>

                        <div class="row form-group">
                            <div class=" col-lg-6 col-md-6">
                                <FormKit type="date" name="data_inicio" id="data_inicio" label="Data de Início"
                                         validation="required" v-model="formData.data_inicio" placeholder="Nome do evento" />
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <FormKit type="date" name="data_fim" id="data-fim" label="Data Fim"
                                         validation="required" v-model="formData.data_fim" placeholder="Data Fim" />
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <FormKit type="date" name="data_prazo_inscricao" id="data_prazo_inscricao" label="Prazo de inscrição"
                                         validation="required" v-model="formData.data_prazo_inscricao" placeholder="Prazo de inscrição" />
                            </div>
                        </div>

                        <div class="row form-group">
                            <div class="col-lg-12 col-md-12">
                                <FormKit type="text" name="responsavel" id="responsavel" label="Responsável"
                                         validation="required|max:150" v-model="formData.responsavel" placeholder="Nome Responsável" />
                            </div>
                        </div>

                        <div class="row form-group">
                            <div class="col-lg-4 col-md-12">
                                <FormKit type="text" name="telefone_responsavel" id="telefone_responsavel" label="Telefone" v-mask="'(##) ####-####'"
                                         validation="required" v-model="formData.telefone_responsavel" placeholder="(00) 0000-0000" />
                            </div>
                            <div class="col-lg-8 col-md-12">
                                <FormKit type="email" name="email_responsavel" id="email_responsavel" label="E-mail"
                                         validation="required|email|max:200" v-model="formData.email_responsavel" placeholder="E-mail" />
                            </div>
                        </div>

                        <div class="row form-group">
                            <div class="col-lg-3 col-md-4">
                                <SelectUfForm name="uf" v-model="formData.uf" />
                                <p>UF selecionado: {{ formData.uf }}</p>
                            </div>
                            <div class="col-lg-6 col-md-4">
                                <FormKit type="text" name="cidade" id="email" label="Cidade"
                                         validation="required|email|max:100" v-model="formData.cidade" placeholder="Cidade" />
                            </div>
                        </div>

                        <div class="row form-group">
                            <div class="col-lg-12 col-md-12">
                                <FormKit type="text" name="local" id="local" label="Local"
                                         validation="required|max:100" v-model="formData.local" placeholder="Local" />
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
                            <div class="col-lg-12 col-md-12">
                                <FormKit type="number" name="limite_nscritos" id="limiteInscritos" label="Limite de Inscritos"
                                         validation="required" v-model="formData.limite_nscritos" placeholder="Limite de Inscritos" />
                            </div>
                        </div>

                        <div class="row form-group">
                            <div class="col-lg-12 col-md-12">
                                <div class="input-group mb-3">
                                    <FormKit type="text" name="url_inscricao" id="local" label="Link de Inscrição"
                                             validation="required|max:150" v-model="formData.url_inscricao" placeholder="Link de Inscrição" />
                                </div>
                            </div>
                        </div>

                        <div class="row form-group">
                            <div class="col-lg-12 col-md-12">
                                Habilitar Campos do Personalizados
                            </div>
                            <hr>
                        </div>

                        <div class="row form-group">
                            <div class="col-lg-6 col-md-12 form-check form-switch">
                                <input name="campo_cpf" class="form-check-input" type="checkbox" role="switch" id="cpf" checked>
                                <label class="form-check-label" for="cpf">CPF</label>
                            </div>
                            <div class="col-lg-6 col-md-12 form-check form-switch">
                                <input name="campo_rg" class="form-check-input" type="checkbox" role="switch" id="rg" checked>
                                <label class="form-check-label" for="rg">RG</label>
                            </div>
                            <div class="col-lg-6 col-md-12 form-check form-switch">
                                <input name="campo_datanascimento" class="form-check-input" type="checkbox" role="switch" id="datanascimento" checked>
                                <label class="form-check-label" for="datanascimento">Data de Nascimento</label>
                            </div>
                            <div class="col-lg-6 col-md-12 form-check form-switch">
                                <input name="campo_sexo" class="form-check-input" type="checkbox" role="switch" id="sexo" checked>
                                <label class="form-check-label" for="sexo">Sexo</label>
                            </div>
                            <div class="col-lg-6 col-md-12 form-check form-switch">
                                <input name="campo_telefone" class="form-check-input" type="checkbox" role="switch" id="telefone" checked>
                                <label class="form-check-label" for="telefone">Telefone</label>
                            </div>
                            <div class="col-lg-6 col-md-12 form-check form-switch">
                                <input name="campo_email" class="form-check-input" type="checkbox" role="switch" id="email" checked>
                                <label class="form-check-label" for="email">E-mail</label>
                            </div>
                            <div class="col-lg-6 col-md-12 form-check form-switch">
                                <label class="form-check-label" for="estado">Estado</label>
                                <SelectUfForm name="estado" id="estado" />
                            </div>
                            <div class="col-lg-6 col-md-12 form-check form-switch">
                                <input name="campo_cidade" class="form-check-input" type="checkbox" role="switch" id="cidade" checked>
                                <label class="form-check-label" for="cidade">Cidade</label>
                            </div>
                            <div class="col-lg-6 col-md-12 form-check form-switch">
                                <input name="campo_endereco" class="form-check-input" type="checkbox" role="switch" id="endereco" checked>
                                <label class="form-check-label" for="endereco">Endereço</label>
                            </div>
                            <div class="col-lg-6 col-md-12 form-check form-switch">
                                <input name="campo_cep" class="form-check-input" type="checkbox" role="switch" id="cep" checked>
                                <label class="form-check-label" for="cep">CEP</label>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="col-lg-12 col-md-12">
                    <div class="row form-group">
                        <div class="col-lg-12 col-md-12 destaque">
                            <span>Habilitar Novos Campos</span>
                        </div>
                        <hr>
                    </div>
                    <div class="row" id="container-principal">
                        <div class="row" id="new_campo">
                            <div class="col-lg-8 col-md-8">
                                <label for="">Pergunta</label>
                                <input type="text" name="new_campo[]" class="form-control" value="" />
                            </div>
                            <div class="col-lg-4 col-md-4">
                                <label for="">Obrigatório</label>
                                <br>
                                <input type="radio" name="new_campo[]" value="2"
                                       class="form-check-input" /> Sim
                                <input type="radio" name="new_campo[]" value="1"
                                       class="form-check-input" /> Não
                            </div>

                            <div class="clear"></div>

                            <div class="col-lg-8 col-md-8">
                                <label for="">Campo</label>
                                <div class="col-lg-12 col-md-12" id="container-campo">
                                    <input type="text" name="new_campo[]" class="form-control "
                                           placeholder="Responder a pergunta" disabled="">
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-4">
                                <label for="">Tipo</label>
                                <select name="new_campo[]" id="tipo" class="form-control form-select"
                                        @change="addTipoCampo($event)">
                                    <option value="1">Texto</option>
                                    <option value="2">Múltipla escolha</option>
                                    <option value="3">Caixa de seleção</option>
                                    <option value="4">Combo de seleção</option>
                                </select>
                            </div>
                            <hr class="m-1">
                        </div>
                    </div>

                    <div class="row col-lg-12 col-md-12">
                        <div class="col-lg-9 col-md-9 text-start">
                        </div>
                        <div class=" col-lg-3 col-md-3 text-start">
                            <span class="btn-sm btn-success btn-round" @click="addPergunta()">Novo</span>
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
import SectionNavegacao from '@/components/SectionNavegacao.vue';
import axios from 'axios';
import Swal from 'sweetalert2';

const formData = ref({
    nome_evento: '',
    data_inicio: '',
    date_fim: '',
    data_prazo_inscricao: '',
    responsavel: '',
    telefone_responsavel: '',
    email_responsavel: '',
    uf: '',
    cidade: '',
    local: '',
    descricao: '',
    logo_evento: '',
    limite_nscritos: '',
    url_inscricao: '',
    new_campo: [],
});

const isSubmitting = ref(false);

function submitForm(formData) {
console.log(formData)
    if (isSubmitting.value) return;

    isSubmitting.value = true;

    const update = {
        id: formData.id,
        nome_evento: formData.nome_evento,
        data_inicio: formData.data_inicio,
        date_fim: formData.date_fim,
        data_prazo_inscricao: formData.data_prazo_inscricao,
        responsavel: formData.responsavel,
        telefone_responsavel: formData.telefone_responsavel,
        email_responsavel: formData.email_responsavel,
        uf: formData.uf,
        cidade: formData.cidade,
        local: formData.local,
        descricao: formData.descricao,
        logo_evento: formData.logo_evento,
        limite_nscritos: formData.limite_nscritos,
        url_inscricao: formData.url_inscricao,
        campos_adicionais: formData.campos_adicionais,
    };

    axios.put(`evento/update/${formData.id}`, update)
        .then(response => {
            Swal.fire({
                icon: 'success',
                title: 'Sucesso!',
                text: 'Registro atualizado com sucesso!',
            });
            console.log(response.data);
        })
        .catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'error!',
                text: 'Erro ao enviar os evento!',
            });
            console.error('Erro ao enviar dados:', error);
        })
        .finally(() => {
            isSubmitting.value = false; // Reabilita o botão após a requisição
        });
}

function addPergunta() {
    const new_campo = document.getElementById("new_campo");

    const clone = new_campo.cloneNode(true);

    // clone.innerHTML = '';

    const uniqueId = `${Date.now()}`;
    clone.id = `new_campo-${uniqueId}`;

    const containerCampo = clone.querySelector('#container-campo');
    if (containerCampo) {
        containerCampo.id = `container-campo-${uniqueId}`;
    }

    document.getElementById("container-principal").appendChild(clone);

    const selectElement = clone.querySelector('select');
    if (selectElement) {
        selectElement.addEventListener('change', this.addTipoCampo.bind(this));
    }
}

function addTipoCampo(evt) {

    let idConteiner = evt.target.parentNode.parentNode.id.split('-')[1];
    const selectedValue = evt.target.value;

    let tipoCampo = '';
    if (idConteiner === undefined) {
        tipoCampo = document.getElementById('container-campo');
        idConteiner = '';
    } else {
        // console.log('else');
        tipoCampo = document.getElementById('container-campo-' + idConteiner);
    }

    // Limpa o conteúdo anterior
    tipoCampo.innerHTML = '';

    const label = document.createElement('label');
    label.textContent = 'Campo';
    tipoCampo.appendChild(label);

    const newDiv = document.createElement('div');
    newDiv.className = 'col-lg-12 col-md-12';
    tipoCampo.appendChild(newDiv);

    // Adiciona o novo campo com base na seleção
    if (selectedValue == '1') {
        const input = document.createElement('input');
        input.type = 'text';
        input.name = 'new_campo[]';
        input.className = 'form-control ';
        input.placeholder = 'Responder a pergunta';
        input.disabled = true;
        newDiv.appendChild(input);

    } else if (selectedValue == '2' || selectedValue == '3') {

        const input = document.createElement('input');
        input.type = 'text';
        input.name = 'new_campo[]';
        input.className = 'form-control ';
        input.placeholder = 'Opção de resposta';
        newDiv.appendChild(input);

        const newDiv2 = document.createElement('div');
        newDiv2.className = 'col-lg-12 col-md-12 mt-1 text-end';
        if (idConteiner) {
            newDiv2.id = 'containeropcao-' + idConteiner;
        } else {
            newDiv2.id = 'containeropcao';
        }

        const label2 = document.createElement('span');
        label2.textContent = 'Novo';
        label2.className = 'btn-sm btn-primary btn-round';
        label2.addEventListener('click', this.addOpcao);

        newDiv2.appendChild(label2);
        tipoCampo.appendChild(newDiv2);

    }
}

// function addOpcao(evt) {

//     const idConteiner = evt.target.parentElement.id.split('-')[1];

//     let tipoCampo2 = '';
//     if (idConteiner === undefined) {
//         tipoCampo2 = document.getElementById('container-campo');
//     } else {
//         tipoCampo2 = document.getElementById('container-campo-' + idConteiner);
//     }

//     const input = document.createElement('input');
//     input.type = 'text';
//     input.name = 'new_campo[]';
//     input.className = 'form-control ';
//     input.placeholder = 'Opção de resposta';

//     tipoCampo2.appendChild(input);
// }

onMounted(() => {

    const router = useRouter();
    const id = router.currentRoute.value.params.id;

    axios.get(`evento/show/${id}`)
        .then(response => {
            const evento = response.data.data;
            formData.value = {
                ...formData.value,
                ...evento
            };
            console.log('asdf');
        })
        .catch(error => {
            console.log('Erro ao buscar detalhes do evento', error);
            Swal.fire({
                icon: 'error',
                title: 'error!',
                text: 'Erro ao buscar detalhes do evento!',
            });
        })
});



</script>