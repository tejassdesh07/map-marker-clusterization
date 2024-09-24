
import { createApp } from 'vue';
import App from './App.vue';
import GoogleMapsPlugin from 'vue3-google-map'; // Ensure this matches the correct export

const app = createApp(App);

// Use the Google Maps plugin
app.use(GoogleMapsPlugin, {
  load: {
    key: 'AIzaSyCQuoMzPyQ64hGHihyH1xdKyxE528HAAyU',
    libraries: 'places', // Specify any libraries you need
  },
});

app.mount('#app');
