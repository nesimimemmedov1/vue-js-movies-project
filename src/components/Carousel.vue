<template>
  <carousel
    id="carousel-main"
    :margin="25"
    :dots="false"
    :loop="true"
    :items="4"
    :nav="true"
    :autoplay="true"
    :responsive="{
      0: { items: 1 },
      576: { items: 2, nav: false, dots: false },
      992: { items: 2 },
      1200: { items: 4 },
      1500: { items: 4 },
    }"
    responsivebaseelement="body"
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
import products from "../components/api/movie.json";
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
    },
  },
};
</script>
