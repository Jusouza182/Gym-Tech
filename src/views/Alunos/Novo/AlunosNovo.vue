<template>
    <v-card class="d-flex align-center elevation-0" style="margin: 2% 10%; margin-bottom: 0;">
        <v-icon icon="mdi-account-multiple" size="60"></v-icon>
        <h2>Alunos</h2>
    </v-card>
    <v-divider :thickness="2" class="border-opacity-70" width="80%" style="margin: 0 auto;"></v-divider>

    <v-card class="elevation-0">
        <v-form @submit.prevent="cadastrar" style="width: 80%; margin: 0 auto; margin-bottom: 50px;" ref="form">
            {{ data.logradouro }}
            <div style="width: 80%; margin: 02% auto;">

                <div class="d-flex" style="gap:10px; margin-bottom: 12px;">
                    <v-text-field variant="outlined" v-model="nome" label="Nome completo"
                        placeholder="Digite o nome completo" type="text" style="width: 10%"
                        :rules="[rules.required]"></v-text-field>

                    <v-text-field variant="outlined" v-model="email" label="E-mail" placeholder="Digite o e-mail"
                        type="email" style="width: 10%" :rules="[rules.email, rules.required]"></v-text-field>
                </div>

                <div class="d-flex" style="gap:10px; margin-bottom: 12px;">
                    <v-text-field variant="outlined" v-model="contato" label="Contato"
                        placeholder="Digite o telefone para contato" type="number" style="width: 10%"
                        :rules="[rules.required]"></v-text-field>


                    <VueDatePicker locale="pt-BR" v-model="dataNasimento" :max-date="new Date()" cancelText="cancelar"
                        selectText="Selecionar" :enable-time-picker="false" placeholder="Digite a data de nascimento"
                        :format="format" style="width: 50%;"></VueDatePicker>




                </div>

                <div class="d-flex" style="gap:10px; margin-bottom: 12px;">

                    <v-text-field variant="outlined" v-model="cep" label="CEP" placeholder="Digite o CEP" type="number"
                        style="width: 4%" :rules="[rules.required]" @change="consultarCep()"></v-text-field>

                    <v-text-field variant="outlined" v-model="numero" label="Número" placeholder="Digite o número"
                        type="number" style="width: 2%" :rules="[rules.required]"></v-text-field>

                    <v-text-field variant="outlined" v-model="logradouro" label="Logradouro"
                        placeholder="Digite o logradouro" type="text" style="width: 35%"
                        :rules="[rules.required]"></v-text-field>
                </div>

                <div class="d-flex" style="gap:10px; margin-bottom: 12px;">
                    <v-text-field variant="outlined" v-model="estado" label="Estado" placeholder="Digite o estado"
                        type="text" :rules="[rules.required]"></v-text-field>

                    <v-text-field variant="outlined" v-model="bairro" label="Bairro" placeholder="Digite o bairro"
                        type="text" :rules="[rules.required]"></v-text-field>

                    <v-text-field variant="outlined" v-model="cidade" label="Cidade" placeholder="Digite a cidade"
                        type="text" :rules="[rules.required]"></v-text-field>

                    <v-text-field variant="outlined" v-model="complemento" label="Complemento"
                        placeholder="Digite o complemento" type="text"></v-text-field>

                </div>
                <v-card-actions class="d-flex justify-end">
                    <v-btn class="bg-blue-lighten-3" width="150" height="40" @click="reset()">Cancelar</v-btn>
                    <v-btn class="bg-blue" width="150" height="40" type="submit">Cadastrar</v-btn>
                </v-card-actions>
            </div>

        </v-form>
    </v-card>
</template>
<script>
import axios from "axios"
import moment from 'moment'
export default {
    data() {
        return {
            nome: '',
            email: '',
            contato: '',
            dataNasimento: new Date(),
            cep: '',
            logradouro: '',
            estado: '',
            bairro: '',
            cidade: '',
            complemento: '',
            numero: '',
            rules: {
                required: value => !!value || '*Campo obrigatório',
                email: value => {
                    if (value) {
                        const confirmaEmail =
                            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        return confirmaEmail.test(value) || '*E-mail inválido'
                    }

                }
            },

            data: {}
        }

    },
    methods: {
        async cadastrar() {

            const { valid } = await this.$refs.form.validate()

            if (!valid) {

                return
            }
            let dataFormatada = moment(this.dataNasimento).format("DD/MM/YYYY")

            const cadastro = {
                name: this.nome,
                email: this.email,
                contact: this.contato,
                date_birth: dataFormatada,
                cep: this.cep,
                street: this.logradouro,
                number: this.numero,
                neighborhood: this.bairro,
                city: this.cidade,
                province: this.estado,
                complement: this.complemento
            }
            this.$refs.form.reset()

            try {
                await axios.post('http://localhost:3000/students', cadastro)
                    .then(() => {
                        alert("Cadastrado com sucesso")

                    })
                    .catch(() => {
                        alert("Erro ao cadastrar")
                    })
            } catch (error) {
                console.log(error)
            }


        }, consultarCep() {
            axios.get(`https://viacep.com.br/ws/${this.cep}/json/`)
                .then(({ data }) => {
                    this.logradouro = data.logradouro;
                    this.cidade = data.localidade;
                    this.estado = data.uf;
                    this.bairro = data.bairro;
                })
                .catch((error) => {
                    alert(error)
                })
        },
        format(date) {

            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();

            return `${day}/${month}/${year}`;
        },
        reset () {
        this.$refs.form.reset()
      }

    },
}
</script>
<style >
.dp__input {
    height: 55px;
    border: 1px solid black;
}
</style>