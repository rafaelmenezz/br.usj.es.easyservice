 <template>
  <div id="panel-user" uk-offcanvas="flip: true; overlay: true">
    <div class="uk-offcanvas-bar">
      <button class="uk-offcanvas-close" type="button" uk-close></button>

      <div class="">
        <ul class="uk-nav-default uk-nav-parent-icon" uk-nav>
          <li class="uk-active"><a href="#"> Nome do Usuário</a></li>
          <li class="uk-parent">
             
            <a href="#"><span class="uk-icon uk-margin-small-right" uk-icon="icon: user; ratio: 0.8"></span>Perfil</a>
            <ul class="uk-nav-sub">
              <li><a href="#perfil-pessoal" uk-toggle>Pessoal</a></li>
              <li>
                <a href="#perfil-profissional" uk-toggle>Profissional</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#upgrade" uk-toggle><span class="uk-icon uk-margin-small-right" uk-icon="icon: star; ratio: 0.8"></span>Upgrade de Conta</a>
          </li>
          <li>
            <a href="/"><span class="uk-icon uk-margin-small-right" uk-icon="icon: sign-out; ratio: 0.8"></span>Logout</a>
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