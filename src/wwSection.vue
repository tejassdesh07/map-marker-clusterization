<template>
  <div ref="map" class="map-container"></div>
</template>

<script>
import { MarkerClusterer } from '@googlemaps/markerclusterer';

// Declare google as a global variable to avoid ESLint errors
/* global google */

export default {
  name: 'wwSection',
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      const map = new google.maps.Map(this.$refs.map, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });

      // Create an array to hold the markers
      const markers = [];
      for (let i = 0; i < 100; i++) {
        const latLng = new google.maps.LatLng(-34.397 + (i * 0.01), 150.644 + (i * 0.01));
        const marker = new google.maps.Marker({
          position: latLng,
          map: map,
        });
        markers.push(marker);
      }

      // Initialize MarkerClusterer with the markers
      new MarkerClusterer({ map, markers });
    },
  },
};
</script>


<style scoped>
.map-container {
  height: 500px; /* Adjust height as needed */
  width: 100%;   /* Full width */
}
</style>
