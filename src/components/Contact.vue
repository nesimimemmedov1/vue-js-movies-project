<template>
  <div id="contact">
    <div class="breadcrump">
      <div class="container">
        <div class="title">
          <h1>Contact Us</h1>
          <div class="breadcrump-text">
            <h6 @click="goToHome">HOME</h6>
            <div class="line"></div>
            <h6>Contact</h6>
          </div>
        </div>
      </div>
    </div>
    <div class="contact-area">
      <div class="container">
        <div class="row">
          <div class="col-8">
            <div class="contact-form">
              <div class="form-title">
                <h6 class="title">Contact Form</h6>
              </div>
              <form id="form" action="#">
                <div class="row">
                  <div class="col-6">
                    <input
                      placeholder="You Name *"
                      name="name"
                      type="text"
                      required
                    />
                  </div>
                  <div class="col-6">
                    <input
                      placeholder="You Email *"
                      name="email"
                      type="email"
                      required
                    />
                  </div>
                  <div class="col-12">
                    <input
                      placeholder="Subject *"
                      name="subject"
                      type="text"
                      required
                    />
                  </div>
                  <div class="col-12">
                    <textarea
                      placeholder="Type Your Message..."
                      id="message"
                      name="message"
                      required
                    ></textarea>
                  </div>
                </div>
                <button class="submit-btn" type="submit">SEND MESSAGE</button>
              </form>
            </div>
          </div>
          <div class="col-4">
            <div class="info-part">
              <div class="info-title">
                <h6 class="title">Information</h6>
              </div>
              <div class="content-info">
                <p>
                  <span>Find solutions :</span> to common problems, or get help
                  from a support agent industry's standard .
                </p>
                <ul class="info-list">
                  <li class="list">
                    <div class="icon">
                      <i class="fas fa-map-marker-alt"></i>
                    </div>
                    <p><span>Address :</span> W38 Park Road New York</p>
                  </li>
                  <li class="list">
                    <div class="icon">
                      <i class="fas fa-phone-alt"></i>
                    </div>
                    <p><span>Phone :</span> (09) 123 854 365</p>
                  </li>
                  <li class="list">
                    <div class="icon">
                      <i class="fas fa-envelope"></i>
                    </div>
                    <p><span>Email :</span> support@movflx.com</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193747.65734576355!2d-74.08508155679834!3d40.645159363485455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24416947c2109%3A0x82765c7404007886!2sBrooklyn%2C%20New%20York%2C%20Amerika%20Birle%C5%9Fik%20Devletleri!5e0!3m2!1str!2s!4v1638693700375!5m2!1str!2s"
        allowfullscreen=""
        loading="lazy"
        aria-hidden="false"
        frameborder="0"
      ></iframe>
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
#contact {
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
    .title {
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
  .title {
    font-size: 20px;
    font-weight: 600;
    position: relative;
    margin-bottom: 15px;
    padding-bottom: 18px;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 40px;
      height: 3px;
      background: #e4d804;
      border-radius: 1.5px;
    }
  }
  .contact-area {
    padding: 120px 0 130px;
    background-image: url("../assets/blog_bg.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    .contact-form {
      text-align: left;
      padding: 30px 30px 40px;
      border: 1px solid #232226;
      #form {
        input,
        textarea {
          width: 100%;
          border: 1px solid #1f1e24;
          background: #1f1e24;
          border-radius: 4px;
          color: #bcbcbc;
          box-shadow: 0px 1px 7px 0px rgba(0, 0, 0, 0.46);
          font-weight: 500;
          padding: 14px 25px;
          margin-bottom: 30px;
          transition: 0.3s linear;
          &:focus {
            border-color: #e4d804;
          }
          &::placeholder {
            color: #bcbcbc;
            font-size: 14px;
          }
        }
        #message {
          min-height: 155px;
          max-height: 200px;
        }
        .submit-btn {
          border: 2px solid #e4d804;
          background-color: #12151e;
          color: white;
          border-radius: 50px;
          padding: 16px 34px;
          font-size: 12px;
          font-weight: 700;
          display: inline-block;
          transition: 0.3s;
          letter-spacing: 1.4px;
          &:hover {
            background-color: #e4d804;
            color: #12151e;
          }
        }
      }
    }
  }
  .info-part {
    background: #1f1e24;
    padding: 40px 34px 60px;
    box-shadow: 0px 1px 7px 0px rgba(0, 0, 0, 0.46);
    text-align: left;
    .content-info {
      p {
        padding-bottom: 25px;
        border-bottom: 1px solid #313035;
        font-size: 14px;
        color: #bcbcbc;
        font-weight: 600;
        span {
          font-weight: 600;
          color: #fafafa;
        }
      }
      .info-list {
        .list {
          display: flex;
          align-items: center;
          padding: 20px 0;
          border-bottom: 1px solid #313035;
          .icon {
            width: 46px;
            height: 46px;
            flex: 0 0 46px;
            text-align: center;
            font-size: 16px;
            color: #1f1e24;
            background: #e4d804;
            line-height: 46px;
            border-radius: 50%;
            margin-right: 15px;
          }
          p {
            border: none;
            padding: 0;
          }
        }
      }
    }
  }
  #map {
    height: 450px;
    iframe {
      width: 100%;
      height: 100%;
    }
  }
}
</style>