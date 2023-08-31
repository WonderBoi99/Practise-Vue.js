<template>
  <section>
    <header>
      <h1>My Friends</h1>
      <active-user :firstname="BOB" :userage="23"></active-user>
      <user-data></user-data>
    </header>
    <ul>
    </ul>
  </section>
</template>

<script>
import ActiveUser from './components/ActiveUser.vue';
import UserData from './components/UserData.vue';
export default {
  components: { ActiveUser, UserData },
  data() {
    return {
      users: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          age: "23",
        },
      ],
    };
  },
};
</script>

<style>



</style>