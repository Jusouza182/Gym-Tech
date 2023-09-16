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
        <v-tabs v-model="tab" bg-color="blue-lighten-3">
            <v-tab style="width: 14.5%;" value="segunda">Segunda-Feira</v-tab>
            <v-tab style="width: 14.5%;" value="terca">Terça-Feira</v-tab>
            <v-tab style="width: 14.5%;" value="quarta">Quarta-Feira</v-tab>
            <v-tab style="width: 14.5%;" value="quinta">Quinta-Feira</v-tab>
            <v-tab style="width: 14.5%;" value="sexta">Sexta-Feira</v-tab>
            <v-tab style="width: 14.5%;" value="sabado">Sábado</v-tab>
            <v-tab style="width: 14.5%;" value="domingo">Domingo</v-tab>

        </v-tabs>
        <v-card-text>
            <v-window v-model="tab">
                <v-window-item value="segunda">
                    <v-table>
                        <thead>
                            <tr>
                                <th class="text-left">
                                    <b>Exercicio</b>
                                </th>
                                <th class="text-left">
                                    <b>Peso(kg)</b>
                                </th>
                                <th class="text-left">
                                    <b>Repetições</b>
                                </th>
                                <th class="text-left">
                                    <b>Pausa (s)</b>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in treinosSeg" :key="item.id">
                                <td>{{ item.exercise_description }}</td>
                                <td>{{ item.weight }}</td>
                                <td>{{ item.repetitions }}</td>
                                <td>{{item.break_time }}</td>
                            </tr>

                        </tbody>
                    </v-table>
                </v-window-item>

                <v-window-item value="terca">
                    <v-table>
                        <thead>
                            <tr>
                                <th class="text-left">
                                    <b>Exercicio</b>
                                </th>
                                <th class="text-left">
                                    <b>Peso(kg)</b>
                                </th>
                                <th class="text-left">
                                    <b>Repetições</b>
                                </th>
                                <th class="text-left">
                                    <b>Pausa (s)</b>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in treinosTer" :key="item.id">
                                <td>{{ item.exercise_description }}</td>
                                <td>{{ item.weight }}</td>
                                <td>{{ item.repetitions }}</td>
                                <td>{{item.break_time }}</td>
                            </tr>

                        </tbody>
                    </v-table>
                </v-window-item>

                <v-window-item value="quarta">
                    <v-table>
                        <thead>
                            <tr>
                                <th class="text-left">
                                    <b>Exercicio</b>
                                </th>
                                <th class="text-left">
                                    <b>Peso(kg)</b>
                                </th>
                                <th class="text-left">
                                    <b>Repetições</b>
                                </th>
                                <th class="text-left">
                                    <b>Pausa (s)</b>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in treinosQua" :key="item.id">
                                <td>{{ item.exercise_description }}</td>
                                <td>{{ item.weight }}</td>
                                <td>{{ item.repetitions }}</td>
                                <td>{{item.break_time }}</td>
                            </tr>

                        </tbody>
                    </v-table>
                </v-window-item>

                <v-window-item value="quinta">
                    <v-table>
                        <thead>
                            <tr>
                                <th class="text-left">
                                    <b>Exercicio</b>
                                </th>
                                <th class="text-left">
                                    <b>Peso(kg)</b>
                                </th>
                                <th class="text-left">
                                    <b>Repetições</b>
                                </th>
                                <th class="text-left">
                                    <b>Pausa (s)</b>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in treinosQui" :key="item.id">
                                <td>{{ item.exercise_description }}</td>
                                <td>{{ item.weight }}</td>
                                <td>{{ item.repetitions }}</td>
                                <td>{{item.break_time }}</td>
                            </tr>

                        </tbody>
                    </v-table>
                </v-window-item>

                <v-window-item value="sexta">
                    <v-table>
                        <thead>
                            <tr>
                                <th class="text-left">
                                    <b>Exercicio</b>
                                </th>
                                <th class="text-left">
                                    <b>Peso(kg)</b>
                                </th>
                                <th class="text-left">
                                    <b>Repetições</b>
                                </th>
                                <th class="text-left">
                                    <b>Pausa (s)</b>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in treinosSex" :key="item.id">
                                <td>{{ item.exercise_description }}</td>
                                <td>{{ item.weight }}</td>
                                <td>{{ item.repetitions }}</td>
                                <td>{{item.break_time }}</td>
                            </tr>

                        </tbody>
                    </v-table>

                </v-window-item>

                <v-window-item value="sabado">
                    <v-table>
                        <thead>
                            <tr>
                                <th class="text-left">
                                    <b>Exercicio</b>
                                </th>
                                <th class="text-left">
                                    <b>Peso(kg)</b>
                                </th>
                                <th class="text-left">
                                    <b>Repetições</b>
                                </th>
                                <th class="text-left">
                                    <b>Pausa (s)</b>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in treinosSab" :key="item.id">
                                <td>{{ item.exercise_description }}</td>
                                <td>{{ item.weight }}</td>
                                <td>{{ item.repetitions }}</td>
                                <td>{{item.break_time }}</td>
                            </tr>

                        </tbody>
                    </v-table>
                </v-window-item>

                <v-window-item value="domingo">
                    <v-table>
                        <thead>
                            <tr>
                                <th class="text-left">
                                    <b>Exercicio</b>
                                </th>
                                <th class="text-left">
                                    <b>Peso(kg)</b>
                                </th>
                                <th class="text-left">
                                    <b>Repetições</b>
                                </th>
                                <th class="text-left">
                                    <b>Pausa (s)</b>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in treinosDom" :key="item.id">
                                <td>{{ item.exercise_description }}</td>
                                <td>{{ item.weight }}</td>
                                <td>{{ item.repetitions }}</td>
                                <td>{{item.break_time }}</td>
                            </tr>

                        </tbody>
                    </v-table>
                </v-window-item>
            </v-window>
        </v-card-text>
    </v-card>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            tab: null,
            treinos: [],
            treinosSeg: [],
            treinosTer: [],
            treinosQua: [],
            treinosQui: [],
            treinosSex: [],
            treinosSab: [],
            treinosDom: [],
            student_id: this.$route.params.id
        }


    },
    mounted() {
        axios.get(`http://localhost:3000/workouts?student_id=${this.student_id}`)
            .then(({ data }) => {
                this.treinos = data.workouts;
                this.treinosSeg = this.treinos.filter(data => data.day === 'segunda');
                this.treinosTer = this.treinos.filter(data => data.day === 'terca');
                this.treinosQua = this.treinos.filter(data => data.day === 'quarta');
                this.treinosQui = this.treinos.filter(data => data.day === 'quinta');
                this.treinosSex = this.treinos.filter(data => data.day === 'sexta');
                this.treinosSab = this.treinos.filter(data => data.day === 'sabado');
                this.treinosDom = this.treinos.filter(data => data.day === 'domingo');


                console.log(data)
                console.log(this.treinos)
                console.log(this.treinosDom)

            })
            .catch((error) => {
                alert(error)
            })
    }
}
</script>