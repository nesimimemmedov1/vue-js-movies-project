<template>
  <div id="banner-section">
    <div class="container">
      <div class="main">
        <h6 class="text-logo">Movflx</h6>
        <h1>
          Unlimited <span> Movie</span>, TVs <br />
          Shows, & More.
        </h1>
        <div class="about-movie">
          <span class="episode">PG 18</span>
          <span class="quality">HD</span>
          <h6 class="type">Romance, Drama</h6>
          <h6 class="release-date"><i class="fas fa-calendar-alt"></i> 2021</h6>
          <h6 class="duration"><i class="far fa-clock"></i> 128 min</h6>
        </div>
        <a href="/"><i class="fas fa-play"></i> WATCH NOW</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#banner-section {
  padding: 290px 0;
  background-image: url(../assets/image1.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  .container {
    .main {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      color: white;
      font-weight: 700;
      .text-logo {
        color: #e4d804;
        font-size: 24px;
      }
      h1 {
        font-weight: 700;
        font-size: 60px;
        text-align: left;
        span {
          color: #e4d804;
        }
      }
      .about-movie {
        display: flex;
        align-items: center;
        font-size: 11px;
        margin: 30px 0 50px;
        .episode {
          padding: 2px 10px;
          border: 2px solid white;
          color: black;
          background: white;
          margin-right: 7px;
        }
        .quality {
          border: 2px solid white;
          background: transparent;
          padding: 2px 10px;
          margin-right: 20px;
        }

        .release-date,
        .duration,
        .type {
          font-size: 14px;
          font-weight: 500;
          i {
            color: #e4d804;
          }
        }
        h6 {
          margin-right: 20px;
        }
      }
      a {
        display: inline-block;
        background: #12151e;
        border: 2px solid #e4d804;
        padding: 16px 34px;
        color: white;
        border-radius: 100px;
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 1px;
        transition: 0.2s;
        i {
          margin-right: 7px;
        }
        &:hover {
          background: #e4d804;
          color: black;
          i {
            color: black;
          }
        }
      }
    }
  }
}
</style>