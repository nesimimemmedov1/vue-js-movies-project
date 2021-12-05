<template>
  <div id="pricing">
    <div class="breadcrump">
      <div class="container">
        <div class="content">
          <h1>Our Plan</h1>
          <div class="breadcrump-text">
            <h6 @click="goToHome">HOME</h6>
            <div class="line"></div>
            <h6>PRICING</h6>
          </div>
        </div>
      </div>
    </div>
    <div class="our-pricing">
      <div class="container">
        <div class="section-title">
          <h6 class="sub-title">our pricing plans</h6>
          <h1 class="title">Our Pricing Strategy</h1>
          <img src="../assets/shape.png" alt="" />
        </div>
        <div class="row">
          <div class="col-sm-12 col-md-4 col-lg-4">
            <div class="cart">
              <div class="pricing-top">
                <div class="pricing-item">
                  <h6 class="category">PREMIUM</h6>
                  <div class="price-box">
                    <h4 class="price">$7.99</h4>
                    <h6>Monthly</h6>
                  </div>
                </div>
              </div>
              <div class="pricing-list">
                <ul class="item-list">
                  <li class="list">
                    <i class="fas fa-check"></i>
                    Video quality
                    <span>Good</span>
                  </li>
                  <li class="list">
                    <i class="fas fa-check"></i>
                    Resolution
                    <span>480p</span>
                  </li>
                  <li class="list">
                    <i class="fas fa-check"></i>
                    Screens you can watch
                    <span>1</span>
                  </li>
                  <li class="list">
                    <i class="fas fa-check"></i>
                    Cancel anytime
                  </li>
                </ul>
              </div>
              <div class="pricing-btn">
                <a href="/">Buy Now</a>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-4 col-lg-4">
            <div class="cart active">
              <div class="pricing-top">
                <div class="pricing-item">
                  <h6 class="category">STANDART</h6>
                  <div class="price-box">
                    <h4 class="price">$9.99</h4>
                    <h6>Monthly</h6>
                  </div>
                </div>
              </div>
              <div class="pricing-list">
                <ul class="item-list">
                  <li class="list">
                    <i class="fas fa-check"></i>
                    Video quality
                    <span>Better</span>
                  </li>
                  <li class="list">
                    <i class="fas fa-check"></i>
                    Resolution
                    <span>1080p</span>
                  </li>
                  <li class="list">
                    <i class="fas fa-check"></i>
                    Screens you can watch
                    <span>2</span>
                  </li>
                  <li class="list">
                    <i class="fas fa-check"></i>
                    Cancel anytime
                  </li>
                </ul>
              </div>
              <div class="pricing-btn">
                <a href="/">Buy Now</a>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-4 col-lg-4">
            <div class="cart">
              <div class="pricing-top">
                <div class="pricing-item">
                  <h6 class="category">PREMIUM</h6>
                  <div class="price-box">
                    <h4 class="price">$11.99</h4>
                    <h6>Monthly</h6>
                  </div>
                </div>
              </div>
              <div class="pricing-list">
                <ul class="item-list">
                  <li class="list">
                    <i class="fas fa-check"></i>
                    Video quality
                    <span>Best</span>
                  </li>
                  <li class="list">
                    <i class="fas fa-check"></i>
                    Resolution
                    <span>4k+HDR</span>
                  </li>
                  <li class="list">
                    <i class="fas fa-check"></i>
                    Screens you can watch
                    <span>4</span>
                  </li>
                  <li class="list">
                    <i class="fas fa-check"></i>
                    Cancel anytime
                  </li>
                </ul>
              </div>
              <div class="pricing-btn">
                <a href="/">Buy Now</a>
              </div>
            </div>
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
#pricing {
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
  .our-pricing {
    padding: 120px 0 130px;
    background-image: url("../assets/pricing_bg.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    .section-title {
      margin-bottom: 70px;
      .sub-title {
        font-size: 14px;
        color: #bcbcbc;
        font-weight: 500;
      }
      .title {
        font-size: 36px;
        font-weight: bold;
      }
      img {
        max-width: 100%;
        object-fit: cover;
      }
    }
    .active {
      border: 2px solid #e4d804 !important;
    }
    .cart {
      box-shadow: 0px 3px 13px 0px rgba(0, 0, 0, 0.14);
      background: #1f1e24;
      border: 2px solid #1f1e24;
      padding: 45px 40px 60px;
      transition: 0.3s linear;
      border-radius: 3px;
      &:hover {
        border: 2px solid #e4d804;
      }
      .pricing-item {
        .category {
          font-size: 12px;
          font-weight: bold;
          margin-bottom: 20px;
        }
        .price-box {
          border-radius: 4px;
          background: #e4d804;
          box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.14),
            inset 0px 3px 7px 0px rgba(0, 0, 0, 0.31);
          color: black;
          margin: 0 95px 40px;
          padding: 20px 25px;
          .price {
            font-size: 28px;
            font-weight: 700;
          }
          h6 {
            font-size: 15px;
            font-weight: 600;
          }
        }
      }
      .pricing-list {
        .item-list {
          .list {
            display: block;
            text-align: left;
            margin: 0;
            font-size: 12px;
            border-bottom: 1px solid #414146;
            font-weight: 500;
            padding: 14px 0;
            &:first-child {
              span {
                color: #e4d804;
              }
            }
            i {
              margin-right: 10px;
            }
            span {
              float: right;
            }
          }
        }
      }
      .pricing-btn {
        margin-top: 40px;
        a {
          border: 2px solid #e4d804;
          background-color: #20212b;
          color: white;
          border-radius: 50px;
          padding: 12px 28px;
          font-size: 12px;
          font-weight: 700;
          display: inline-block;
          transition: 0.3s;
          &:hover {
            background-color: #e4d804;
            color: #20212b;
          }
        }
      }
    }
  }
}
</style> 