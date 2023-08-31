<template>
  <Cabecalho v-if="renderizarMenu"></Cabecalho>
  <router-view></router-view>
  <Rodape v-if="renderizarMenu"></Rodape>
</template>
<script>
import Rodape from "./components/Rodape/RodapeView.vue"
import Cabecalho from "./components/Cabecalho/CabelhoView.vue"
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
