<template>
  <div id="streaming-section">
    <div class="main">
      <div class="container">
        <div class="header">
          <div class="title">
            <h6>ONLINE STREAMING</h6>
            <h1>Upcoming Movies</h1>
          </div>
          <div class="movie-category">
            <button @click="activeCategory = 'appTvShows'" class="active">
              TV Shows
            </button>
            <button @click="activeCategory = 'appMovie'">Movies</button>
            <button @click="activeCategory = 'appAnime'">Anime</button>
          </div>
        </div>
        <transition name="fade" mode="out-in">
          <component :is="activeCategory">
            <div class="category">
              {{ activeCategory }}
            </div>
          </component>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
import tvshow from "../components/TvShows";
import movie from "../components/Movie";
import anime from "../components/Anime";

export default {
  components: {
    appTvShows: tvshow,
    appMovie: movie,
    appAnime: anime,
  },
  data() {
    return {
      activeCategory: "appTvShows",
    };
  },
};
</script>
<style lang="scss">
.fade-transition {
  transition: opacity 0.2s ease;
}

.fade-enter-active,
.fade-leave-active {
  opacity: 1;
  transition: all 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
#streaming-section {
  background-color: #100e17;
  .main {
    padding: 120px 0;
    background-image: url("../assets/bgimage.png");
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    .container {
      .header {
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        .title {
          text-align: left;
          h6 {
            font-size: 12px;
            color: #ddd105;
            font-weight: 500;
            letter-spacing: 1px;
          }
          h1 {
            font-size: 36px;
            font-weight: 700;
          }
        }
        .movie-category {
          button {
            color: white;
            border: 2px solid #2d303d;
            border-radius: 60px;
            background-color: #20212b;
            font-size: 13px;
            padding: 10px 28px;
            margin-left: 10px;
            font-weight: 500;
          }
          .active {
            border-color: #e4d804;
          }
        }
      }
    }
  }
}

#carousel-main {
  margin-top: 40px;
  .owl-item {
    img {
      border-radius: 7px;
    }
    .movie-item {
      display: block;
      .movie-name,
      .about-movie {
        margin-top: 18px;
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        div {
          display: flex;
        }
        .name {
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          transition: 0.3s;
          color: white;
          &:hover {
            color: #e4d804;
          }
        }
        .release-date {
          color: #e4d804;
          font-weight: 500;
          font-size: 14px;
        }
      }
      .about-movie {
        margin-top: 15px !important;
        font-size: 12px;
        color: #bcbcbc;
        span {
          border: 2px solid white;
          background: transparent;
          padding: 2px 10px;
          margin-right: 20px;
          font-weight: 600;
          color: #e4d804;
        }
        h6 {
          font-size: 12px;
          font-weight: 500;
          i {
            margin-right: 6px;
            color: #e4d804;
          }
        }
        .duration {
          margin-right: 12px;
        }
      }
    }
  }
}
</style>