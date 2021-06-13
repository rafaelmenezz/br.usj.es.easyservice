 <template>
  <header>
    <div class="uk-section-primary uk-preserve-color" style="height: 100vh">
      <div
        uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-light; top: 200"
      >
        <nav class="uk-navbar-container uk-margin" uk-navbar>
          <div class="uk-navbar-left">
            <div class="width-1-3 uk-margin-large-left">
              <ul class="uk-navbar-nav">
                <li>
                  <a
                    class="uk-animation-stroke uk-navbar-item uk-logo"
                    href="#"
                  >
                    <img
                      class=""
                      src="imagens/icon_home.svg"
                      width="42"
                      alt=""
                      uk-svg="stroke-animation: true"
                  /></a>
                </li>
              </ul>
            </div>
          </div>
          <div class="width-1-3 uk-margin-large-right uk-navbar-right">
            <div>
              <ul
                class="uk-subnav"
                uk-switcher="animation: uk-animation-fade; connect: .switcher-container"
              >
                <li><a href="#">Home</a></li>
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Login</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div class="uk-section uk-padding-remove-top uk-preserve-color">
        <div class="uk-container">
          <ul
            class="uk-switcher switcher-container uk-margin-remove-last-child"
          >
            <!-- init HOME  -->
            <li class="uk-light">
              <img
                src="imagens/easyservice.png"
                class="uk-align-center"
                width="300"
                alt=""
              />
              <div
                class="
                  uk-grid-collapse
                  uk-child-width-expand@s
                  uk-text-center
                  uk-margin-top
                "
                uk-grid
              >
                <div class="uk-width-1-2 uk-margin-auto">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum.
                  </p>
                </div>
              </div>
              <div
                class="
                  uk-grid-collapse
                  uk-child-width-expand@s
                  uk-text-center
                  uk-margin-top
                "
                uk-grid
              >
                <div class="uk-width-1-2 uk-margin-auto">
                  <p uk-margin>
                    <a href="/cadastro" class="uk-button uk-button-primary">
                      Cadastrar
                    </a>
                  </p>
                </div>
              </div>
            </li>
            <!-- end HOME  -->

            <!--  init SOBRE  -->
            <li class="uk-light">
              <div
                class="uk-grid-collapse uk-child-width-expand@s uk-margin-top"
                uk-grid
              >
                <div class="uk-width-1-3 uk-margin-auto">
                  <div class="uk-animation-stroke" tabindex="0">
                    <img
                      class="uk-animation-stroke uk-animation-reverse"
                      width="250"
                      src="imagens/grande_florianopolis.svg"
                      alt=""
                      uk-svg="stroke-animation: true"
                     
                    />
                  </div>
                </div>
                <div class="uk-width-2-3 uk-margin-auto">
                  <img
                    class="uk-text-center"
                    width="150"
                    src="imagens/easyservice.svg"
                    alt=""
                  />
                  <p class="uk-text-justify" uk-margin>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Obcaecati nisi, tenetur dolores eligendi eos qui minima illo
                    accusamus, ipsam culpa cupiditate aperiam, commodi dolor
                    nulla placeat! Sed, rem sequi? Architecto?
                  </p>
                  <p class="uk-text-justify" uk-margin>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nulla doloremque ipsam rerum cum dicta commodi adipisci
                    veritatis amet vitae incidunt corrupti ea omnis deserunt,
                    earum neque quos, ad odit ratione.
                  </p>
                </div>
              </div>
            </li>
            <!-- end Sobre  -->

            <!-- init Login  -->
            <li>
              <div
                class="
                  uk-grid-collapse uk-child-width-expand@s uk-margin-remove
                "
                uk-grid
              >
                <div class="uk-width-3-5 uk-margin-auto">
                  <div class="uk-card uk-card-default uk-card-body">
                    <h3 class="uk-card-title uk-text-center">LOGIN</h3>
                    <div class="uk-card-body">
                      <form class="uk-form-horizontal uk-text-emphasis">
                        <div class="uk-margin">
                          <label
                            class="uk-form-label uk-text-right"
                            for="form-horizontal-text"
                            >E-Mail</label
                          >
                          <div class="uk-form-controls">
                            <input
                              class="uk-input"
                              id="form-horizontal-text"
                              type="email"
                              placeholder="email@email.com"
                            />
                          </div>
                        </div>
                        <div class="uk-margin uk-text-right">
                          <label
                            class="uk-form-label"
                            for="form-horizontal-text"
                            >Senha</label
                          >
                          <div class="uk-form-controls">
                            <input
                              class="uk-input"
                              id="form-horizontal-text"
                              type="text"
                              placeholder="00 0000 0000"
                            />
                          </div>
                        </div>
                      </form>
                      <div class="uk-align-right">
                        <a href="/easyservice" class="uk-button uk-button-primary">
                          Entrar
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <!-- end Login  -->
          </ul>
        </div>

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
              <div class="uk-width-1-2 uk-margin-auto ">
                <p class="uk-light" uk-margin>
                  Desenvolvido pela equipe superstars
                  <a href="#">EasyService</a>. São José-SC, 2021
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "PageHeader",
};
</script>