<template>
  <div class="uk-margin-large-top">
    <div class="uk-grid uk-child-width-expand@s uk-margin-top" uk-grid>
      <div class="uk-width-1-3 uk-margin-auto">
        <div
          class="uk-position-relative uk-visible-toggle ea-slide uk-light"
          tabindex="-1"
          uk-slideshow="animation: scale"
          ratio="233:361"
          autoplay="true"
          autoplay-interval="3000"
        >
          <ul class="uk-slideshow-items" >
            <li height="253">
              <img src="@/assets/imagens/logo.svg" class="uk-margin-remove-top"  width="50" alt="" uk-cover />
            </li>
            <li height="253">
              <img src="@/assets/imagens/grande_florianopolis.svg" alt="" uk-cover />
            </li>
            <li height="253">
              <img src="@/assets/imagens/negociacao_branco.svg" alt="" uk-cover />
            </li>
          </ul>
        </div>
      </div>
      <div class="uk-width-2-3 uk-margin-auto">
        <p class="uk-text-justify uk-dropcap uk-margin-top" uk-margin>
          EasyService é uma plataforma online, que busca explorar diversos
          nichos de mercado, onde há a oferta e demanda para serviços, buscando
          oportunizar pessoas jurídicas como Microempresas e MEI a conseguir
          novos trabalhos e assim fomentar a economia regional.
        </p>
        <p class="uk-text-justify" uk-margin>
          Para a EasyService a credibilidade junto a seus parceiros para sua
          existência e continuidade do negócio. Ela possui bem definido suas
          diretrizes organizacionais (Missão, Visão e Valores).
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
   name:'Sobre'
};
</script>

<style>
.ea-slide{
   height: 100%;
}
</style>