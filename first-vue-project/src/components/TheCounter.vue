<template>
    <h3>{{ getCounter }}</h3>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed:{
        ...mapGetters(['getCounter'])
    },
}
</script>