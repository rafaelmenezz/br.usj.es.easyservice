<template>
  <div id="upgrade" uk-modal>
    <div class="uk-modal-dialog uk-modal-body">
      <h2 class="uk-modal-title">Upgrade de Conta</h2>

      <p class="uk-text-justify">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, itaque
        quae sapiente accusantium vel ratione ex aspernatur impedit, suscipit
        fugiat assumenda exercitationem quaerat provident rerum culpa. Earum ex
        possimus quia!
      </p>

      <div
        class="uk-child-width-1-3@m uk-grid-small uk-grid-match uk-margin"
        uk-grid
      >
        <div class="uk-width-1-2">
          <div  :class="cardClass" >
            <h3 class="uk-card-title">1 mês</h3>
            <h2 class="uk-text-center"> R$ 44,99</h2>
          </div>
        </div>
        <div class="uk-width-1-2">
          <div :class="cardClass">
            <h3 class="uk-card-title">1 Ano</h3>
            <h2 class="uk-text-justify">R$ 259,99</h2>
          </div>
        </div>
      </div>
      <p class="uk-text-right">
        <button
          class="uk-button uk-button-default uk-modal-close"
          type="button"
        >
          Cancel
        </button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "EaModal",
  props:['cardClass']
   

    }


</script>

<style scoped>

</style>