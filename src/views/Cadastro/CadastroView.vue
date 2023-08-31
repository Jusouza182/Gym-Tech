<template>
    <v-container id="corpo" class="bg-blue-lighten-4 elevation-5">
        <h2>Crie sua conta</h2>
        <v-form @submit.prevent>
            <v-text-field variant="outlined" bg-color="#fff" label="Nome completo"
                placeholder="Digite seu nome completo"></v-text-field>
            <v-text-field variant="outlined" bg-color="#fff" label="E-mail" placeholder="Digite seu e-mail"></v-text-field>
            <v-text-field variant="outlined" bg-color="#fff" label="Senha" placeholder="Digite sua senha"></v-text-field>
            <v-text-field variant="outlined" bg-color="#fff" label="Confirme sua senha"
                placeholder="Digite sua senha novamente"></v-text-field>
            <v-select variant="outlined" bg-color="#fff" label="Selecione seu plano" placeholder="Qual o seu plano?"
                :items="items"></v-select>
            <v-container class="d-flex justify-center">
                <v-btn type="submit" color="blue" class="elevation-5" id="botao">Cadastrar</v-btn>
                <router-link to="/"><v-btn type="submit" color="blue" class="elevation-5">Voltar</v-btn> </router-link>
            </v-container>

        </v-form>
    </v-container>
</template>
<script>
export default {
    data() {
        return {
            items: ["Bronze", "Prata", "Ouro"]
        }
    }
}
</script>

<style>
#corpo {
    width: 500px;
    height: 600px;
    margin-top: 4%;
}
h2 {
    display: flex;
    justify-content: center;
    margin: 20px;
    
}
#botao{
margin-right: 15px;
margin-bottom: 25px;
}
</style>