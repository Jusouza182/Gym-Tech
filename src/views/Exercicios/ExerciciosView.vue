<template>
    <div class="d-flex align-center" style="margin: 2% 10%; margin-bottom: 0.5%;">
        <v-icon icon="mdi-weight-lifter" size="60"></v-icon>
        <h2>Exercícios</h2>
    </div>
    <v-divider :thickness="2" class="border-opacity-70" width="80%" style="margin: 0 auto;"></v-divider>
    <v-form class="d-flex" style="width: 60%; margin: 2% auto;" @submit.prevent>
        <v-text-field variant="outlined" v-model="exercicio" label="Novo Exercício"
            placeholder="Digite um novo exercício"></v-text-field>
        <v-btn type="submit"  class="bg-blue" height="40px" style="margin-left: 2%; margin-top: 0.8%;">Cadastrar</v-btn>
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
            <tr v-for="item in desserts" :key="item.name">
                <td>{{ exercicio }}</td>
            </tr>
        </tbody>
    </v-table>
</template>
<script>

export default {
    data() {
        return {
            exercicio: "",
        }
    }
}
</script>
