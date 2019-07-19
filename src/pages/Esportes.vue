<template>
    <div class="row">
      <!-- DETAILS CATEGORIES -->
      <div class="col-8">
        <div class="q-py-md" style="padding: 15px 15px 2px;">
          Futebol 
        </div>
        <q-list bordered >
          <q-expansion-item v-for="(title, i) in titles" :key="i">
               <template v-slot:header>
                <q-item-section>
                  <b>{{title.name}}</b>
                </q-item-section>
              </template>
              <!-- CARD -->
              <q-card>
                <q-card-section v-if="title.load_in_modal">
                  <!-- MODAL -->
                  <q-btn label="Próximas 12 Horas - 48 jogos" outline color="primary" @click="fullWidth = true" ></q-btn>
                   <q-dialog
                      v-model="fullWidth"
                      full-width
                    >
                      <q-card>
                        <q-card-section>
                          <div class="text-h6">Full Width</div>
                        </q-card-section>
                
                        <q-card-section>
                          Click/Tap on the backdrop.
                        </q-card-section>
                
                        <q-card-actions align="right" class="bg-white text-teal">
                          <q-btn flat label="FECHAR" v-close-popup ></q-btn>
                        </q-card-actions>
                      </q-card>
                    </q-dialog>
                </q-card-section>
                <!-- MODAL -->
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
      <div class="col-4">
        <q-card>
          <q-card-section>
            Caderneta
          </q-card-section>
        </q-card>
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
import { mapActions } from "vuex";
import {
  ClosePopup,
  Ripple,
  QDialog,
  QImg,
  QExpansionItem,
  QCard,
  QCardSection,
  QCardActions
} from "quasar";

export default {
  name: "Esportes",
  directives: {
    Ripple,
    ClosePopup
  },
  components: {
    QImg,
    QDialog,
    QExpansionItem,
    QCard,
    QCardSection,
    QCardActions
  },
  data() {
    return {
      links: [],
      titles: [],
      fullWidth: false
    };
  },
  mounted() {
    this.getLinks();
  },
  methods: {
    ...mapActions("layout", ["fetchLinksLeftSideBar"]),
    async getLinks() {
      await this.$axios.get("/mockup-data/data.json").then(resp => {
        this.fetchLinksLeftSideBar(resp.data.links);
        this.titles = resp.data.titles;
      });
    }
  }
};
</script>
