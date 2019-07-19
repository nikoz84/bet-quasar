<template>
  <q-layout view="lHh Lpr lFf" class="bg-teal-9">
    <q-header elevated class="bg-teal-10">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />
        
        <q-toolbar-title class="text-secondary">
          <b>NAME-APP</b>
        </q-toolbar-title>
        
        <q-separator dark vertical />
        <q-btn stretch flat label="Esportes" to="/esportes" />
        <q-separator dark vertical />
        <q-btn stretch flat label="Ao-Vivo" to="/ao-vivo" />
        <q-separator dark vertical />
        <q-btn stretch flat label="Login" to="/login" />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      content-class="bg-grey-8"
    >
      <q-list dark>
        <!-- BUSCA -->
        <q-input standout="bg-teal text-white" v-model="termSearch" label="Pesquisar" :dense="false" />
        <UiLeftSideBar />  
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { QInput, QSeparator } from "quasar";
import UiLeftSideBar from "../components/UiLeftSideBar.vue";

export default {
  name: "Dark",
  components: { QInput, QSeparator, UiLeftSideBar },
  data() {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      termSearch: ""
    };
  }
};
</script>
<style lang="stylus" scoped>
.q-field {
  color: #fff;
}
</style>
