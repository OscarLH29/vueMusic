<template>
    <v-menu offset-y bottom left>
        <template v-slot:activator="{ on }">
            <v-btn dark icon v-on="on">
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
        </template>
        <v-list :style="{backgroundColor: color}">
            <v-list-item v-for="(item, i) in items"
                         :key="i"
                         @click="redirect(item.link), $emit('change-color', item.color)"
                         :style="{backgroundColor: color}"
            >
                <v-list-item-title style="color: #fff">{{item.name}}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>
</template>

<script>
    export default {
        name: 'MenuDropdown',
        props: {
            items: Array,
            color: String
        },
        methods: {
            redirect(link){
                this.$router.push(link);
                window.location.reload();
            }
        }
    }
</script>

<style>
</style>
