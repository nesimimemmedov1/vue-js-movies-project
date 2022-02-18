<template>
  <div id="details">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-3 col-xl-3">
          <div class="movie-img">
            <img :src="`${cart.image}`" alt="" />
            <div class="play-btn">
              <img src="/src/assets/play.png" alt="" />
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-6">
          <div class="movie-details">
            <h1 class="episodes">New Episodes</h1>
            <h1 class="movie-name">{{ cart.name }}</h1>
            <div class="about-movie">
              <span>PG 18</span>
              <span class="quality">HD</span>
              <div class="genre">
                <h6>Romance, Drama</h6>
              </div>
              <div class="release-time">
                <h6 class="time">
                  <i class="far fa-calendar-alt"></i>{{ cart.releaseDate }}
                </h6>
                <h6 class="duration"><i class="far fa-clock"></i>126 min</h6>
                <h6 class="rating">
                  <i class="far fa-star"></i>{{ cart.rating }}
                </h6>
              </div>
            </div>
            <p>
              {{ cart.overview }}
            </p>

            <div class="prime-movie">
              <div class="prime-content">
                <div class="share-btn">
                  <i class="fas fa-share-alt"></i>
                  <h6>Share</h6>
                </div>
                <div class="about">
                  <h5>Prime Video</h5>
                  <h6>Streaming Channels</h6>
                </div>
              </div>
              <div class="prime-btn">
                <i class="fas fa-play"></i>
                <h5>WATCH NOW</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-2">
          <a href="" class="download-btn">
            DOWNLOAD
            <img class="img-fluid" src="../assets/download.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { eventBus } from "../main";
export default {
  data() {
    return {
      cart: {},
    };
  },
  created() {
    eventBus.$on("cartData", (data) => {
      this.cart = data;
      console.log(this.cart);
    });
  },
};
</script>
<style lang="scss" scope>
body {
  margin: 0;
  padding: 0;
}

#details {
  padding: 180px 0 120px;
  background: url("/src/assets/banner-bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  .container {
    position: relative;
    .movie-img {
      position: relative;
      .play-btn {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        img {
          cursor: pointer;
        }
      }
      img {
        max-width: 100%;
        object-fit: cover;
        border-radius: 5px;
      }
    }
    .movie-details {
      text-align: left;
      .episodes {
        color: #e4d804;
        font-size: 26px;
        font-weight: bold;
      }
      .movie-name {
        font-size: 60px;
        font-weight: bold;
        color: white;
      }
      .about-movie {
        display: flex;
        flex-wrap: wrap;
        font-size: 11px;
        margin: 12px 0 30px;
        font-weight: 600;
        color: white;
        display: flex;
        span {
          margin-bottom: 20px !important;
          border: 2px solid white;
          background: white;
          padding: 2px 10px;
          margin-right: 10px;
          font-weight: bold;
          color: #21232b;
        }
        .quality {
          background: transparent;
          color: white;
          margin: 0;
        }
        align-items: center;
        .release-date {
          color: #e4d804;
          font-weight: 500;
          font-size: 14px;
        }
        .genre {
          padding: 0px 16px;
        }
        .genre,
        .release-time {
          color: #e3dfdf;
          font-weight: 500;
          font-size: 14px;
          margin-bottom: 20px;
        }
        .release-time {
          display: flex;
          .time,
          .duration {
            margin-right: 14px;
          }
          i {
            color: #e4d804;
            margin-right: 8px;
          }
        }
      }
      p {
        color: #bcbcbc;
        font-weight: 500;
        font-size: 14px;
        line-height: 1.5;
        overflow: hidden;
        height: 107px;
      }
      .prime-movie {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        max-width: 475px;
        background: #242c38;
        border-radius: 4px;
        border: 1px solid #343434;
        padding: 25px;
        margin-top: 35px;
        text-align: center;
        h6 {
          color: #bcbcbc;
          font-size: 12px;
          font-weight: 500;
          transition: 0.3s;
        }
        h5,
        i {
          font-size: 15px;
          color: #fff;
          font-weight: bold;
          transition: 0.3s;
        }
        .prime-content {
          display: flex;
          .share-btn {
            cursor: pointer;
            border-right: 1px solid #858585;
            padding-right: 25px;
            i {
              color: #bcbcbc;
              font-size: 17px;
            }
            &:hover {
              h6,
              i {
                color: #e4d804 !important;
              }
            }
          }
          .about {
            text-align: left;
            padding-left: 25px;
          }
        }
        .prime-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid #e4d804;
          border-radius: 50px;
          padding: 12px 26px;
          transition: 0.3s;
          cursor: pointer;
          &:hover {
            background: #e4d804;
            h5,
            i {
              color: black !important;
            }
          }
          h5,
          i {
            font-size: 10px;
          }
          i {
            margin-right: 10px;
          }
        }
      }
    }
    .download-btn {
      background: #e4d804;
      text-transform: uppercase;
      font-size: 12px;
      font-weight: 500;
      color: #14141d;
      letter-spacing: 5px;
      position: absolute;
      transform: rotate(90deg);
      padding: 44px 46px;
      border-radius: 6px;
      display: flex;
      justify-content: center;
      align-items: center;
      right: -57px;
      bottom: 63px;
      img {
        transform: rotate(-90deg);
        width: 24px;
        height: 24px;
        object-fit: cover;
      }
    }
  }
}
//media-queries
@media (max-width: 1400px) {
  #details {
    .container {
      .movie-details {
        .episodes {
          font-size: 23px;
        }
        .movie-name {
          font-size: 48px;
        }
        .about-movie {
          margin: 12px 0 16px;
        }
        .prime-movie {
          margin-top: 26px;
        }
      }
    }
  }
}
@media (max-width: 1200px) {
  #details {
    .container {
      .download-btn {
        transform: rotate(0);
        padding: 20px 35px;
        left: 12px;
        right: unset;
        bottom: 50px;
        img {
          transform: rotate(0);
          width: 14px;
          height: 14px;
          margin-left: 8px;
        }
      }
    }
  }
}
@media (max-width: 991.9px) {
  #details {
    .container {
      .movie-img {
        width: 44%;
        margin: 0 auto;
      }
      .movie-details {
        margin-top: 40px;
      }
      .download-btn {
        position: static;
        width: max-content;
        margin-top: 30px;
      }
    }
  }
}
@media (max-width: 767.9px) {
  #details {
    .container {
      .movie-details {
        .movie-name {
          font-size: 32px;
        }
        .episodes {
          font-size: 19px;
        }
      }
    }
  }
}
@media (max-width: 575.9px) {
  #details {
    .container {
      .movie-img {
        width: 70%;
      }
      .movie-details {
        .prime-movie {
          justify-content: center;
          flex-direction: column;
          .prime-btn {
            margin-top: 20px;
          }
        }
      }
    }
  }
}
</style>