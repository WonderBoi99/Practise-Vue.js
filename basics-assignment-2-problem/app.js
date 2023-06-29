const app = Vue.createApp({
    data(){
        return{
            alertMessage: "Panicccc!!!"
        };
    },
    methods: {
        showAlert(){
            alert(this.alertMessage);
        }
    }
})

app.mount("#assignment")