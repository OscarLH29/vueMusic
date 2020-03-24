<template>
    <div>
        <v-card>
            <v-card-title>
                Albums {{ ip }}
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
            <template v-slot:item.actions="{ item }">
                <v-icon
                        small
                        class="mr-2"
                        @click="editItem(item)"
                >
                    mdi-pencil
                </v-icon>
                <v-icon
                        small
                        @click="deleteItem(item)"
                >
                    mdi-delete
                </v-icon>
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
                    text: 'ID',
                    align: 'start',
                    sortable: false,
                    value: 'id'
                },
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
                {   text: 'Actions',
                    align: 'start',
                    value: 'actions',
                    sortable: false
                },
            ],
            search: null,
            dialog: false,
            editedItem: {
                id: null,
                title: null,
                year: null,
                brandCompany: null
            },
            defaultItem: {
                id: null,
                title: null,
                year: null,
                brandCompany: null
            },
            isEdit: false
        }),
        computed: { // getters & setters
            ...mapGetters({
                albumList: 'album/albumList',
                ip: 'album/IP'
            })
        },
        methods: {
            close() {
                this.dialog = false;
                this.isEdit = false;
                this.editedItem = Object.assign({}, this.defaultItem);
            },
            save() {
                if (this.isEdit) {
                    this.$store.dispatch('album/updateAlbum', this.editedItem);
                } else {
                    this.$store.dispatch('album/addAlbum', this.editedItem);
                }
                this.close();
            },
            editItem(item) {
                this.editedItem.id = item.id;
                this.editedItem.title = item.title;
                this.editedItem.year = item.year;
                this.editedItem.brandCompany = item.brandCompany;
                this.dialog = true;
                this.isEdit = true;
            },
            deleteItem(item) {
                this.$store.dispatch('album/deleteAlbum', item.id);
            }
        },
        // lifecycle
        mounted() {
            this.$store.dispatch('album/getAlbums');
        }
    }
</script>

<style>
</style>
