<template>
    
    <v-card class="d-flex align-center elevation-0" style="margin: 2% 10%; margin-bottom: 0;">
        <v-icon icon="mdi-weight-lifter" size="60"></v-icon>
        <h2>Treinos - nome aluno</h2>
    </v-card>
    <v-divider :thickness="2" class="border-opacity-50" width="80%" style="margin: 0 auto;"></v-divider>
    <v-card class="border-opacity-50" width="80%" style="margin: 50px auto;">
        <h1> Hoje</h1>
        <p> Exercicios do dia</p>
    </v-card>
    

    <v-card class="border-opacity-50" width="80%" style="margin: 0 auto;">
    <v-tabs
    v-model="tab"
      bg-color="blue-lighten-3"
      
    >
      <v-tab style="width: 14.5%;" value="segunda">Segunda-Feira</v-tab>
      <v-tab style="width: 14.5%;" value="terca">Terça-Feira</v-tab>
      <v-tab style="width: 14.5%;" value="quarta">Quarta-Feira</v-tab>
      <v-tab style="width: 14.5%;" value="quinta">Quinta-Feira</v-tab>
      <v-tab style="width: 14.5%;" value="sexta">Sexta-Feira</v-tab>
      <v-tab style="width: 14.5%;" value="sabado">Sábado</v-tab>
      <v-tab style="width: 14.5%;" value="domingo">Domingo</v-tab>

    </v-tabs>
     <v-card-text>
      <v-window v-model="tab" style="height: 200px;">
        <v-window-item value="segunda">
          One
        </v-window-item>

        <v-window-item value="terca">
          Two
        </v-window-item>

        <v-window-item value="quarta">
          Three
        </v-window-item>

        <v-window-item value="quinta">
          Three
        </v-window-item>

        <v-window-item value="sexta">
          Three
        </v-window-item>

        <v-window-item value="sabado">
          Three
        </v-window-item>

        <v-window-item value="domingo">
          Three
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>
<script>
import axios from 'axios'
  export default {
    data: () => ({
      tab: null,
      treinos: [],
      treinosSeg: [],
      treinosTer: [],
      treinosQua: [],
      treinosQui: [],
      treinosSex: [],
      treinosSab: [],
      treinosDom: [],

    }),
    mounted(){
        axios.get(`http://localhost:3000//workouts?student_id=${this.studentId}`)
        .then(({ data }) => {
                this.treinos = data.workouts;
                this.treinosSeg = data.workouts.segunda;
                this.treinosTer = data.workouts.terca;
                this.treinosQua = data.workouts.quarta;
                this.treinosQui = data.workouts.quinta;
                this.treinosSex = data.workouts.sexta;
                this.treinosSab = data.workouts.sabado;
                this.treinosDom = data.workouts.domingo;

                console.log(this.treinos)

            })
            .catch((error) => {
                alert(error)
            })
    }
  }
</script>