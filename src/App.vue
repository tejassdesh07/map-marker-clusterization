<template>
  <div id="app">
    <wwSection />
  </div>
</template>

<script>
import wwSection from './wwSection.vue';

export default {
  name: 'App',
  components: {
    wwSection,
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
