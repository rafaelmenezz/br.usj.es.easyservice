import Vue from 'vue'
import VueLayers from 'vuelayers'
import App from './App.vue'
import Page from './Page.vue'
import 'vuelayers/lib/style.css' 




  Vue.use(VueLayers, {
    // global data projection, see https://vuelayers.github.io/#/quickstart?id=global-data-projection
    dataProjection: 'EPSG:4326',
  })

Vue.config.productionTip = false
const routes = {
  '/': Page,
  '/easyservice': App
 
}

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] 
    }
  },
  render (h) { return h(this.ViewComponent) }
})

