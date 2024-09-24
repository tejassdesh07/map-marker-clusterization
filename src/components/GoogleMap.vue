<template>
  <div ref="map" class="map-container"></div>
</template>

<script>
// Import MarkerClusterer
import { MarkerClusterer } from '@googlemaps/markerclusterer';

export default {
  name: "GoogleMap",
  data() {
    return {
      map: null,
      markerCluster: null,
      markers: []
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      const { google } = window; // Get the google object from window

      // Initialize the map
      this.map = new google.maps.Map(this.$refs.map, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });

      // Create sample markers
      this.createMarkers();

      // Create marker clusterer using MarkerClusterer
      this.markerCluster = new MarkerClusterer(this.map, this.markers, {
        imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m", // Marker images
      });
    },
    createMarkers() {
      const { google } = window;

      // Create multiple markers at random locations
      for (let i = 0; i < 15; i++) { // Changed from 10 to 15
        const lat = -34.397 + (Math.random() - 0.5) * 0.1;
        const lng = 150.644 + (Math.random() - 0.5) * 0.1;

        const marker = new google.maps.Marker({
          position: { lat, lng },
          map: this.map,
        });

        this.markers.push(marker);
      }
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
