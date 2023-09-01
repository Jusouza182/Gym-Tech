<template>
    <div class="d-flex align-center" style="margin: 2% 10%; margin-bottom: 0.5%;">
        <v-icon icon="mdi-account-multiple" size="60"></v-icon>
        <h2>Alunos</h2>
    </div>
    <v-divider :thickness="2" class="border-opacity-70" width="80%" style="margin: 0 auto;"></v-divider>
    <v-form class="d-flex" style="width: 60%; margin: 2% auto;" @submit.prevent>
        <v-text-field variant="outlined" v-model="aluno" label="Pesquisar aluno"
            placeholder="Digite o nome do aluno"></v-text-field>
        <v-btn type="submit" variant="outlined" class="bg-blue" height="50px"
            style="margin-left: 2%; margin-top: 0.5%;">Pesquisar</v-btn>
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
            <tr>
                <td>{{ aluno }}</td>
                <td>
                    <router-link to="/treinos/novo" style="margin-right: 5px;"><v-btn class="bg-blue-lighten-3">Montar treino</v-btn></router-link>
                    <router-link to="/treino"><v-btn class="bg-blue-lighten-3">Ver</v-btn></router-link>
                </td>
            </tr>
           
        </tbody>
    </v-table>
</template>
<script>

export default {
    data() {
        return {
            aluno: "",
        }
    }
}
</script>