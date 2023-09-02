<template>
    <v-container id="corpo" class="bg-blue-lighten-4 elevation-5">
        <v-img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/dumbbell.png" alt="dumbbell" class="mx-auto"
            id="img" />
        <v-form @submit.prevent="FazerLogin" class="d-flex flex-column" id="form" ref="form">
            <v-text-field variant="outlined" bg-color="#fff" v-model="email" label="E-mail" placeholder="Digite seu e-mail"
                :rules="[v => !!v || 'O e-mail é obrigatório']" type="email" required></v-text-field>
            <v-text-field type="password" variant="outlined" bg-color="#fff" v-model="senha" label="Senha"
                placeholder="Digite sua senha" :rules="[v => !!v || 'A senha é obrigatória']" required></v-text-field>
            <v-btn type="submit" color="blue" class="elevation-5">Entrar</v-btn>
            <v-container class="d-flex justify-center" id="cadastro">
                <p>Ainda não tem cadastro?</p>
                <router-link id="router" to="/cadastro">
                    <p><b>Cadastra-se</b></p>
                </router-link>
            </v-container>


        </v-form>
    </v-container>
</template>
<script>
import axios from 'axios'

export default {
    data() {
        return {
            email: "",
            senha: "",
        }
    },
    methods: {
        async FazerLogin() {
            const { valid } = await this.$refs.form.validate()

            if (!valid) {
                return
            }

            const login = {
                email: this.email,
                password: this.senha
            }
            this.$refs.form.reset()

            try {
                await axios.post('http://localhost:3000/sessions', login)
                    .then(() => {
                        this.$router.push("/dashboard")
                    })
                    .catch(() => {
                        alert("Credenciais erradas")
                    })
            } catch (error) {
                console.log(error)
            }

        }
    }
}

</script>
<style>
#corpo {
    width: 400px;
    height: 600px;
    margin-top: 6%;
}

#form {
    margin: 20% auto;
}

#router {
    text-decoration: none;
    color: black;
}

#cadastro {
    margin-top: 80px;
}

#img {
    margin-top: 10%;
}
</style>