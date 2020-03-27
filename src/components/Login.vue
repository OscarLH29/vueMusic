<template>
    <div class="text-center align-center">
        Login Component
        <hr><hr>
        <v-alert type="error" v-if="hasError">
            {{errorMsg}}
        </v-alert>
            <v-text-field  label="Email"
                           v-model="user.email"
            ></v-text-field>

            <v-text-field label="Password" type="password"
                          v-model="user.password"
            ></v-text-field>

            <v-btn  color="primary"
                    :loading="isLoading"
                    :disabled="isLoading"
                    @click="login">
                Login
            </v-btn>

    </div>
</template>

<script>
    // import { mapGetters } from 'vuex';

    export default {
        name: 'Login',
        props: {
        },
        data: () => ({
            user: {
                email: null,
                password: null
            },
            isLoading: false,
            hasError: false,
            errorMsg: null
        }),
        methods: {
            login() {
                let user = {
                    email: this.user.email,
                    password: this.user.password
                };
                this.isLoading = true;
                //this.$store.dispatch('users/updateIsLoading');
                this.$store.dispatch('users/getLogin', user)
                    .then( () => {
                        this.isLoading = false;
                        setTimeout( () => {
                            this.isLoading = false;
                            this.$router.push('/album')
                        }, 2000)
                    })
                    .catch( (error) => {
                        this.isLoading = false;
                        this.hasError = true;
                        this.errorMsg = error.response.data.error;
                        setTimeout( () => {
                            this.hasError = false;
                        }, 3500)
                    })

            }
        },
        // computed: { // getters & setters
        //     ...mapGetters({
        //         isLoading: 'users/isLoading'
        //     })
        // },
        // watch: {
        //     isLoading: function(newValue) {
        //             newValue ? setTimeout( () => {
        //                 this.$router.push('/album')
        //             }, 2000) : '';
        //     }
        // },
        // lifecycle
        mounted() {
        }
    }
</script>

<style lang="scss">
</style>
