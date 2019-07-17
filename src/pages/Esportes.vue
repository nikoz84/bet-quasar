<template>
    <div class="row">
      <div class="col-2">
        <ul>
          <li v-for="(link,i) in links" :key="i" v-text="link"></li>
        </ul>
      </div>
      <div class="col-3">one sixth</div>
      <div class="col-3">auto size based on content and available space</div>
      <div class="col-3">fills remaining available space</div>
    </div>
</template>
<script>
export default {
  name: "Esportes",
  created() {
    this.links();
  },
  methods: {
    links() {
      let data =
        "Ao-Vivo e Em tempo real,Boxe/MMA,Ciclismo,Corridas de Cavalos,Corridas de Galgos,Cricket,Dardos,Especiais,Reino Unido ,Mundo,América do Norte,Austrália,Itália,Esportes de Inverno,Biatlo,Salto com Esqui,Esportes Gaélicos,Esportes Motorizados,Fórmula 1,Motociclismo,Nascar,Rali,Supercars,,Esportes Virtuais,E-Sports,Futebol,Futebol Americano,Futebol Australiano,Futsal,Golfe,Hóquei no Gelo,Loto,Rugby League,Rugby Union,Sinuca,Speedway,Tênis,Voleibol,Outros Esportes,Badminton,Handebol,Netball,Pólo Aquático,Surfe,Tênis de mesa,Trotting,Vôlei de Praia,Odds menores de 2.00,Eventos Populares";
      return data.split(",");
    }
  }
};
</script>
