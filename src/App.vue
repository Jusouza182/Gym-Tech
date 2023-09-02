<template>
  <v-layout>
      <Cabecalho v-if="renderizarMenu"></Cabecalho>
    <v-main>
      <router-view></router-view>
      <Rodape v-if="renderizarMenu"></Rodape>
    </v-main>
  </v-layout>
</template>
<script>
import Rodape from "./components/Rodape/RodapeView.vue"
import Cabecalho from "./components/Cabecalho/CabecalhoView.vue"
export default {
  components: {
    Rodape,
    Cabecalho
  },
  computed: {
    renderizarMenu() {
      return this.$route.path !== '/' && this.$route.path !== '/cadastro'
    }
  }
}
</script>

