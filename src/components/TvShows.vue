<template>
  <carousel
    id="carousel-main"
    :margin="25"
    :dots="false"
    :loop="true"
    :items="4"
    :nav="false"
  >
    <a href="/" class="movie-item">
      <img src="../assets/coverimg1.jpg" alt="" />
      <div class="movie-name">
        <h6 class="name">Women's day</h6>
        <h6 class="release-date">2021</h6>
      </div>
      <div class="about-movie">
        <span>HD</span>
        <div>
          <h6 class="duration"><i class="far fa-clock"></i> 128 min</h6>
          <h6 class=""><i class="fas fa-thumbs-up"></i>5.0</h6>
        </div>
      </div>
    </a>
    <a href="/" class="movie-item">
      <img src="../assets/coverimg2.jpg" alt="" />
      <div class="movie-name">
        <h6 class="name">The Perfect Match</h6>
        <h6 class="release-date">2021</h6>
      </div>
      <div class="about-movie">
        <span>HD</span>
        <div>
          <h6 class="duration"><i class="far fa-clock"></i> 128 min</h6>
          <h6 class=""><i class="fas fa-thumbs-up"></i>5.0</h6>
        </div>
      </div>
    </a>
    <a href="/" class="movie-item">
      <img src="../assets/coverimg3.jpg" alt="" />
      <div class="movie-name">
        <h6 class="name">The Dog Woof</h6>
        <h6 class="release-date">2021</h6>
      </div>
      <div class="about-movie">
        <span>HD</span>
        <div>
          <h6 class="duration"><i class="far fa-clock"></i> 125 min</h6>
          <h6 class=""><i class="fas fa-thumbs-up"></i>6.5</h6>
        </div>
      </div>
    </a>
    <a href="/" class="movie-item">
      <img src="../assets/coverimg4.jpg" alt="" />
      <div class="movie-name">
        <h6 class="name">The Easy Rich</h6>
        <h6 class="release-date">2021</h6>
      </div>
      <div class="about-movie">
        <span>HD</span>
        <div>
          <h6 class="duration"><i class="far fa-clock"></i> 122 min</h6>
          <h6 class=""><i class="fas fa-thumbs-up"></i>5.2</h6>
        </div>
      </div>
    </a>
    <a href="/" class="movie-item">
      <img src="../assets/coverimg5.jpg" alt="" />
      <div class="movie-name">
        <h6 class="name">The Cooking</h6>
        <h6 class="release-date">2021</h6>
      </div>
      <div class="about-movie">
        <span>HD</span>
        <div>
          <h6 class="duration"><i class="far fa-clock"></i> 120 min</h6>
          <h6 class=""><i class="fas fa-thumbs-up"></i>6.7</h6>
        </div>
      </div>
    </a>
  </carousel>
</template>
<script>
import carousel from "vue-owl-carousel";
export default {
  components: { carousel },
};
</script>
>