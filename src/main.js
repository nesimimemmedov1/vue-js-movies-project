import Vue from 'vue'
import App from './App.vue'
import $ from "jquery";
import Vuelidate from 'vuelidate';
import VueRouter from "vue-router"
import {
  routes
} from "./routes"

export const eventBus = new Vue({})

Vue.use(VueRouter)
Vue.use(Vuelidate)


const router = new VueRouter({
  routes,
  mode: "history"
})

$(document).ready(function () {
  $(".movie-category button").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  })
  $(".owl-prev").html('<i class="fa-solid fa-angle-left"></i>');
  $(".owl-next").html('<i class="fa-solid fa-angle-right"></i>');
  $("#header .nav-link").click(function () {
    $(".mobile-menu").css({
      right: "-100%",
      opacity: "0"
    });
    $("body").css({
      overflowY: "auto"
    });
    $(".menu-layer").css({
      visibility: "hidden",
      opacity: "0"
    });
  });
  $(window).on("load", function () {
    $("#preloader").fadeOut(1000)
  })
})


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
