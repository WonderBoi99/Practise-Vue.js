import { createApp } from 'vue';
import {createStore} from 'vuex';

import App from './App.vue';

const store = createStore({
    state(){
        return {
            counter: 0,
            isLoggedIn: false
        };
    },
    mutations:{
        increment(state){
            state.counter = state.counter + 1;
        },
        userAuthenticated(state, payload){
            state.isLoggedIn = payload.isAuth;
        }
    },
    getters:{
        getCounter(state){
            return state.counter;
        },
        isLoggedIn(state){
            return state.isLoggedIn;
        }
    },
    actions:{
        increment(context){
            setTimeout(function(){
                context.commit('increment');
            }, 2000)
        },
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
