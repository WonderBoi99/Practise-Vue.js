<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadData">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">Loading ...</p>
      <ul v-else-if="!isLoading && results && results.length > 0">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  // props: ['results'],
  components: {
    SurveyResult,
  },
  data(){
    return{
      results: [],
      isLoading: false
    };
  },
  methods: {
    loadData(){
      this.isLoading = true;
      fetch('https://vue-http-demo-138e7-default-rtdb.firebaseio.com/results.json').then(
        (res) => {
          if(res.ok){
            return res.json();
          }
        }).then(
          (data) => {
            this.isLoading = false;
            const temp = [];
            for(const id in data){
              temp.push({
                id: id,
                name: data[id].name,
                rating: data[id].rating
              });
            }
            this.results = temp;
        });
    }
  },
  mounted(){
    this.loadData();
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>