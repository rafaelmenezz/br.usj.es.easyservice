<template>
  <div id="perfil-profissional" uk-modal>
    <div class="uk-modal-dialog uk-modal-body">
      <button class="uk-modal-close-default" type="button" uk-close></button>
      <h2 class="uk-modal-title">EasyService Engenharia de Software</h2>
      <div class="uk-panel uk-width-1-1" style="height: 6vh">
        <div class="uk-align-right" uk-margin>
          <ul class="uk-iconnav">
            <li>
              <button
                class="uk-button uk-button-small uk-button-secondary"
                uk-icon="icon: file-edit"
              ></button>
            </li>
          </ul>
        </div>
      </div>

      <div class="uk-panel uk-panel-scrollable" style="height: 50vh">
        <form class="uk-form-stacked">
          <div class="uk-margin">
            <label class="uk-form-label" for="nome">Razão Social</label>
            <div class="uk-form-controls">
              <input
                class="uk-input"
                id="nome"
                type="text"
                placeholder="EasyService Engenharia de Software me"
                disabled
              />
            </div>
          </div>
          <div class="uk-margin">
            <label class="uk-form-label" for="nome">Nome de Fantasia</label>
            <div class="uk-form-controls">
              <input
                class="uk-input"
                id="nome"
                type="text"
                placeholder="EasyService Soluções Tecnologicas"
                disabled
              />
            </div>
          </div>
         
          <div class="uk-margin">
            <label class="uk-form-label" for="cnpj">CNPJ</label>
            <div class="uk-form-controls">
              <input
                class="uk-input"
                id="cnpj"
                type="text"
                placeholder="XX.XXX.XXX/YYYY-ZZ"
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
           <div class="uk-margin uk-text-center">
            <label class="uk-form-label" for="nome">Atividades</label>
            <div class="uk-form-controls">
              <span class="uk-label uk-margin-right">Desenvolvimento Software</span>

              <span class="uk-label uk-margin-right">Consultoria TI</span>

              <span class="uk-label uk-margin-right">Serviços Eletrónicos</span>
            </div>
          </div>
        </form>
      </div>
      <p uk-margin>
        <button
          class="uk-button uk-button-default uk-align-right uk-modal-close"
        >
          Fechar
        </button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PerfilProfissional",
  props: ["cardClass"],
};
</script>

<style scoped>
</style>