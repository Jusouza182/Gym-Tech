<template>
    <div class="d-flex align-center justify-space-between" style="margin: 2% 11%; margin-bottom: 0.5%; margin-right: 15%;">
        <div class="d-flex align-center">
            <v-icon icon="mdi-account-multiple" size="60"></v-icon>
            <h2>Alunos</h2>
        </div>
        <div>
            <router-link to="/alunos/novo"><v-btn class="bg-blue ">Novo</v-btn></router-link>
        </div>
    </div>
    <v-divider :thickness="2" class="border-opacity-70" width="80%" style="margin: 0 auto;"></v-divider>
    <v-form class="d-flex" style="width: 60%; margin: 2% auto;" @submit.prevent="pesquisar" ref="form">
        <v-text-field variant="outlined" v-model="pesquisa" label="Pesquisar aluno"
            placeholder="Digite o nome do aluno"></v-text-field>
        <v-btn type="submit" class="bg-blue" height="40px" style="margin-left: 2%; margin-top: 0.8%;">Pesquisar</v-btn>
    </v-form>
    <v-table fixed-header style="width: 60%; margin: 0 auto;" height="300px">
        <thead>
            <tr>
                <th class="text-left">
                    <b>Aluno</b>
                </th>
                <th class="text-left">
                    <b>Ação</b>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in alunosPesquisado" :key="item.id">
                <td>{{ item.name }}</td>

                <td>
                    <v-btn style="margin-right: 5px;" class="bg-blue-lighten-3" @click="() => montarTreinos(item.id, item.name)">Montar treino</v-btn>
                    <v-btn class="bg-blue-lighten-3" @click="() => gerenciarTreinos(item.id, item.name)">Ver</v-btn>
                </td>
            </tr>

        </tbody>
    </v-table>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            pesquisa: "",
            alunos: [],
            alunosPesquisado: []
        }
    },
    mounted() {
        this.todosAlunos()

    },
    methods: {
        pesquisar() {

        if (this.pesquisa) {
            const resultadosPesquisa = this.alunos.filter((item) => {
                return item.name.toLowerCase().includes(this.pesquisa.toLowerCase());
            });
            this.alunosPesquisado = resultadosPesquisa; 
        } else {
            this.todosAlunos();
        }
        },
        todosAlunos() {
            axios.get("http://localhost:3000/students")
                .then(({ data }) => {
                    this.alunos = data.students
                    this.alunosPesquisado = data.students
                    console.log(this.alunos)
                })
                .catch(error => console.log(error))
        }, 
        montarTreinos(id,name){
            this.$router.push(`/treinos/${id}/${name}/novo`)
        },
        gerenciarTreinos(id,name){
            this.$router.push(`/treino/${id}/${name}`)
        },
    }


}
</script>