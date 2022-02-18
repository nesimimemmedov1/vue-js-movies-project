<template>
  <div id="services-section">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-5">
          <div class="wrapper">
            <div class="image">
              <img class="img-fluid" src="../assets/resbg.jpg" alt="" />
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-7">
          <div class="about-services">
            <span>OUR SERVICES</span>
            <h1>Download Your Shows Watch Offline.</h1>
            <p>
              Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod
              tempor.There are many variations of passages of lorem Ipsum
              available, but the majority have suffered alteration in some
              injected humour.
            </p>
            <div class="services-list">
              <div class="services">
                <div class="icon">
                  <i class="fas fa-tv"></i>
                </div>
                <div class="content">
                  <h6 class="title">Enjoy on Your TV.</h6>
                  <p class="about">
                    Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed
                    do eiusmod tempor.
                  </p>
                </div>
              </div>
              <div class="services">
                <div class="icon">
                  <i class="fas fa-video"></i>
                </div>
                <div class="content">
                  <h6 class="title">Watch Everywhere.</h6>
                  <p class="about">
                    Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed
                    do eiusmod tempor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
#services-section {
  padding: 120px 0;
  background-image: url("../assets/servicesbg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  .container {
    .wrapper {
      .image {
        img {
          object-fit: cover;
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
        right: -62px;
        bottom: 63px;
        img {
          transform: rotate(-90deg);
          width: 24px;
          height: 24px;
          object-fit: cover;
        }
      }
    }
    .about-services {
      text-align: left;
      padding-left: 50px;
      span {
        color: #e4e2e2;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: unset;
        letter-spacing: 1px;
        position: relative;
        padding-left: 53px;
        &::before {
          content: "";
          width: 40px;
          height: 3px;
          background-color: #e4d804;
          position: absolute;
          left: 0;
        }
        font-weight: 600;
        font-size: 12px;
      }
      h1 {
        font-weight: bold;
        font-size: 36px;
        color: white;
        margin: 10px 0 18px;
        padding-right: 60px;
        line-height: 1.3;
      }
      p {
        font-weight: 500;
        font-size: 14px;
        color: #bcbcbc;
        line-height: 2;
        padding-bottom: 44px;
      }
      .services {
        display: flex;
        &:first-child {
          border-bottom: 1px dashed #38373c;
          padding-bottom: 25px;
          margin-bottom: 25px;
        }
        // &:hover {
        //   i {
        //     background-color: #e4d804;
        //   }
        // }
        .icon {
          flex: 0 0 95px;
          width: 95px;
          height: 95px;
          border: 1px dashed #e4d804;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 100%;
          color: white;
          margin-right: 19px;
          i {
            transition: 0.3s linear;
            font-size: 35px;
            border: 1px transparent;
            border-radius: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
        .content {
          .title {
            color: white;
            font-weight: bold;
            font-size: 19px;
            margin-bottom: 5px;
          }
          .about {
            color: #bcbcbc;
            font-size: 14px;
            font-weight: 500;
            line-height: 1.7;
            padding: 0;
          }
        }
      }
    }
  }
}
//media queries
@media (max-width: 1200px) {
  #services-section {
    .container {
      .about-services {
        h1 {
          font-size: 30px;
        }
        p {
          font-size: 13px;
          padding-bottom: 14px;
        }
        .services {
          &:first-child {
            padding-bottom: 15px;
            margin-bottom: 15px;
          }
          .icon {
            flex: 0 0 70px;
            width: 70px;
            height: 70px;
            i {
              font-size: 28px;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 991.9px) {
  #services-section {
    .container {
      .about-services {
        padding-left: 0;
        padding-top: 70px;
      }
    }
  }
}
@media (max-width: 767.9px) {
  #services-section {
    .container {
      .about-services {
        h1 {
          font-size: 28px;
        }
      }
    }
  }
}
@media (max-width: 575.9px) {
}
</style>