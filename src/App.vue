<template>
  <div id="app">
    <wwElement />
  </div>
</template>

<script>
import wwElement from './wwElement.vue';

export default {
  name: 'App',
  components: {
    wwElement,
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
