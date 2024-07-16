<template>

    <SectionNavegacao v-if="!$route.params.id">
        <template v-slot:title>Eventos</template>
        <template v-slot:navegacao1>
            <routerLink :to="{ name: 'eventoListar' }">Listar</routerLink>
        </template>
    </SectionNavegacao>

    <CardForm>
        <template v-slot:title>Inscrição do Participante</template>
        <template v-slot:body>

            <form name="form" id="form" action="?" method="post">
                <div class="row">
                    <div class="col-md-6 col-lg-6">
                        <div class="form-group">
                            <label for="email2">Evento</label>
                            <input type="text" class="form-control" id="evento" placeholder="Nome do evento" />
                        </div>

                        <div class="row  form-group">
                            <div class=" col-lg-4 col-md-4">
                                <label for="data_inicio">Data de Início</label>
                                <input type="datetime-local" class="form-control" id="data_inicio" name="data_inicio" placeholder="Data início" />
                            </div>
                            <div class="col-lg-4 col-md-4">
                                <label for="data_fim">Data de Fim</label>
                                <input type="datetime-local" class="form-control" id="data_fim" name="data_fim" placeholder="Data FIm" />
                            </div>
                            <div class="col-lg-4 col-md-4">
                                <label for="data_prazo_inscricao">Prazo de inscrição</label>
                                <input type="datetime-local" class="form-control" id="data_prazo_inscricao" name="data_prazo_inscricao" placeholder="Prazo de Incrição" />
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-lg-12 col-md-12">
                                <label for="responsavel">Responsável</label>
                                <input type="text" class="form-control" id="responsavel" name="responsavel" placeholder="Nome Responsável" />
                            </div>
                        </div>

                        <div class="row form-group">
                            <div class="col-lg-4 col-md-12">
                                <label for="telefone_responsavel">Telefone do Responsável</label>
                                <input type="text" class="form-control" id="telefone_responsavel" name="telefone_responsavel" placeholder="(00) 0000-0000" />
                            </div>
                            <div class="col-lg-8 col-md-12">
                                <label for="email_responsavel">E-mail do Responsável</label>
                                <input type="text" class="form-control" id="email_responsavel" name="email_responsavel" placeholder="E-mail" />
                            </div>
                        </div>

                        <div class="row form-group">
                            <div class="col-lg-3 col-md-4">
                                <label for="uf">Estado</label>
                                <select class="form-control">
                                    <option></option>
                                </select>
                            </div>
                            <div class="col-lg-6 col-md-4">
                                <label for="cidade">Cidade</label>
                                <input type="text" class="form-control" id="cidade" name="cidade" placeholder="Cidade" />
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-lg-12 col-md-12">
                                <label for="local">Local</label>
                                <input type="text" class="form-control" id="local" name="local" placeholder="Local" />
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="descricao">Descrição do Evento:</label>
                            <textarea class="form-control" name="descricao" id="descricao" rows="5"></textarea>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-6">
                        <div class="form-group">
                            <label for="exampleFormControlFile1" class="mt-3 mb-3">Logo do Evento</label>
                            <br>
                            <input type="file" name="logo_evento" class="form-control-file" id="exampleFormControlFile1" />
                        </div>


                        <div class="form-group">
                            <div class="col-lg-12 col-md-12">
                                <label for="limiteInscritos">Limite de Inscritos</label>
                                <input type="number" class="form-control" id="limiteInscritos" name="limite_nscritos" placeholder="Limite de Inscritos" />
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="basic-url">Link de Inscrição</label>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
                                <input type="text" name="url_inscricao" class="form-control" id="basic-url" aria-describedby="basic-addon3">
                            </div>
                        </div>
                    </div>

                </div>
            </form>

        </template>

        <template v-slot:footer>
            <button class="btn btn-success">Salvar</button>
        </template>

    </CardForm>

</template>

<script>

import CardForm from "@/components/CardForm.vue";
import SectionNavegacao from '@/components/SectionNavegacao.vue';

export default {
    name: "EventoForm",
    components: {
        CardForm, SectionNavegacao
    }
};
</script>