<template>
    <div class="align-center text-center">
        <v-col v-if="isLoad">
            <v-progress-circular color="primary"
                                 indeterminate
            />
        </v-col>
        <v-col v-else>
            <h3>User:</h3>
            <h5>{{user.email}}</h5>
        </v-col>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: 'User',
        props: {
        },
        data: () => ({
            isLoad: true
        }),
        methods: {
        },
        computed: { // getters & setters
            ...mapGetters({
                user: 'users/user',
            })
        },
        // lifecycle
        mounted() {
            setTimeout( () => {
                this.$store.dispatch('users/getUser', this.$route.params.id).then( () => {
                    this.isLoad = false
                });
            }, 1500)
        }
    }
</script>

<style lang="scss">
</style>
