<template>
    <li>
        <h2>{{ friends.name }}</h2>
        <button @click="toggoleDetails">show details</button>
        <ul v-if="dataAreVisible">
            <li><strong>Phone:</strong>{{ friends.phone }}</li>
            <li><strong>Email:</strong>{{ friends.email }}</li>
        </ul>
    </li>
</template>

<script>

export default ({
    data(){
        return{
            dataAreVisible: false,
            friends:
            {
                id: 1,
                name:'bobby',
                phone:345-345-3453,
                email: 'bobby@email.com'
            }
        };
    },
    methods:{
        toggoleDetails(){
            this.dataAreVisible = !this.dataAreVisible;
        }
    }
})
</script>
