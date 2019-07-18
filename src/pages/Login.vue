<template>
  <section class="q-mt-lg row">
    <div class="col-xs col-sm col-md-4"></div>
      <q-card class="q-gutter-y-sm col-xs-12 col-sm-12 col-md-4" >
        <q-card-section>
          <div class="text-h6 text-center">Login</div>
          <q-input v-model="email" hint="E-mail" />
          <q-input v-model="password" type="password" hint="Senha"/>
        </q-card-section>
        <q-card-actions style="margin-top:30px;">
          <q-btn color="primary" outline class="full-width" label="ENTRAR"></q-btn>
        </q-card-actions>
        <q-separator inset style="margin-top:30px;margin-bottom:30px;"/>
        <q-card-actions class="justify-center">
          <q-btn flat >Esqueceu a Senha?</q-btn>
          <q-separator vertical />
          <q-btn flat>Cadástrese</q-btn>
        </q-card-actions>
      </q-card>
    <div class="col-xs col-sm col-md-4"></div>
  </section>
</template>
<script>
import {
  QInput,
  QIcon,
  QCard,
  QCardSection,
  QCardActions,
  QSeparator
} from "quasar";

export default {
  name: "Login",
  components: {
    QCard,
    QInput,
    QIcon,
    QCardSection,
    QCardActions,
    QSeparator
  },
  data() {
    return {
      email: "",
      password: ""
    };
  }
};
</script>
<style scoped lang="stylus">
.q-pa-md {
  margin-top: 150px;
}
</style>
