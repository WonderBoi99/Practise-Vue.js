function getRandomValue(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data(){
        return{
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null
        };
    },
    computed:{
        monsterBarStyle(){
            if(this.monsterHealth <= 0){
                return {width: '0%'};
            }
            else{
                return {width: this.monsterHealth + '%'};
            }
        },
        playerBarStyle(){
            if(this.playerHealth <= 0){
                return {width: '0%'};
            }
            else{
                return {width: this.playerHealth + '%'};
            }
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
        },
        newGame(){
            this.currentRound = 0;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.winner = null;
        },
        giveUp(){
            this.winner = 'monster';
            this.playerHealth = 0;
        }
    },
    watch: {
        playerHealth(value){
            if (value <= 0 && this.monsterHealth <= 0){
                this.winner = 'draw';
            }
            else if(value <= 0){
                //monster won
                this.winner = 'monster';
            }
        },
        monsterHealth(value){
            if (value <= 0 && this.playerHealth <= 0){
                //draw
                this.winner = 'draw';
            }
            else if(value <= 0){
                //player won
                this.winner = 'player';
            }
        }
    }


});
app.mount("#game")