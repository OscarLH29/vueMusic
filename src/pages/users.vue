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
        <hr><br>


        <v-data-table   :headers="headers"
                        :items="userList"
                        :items-per-page="5"
                        :search="search"
                        class="elevation-1">

            <template v-slot:item.actions="{ item }">
                <v-icon small @click="goTo(item)"
                        class="mr-2">
                    mdi-pencil
                </v-icon>
                <v-icon small @click="delet(item)">
                    mdi-delete
                </v-icon>
            </template>

            <template v-slot:item.avatar="{ item }">
                <v-avatar>
                    <img :src="item.avatar" :alt="item.first_name">
                </v-avatar>
            </template>

        </v-data-table>






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
            search: null,
            headers: [
                {
                    text: 'ID',
                    align: 'start',
                    sortable: false,
                    value: 'id'
                },
                {
                    text: 'Avatar',
                    align: 'start',
                    sortable: false,
                    value: 'avatar'
                },
                {
                    text: 'Email',
                    align: 'start',
                    sortable: false,
                    value: 'email'
                },
                {
                    text: 'First name',
                    align: 'start',
                    sortable: false,
                    value: 'first_name'
                },
                {   text: 'Actions',
                    align: 'start',
                    value: 'actions',
                    sortable: false
                },
            ],
            dialog: false,
        }),
        methods: {
            goTo(item) {
                this.$router.push(`/user/${item.id}`)
            },
            delet(item){
                this.$store.dispatch('users/deleteUser', item.id).then( () => {
                    alert('Delete')
                });
            }
        },
        computed: { // getters & setters
            ...mapGetters({
                userList: 'users/userList',
                deleteU: 'users/deleteU'
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

