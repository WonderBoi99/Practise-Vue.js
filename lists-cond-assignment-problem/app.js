const app = Vue.createApp({
    data(){
        return{
            tasks: [],
            newTask: '',
            showList: true
        };
    },
    computed:{
        buttonCaption(){
            return this.showList? 'Hide' : 'Show';
        }
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