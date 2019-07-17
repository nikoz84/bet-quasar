<template>
  <div class="q-pa-md">
      <q-input v-model="password" filled :type="isPwd ? 'password' : 'text'" hint="Password with toggle">
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
  </div>
</template>
<script>
import QInput from "quasar";

export default {
  name: "Login",
  components: {
    QInput
  }
};
</script>
