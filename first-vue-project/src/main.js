import { createApp } from 'vue';
import {createStore} from 'vuex';

import App from './App.vue';

const store = createStore({
    state(){
        return {
            counter: 0
        };
    },
    mutations:{
        increment(state){
            state.counter = state.counter + 1;
        }
    },
    getters:{
        getCounter(state){
            return state.counter;
        }
    },
    actions:{
        increment(context){
            setTimeout(function(){
                context.commit('increment');
            }, 2000)
        }
    }
});
const app = createApp(App);

app.use(store);

app.mount('#app');
