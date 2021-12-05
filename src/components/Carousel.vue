<template>
  <carousel
    id="carousel-main"
    :margin="25"
    :dots="false"
    :loop="true"
    :items="4"
    :nav="false"
  >
    <app-card
      @click.native="sendCardItem(item)"
      :card="item"
      v-for="item in items"
      :key="item.id"
    ></app-card>
  </carousel>
</template>
<script>
import carousel from "vue-owl-carousel";
import products from "../components/json/movie.json";
import card from "./card/MovieCard.vue";
import { eventBus } from "../main";

export default {
  components: { carousel, appCard: card },
  data() {
    return {
      items: products.movies,
    };
  },
  methods: {
    sendCardItem(item) {
      eventBus.$emit("cartData", item);
      console.log(item);
    },
  },
};
</script>
