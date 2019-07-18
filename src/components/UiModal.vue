<template>
    <q-dialog
      v-model="isFullWidth"
      full-width
    >
      <q-card>
        <q-card-section>
          <div class="text-h6">Título</div>
        </q-card-section>

        <q-card-section>
          Info
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="OK" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
</template>
<script>
import { QDialog, QCard, QCardSection, QCardActions, QBtn, ClosePopup } from "quasar";

export default {
    name: "UiModal",
    directives: { ClosePopup },
    props: ["isFullWidth"],
    components:{
        QDialog, QCard, QCardSection, QCardActions, QBtn
    }
}
</script>