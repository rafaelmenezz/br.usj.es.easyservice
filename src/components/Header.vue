 <template>
  <div>
    <div class="uk-position-top">
      <Eanavbar />
    </div>
    <PanelPesquisa />
    <EaModal @click="selecionado" :cardClass="cardClass" />
    <Paneluser />
    <PerfilProfissional />
    <PerfilPessoal />
    <AbrirServico />
  </div>
</template>

<script>
import Eanavbar from "./home/Eanavbar.vue";
import PanelPesquisa from "./home/PanelPesquisa.vue";
import EaModal from "./home/EaModal.vue";
import Paneluser from "./home/PanelUsuario";

import PerfilProfissional from "./home/PerfilProfissional.vue";
import PerfilPessoal from "./home/PerfilPessoal.vue";
import AbrirServico from "./home/AbrirServico.vue";

export default {
  name: "Header",
  components: {
    Eanavbar,
    PanelPesquisa,
    EaModal,
    Paneluser,
    PerfilProfissional,
    PerfilPessoal,
    AbrirServico,
  },
  data() {
    return {
      cardClass: "uk-card uk-card-secondary uk-card-body",
      selecionar: false,
    };
  },
  methods: {
    selecionado() {
      this.selecionar
        ? (this.cardClass = "uk-card uk-card-default uk-card-body")
        : (this.cardClass = "uk-card uk-card-primary uk-card-body");
      this.selecionar = !this.selecionar;
    },
  },
};
</script>