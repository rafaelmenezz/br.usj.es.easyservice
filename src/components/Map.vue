<template>
  <div>
    <vl-map :controls="true" :load-tiles-while-animating="true" :load-tiles-while-interacting="true"
             data-projection="EPSG:4326" style="height: 100vh">
      <vl-view :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation"></vl-view>

      <vl-geoloc @update:position="geolocPosition = $event">
        <template slot-scope="geoloc">
          <vl-feature v-if="geoloc.position" id="position-feature">
            <vl-geom-point :coordinates="geoloc.position"></vl-geom-point>
          </vl-feature>
        </template>
      </vl-geoloc>

      <vl-feature id="point1" :properties="{prop: 'value', prop2: 'value'}">
          <vl-geom-point :coordinates="[ -48.57796835761099, -27.595756918431206 ]"></vl-geom-point>
      </vl-feature>
       <vl-feature id="point2" :properties="{prop: 'value', prop2: 'value'}">
          <vl-geom-point :coordinates="[ -48.558377213826255, -27.588902082386923 ]"></vl-geom-point>
      </vl-feature>
         <vl-feature id="point3" :properties="{prop: 'value', prop2: 'value'}">
          <vl-geom-point :coordinates="[ -48.55985814917067, -27.593777281415036 ]"></vl-geom-point>
      </vl-feature>
        <vl-feature id="point4" :properties="{prop: 'value', prop2: 'value'}">
          <vl-geom-point :coordinates="[ -48.552519625305884, -27.597466506744325 ]"></vl-geom-point>
      </vl-feature>
       <vl-feature id="point5" :properties="{prop: 'value', prop2: 'value'}">
          <vl-geom-point :coordinates="[ -48.575234413146944, -27.587624217920528 ]"></vl-geom-point>
      </vl-feature>

      <vl-layer-tile id="osm">
        <vl-source-osm></vl-source-osm>
      </vl-layer-tile>
    </vl-map>
  
  </div>
</template>

<script>
  export default {
    data () {
      return { 
        zoom: 12,
        center: [ -48.555137160469606, -27.58986637012326 ],
        rotation: 0,
        geolocPosition: undefined,
      }
    },
  }
</script>