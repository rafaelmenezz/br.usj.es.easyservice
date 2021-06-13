<template>
<div>
    <div class="uk-position-center">
        <div class="uk-card uk-card-default uk-child-width-1-2" uk-grid>
            <div class="uk-card-media-left uk-cover-container">
                <img src="imagens/azul.png" alt="" uk-cover>
                <canvas width="" height=""></canvas>
            </div>
            <div>
                <div class="uk-card-body">
                    <h3>Cadastro de Usuário</h3>
                    <form>
                        <div class="uk-margin">
                            <input class="uk-input uk-form-width-large" type="text" placeholder="Nome Completo">
                        </div>
                        <div class="uk-margin">
                            <input class="uk-input uk-form-width-large" type="email" placeholder="E-Mail">
                        </div>
                        <div class="uk-margin">
                            <input class="uk-input uk-form-width-large" type="text" placeholder="Telefone">
                        </div>
                        <div class="uk-margin">
                            <input class="uk-input uk-form-width-large" type="password" placeholder="Senha">
                        </div>
                        <div class="uk-margin">
                            <input class="uk-input uk-form-width-large" type="password" placeholder="Confirma Senha">
                        </div>
                        <div class="uk-align-right">
                            <a href="/easyservice" class="uk-button uk-button-primary">Cadastrar</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>

    <div class="uk-position-bottom-center">
        <p uk-margin>
            Desenvolvido pela equipe superstars <a href="#">EasyService</a>. São José-SC, 2021
        </p>
    </div>
    </div>
</template>