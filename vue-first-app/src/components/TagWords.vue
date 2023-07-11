<template>
  <div class="container">
    <h3>Hello</h3>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
              <img class="d-block w-100" src="../assets/Hold_Star_Group.png" alt="Second slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="../assets/Astronaut_Flag.png" alt="Second slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="../assets/logo.png" alt="Third slide">
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
  </div>
</template>
  
<script>
export default {
  mounted() {
    // Include Bootstrap dependencies and styles dynamically
    const bootstrapCSS = document.createElement('link');
    bootstrapCSS.rel = 'stylesheet';
    bootstrapCSS.href = 'https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css';
    document.head.appendChild(bootstrapCSS);

    const jqueryScript = document.createElement('script');
    jqueryScript.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
    document.body.appendChild(jqueryScript);

    const bootstrapJS = document.createElement('script');
    bootstrapJS.src = 'https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js';
    document.body.appendChild(bootstrapJS);
  },
};
</script>
  
<style>
  .carousel-item img {
  max-width: 100%;
  height: auto;
}
</style>
  