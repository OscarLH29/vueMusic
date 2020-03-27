<template>
    <div>
        <v-app-bar app :color="bColor" :style="{backgroundColor: bColor}" >
            <div class="d-flex align-center">
                <v-img
                        alt="Vuetify Logo"
                        class="shrink mr-2" contain
                        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
                        transition="scale-transition"
                        width="40"
                />
                <div class="title white--text">
                    Music • Vue
                </div>
            </div>

            <v-spacer></v-spacer>

            <v-btn text small class="white--text"
                   v-for="(page, i) in links" :key="i"
                   @click="redirect(page.link, page.color)"
            >
                {{ page.name }}
            </v-btn>

            <v-spacer></v-spacer>

            <MenuDropdown :items="linksD"
                          :color="bColor"
                          @change-color="changeColor($event)"
            />

        </v-app-bar>
    </div>
</template>

<script>
    import MenuDropdown from './MenuDropdown';

    export default {
        name: 'NavBar',
        props: {
            msg: String
        },
        components: {
            MenuDropdown
        },
        data: () => ({
            links: [
                { name: 'Home',   link: '/home'   , color: '#1565C0' },
                { name: 'Artist', link: '/artist' , color: '#00B0FF'},
                { name: 'Album',  link: '/album'  , color: '#80D8FF'},
                { name: 'About',  link: '/about'  , color: '#0091EA'},
                { name: 'Users',  link: '/users'  , color: '#00B0FF'},
            ],
            linksD: [
                { name: 'Sign-out',  link: '/'  , color: '#00B0FF'},
            ],
            bColor: '#1565C0'
        }),
        methods: {
            changeColor(colorEvent){
                this.bColor = colorEvent;
            },
            redirect(link, color){
                this.bColor = color;
                this.$router.push(link);
            }
        }
    }
</script>

<style>
</style>
