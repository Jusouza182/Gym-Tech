<template>
    <div class="d-flex align-center" style="margin: 2% 10%; margin-bottom: 0.5%;">
        <v-icon icon="mdi-weight-lifter" size="60"></v-icon>
        <h2>Exercícios</h2>
    </div>
    <v-divider :thickness="2" class="border-opacity-70" width="80%" style="margin: 0 auto;"></v-divider>

    <v-form class="d-flex" style="width: 60%; margin: 2% auto;" @submit.prevent="cadastrar" ref="form">
        <v-text-field variant="outlined" v-model="description" label="Novo Exercício"
            placeholder="Digite um novo exercício"  :rules="[v => !!v || 'O nome do exercício é obrigatório']"></v-text-field>
        <v-btn type="submit"  class="bg-blue" height="40px"
            style="margin-left: 2%; margin-top: 0.8%;">Cadastrar</v-btn>
    </v-form>
    <v-table fixed-header style="width: 60%; margin: 0 auto;" height="300px">
        <thead>
            <tr>
                <th class="text-left">
                    <b>Nome</b>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in exercicios" :key="item.id">
                <td>{{ item.description }}</td>
            </tr>
        </tbody>
    </v-table>
</template>
<script>
import axios from "axios"
export default {
    data() {
        return {
            description: "",
            exercicios: []
        }
    },
    mounted() {
        axios.get("http://localhost:3000/exercises")
            .then(res => this.exercicios = res.data)
            .catch(error => console.log(error))

    },
    methods: {
         cadastrar() {
            
            const novoExercicio ={
             description: this.description
            } 
            try {
                 axios.post("http://localhost:3000/exercises", novoExercicio)
                .then(() => {
                    this.$refs.form.reset()
                    alert('Cadastrado com sucesso')
                    this.carregarExercicio()
                })
                .catch(()=>{
                   alert("Não foi possivel cadastrar")
                })
            } catch (error) {
                console.log(error)

            }


        },
        carregarExercicio(){
            axios.get("http://localhost:3000/exercises")
            .then(res => this.exercicios = res.data)
            .catch(error => console.log(error))
        }
    }
}
</script>
