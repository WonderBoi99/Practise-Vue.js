function getRandomValue(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data(){
        return{
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0
        };
    },
    computed:{
        monsterBarStyle(){
            return {width: this.monsterHealth + '%'};
        },
        playerBarStyle(){
            return {width: this.playerHealth + '%'};
        },
        mayUseAttack(){
            return this.currentRound % 3 !== 0;
        }
    },
    methods: {
        attackMonster(){
            this.currentRound++;
            const attackValue = getRandomValue(2,10);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
        },
        attackPlayer(){
            const attackValue = getRandomValue(10,20);
            this.playerHealth -= attackValue;
        },
        specialAttack(){
            this.currentRound++;
            const attackValue = getRandomValue(30,25);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
        },
        heal(){
            this.currentRound++;
            const healValue = getRandomValue(10,20);
            if((this.playerHealth+healValue) > 100){
                this.playerHealth = 100;
            }
            else{
                this.playerHealth += healValue;
            }
        }
    },


});
app.mount("#game")