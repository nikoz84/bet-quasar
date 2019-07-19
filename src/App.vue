<template>
  <Dark/>
</template>

<script>
//import Default from "./layout/Default.vue";
import Dark from "./layout/Dark.vue";

export default {
  name: "App",

  components: {
    Dark
  },

  data() {
    return {
      leftDrawerOpen: false //this.$q.platform.is.desktop
    };
  }
};
</script>

<style>
</style>
