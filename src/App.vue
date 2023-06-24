<template>
  <div id="app">
    <Buscador/>
    <router-view/>
  </div>
</template>
<script>
import Buscador from '@/components/Buscador.vue'
export default {
  name: "app",
  // props: {},
  data: function () {
    return {};
  },
  // computed: {},
  //methods: {}
  // watch: {},
  components: {
    Buscador,
  },
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
};
</script>
<style>
</style>
