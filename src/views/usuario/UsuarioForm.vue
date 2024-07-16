<template>
    <div class="row">
        <div class="col-md-6 col-lg-6">

            <div class="row form-group">
                <div class="col-lg-12 col-md-12">
                    <label for="nome">Nome</label>
                    <input type="text" class="form-control" id="nome" name="nome" placeholder="Nome" />
                </div>
                <div class="col-lg-4 col-md-12">
                    <label for="cpf">CPF:</label>
                    <input type="text" class="form-control" id="cpf" name="cpf" placeholder="000.000.000-00" />
                </div>
                <div class="clearflix"></div>
                <div class="col-lg-4 col-md-12">
                    <label for="telefone">Telefone</label>
                    <input type="text" class="form-control" id="telefone" name="telefone" placeholder="(00) 0000-0000" />
                </div>
                <div class="col-lg-8 col-md-12">
                    <label for="email">E-mail</label>
                    <input type="email" class="form-control" id="email" name="email" placeholder="E-mail" />
                </div>
            </div>

        </div>

        <div class="col-md-6 col-lg-6">
            <div class="form-group">
                <label for="foto" class="mt-3 mb-3">Foto</label>
                <br>
                <input type="file" name="foto" class="form-control-file" id="foto" />
            </div>
        </div>

        <hr class="mt-3 mb-3">
        <div class="clearflix"></div>

        <div class="col-md-6 col-lg-6">
            <div class="row form-group">
                <div class="col-lg-6 col-md-6">
                    <label for="usuario">Usuário</label>
                    <input type="text" class="form-control" id="usuario" name="usuario" placeholder="Usuário" />
                </div>
                <div class="col-lg-6 col-md-6">
                    <label for="senha">Senha</label>
                    <input type="password" class="form-control" id="senha" name="senha" placeholder="" />
                </div>
            </div>
        </div>
        <div class="col-md-6 col-lg-6">
            <div class="row form-group">
                <div class="col-lg-6 col-md-6">
                    <label for="perfil">Perfil</label>
                    {html_options name=perfil options=$PERFIL_OPTIONS selected=$REGISTRO.idpatrimoniolocalizacao class='form-select required'}
                </div>
            </div>
        </div>

        <hr class="mt-3 mb-3">
        <div class="clearflix"></div>
        <div class="card-title">Módulos</div>

    </div>
    </div>
    <div class="card-action">
        <button class="btn btn-success">Salvar</button>
        <button class="btn btn-danger">Cancelar</button>
    </div>
</template>