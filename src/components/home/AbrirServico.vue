<template>
  <div id="abrir-servico" uk-modal>
    <div class="uk-modal-dialog uk-modal-body">
      <h2 class="uk-modal-title">Abrir Serviço</h2>
      <form class="uk-form-stacked">
        <div class="uk-margin">
          <div class="uk-form-controls">
          <div class="uk-form-label">Escolha Atividade</div>
              <input
                class="uk-input"
                id="nome"
                type="search"
                list="atividades"
              />
            <datalist id="atividades">
              <option value="Eletricista"></option>
              <option value="Chaveiro"></option>
              <option value="Professor"></option>
              <option value="Advogado"></option>
              <option value="Medico"></option>
            </datalist>
          </div>
        </div>
        <div class="uk-margin">
          <div class="uk-form-label">Descrição do Serviço</div>
          <div class="uk-form-controls">
            <textarea class="uk-textarea" rows="5" placeholder=""></textarea>
          </div>
        </div>
        <div class="uk-align-right uk-margin">
          <button class="uk-button uk-button-default uk-modal-close">Cancelar</button>
          <button class="uk-button uk-button-primary">Salvar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AbrirServiço",
  props: ["cardClass"],
};
</script>

<style scoped>
</style>