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
        <div>
            <v-carousel
                    cycle
                    height="400"
                    hide-delimiter-background
                    show-arrows-on-hover
            >
                <v-carousel-item
                        v-for="(slide, i) in artistList"
                        :key="i"
                >
                    <v-sheet
                            :color="colors[i]"
                            height="100%"
                    >
                        <v-row
                                class="fill-height"
                                align="center"
                                justify="center"
                        >
                            <div class="display-3">{{ slide.name }}</div>
                        </v-row>
                    </v-sheet>
                </v-carousel-item>
            </v-carousel>
        </div>
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
                    text: 'ID',
                    align: 'start',
                    sortable: false,
                    value: 'id'
                },
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
                {   text: 'Actions',
                    align: 'start',
                    value: 'actions',
                    sortable: false
                },
            ],
            search: null,
            colors: [
                'indigo',
                'warning',
                'pink darken-2',
                'red lighten-1',
                'primary',
                'deep-purple accent-4',
            ],
            dialog: false,
            editedItem: {
                id: null,
                name: null,
                country: null,
                age: null
            },
            defaultItem: {
                id: null,
                name: null,
                country: null,
                age: null
            },
            isEdit: false
        }),
        computed: { // getters & setters
            ...mapGetters ({
                artistList: 'artist/artistList'
            })
        },
        methods: {
            close() {
                this.dialog = false;
                this.isEdit = false;
                this.editedItem = Object.assign({}, this.defaultItem);
            },
            save() {
                this.isEdit ? this.$store.dispatch('artist/updateArtist', this.editedItem) :
                              this.$store.dispatch('artist/addArtist', this.editedItem);
                this.close();
            },
            editItem(item) {
                this.editedItem.id = item.id;
                this.editedItem.name = item.name;
                this.editedItem.country = item.country;
                this.editedItem.age = item.age;
                this.dialog = true;
                this.isEdit = true;
            },
            deleteItem(item) {
                this.$store.dispatch('artist/deleteArtist', item.id);
            }
        },
        // lifecycle
        mounted() {
            this.$store.dispatch('artist/getArtists');
        }
    }
</script>

<style>
</style>
