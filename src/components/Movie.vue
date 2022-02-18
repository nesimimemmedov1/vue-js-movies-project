<template>
  <div id="movie">
    <div class="breadcrump">
      <div class="container">
        <div class="content">
          <h1>Our Movie</h1>
          <div class="breadcrump-text">
            <h6 @click="goToHome">HOME</h6>
            <div class="line"></div>
            <h6>MOVIE</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    goToHome() {
      this.$router.push("/");
    },
  },
};
</script>
<style lang="scss" scoped>
#movie {
  background-color: #100e17;
  color: white;
  .breadcrump {
    background-image: url("../assets/breadcrumb_bg.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    padding: 270px 0 240px;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: #04081a;
      background: linear-gradient(to right, #04081a, transparent);
      opacity: 0.66;
    }
    .content {
      position: relative;
      z-index: 8;
      h1 {
        font-size: 60px;
        font-weight: bold;
      }
      .breadcrump-text {
        display: flex;
        align-items: center;
        justify-content: center;
        h6 {
          font-size: 14px;
          font-weight: 700;
          &:first-child {
            color: #e4d804;
            cursor: pointer;
          }
        }
        .line {
          width: 3px;
          background-color: white;
          display: block;
          height: 13px;
          margin: 0 14px;
        }
      }
    }
  }
}
//media queries
@media (max-width: 1200px) {
}
@media (max-width: 991.9px) {
  #movie {
    .breadcrump {
      padding: 200px 0 210px;
    }
  }
}
@media (max-width: 767.9px) {
  #movie {
    .breadcrump {
      padding: 160px 0 160px;
      .content {
        h1 {
          font-size: 40px;
        }
      }
    }
  }
}
@media (max-width: 575.9px) {
  #movie {
    .breadcrump {
      .content {
        h1 {
          font-size: 34px;
        }
      }
    }
  }
}
</style>