<template>
    <q-layout view="lHr lpR lfr">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>
          <q-avatar>
            <a href="/" title="inicio">
                <img src="../assets/logo.png">
            </a>
          </q-avatar>
          YOUR APP
        </q-toolbar-title>
        <q-btn dense flat round icon="menu" @click="right = !right" />
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/" label="Inicio" />
        <q-route-tab to="/esportes" label="Esportes" />
        <q-route-tab to="/ao-vivo" label="Ao-Vivo" />
      </q-tabs>
    </q-header>

    <q-drawer v-model="left" side="left" bordered>
      <!-- drawer content -->
      <UiLeftSideBar/>
    </q-drawer>

    <q-drawer v-model="right" side="right" bordered>
      <!-- drawer content -->
    </q-drawer>
    <!-- RENDERIZAÇÂO DAS VIEWS -->
    <q-page-container>
        <router-view/>
        
    </q-page-container>

    
    <!-- FOOTER -->
    <UiFooter/>
   </q-layout> 
</template>
<script>
import UiFooter from "../components/UiFooter.vue";
import UiLeftSideBar from "../components/UiLeftSideBar.vue";

export default {
  name: "Default",
  components: {
    UiFooter,
    UiLeftSideBar
  },
  data() {
    return {
      left: false,
      right: false,
      text: ""
    };
  }
};
</script>