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
    }
  };
</script>
