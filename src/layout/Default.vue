<template>
 <q-layout view="hHh lpR lFr">

    <q-header reveal bordered class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>
          <q-avatar>
            <img src="../assets/logo.png">
          </q-avatar>
          Title
        </q-toolbar-title>
        <q-space />
        <q-btn dense flat round icon="menu" @click="right = !right" />
        <q-tabs v-model="tab" shrink>
          <q-tab name="tab1" label="Tab 1" />
          <q-tab name="tab2" label="Tab 2" />
          <q-tab name="tab3" label="Tab 3" />
        </q-tabs>
      </q-toolbar>
      <UiSearch />
    </q-header>
    
    <q-drawer v-model="left" side="left" overlay bordered>
      <q-scroll-area class="fit">
      
      <UiLeftSideBar />
      </q-scroll-area>
    </q-drawer>

    <q-drawer v-model="right" side="right" overlay behavior="desktop" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>
<script>
//import UiFooter from "../components/UiFooter.vue";
import UiLeftSideBar from "../components/UiLeftSideBar.vue";
import UiSearch from "../components/UiSearch.vue";

export default {
  name: "Default",
  components: {
    //UiFooter,
    UiLeftSideBar,
    UiSearch
  },
  data() {
    return {
      left: this.$q.platform.is.desktop,
      right: false,
      text: ""
    };
  }
};
</script>