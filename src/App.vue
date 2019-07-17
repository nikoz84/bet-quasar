<template>
  <Default/>
</template>

<script>
import Default from "./layout/Default.vue";

export default {
  name: "App",

  components: {
    Default
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
