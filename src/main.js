import Vue from 'vue'
import App from './App.vue'
import $ from "jquery";
import VueRouter from "vue-router"
import {
  routes
} from "./routes"

export const eventBus = new Vue({})

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: "history"
})

$(document).ready(function () {
  $(".movie-category button").click(function () {
    $(this).addClass("active").siblings().removeClass("active")
  })
  // $.getJSON("/src/json/movie.json",
  //   function (data) {
  //     $(data.movies).each(function(i,val){
  //       console.log(this.name);
  //     })
  //   }
  // );
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
