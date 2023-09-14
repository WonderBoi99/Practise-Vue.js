<template>
  <base-container title="Vuex" v-if="isLoggedIn">
  <the-counter></the-counter>
    <button @click="increment">Add 1</button>
  </base-container>
  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import UserAuth from './components/UserAuth.vue';
import { mapActions, mapGetters} from 'vuex';

export default {
  components: {
    BaseContainer,
    TheCounter,
    UserAuth
  },
  computed:{
        ...mapGetters(['isLoggedIn'])
  },
  methods:{
    // addOne(){
    //   this.$store.dispatch('increment');
    // }
    ...mapActions(['increment'])
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>