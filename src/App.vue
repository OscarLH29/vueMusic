<template>
  <v-app :style="!isLogin ? 'background: #0091EA' : ''">
    <NavBar v-if="isLogin" />
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
      NavBar,
    },
    data: () => ({
      isLogin: false
    }),
    methods: {
      logi(){
        window.location.pathname !== '/login' ? this.isLogin = true : this.isLogin = false;
      }
    },
    mounted() {
      this.$store.dispatch('album/getIP');
      this.logi();
    },
    updated() {
      this.logi();
    }
  };
</script>
