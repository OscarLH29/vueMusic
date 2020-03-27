<template>
    <v-card class="align-center text-center log" width="325">
        <div v-if="!isLoading">
        <v-col>
            <h2 class="align-center text-center">Login</h2>
        </v-col>
        <v-col>
            <v-form
                    ref="form"
                    v-model="valid"
                    lazy-validation
            >

                <v-text-field
                        v-model="email"
                        label="E-mail"
                        required id="email"
                        :rules="emailRules"
                ></v-text-field>

                <v-checkbox
                        v-model="checkbox"
                        label="Do you want to failed?"
                ></v-checkbox>

                <v-text-field
                        v-model="password"
                        label="Password"
                        type="password" id="pass"
                        :disabled="checkbox"
                ></v-text-field>

                <v-btn
                        :disabled="!valid"
                        color="primary"
                        class="mr-4"
                        @click="submit"
                >
                    Login
                </v-btn>

            </v-form>
        </v-col>
    </div>
        <div v-else>
            <v-img src="@/assets/loader.gif"></v-img>
        </div>
    </v-card>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: 'Login',
        props: {
        },
        data: () => ({
            valid: true,
            checkbox: false,
            email: '',
            emailRules: [
                v => !!v || 'Email is required',
            ],
            password: '',
            isLoading: false
        }),
        methods: {
            getData(){
                let data = {
                    email: document.getElementById('email').value,
                    password: document.getElementById('pass').value
                };
                return data;
            },
            submit(){
                this.isLoading = true;
                let req = this.getData();
                this.$store.dispatch('users/postUser', req);
                setTimeout( () => {
                    if (this.login === null){
                        alert('Error: failed to login');
                        window.location.reload();
                    } else if (this.login.status === 200){
                        alert(`Success, redirect, your token is: ${this.login.data.token}`);
                        this.$router.push('/home');
                    }
                    this.isLoading = false;
                }, 2500)

            }
        },
        computed: { // getters & setters
            ...mapGetters({
                login: 'users/loginR'
            })
        },
        // lifecycle
        mounted() {
        }
    }
</script>

<style lang="scss">
    .log {
        margin: 15% 40%;
        border: 2px solid black !important;
    }
</style>
