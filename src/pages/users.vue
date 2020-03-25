<template>
    <div>
        <v-carousel
                cycle
                height="400"
                hide-delimiter-background
                show-arrows-on-hover>
            <v-carousel-item
                    v-for="(slide, i) in userList" :key="i">
                <v-sheet
                        :color="colors[i]"
                        height="100%">
                    <v-row
                            class="fill-height"
                            align="center"
                            justify="center">
                        <div class="display-3">{{ slide.first_name + ' ' + slide.last_name}}</div>
                        <div>
                            <br>
                            <small><strong>{{slide.email}}</strong></small>
                        </div>
                    </v-row>
                </v-sheet>
            </v-carousel-item>
        </v-carousel>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: 'Users',
        props: {
        },
        data: () => ({
            colors: [
                'indigo',
                'warning',
                'pink darken-2',
                'red lighten-1',
                'primary',
                'deep-purple accent-4',
            ],
        }),
        methods: {
        },
        computed: { // getters & setters
            ...mapGetters({
                userList: 'users/userList'
            })
        },
        // lifecycle
        mounted() {
            this.$store.dispatch('users/getUsers');
        }
    }
</script>

<style lang="scss">
</style>

