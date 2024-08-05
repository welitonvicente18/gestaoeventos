<template>

    <SectionNavegacao>
        <template v-slot:title>Usuários</template>
    </SectionNavegacao>

    <CardForm>
        <template v-slot:title>Adicionar Usuário</template>
        <template v-slot:body>

            <FormKit
                     type="form"
                     :config="{ validationVisibility: 'submit' }"
                     @submit="submitForm"
                     submit-label="Atualizar Usuário">

                <div class="row">
                    <div class="col-md-12 col-lg-12">
                        <div class="row form-group">
                            <div class="col-lg-6 col-md-6">
                                <FormKit type="text" name="name" id="name" label="Nome"
                                         validation="required" v-model="formData.name" placeholder="Nome do usuário" />
                            </div>
                        </div>
                        <div class="row form-group">
                            <div class="col-lg-4 col-md-4">
                                <FormKit type="text" name="telefone" id="telefone" label="Telefone" v-mask="'(##) ####-####'"
                                         validation="required" v-model="formData.telefone" placeholder="(00) 0000-0000" />
                            </div>
                            <div class="col-lg-4 col-md-4">
                                <FormKit type="email" name="email" id="email" label="E-mail"
                                         validation="required|email" v-model="formData.email" placeholder="E-mail" />
                            </div>
                            <div class="col-lg-4 col-md-4">
                                <FormKit
                                         type="select"
                                         label="Perfil"
                                         validation="required" v-model="formData.perfil"
                                         :options="[
                                            { label: 'Administrador', value: '1' },
                                            { label: 'Usuário do Sistema', value: '2' },
                                        ]" />
                            </div>
                        </div>
                        <div class="row form-group">
                            <div class="col-lg-6 col-md-6">
                                <FormKit type="password" name="password" v-model="formData.password" label="Senha"
                                         validation="" validation-visibility="live" />
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <FormKit type="password" name="password_confirm" v-model="formData.password_confirmation" label="Confirmar Senha"
                                         validation="confirm" validation-visibility="live" validation-label="Confirmar Senha" />
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
import SectionNavegacao from '@/components/SectionNavegacao.vue';
import axios from 'axios';
import Swal from 'sweetalert2';

const formData = ref({
    id: '',
    name: '',
    email: '',
    perfil: '',
    telefone: '',
    password: '',
    password_confirmation: '',
});

onMounted(() => {

    const router = useRouter();
    const id = router.currentRoute.value.params.id;

    axios.get(`/usuario/show/${id}`)
        .then(function (response) {
            const usuario = response.data.data;
            formData.value = {
                id: usuario.id,
                name: usuario.name,
                email: usuario.email,
                perfil: usuario.perfil,
                telefone: usuario.telefone,
            };
            console.log(response);
        })
        .catch(function (error) {
            Swal.fire({
                icon: 'error',
                title: 'error!',
                text: 'Erro ao buscar o cadastrar!',
            });
            console.log(error);
        });
});

function submitForm() {

    const update = {
        ...formData.value
    };

    console.log(update)
    axios.put(`usuario/update/${formData.value.id}`, update)
        .then(function (response) {
            Swal.fire({
                icon: 'success',
                title: 'Sucesso!',
                text: 'Cadastrado com sucesso!',
            });
            console.log(response);
        })
        .catch(function (error) {
            Swal.fire({
                icon: 'error',
                title: 'error!',
                text: 'Erro ao buscar o cadastrar!',
            });
            console.log(error);
        });
}
</script>