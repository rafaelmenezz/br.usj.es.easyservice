 <template>
  <div>
    <div class="uk-section-primary " style="height: 100vh">
      <div
        uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent top: 200"
      >
        <nav class="uk-navbar-container uk-margin-auto ea-nav uk-light" uk-navbar>
          <div class="uk-navbar-left">
            <a class="uk-animation-stroke uk-navbar-item uk-logo" href="/" >
              <img class="" src="imagens/logo.svg" width="130" alt="" uk-svg="stroke-animation: true"/>
            </a>
          </div>
          <div class="width-1-3 uk-margin-large-right uk-navbar-right">
            <div>
              <ul class="uk-subnav" uk-switcher="animation: uk-animation-fade; connect: .switcher-container">
                <li><a href="#" class="uk-button uk-button-text">Home</a></li>
                <li><a href="#" class="uk-button uk-button-text">Sobre</a></li>
                <li><a href="#" class="uk-button uk-button-text">Login</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div class="uk-section uk-padding-remove-top uk-preserve-color">
        <div class="uk-container ea-page">
          <ul
            class="uk-switcher switcher-container uk-margin-remove-last-child"
          >
            <!-- init HOME  -->
            <li class="uk-light"> <Home /> </li>
            <!-- end HOME  -->
            <!--  init SOBRE  -->
            <li class="uk-light"> <Sobre /></li>
            <!-- end Sobre  -->
            <!-- init Login  -->
            <li class="uk-dark"> <Login /></li>
            <!-- end Login  -->
          </ul>
        </div>

      
      </div>
    </div>
    <div>
        <footer class="uk-position-bottom uk-margin-small-bottom">
          <div class="uk-container">
            <div
              class="
                uk-grid-collapse
                uk-child-width-expand@s
                uk-text-center
                uk-margin-top
              "
              uk-grid
            >
              <div class="uk-margin-auto">
                <p class="uk-light" uk-margin>
                  Projeto desenvolvido por Everton Mota, Felipe Andrade e Rafael Menezes.
                  USJ - Engenharia de Software São José-SC, 2021
                </p>
              </div>
            </div>
          </div>
        </footer>
    </div>
  </div>
</template>

<script>
import Home from './Home'
import Sobre from './Sobre'
import Login from './Login'

export default {
  name: "PageHeader",
  components:{Home, Sobre, Login}

};
</script>

<style scoped>
.ea-nav{
  width: 65vw;
}
.ea-page{
  width: 50vw;
}
</style>