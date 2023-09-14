<template>
    <button @click="logIn" v-if="!isLoggedIn">Log In</button>
    <button @click="logOut" v-else>Log Out</button>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed:{
        ...mapGetters(['isLoggedIn'])
    },
    methods:{
        ...mapActions(['logIn', 'logOut'])
    }
}
</script>
