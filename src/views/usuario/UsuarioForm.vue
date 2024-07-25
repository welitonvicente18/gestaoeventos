<template>

    <SectionNavegacao>
        <template v-slot:title>Usuários</template>
    </SectionNavegacao>

    <CardForm>
        <template v-slot:title>Adicionar Usuário</template>
        <template v-slot:body>

            <form name="form" id="form" action="?" method="post">
                <div class="row">
                    <div class="col-md-12 col-lg-12">
                        <div class="row form-group">
                            <div class="col-lg-6 col-md-6">
                                <label for="email2">Nome</label>
                                <input type="text" class="form-control" id="evento" placeholder="Nome do usuário" />
                            </div>
                            <div class="col-lg-3 col-md-3">
                                <label for="cpf">CPF: </label>
                                <input type="text" class="form-control" id="cpf" name="cpf" placeholder="CPF" />
                            </div>
                        </div>

                        <div class="row form-group">
                            <div class="col-lg-3 col-md-3">
                                <label for="data_nascimento">Data de Nascimento</label>
                                <input type="text" class="form-control" id="data_nascimento" name="data_nascimento" placeholder="__/__/____" />
                            </div>

                            <div class="col-lg-3 col-md-3">
                                <label for="telefone">Telefone</label>
                                <input type="text" class="form-control" id="telefone" name="telefone" placeholder="(00) 0000-0000" />
                            </div>

                            <div class="col-lg-6 col-md-6">
                                <label for="email">E-mail</label>
                                <input type="text" class="form-control" id="email" name="email" placeholder="E-mail" />
                            </div>

                        </div>

                        <div class="row form-group">
                            <div class="col-lg-2 col-md-2">
                                <label for="uf">Estado</label>
                                <select class="form-select form-control" placeholder="Selecione">
                                    <option></option>
                                </select>
                            </div>
                            <div class="col-lg-3 col-md-3">
                                <label for="cidade">Cidade</label>
                                <input type="text" class="form-control" id="cidade" name="cidade" placeholder="Cidade" />
                            </div>
                            <div class="col-lg-4 col-md-4">
                                <label for="cidade">Endereço</label>
                                <input type="text" class="form-control" id="cidade" name="cidade" placeholder="Endereço" />
                            </div>
                            <div class="col-lg-3 col-md-3">
                                <label for="cidade">CEP</label>
                                <input type="text" class="form-control" id="cidade" name="cidade" placeholder="CEP" />
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