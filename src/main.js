import { createApp } from 'vue';
import App from './App.vue';
import { GoogleMap, Marker as GoogleMarker, MarkerCluster } from 'vue3-google-map'; // Rename Marker to GoogleMarker

const app = createApp(App);

// Register the components globally
app.component('GoogleMap', GoogleMap);
app.component('GoogleMarker', GoogleMarker); // Use a multi-word name
app.component('MarkerCluster', MarkerCluster);

app.mount('#app');
