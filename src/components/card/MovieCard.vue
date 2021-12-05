<template>
  <router-link
    @click.native="scrollToTop"
    tag="div"
    :to="`/details/${card.id}`"
    class="item"
  >
    <a href="/" class="movie-item">
      <img :src="`${card.image}`" alt="" />
      <div class="movie-name">
        <h6 class="name">{{ card.name }}</h6>
        <h6 class="release-date">{{ card.releaseDate }}</h6>
      </div>
      <div class="about-movie">
        <span>HD</span>
        <div>
          <h6 class="duration"><i class="far fa-clock"></i> 126 min</h6>
          <h6 class=""><i class="fas fa-thumbs-up"></i>{{ card.rating }}</h6>
        </div>
      </div>
    </a>
  </router-link>
</template>
<script>
// import {eventBus} from '/src/main.js'
import Details from "../Details.vue";
export default {
  components: {
    appDetails: Details,
  },
  props: ["card"],
  data() {
    return {};
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>