<template>
  <div id="login" v-bind:class="{ 'uk-margin-large-top': !isCadastro }">
    <div
      class="
        uk-card
        ea-card-login
        uk-card-body
        uk-margin-auto
        uk-width-1-2
        uk-box-shadow-xlarge
        uk-padding-remove-bottom
        uk-padding-remove-top
      "
    >
      <p
        class="
          uk-card-title
          uk-text-center
          uk-margin-small-top
          uk-margin-small-bottom
        "
      >
        {{ isCadastro ? "Cadastro de Usuário" : "Login" }}
      </p>
      <hr class="uk-margin-small" />
      <form autocomplete="off">
        <div v-if="isCadastro" class="uk-margin">
          <div class="uk-form-controls">
            <div class="uk-inline">
              <span class="uk-form-icon" uk-icon="icon: user"></span>
              <input
                class="uk-input"
                type="text"
                id="nome"
                placeholder="Nome Completo"
              />
            </div>
          </div>
        </div>
        <div class="uk-margin">
          <div class="uk-form-controls">
            <div class="uk-inline">
              <span class="uk-form-icon" uk-icon="icon: mail"></span>
              <input
                class="uk-input"
                type="text"
                id="email"
                placeholder="E-mail"
              />
            </div>
          </div>
        </div>
        <div v-if="isCadastro" class="uk-margin">
          <div class="uk-form-controls">
            <div class="uk-inline">
              <span class="uk-form-icon" uk-icon="icon: receiver"></span>
              <input
                class="uk-input"
                type="text"
                id="telefone"
                placeholder="telefone"
              />
            </div>
          </div>
        </div>
        <div class="uk-margin">
          <div class="uk-form-controls">
            <div class="uk-inline">
              <span class="uk-form-icon" uk-icon="icon: 500px"></span>
              <input
                class="uk-input"
                type="password"
                id="senha"
                placeholder="Senha"
              />
            </div>
          </div>
        </div>
        <div v-if="isCadastro" class="uk-margin">
          <div class="uk-form-controls">
            <div class="uk-inline">
              <span class="uk-form-icon" uk-icon="icon: 500px"></span>
              <input
                class="uk-input"
                type="text"
                id="confirmaSenha"
                placeholder="Confirmar Senha"
              />
            </div>
          </div>
        </div>
      </form>
      <div class="uk-margin uk-text-center">
        <a class="ea-link-cadastro" href="#" @click.prevent="isCadastrar">{{
          isCadastro
            ? "Já possui cadastro? clique aqui!"
            : "Não possue cadastro? clique aqui!"
        }}</a>
      </div>
      <div class="uk-align-right uk-margin-bottom">
        <a href="/easyservice" class="uk-button uk-button-primary">
          {{ isCadastro ? "Cadastrar" : "Entrar" }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      isCadastro: false,
    };
  },
  methods: {
    isCadastrar() {
      this.isCadastro = !this.isCadastro;
    },
  },
};
</script>

<style scoped>
.ea-card-login {
  background-color: rgba(255, 255, 255, 0.2);
}
.ea-link-cadastro {
  font-size: 12px;
}
</style>