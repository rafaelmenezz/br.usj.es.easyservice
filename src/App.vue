<template>
  <div id="app">
      <div class="uk-cover-container">
        <Map />
       <Header /> 
        
    </div>

    
  </div>
</template>

<script>
import Map from './components/Map.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Map,
    Header
  }
}
</script>

<style>


</style>
