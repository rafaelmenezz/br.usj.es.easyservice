<template>
  <div id="perfil-pessoal" uk-modal>
    <div class="uk-modal-dialog uk-modal-body">
        <button class="uk-modal-close-default" type="button" uk-close></button>
      <h2 class="uk-modal-title">Perfil - Nome do Usuário</h2>
      <div class="uk-panel uk-width-1-1" style="height: 6vh">
        <div class="uk-align-right" uk-margin>
          <ul class="uk-iconnav">
            <li><button class="uk-button uk-button-small uk-button-secondary"  uk-icon="icon: file-edit"></button></li>
          </ul>
        </div>
      </div>

      <div class="uk-panel uk-panel-scrollable" style="height: 50vh">
        <form class="uk-form-stacked">
          <div class="uk-margin">
            <label class="uk-form-label" for="nome">Nome Completo</label>
            <div class="uk-form-controls">
              <input
                class="uk-input"
                id="nome"
                type="text"
                placeholder="Felipe Everton Rafael"
                disabled
              />
            </div>
          </div>
          <div class="uk-margin">
            <label class="uk-form-label" for="email">E-mail</label>
            <div class="uk-form-controls">
              <input
                class="uk-input"
                id="email"
                type="email"
                placeholder="easyservice@easyservice.com"
                disabled
              />
            </div>
          </div>
          <div class="uk-margin">
            <label class="uk-form-label" for="telefone">Telefone</label>
            <div class="uk-form-controls">
              <input
                class="uk-input"
                id="telefone"
                type="text"
                placeholder="48 98499 9955"
                disabled
              />
            </div>
          </div>
        </form>
      </div>
      <p uk-margin>
        <button class="uk-button uk-button-default uk-align-right uk-modal-close" >
          Fechar
        </button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PerfilPessoal",
  props: ["cardClass"],
};
</script>

<style scoped>
</style>