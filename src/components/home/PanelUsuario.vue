 <template>
  <div id="panel-user" uk-offcanvas="flip: true; overlay: true">
    <div class="uk-offcanvas-bar">
      <button class="uk-offcanvas-close" type="button" uk-close></button>

      <div class="">
        <ul class="uk-nav-default uk-nav-parent-icon" uk-nav>
          <li class="uk-active"><a href="#"> Nome do Usuário</a></li>
          <li class="uk-parent">
            <a href="#">Perfil</a>
            <ul class="uk-nav-sub">
              <li><a href="#perfil-pessoal" uk-toggle>Pessoal</a></li>
              <li>
                <a href="#perfil-profissional" uk-toggle>Profissional</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#abrir-servico" uk-toggle>Abrir Serviço</a>
          </li>
          <li>
            <a href="#upgrade" uk-toggle>Upgrade de Conta</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PanelUser",
  data() {
    return {};
  },
};
</script>