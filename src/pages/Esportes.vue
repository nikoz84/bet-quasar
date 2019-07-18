<template>
    <div class="row">
      <div class="col-2">
          <q-list dense bordered padding >
            <q-item clickable v-ripple v-for="(link,i) in links" :key="i">
              <q-item-section v-if="!link.childs">
                {{ link.name }}
              </q-item-section>
            </q-item>
          </q-list>
      </div>
      <div class="col-4">
        <q-img
          src="/mockup-data/banner.jpg"
          style="width: 100%; height: 150px;"
        >
          <div class="absolute-bottom text-subtitle1 text-center q-pa-xs">
            Texto do Banner
          </div>
        </q-img>
        <q-list bordered >
          <q-expansion-item>
               <template v-slot:header>
                <q-item-section avatar>
                  <q-avatar>
                    <img src="../assets/sports/001-football.png">
                  </q-avatar>
                </q-item-section>

                <q-item-section>
                  Futebol
                </q-item-section>
              </template>
              <q-card>
                <q-card-section>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                  commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                  eveniet doloribus ullam aliquid.
                </q-card-section>
              </q-card>
          </q-expansion-item>
        </q-list>
      </div>
      <div class="col-4">auto size based on content and available space</div>
      <div class="col-2">fills remaining available space</div>
    </div>
</template>
<script>
import { Ripple, QImg, QExpansionItem, QCard, QCardSection } from "quasar";

export default {
  name: "Esportes",
  directives: {
    Ripple
  },
  components: {
    QImg,
    QExpansionItem,
    QCard,
    QCardSection
  },
  data() {
    return {
      links: []
    };
  },
  mounted() {
    this.getLinks();
  },
  methods: {
    async getLinks() {
      await this.$axios.get("/mockup-data/data.json").then(resp => {
        this.links = resp.data.links;
      });
    }
  }
};
</script>
