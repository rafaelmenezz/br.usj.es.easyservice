<template>
  <div id="upgrade" uk-modal>
    <div class="uk-modal-dialog uk-modal-body">
      <div v-show="!isCadastrar">
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
          class="uk-button uk-button-default"
          type="button"
          @click.prevent="cadastrar"
        >
          Continue
        </button>
      </p>
      </div>

      <div v-show="isCadastrar">
         <h2 class="uk-modal-title">Cadastro - Perfil Profissional</h2>
      <div class="uk-panel uk-width-1-1" style="height: 6vh">
     
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
                placeholder=""
                
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
                placeholder=""
                
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
                placeholder=""
                
              />
            </div>
          </div>
           <div class="uk-margin uk-text-center">
            <label class="uk-form-label" for="nome">Atividades</label>
   
             
            <input list="atividades" class="uk-input" name="browser" v-model="atividade" v-on:keyup.enter="addAtivi($event)">
            <datalist id="atividades">
                <option value="eletricista">Eletricista</option>
                <option value="">Desenvolvedor de Software</option>
                <option value="">Pintor</option>
                <option value="">Pintor</option>
           </datalist>
           <div class="uk-margin" >
              <span v-for="item in ativi" v-bind:key="item" class="uk-label uk-margin-right">{{item}}</span>
           </div>
          </div>
  
        </form>
      </div>
      <p uk-margin>
        <button
          class="uk-button uk-button-primary uk-align-right uk-modal-close"
        >
          Salvar
        </button>
         <button
          class="uk-button uk-button-default uk-align-right uk-modal-close"
        >
          Cancelar
        </button>
      </p>
      </div>
     
    </div>
  </div>
</template>

<script>
export default {
  name: "EaModal",
  props:['cardClass'],
  data () {
      return { 
        isCadastrar: false,
        ativi: [],
        atividade:'',
      }
    }, 

  methods:{
    cadastrar(){
      this.isCadastrar = !this.isCadastrar
    },
    addAtivi(event){
      this.ativi.push(event.target.value)
      this.atividade = ''
    }

  }

    }


</script>

<style scoped>

</style>