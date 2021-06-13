<template>
  <nav class="uk-navbar-container uk-navbar-transparent uk-black" uk-navbar>
        <div class="uk-navbar-center">
          <div class="uk-navbar-center-left">
            <div>
              <ul class="uk-navbar-nav uk-iconnav">
                <li>
                  <a
                    href="#pesquisa" 
                    class=" uk-button"
                    style="color: #000"
                    uk-icon="icon: search; ratio: 2"
                  uk-toggle></a>
                 
                </li>
              </ul>
            </div>
          </div>

          <a class="uk-navbar-item uk-logo" href="#">
            <img src="imagens/icon.svg" width="50" alt="" />
          </a>
          <div class="uk-navbar-center-right">
            <div>
              <ul class="uk-navbar-nav uk-iconnav">
                <li>
                  <a
                    href="#panel-user"
                    class=""
                    style="color: #000"
                    uk-icon="icon: user; ratio: 2"

                  uk-toggle></a>
              
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
</template>

<script>
  export default {
    name: 'Eanavbar',
    
    
  }
</script>