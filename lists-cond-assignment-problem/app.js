const app = Vue.createApp({
    data(){
        return{
            tasks: [],
            newTask: '',
            showList: true
        };
    },
    methods:{
        addTask(){
            this.tasks.push(this.newTask);
            this.newTask = '';
        },
        toogleList(){
            this.showList = !this.showList;
        }
    }
});

app.mount("#assignment")