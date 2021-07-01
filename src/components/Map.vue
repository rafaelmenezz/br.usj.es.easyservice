<template>
  <div>
    <vl-map
      :load-tiles-while-animating="true"
      :load-tiles-while-interacting="true"
      data-projection="EPSG:4326"
      style="height: 100vh"
    >
      <vl-view
        :zoom.sync="zoom"
        :center.sync="center"
        :rotation.sync="rotation"
      ></vl-view>
      <!-- <vl-view v-else :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation"></vl-view> -->

      <vl-geoloc @update:position="geolocPosition = $event">
        <template slot-scope="geoloc">
          <vl-feature v-if="geoloc.position" id="position-feature">
            <vl-geom-point :coordinates="geoloc.position"> </vl-geom-point>
            <vl-style-box>
              <vl-style-icon
                src="../assets/imagens/marker.png"
                :scale="4"
                :anchor="[0.5, 1]"
              ></vl-style-icon>
            </vl-style-box>
          </vl-feature>
        </template>
      </vl-geoloc>

      <vl-layer-tile id="osm">
        <vl-source-osm></vl-source-osm>
      </vl-layer-tile>
    </vl-map>
  </div>
</template>

<script>
export default {
  name: "Map",
  data() {
    return {
      zoom: 11,
      center: [-48.5525, -27.5941],
      rotation: 0,
      geolocPosition: undefined,

      key: "pk.eyJ1IjoiZmFlbG1lbmV6ZXMiLCJhIjoiY2twa2g0YzB4MGZtbjJ2bmc1M2NlczN2ZiJ9.llKEkVBMARYZXIOO2ZR2dQ",
      resolutions: [],
    };
  },
};
</script>