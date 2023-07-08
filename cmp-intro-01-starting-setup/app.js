const app = Vue.createApp({
    data() {
        return{
            friends:[
                {
                    id: 'perry',
                    name: 'mike perry',
                    phone: '234-234-2344',
                    email: 'perry@email.com'
                },
                {
                    id: 'bob',
                    name: 'mi bob',
                    phone: '234-234-2344',
                    email: 'bob@email.com'
                },
                {
                    id: 'we',
                    name: 'sdf we',
                    phone: '234-234-2344',
                    email: 'we@email.com'
                }

            ],
            showDetails: false
        };
    } ,
    methods: {
        toggleDetails(){
            this.showDetails = !this.showDetails;
        }
    }
});

app.mount("#app");