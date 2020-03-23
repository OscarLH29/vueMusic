<template>
    <div>
        <v-card>
            <v-card-title>
                Artist
                <v-spacer></v-spacer>
                <v-text-field
                        v-model="search"
                        append-icon="mdi-magnify"
                        label="Search"
                        single-line
                        hide-details
                ></v-text-field>
            </v-card-title>
            <v-data-table
                    :headers="headers"
                    :items="artistList"
                    :items-per-page="5"
                    :search="search"
                    class="elevation-1"
            >

                <template v-slot:top>
                    <v-toolbar flat color="white">
                        <v-dialog v-model="dialog" max-width="500px">
                            <template v-slot:activator="{ on }">
                                <v-btn color="primary" dark class="mb-2" v-on="on">New Artist</v-btn>
                            </template>
                            <v-card>
                                <v-card-title>
                                    <span class="headline">New Artist</span>
                                </v-card-title>

                                <v-card-text>
                                    <v-container>
                                        <v-row>
                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field v-model="editedItem.name" label="Name"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field v-model="editedItem.country" label="Country"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field v-model="editedItem.age" label="Age"></v-text-field>
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                </v-card-text>

                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                                    <v-btn color="blue darken-1" text @click="save">Save</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-toolbar>
                </template>
            </v-data-table>
        </v-card>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    export default {
        name: 'Artist',
        props: {
        },
        data: () => ({
            headers: [
                {
                    text: 'Name',
                    align: 'start',
                    sortable: false,
                    value: 'name'
                },
                {
                    text: 'Age',
                    align: 'start',
                    sortable: false,
                    value: 'age'
                },
                {
                    text: 'City of Birth',
                    align: 'start',
                    sortable: false,
                    value: 'country'
                },
            ],
            search: null,
            dialog: false,
            editedItem: {
                name: null,
                country: null,
                age: null
            }
        }),
        computed: { // getters & setters
            ...mapGetters ({
                artistList: 'artist/artistList'
            })
        },
        methods: {
            close() {
                this.dialog = false;
            },
            save() {
                this.$store.dispatch('artist/addArtist', this.editedItem);
                this.close();
            }
        },
        // lifecycle
        mounted() {
        }
    }
</script>

<style>
</style>
