<template>
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
            <q-btn flat label="OK" v-close-popup ></q-btn>
          </q-card-actions>
        </q-card>
      </q-dialog>
</template>
<script>
import { mapState, mapActions } from "vuex";
import {
  QDialog,
  QCard,
  QCardSection,
  QCardActions,
  QBtn,
  ClosePopup
} from "quasar";

export default {
  name: "UiModal",
  directives: { ClosePopup },
  components: {
    //QDialog
  },
  created() {
    console.log(this.isFullWidth);
  },
  computed: {
    ...mapState("layout", ["isFullWidth"]),
    ...mapActions("layout", ["fullWidth"])
  },
  methods: {
    show() {
      console.log("as");
    },
    onClose() {
      console.log("hola");
    }
  },
  destroyed() {}
};
</script>