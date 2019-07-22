<template>
    <div class="row">
      <!-- DETAILS CATEGORIES -->
      <div class="col-8" >
        <UiSport/>
      </div>
      <!-- CADERNETA E TRANSMISÃO AO VIVO -->
      <div class="col-4">
        <q-card dark class="bg-grey-9">
          <div class="q-pa-md text-secondary">
            Caderneta 
          <q-separator dark/>
          </div>
          <div class="q-pa-md text-light text-center">
            Clique em um preço para adicionar uma seleção
          </div>
          <q-card-actions></q-card-actions>
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
import UiSport from "../components/UiSport";
import {
  QImg,
  QCard,
  QCardSection,
  QCardActions,
  QSeparator
} from "quasar";

export default {
  name: "Esportes",
  components: {
    QImg,
    QCard,
    QCardSection,
    QCardActions,
    QSeparator,
    UiSport
  },
  watch: {
    
  },
  computed: {
    
  },
  mounted() {
    
  },
  methods: {
    
  }
};
</script>
<style lang="stylus" scoped>
.text-h6 {
    font-size: 1.10rem;
    font-weight: 500;
    line-height: 1 rem;
    letter-spacing: 0.0425em;
}
</style>
