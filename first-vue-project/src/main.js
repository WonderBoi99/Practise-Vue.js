import { createApp } from 'vue';
import {createStore} from 'vuex';

import App from './App.vue';

const counterModule = {
    state(){
        return{
            counter: 0,
        };
    },
    getters:{
        getCounter(state){
            return state.counter;
        },
    },
    mutations:{
        increment(state){
            state.counter = state.counter + 1;
        },
    },
    actions:{
        increment(context){
            setTimeout(function(){
                context.commit('increment');
            }, 2000)
        },
    }
}

const store = createStore({
    modules:{
        numbers: counterModule
    },
    state(){
        return {
            isLoggedIn: false
        };
    },
    mutations:{
        userAuthenticated(state, payload){
            state.isLoggedIn = payload.isAuth;
        }
    },
    getters:{
        isLoggedIn(state){
            return state.isLoggedIn;
        }
    },
    actions:{
        logIn(context){
            context.commit('userAuthenticated', {isAuth: true});
        },
        logOut(context){
            context.commit('userAuthenticated', {isAuth: false});
        }
    }
});
const app = createApp(App);

app.use(store);

app.mount('#app');
