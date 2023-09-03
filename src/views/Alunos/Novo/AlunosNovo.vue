<template>
    <v-card class="d-flex align-center elevation-0" style="margin: 2% 10%; margin-bottom: 0;">
        <v-icon icon="mdi-account-multiple" size="60"></v-icon>
        <h2>Alunos</h2>
    </v-card>
    <v-divider :thickness="2" class="border-opacity-70" width="80%" style="margin: 0 auto;"></v-divider>

    <v-card class="elevation-0">
        <v-form @submit.prevent style="width: 80%; margin: 0 auto;">
            <div style="width: 80%; margin: 02% auto;">
                <div class="d-flex" style="gap:10px">
                    <v-text-field variant="outlined" v-model="nome" label="Nome completo"
                        placeholder="Digite o nome completo" type="text" style="width: 10%"></v-text-field>

                    <v-text-field variant="outlined" v-model="email" label="E-mail" placeholder="Digite o e-mail"
                        type="email" style="width: 10%"></v-text-field>
                </div>

                <div class="d-flex" style="gap:10px">
                    <v-text-field variant="outlined" v-model="contato" label="Contato"
                        placeholder="Digite o telefone para contato" type="number" style="width: 10%"></v-text-field>

                    <v-text-field variant="outlined" v-model="dataNasimento" label="Data de nascimento"
                        placeholder="Digite a data de nascimento" type="date" style="width: 10%"></v-text-field>
                </div>

                <div class="d-flex" style="gap:10px">

                    <v-text-field variant="outlined" v-model="CEP" label="CEP" placeholder="Digite o CEP" type="number"
                        style="width: 10%"></v-text-field>

                    <v-text-field variant="outlined" v-model="logradouro" label="Logradouro"
                        placeholder="Digite o logradouro" type="text" style="width: 10%"></v-text-field>
                </div>

                <div class="d-flex" style="gap:10px">
                    <v-select variant="outlined" v-model="estado" label="Estado"
                        placeholder="Selecione o estado"></v-select>
                    <v-text-field variant="outlined" v-model="bairro" label="Bairro" placeholder="Digite o bairro"
                        type="text"></v-text-field>

                    <v-text-field variant="outlined" v-model="cidade" label="Cidade" placeholder="Digite a cidade"
                        type="text"></v-text-field>

                    <v-text-field variant="outlined" v-model="complemento" label="Complemento"
                        placeholder="Digite o complemento" type="text"></v-text-field>

                </div>
                <v-card-actions class="d-flex justify-end">
                    <v-btn class="bg-blue" width="150" height="40">Cadastrar</v-btn>
                </v-card-actions>
            </div>

        </v-form>
    </v-card>
</template>
<script>
export default{
    data(){
        return{
            nome:'',
            email:'',
            contato:'',
            dataNasimento:'',
            CEP:'',
            logradouro:'',
            estado:'',
            bairro:'',
            cidade:'',
            complemento:''
        }
    }
}
</script>
