<template>
  <v-app>
    <NavBar />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
  import NavBar from './components/navBar';

  export default {
    name: 'App',
    components: {
      NavBar
    },
    mounted() {
      this.$store.dispatch('album/getIP')
    }
  };
</script>
