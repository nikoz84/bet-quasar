<template>
   <div>
    <q-item clickable tag="a" 
          :to="link.url" 
          style="color:white;" 
          v-for="(link,i) in linksLeftSideBar" 
          :key="i">
          <q-item-section>
            <q-item-label>{{link.name}}</q-item-label>
          </q-item-section>
          <q-item-section avatar style="font-size:13px;">
            <q-avatar text-color="white" icon="grade" />
          </q-item-section>
        </q-item>  
    </div>
</template>
<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "UiLeftSideBar",
  created () {
    this.fetchLinksLeftSideBar();
  },
  computed: {
    ...mapState("layout", ["linksLeftSideBar"])
  },
  methods:{
    ...mapActions("layout", ["fetchLinksLeftSideBar"]),
  }
    
};
</script>