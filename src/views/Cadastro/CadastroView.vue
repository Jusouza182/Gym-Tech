<template>
    <v-container id="corpo" class="bg-blue-lighten-4 elevation-5">
        <h2>Crie sua conta</h2>
        <v-form @submit.prevent="cadastrar()" ref="form">
            <v-text-field v-model="nome" variant="outlined" bg-color="#fff" label="Nome completo"
                placeholder="Digite seu nome completo" :rules="[rules.required]"
                style="margin-bottom: 10px;"></v-text-field>
            <v-text-field v-model="email" type="email" variant="outlined" bg-color="#fff" label="E-mail"
                placeholder="Digite seu e-mail" :rules="[rules.email, rules.required]"
                style="margin-bottom: 10px;"></v-text-field>
            <v-text-field v-model="senha" variant="outlined" bg-color="#fff" label="Senha" placeholder="Digite sua senha"
                type="password" :rules="[rules.required, rules.counter]" style="margin-bottom: 10px;"></v-text-field>
            <v-text-field v-model="confirmaSenha" variant="outlined" bg-color="#fff" label="Confirme sua senha"
                placeholder="Digite sua senha novamente" type="password" :rules="[rules.required, rules.passwordConfirmation]"
                style="margin-bottom: 11px;"></v-text-field>
            <v-select v-model="plano" variant="outlined" bg-color="#fff" label="Selecione seu plano"
                placeholder="Qual o seu plano?" :items="itens"></v-select>
            <v-container class="d-flex justify-center">
                <v-btn type="submit" color="blue" class="elevation-5" id="botao">Cadastrar</v-btn>
                <router-link to="/"><v-btn type="submit" color="blue" class="elevation-5">Voltar</v-btn> </router-link>
            </v-container>

        </v-form>
    </v-container>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {

            nome: '',
            email: '',
            senha: '',
            confirmaSenha: '',
            plano: "Bronze",
            itens: [
                {
                    title: 'Bronze',
                    value: 'bronze'
                },
                {
                    title: 'Prata',
                    value: 'silver'
                },
                {
                    title: 'Ouro',
                    value: 'gold'
                },
            ],
            rules: {
                required: value => !!value || 'Campo obrigatório',
                counter: value => value.length >= 8 && value.length <= 20 || 'Senha deve ser maior que 8 caracteres e menor que 20',
                email: value => {
                    const confirmaEmail =
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    return confirmaEmail.test(value) || 'E-mail inválido'
                },
                passwordConfirmation: value => this.senha === value || 'Erro na confirmação de senha'
            }

        }

    },
    methods: {
        async cadastrar() {
            const { valid } = await this.$refs.form.validate()

            if (!valid) {
                return
            }

            const cadastro = {
                name: this.nome,
                email: this.email,
                password: this.senha,
                type_plan: this.plano

            }
            this.$refs.form.reset()

            try {
                await axios.post('http://localhost:3000/users', cadastro)
                    .then(() => {
                        alert("Cadastrado com sucesso")
                        this.$router.push("/")
                    })
                    .catch(() => {
                        alert("Não foi possível criar a conta nesse momento")
                    })
            } catch (error) {
                console.log(error)
            }


        }
    },
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

#botao {
    margin-right: 15px;
    margin-bottom: 25px;
}
</style>