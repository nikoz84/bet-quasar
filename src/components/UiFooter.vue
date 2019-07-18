<template>
<q-footer class="bg-grey-8 text-white" style="padding-top:5px;">
      <q-toolbar>
        <!-- Columns are always 50% wide, on mobile and desktop -->
        <div class="column" >
            <q-toolbar-title>
            <q-avatar>
                <img src="../assets/logo.png">
            </q-avatar>
                YOUR APP
            </q-toolbar-title>
            <small>Todos os Direitos Reservados</small>
        </div>
      </q-toolbar>
</q-footer>
  
</template>
<script>
export default {
  name: "UiFooter",
  data() {
    return {
      links: [
        "Móvel",
        "Notícias de Apostas",
        "Afiliados",
        "Empregos",
        "Extra",
        "Cassino",
        "Cassino Ao-Vivo",
        "Pôquer",
        "Jogos",
        "Vegas"
      ]
    };
  }
};
</script>