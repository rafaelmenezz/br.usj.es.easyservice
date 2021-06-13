<template>
  <div class="uk-section" id="pesquisa" uk-offcanvas>
    <div class="uk-offcanvas-bar uk-background-primary">
      <button class="uk-offcanvas-close" type="button" uk-close></button>
      <form class="uk-form-stacked">
        <div class="uk-margin">
          <label class="uk-form-label" for="form-stacked-text"
            >Pesquisar Profissional</label
          >
          <div class="uk-form-controls">
            <div class="uk-inline">
              <a
                class="uk-form-icon uk-form-icon-flip"
                href="#"
                uk-icon="icon: search"
              ></a>
              <input class="uk-input" type="text" />
            </div>
          </div>
        </div>
        <div class="uk-margin">
          <label class="uk-form-label" for="form-stacked-text"
            >Raio de Busca</label
          >
          <div class="uk-form-controls">
            <input
              class="uk-range"
              type="range"
              value="0"
              min="0"
              max="50"
              step="0.1"
            />
          </div>
        </div>
      </form>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PanelPesquisa",
};
</script>