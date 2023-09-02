<template>
    <h1 style="margin: 50px; margin-bottom: 100px;">Bem vindo,</h1>
    <div class="d-flex justify-space-around" style="margin-bottom: 280px;">
        <v-card width="300" height="150" class="d-flex elevation-5 justify-center">
            <v-card-item>
                <v-card-title>X Alunos</v-card-title>
                <v-card-actions style="padding:0;">
                    <router-link to="/alunos/novo"> 
                        <v-btn class="elevation-5 bg-blue">Adicionar</v-btn>
                </router-link>
                    </v-card-actions>
            </v-card-item>
            <v-card-item>
                <v-icon icon="mdi-account-multiple" size="60"></v-icon>
            </v-card-item>
        </v-card>
        <v-card width="300" height="150" class="d-flex elevation-5 justify-center">
            <v-card-item >
                <v-card-title>X Exercícios</v-card-title>
                <v-card-actions style="padding:0;">
                    <router-link to="/exercicios"> 
                        <v-btn class="elevation-5 bg-blue">Adicionar</v-btn>
                </router-link>
                    </v-card-actions>
            </v-card-item>
            <v-card-item>
                <v-icon icon="mdi-weight-lifter" size="60"></v-icon>
            </v-card-item>
        </v-card>
    </div>
</template>