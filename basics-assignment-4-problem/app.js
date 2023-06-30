const app = Vue.createApp({
    data(){
        return{
            className: ''
        }
    },
    computed:{
        class(){
            return {user1: className === 'user1', user2: className === 'user2'};
        }
    }

});
app.mount('#assignment');