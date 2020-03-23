<template>
    <div>
        <v-card>
            <v-card-title>
                Albums
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
                    :items="albumList"
                    :items-per-page="5"
                    :search="search"
                    class="elevation-1"
            >

            <template v-slot:top>
                <v-toolbar flat color="white">
                    <v-dialog v-model="dialog" max-width="500px">
                        <template v-slot:activator="{ on }">
                            <v-btn color="primary" dark class="mb-2" v-on="on">New Album</v-btn>
                        </template>
                        <v-card>
                            <v-card-title>
                                <span class="headline">New Album</span>
                            </v-card-title>

                            <v-card-text>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.title" label="Title"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.year" label="Year"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.brandCompany" label="Brand Company"></v-text-field>
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
        name: 'Album',
        props: {
        },
        data: () => ({
            headers: [
                {
                    text: 'Title',
                    align: 'start',
                    sortable: false,
                    value: 'title'
                },
                {
                    text: 'Year',
                    align: 'start',
                    sortable: false,
                    value: 'year'
                },
                {
                    text: 'Brand Company',
                    align: 'start',
                    sortable: false,
                    value: 'brandCompany'
                },
            ],
            search: null,
            dialog: false,
            editedItem: {
                title: null,
                year: null,
                brandCompany: null
            }
        }),
        computed: { // getters & setters
            ...mapGetters({
                albumList: 'album/albumList'
            })
        },
        methods: {
            close() {
                this.dialog = false;
            },
            save() {
                this.$store.dispatch('album/addAlbum', this.editedItem);
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
