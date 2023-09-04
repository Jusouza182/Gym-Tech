<template>
    <v-card class="d-flex align-center elevation-0" style="margin: 2% 10%; margin-bottom: 0;">
        <v-icon icon="mdi-weight-lifter" size="60"></v-icon>
        <h2>Treinos</h2>
    </v-card>
    <v-divider :thickness="2" class="border-opacity-70" width="80%" style="margin: 0 auto;"></v-divider>
    <v-card class="elevation-0">
        <v-form @submit.prevent style="width: 80%; margin: 0 auto;">
            <div style="width: 80%; margin: 02% auto;">

                <v-select variant="outlined" v-model="nomeExercicio" label="Qual o exercicio?"
                    placeholder="Selecione um exercicio" :rules="[rules.required]"></v-select>

                <div class="d-flex" style="gap:10px">
                    <v-text-field variant="outlined" v-model="repeticoes" label="Repetições"
                        placeholder="Digite a quantidade de repetições" type="text" style="width: 10%"></v-text-field>

                    <v-text-field variant="outlined" v-model="peso" label="Peso" placeholder="Digite o peso" type="number"
                        style="width: 10%" :rules="[rules.required]"></v-text-field>

                    <v-text-field variant="outlined" v-model="pausa" label="Pausa" placeholder="Digite o tempo de pausa"
                        type="time" style="width: 10%" :rules="[rules.required]"></v-text-field>
                </div>

                <v-select variant="outlined" v-model="dia" label="Dia da semana" placeholder="Selecione o dia da semana"
                    :items="item"></v-select>

                <v-textarea variant="outlined" placeholder="Observações para esse treino" label="Observações"
                    v-model="observacoes"> </v-textarea>

                <v-card-actions class="d-flex justify-end">
                    <v-btn class="bg-blue-lighten-3" width="150" height="40">Cancelar</v-btn>
                    <v-btn class="bg-blue" width="150" height="40">Cadastrar</v-btn>
                </v-card-actions>
            </div>

        </v-form>
    </v-card>
</template>
<script>
export default {
    data() {
        return {
            nomeExercicio: '',
            repeticoes: 1,
            peso: '',
            pausa: '',
            dia: new Date().getDay(),
            observacoes: '',
            item: [
                {
                    title: 'Segunda-feira',
                    value: 'segunda'
                },
                {
                    title: 'Terça-feira',
                    value: 'terca'
                },
                {
                    title: 'Quarta-feira',
                    value: 'quarta'
                },
                {
                    title: 'Quinta-feira',
                    value: 'quinta'
                },
                {
                    title: 'Sexta-feira',
                    value: 'sexta'
                },
                {
                    title: 'Sábado',
                    value: 'sabado'
                },
                {
                    title: 'Domingo',
                    value: 'domingo'
                },
            ],
            rules: {
                required: value => !!value || 'Campo obrigatório'
            }
        }
    }, 
}

</script>