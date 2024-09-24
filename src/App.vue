<template>
  <div id="app">
    <MapWithCluster />
  </div>
</template>

<script>
import MapWithCluster from './components/MapWithCluster.vue';

export default {
  name: 'App',
  components: {
    MapWithCluster,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
