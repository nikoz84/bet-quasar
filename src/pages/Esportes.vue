<template>
    <div class="row">
      <!-- CATEGORIES -->
      <div class="col-2">
          <q-list dense bordered padding >
            <q-item clickable v-ripple v-for="(link,i) in links" :key="i">
              <q-item-section v-if="!link.childs">
                {{ link.name }}
              </q-item-section>
            </q-item>
          </q-list>
      </div>
      <!-- DETAILS CATEGORIES -->
      <div class="col-7">
        <q-list bordered >
          <q-expansion-item v-for="(title, i) in titles" :key="i">
               <template v-slot:header>
                <q-item-section>
                  <b>{{title.name}}</b>
                </q-item-section>
              </template>
              <q-card>
                <q-card-section v-if="title.load_in_modal">
                   <q-btn 
                    label="Próximas 12 Horas - 48 jogos" 
                    color="primary" 
                    @click="isFullWidthModal(true);" />
                   <!-- MODAL -->
                   <UiModal :isFullWidth="getIsFullWidthModal"/>
                </q-card-section>
                <q-card-section v-else>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                  commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                  eveniet doloribus ullam aliquid.
                </q-card-section>
              </q-card>
          </q-expansion-item>
        </q-list>
      </div>
      <!-- CADERNETA E TRANSMISÃO AO VIVO -->
      <div class="col-3">
        <q-img
            src="/mockup-data/banner.jpg"
            style="width: 100%; height: 150px;"
          >
          <div class="absolute-bottom text-subtitle1 text-center q-pa-xs">
            Texto do Banner
          </div>
        </q-img>
      </div>
    </div>
</template>
<script>
import { Ripple, QImg, QExpansionItem, QCard, QCardSection } from "quasar";
import UiModal from "../components/UiModal.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Esportes",
  directives: {
    Ripple
  },
  components: {
    QImg,
    QExpansionItem,
    QCard,
    QCardSection,
    UiModal
  },
  data() {
    return {
      links: [],
      titles: []
    };
  },
  mounted() {
    this.getLinks();
  },
  computed: {
    ...mapGetters({ getIsFullWidthModal: "layout/getIsFullWidthModal" })
  },
  methods: {
    ...mapActions("layout",["isFullWidthModal"]),
    async getLinks() {
      await this.$axios.get("/mockup-data/data.json").then(resp => {
        this.links = resp.data.links;
        this.titles = resp.data.titles;
      });
    }
  }
};
</script>
