import Vue from 'vue'
import App from './App.vue'
import $ from "jquery";

$(document).ready(function () {
  $(".movie-category button").click(function () {
    $(this).addClass("active").siblings().removeClass("active")
  })
})

new Vue({
  el: '#app',
  render: h => h(App)
})
