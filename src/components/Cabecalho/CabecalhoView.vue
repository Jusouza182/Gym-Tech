<template>
        <v-app-bar scroll-behavior="collapse" scroll-threshold="10" elevation="5" color="blue-darken-4">
            <v-app-bar-title>Fit Manage Tech</v-app-bar-title>
            <v-container class=" d-flex justify-end">
                <router-link class="rota" to="/dashboard">Home</router-link>
                <router-link class="rota" to="/alunos">Alunos</router-link>
                <router-link class="rota" to="/exercicios">Exercícios</router-link>
                <router-link class="rota" to="/">Sair</router-link>
            </v-container>
        </v-app-bar>
   
</template>
<style scoped>
.rota{
    margin-right: 50px ;
    text-decoration: none;
    color: #FFF;
}

</style>