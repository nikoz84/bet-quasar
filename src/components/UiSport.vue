<template>
    <div class="bg-gray-8">
        <div class="q-pa-md text-light">
           {{ sport_table.name }} 
        </div>
        <q-separator dark inset />
        <q-list>
          <q-expansion-item v-for="(list, i) in sport_table.lists" :key="i">
               <template v-slot:header>
                <q-item-section>
                  <b class="text-light">{{list.name}}</b>
                </q-item-section>
              </template>
              <!-- CARD -->
              <q-card dark class="bg-grey-9">
                <q-card-section v-if="list.load_in_modal">
                  <!-- MODAL -->
                  <q-btn label="Próximas 12 Horas - 48 jogos" outline color="positive" @click="fullWidth = true" ></q-btn>
                   <q-dialog
                      v-model="fullWidth"
                      full-width
                    >
                      <q-card dark class="bg-grey-9">
                        <q-card-section>
                          <q-table
                            :title="list.name"
                            :data="data"
                            :columns="columns"
                            row-key="name"
                            dark
                            color="amber"
                          />
                        </q-card-section>
                
                        <q-card-actions align="right">
                          <q-btn flat label="FECHAR" v-close-popup ></q-btn>
                        </q-card-actions>
                      </q-card>
                    </q-dialog>
                </q-card-section>
                <!-- MODAL -->
                <q-card-section v-else style="padding: 0;">
                  <q-list dark >
                    <q-item clickable v-ripple v-for="(d, i) in list.data" :key="i">
                      <q-item-section>{{ d.name }}</q-item-section>
                    </q-item>
                  </q-list>
                </q-card-section>
              </q-card>
          </q-expansion-item>
        </q-list>
    </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import { ClosePopup,
  QSeparator,
  Ripple,
  QDialog, 
  QExpansionItem,
  QCard,
  QCardSection,
  QCardActions, QTable } from "quasar";

export default {
  name: "UiSport",
  directives: {
    Ripple,
    ClosePopup
  },
  components: {
    QDialog,
    QExpansionItem,
    QCard,
    QCardSection,
    QCardActions,
    QSeparator,
    QTable
  },
  data() {
    return {
      fullWidth: false
    };
  },
  created () {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData()
  },
  watch: {
    // call again the method if the route changes
    '$route': 'fetchData'
  },
  computed:{
    ...mapState('layout', ['sport_table'])
  },
  methods: {
    ...mapActions("layout", ["fetchSportTable"]),
    async fetchData(){
      if(this.$route.params.slug){
        await this.fetchSportTable(this.$route.params.slug);
      }
    }
  },
};
</script>
