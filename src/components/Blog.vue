<template>
  <div id="blog">
    <div class="breadcrump">
      <div class="container">
        <div class="title">
          <h1>News Update</h1>
          <div class="breadcrump-text">
            <h6 @click="goToHome">HOME</h6>
            <div class="line"></div>
            <h6>BLOG PAGE</h6>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="container">
        <div class="row">
          <div class="col-8">
            <div class="blog-item">
              <router-link to="/" tag="a" class="blog-img">
                <img src="/src/assets/blog_thumb01.jpg" alt="" />
              </router-link>
              <div class="blog-content">
                <div class="shared-date">
                  <i class="far fa-clock"></i>
                  <span>10 Mar 2021</span>
                </div>
                <router-link class="blog-title" tag="a" to="/"
                  >Your Free Movie Streaming Purposes</router-link
                >
                <p class="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididun labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip exesa commodo consequat. Duis aute
                  irure dolor in reprehend .
                </p>
                <div class="blog-footer">
                  <div class="about-blog">
                    <span
                      ><i class="far fa-user"></i>
                      by
                      <router-link class="sharing" tag="a" to="/"
                        >Admin</router-link
                      >
                    </span>
                    <div class="line"></div>
                    <h6>
                      <i class="far fa-thumbs-up"></i>
                      63
                    </h6>
                    <div class="line"></div>
                    <h6>
                      <i class="fas fa-comments"></i
                      ><router-link class="comments" tag="a" to="/"
                        >12 Comments</router-link
                      >
                    </h6>
                  </div>
                  <router-link class="more-btn" tag="a" to="/"
                    >Read More <i class="fas fa-angle-double-right"></i
                  ></router-link>
                </div>
              </div>
            </div>
            <div class="blog-item">
              <router-link to="/" tag="a" class="blog-img">
                <img src="/src/assets/blog_thumb02.jpg" alt="" />
              </router-link>
              <div class="blog-content">
                <div class="shared-date">
                  <i class="far fa-clock"></i>
                  <span>10 Mar 2021</span>
                </div>
                <router-link class="blog-title" tag="a" to="/"
                  >Where watch English movies free?</router-link
                >
                <p class="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididun labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip exesa commodo consequat. Duis aute
                  irure dolor in reprehend .
                </p>
                <div class="blog-footer">
                  <div class="about-blog">
                    <span
                      ><i class="far fa-user"></i>
                      by
                      <router-link class="sharing" tag="a" to="/"
                        >Admin</router-link
                      >
                    </span>
                    <div class="line"></div>
                    <h6>
                      <i class="far fa-thumbs-up"></i>
                      63
                    </h6>
                    <div class="line"></div>
                    <h6>
                      <i class="fas fa-comments"></i
                      ><router-link class="comments" tag="a" to="/"
                        >12 Comments</router-link
                      >
                    </h6>
                  </div>
                  <router-link class="more-btn" tag="a" to="/"
                    >Read More <i class="fas fa-angle-double-right"></i
                  ></router-link>
                </div>
              </div>
            </div>
            <div class="blog-item">
              <router-link to="/" tag="a" class="blog-img">
                <img src="/src/assets/blog_thumb03.jpg" alt="" />
              </router-link>
              <div class="blog-content">
                <div class="shared-date">
                  <i class="far fa-clock"></i>
                  <span>10 Mar 2021</span>
                </div>
                <router-link class="blog-title" tag="a" to="/"
                  >House movie to is streaming website?</router-link
                >
                <p class="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididun labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip exesa commodo consequat. Duis aute
                  irure dolor in reprehend .
                </p>
                <div class="blog-footer">
                  <div class="about-blog">
                    <span
                      ><i class="far fa-user"></i>
                      by
                      <router-link class="sharing" tag="a" to="/"
                        >Admin</router-link
                      >
                    </span>
                    <div class="line"></div>
                    <h6>
                      <i class="far fa-thumbs-up"></i>
                      63
                    </h6>
                    <div class="line"></div>
                    <h6>
                      <i class="fas fa-comments"></i
                      ><router-link class="comments" tag="a" to="/"
                        >12 Comments</router-link
                      >
                    </h6>
                  </div>
                  <router-link class="more-btn" tag="a" to="/"
                    >Read More <i class="fas fa-angle-double-right"></i
                  ></router-link>
                </div>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="sidebar">
              <div class="blog-widget">
                <ul class="category">
                  <h6 class="title">Categories</h6>
                  <router-link class="item" tag="li" to="/">
                    <a href="">Movies</a>12</router-link
                  >
                  <router-link class="item" tag="li" to="/">
                    <a href="">Action Movies</a>10</router-link
                  >
                  <router-link class="item" tag="li" to="/">
                    <a href="">Streaming</a>9</router-link
                  >
                  <router-link class="item" tag="li" to="/">
                    <a href="">Download</a>16</router-link
                  >
                </ul>
              </div>
              <div class="blog-widget">
                <ul class="category">
                  <h6 class="title">Recent Posts</h6>
                  <li class="widget-item">
                    <router-link tag="a" to="/">
                      <div class="blog-img">
                        <img src="/src/assets/rc_post_thumb01.jpg" alt="" />
                      </div>
                      <div class="blog-content">
                        <h6 class="blog-title">Express Management Effective</h6>
                        <div class="shared-date">
                          <i class="far fa-clock"></i>
                          <span>10 Mar 2021</span>
                        </div>
                      </div>
                    </router-link>
                  </li>
                  <li class="widget-item">
                    <router-link tag="a" to="/">
                      <div class="blog-img">
                        <img src="/src/assets/rc_post_thumb02.jpg" alt="" />
                      </div>
                      <div class="blog-content">
                        <h6 class="blog-title">
                          Where watch English movies free?
                        </h6>
                        <div class="shared-date">
                          <i class="far fa-clock"></i>
                          <span>10 Mar 2021</span>
                        </div>
                      </div>
                    </router-link>
                  </li>
                  <li class="widget-item">
                    <router-link tag="a" to="/">
                      <div class="blog-img">
                        <img src="/src/assets/rc_post_thumb03.jpg" alt="" />
                      </div>
                      <div class="blog-content">
                        <h6 class="blog-title">
                          House movie streaming website
                        </h6>
                        <div class="shared-date">
                          <i class="far fa-clock"></i>
                          <span>10 Mar 2021</span>
                        </div>
                      </div>
                    </router-link>
                  </li>
                </ul>
              </div>
              <div class="blog-widget">
                <ul class="tag-list">
                  <h6 class="title">Tag Post</h6>
                  <router-link class="list-item" tag="li" to="/">
                    <a href="">Movies</a></router-link
                  >
                  <router-link class="list-item" tag="li" to="/">
                    <a href="">Creative</a></router-link
                  >
                  <router-link class="list-item" tag="li" to="/">
                    <a href="">News</a></router-link
                  >
                  <router-link class="list-item" tag="li" to="/">
                    <a href="">Romantic</a></router-link
                  >
                  <router-link class="list-item" tag="li" to="/">
                    <a href="">Who</a></router-link
                  >
                  <router-link class="list-item" tag="li" to="/">
                    <a href="">English</a></router-link
                  >
                  <router-link class="list-item" tag="li" to="/">
                    <a href="">Blending</a></router-link
                  >
                </ul>
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
li {
  margin: 0;
}

#blog {
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
  .content {
    padding: 120px 0 130px;
    background-image: url("../assets/blog_bg.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    .blog-item {
      background: #1f1e24;
      overflow: hidden;
      border-radius: 5px;
      box-shadow: 0px 1px 7px 0px rgba(0, 0, 0, 0.46);
      margin-bottom: 55px;
      .blog-img {
        display: block;
        img {
          cursor: pointer;
          max-width: 100%;
          object-fit: cover;
          border-radius: 5px;
        }
      }
      .blog-content {
        vertical-align: inherit;
        padding: 30px;
        text-align: left;
        .shared-date,
        p {
          font-size: 14px;
          color: #bcbcbc;
          font-weight: 500;
          i {
            color: #e4d804;
            margin-right: 5px;
          }
        }
        .blog-title {
          color: white;
          font-size: 26px;
          font-weight: 600;
          transition: 0.3s;
          display: inline-block;
          margin: 8px 0 20px;
          &:hover {
            color: #e4d804;
          }
        }
        p {
          line-height: 1.8;
          margin-bottom: 30px;
        }
      }
      .blog-footer {
        display: flex;
        justify-content: space-between;
        border-top: 2px solid #101010;
        padding-top: 20px;
        .line {
          width: 1px;
          background-color: #6a6a6a;
        }
        .about-blog {
          display: flex;
          align-items: center;
          color: #bcbcbc;
          font-size: 12px;
          font-weight: 500;
          i {
            color: #e4d804;
            margin-right: 7px;
            cursor: inherit;
          }
          .sharing,
          .comments {
            color: #bcbcbc;
            transition: 0.3s;
            &:hover {
              color: #e4d804;
            }
          }
        }
        .more-btn {
          color: #e4d804;
          font-size: 15px;
          font-weight: 500;
        }
      }
    }
  }
  .line {
    width: 2px;
    background-color: white;
    display: block;
    height: 13px;
    margin: 0 14px;
  }
  .sidebar {
    margin-left: 30px;
    .blog-widget {
      background: #1f1e24;
      border-radius: 4px;
      box-shadow: 0px 1px 7px 0px rgba(0, 0, 0, 0.46);
      padding: 40px 30px;
      margin-bottom: 30px;
      text-align: left;
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
      .item {
        color: #bcbcbc;
        font-size: 14px;
        font-weight: 500;
        padding: 15px 0;
        border-bottom: 1px dashed #59595c;
        display: flex;
        justify-content: space-between;
        align-items: center;
        a {
          color: #bcbcbc;
          transition: 0.3s;
          &:hover {
            color: #e4d804;
          }
        }
      }
      .widget-item {
        margin: 0 0 25px;
        a {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .blog-img {
            margin-right: 20px;
            img {
              object-fit: cover;
              border-radius: 3px;
            }
          }
          .blog-content {
            .blog-title {
              font-size: 16px;
              font-weight: 600;
              color: white;
              transition: 0.3s;
              &:hover {
                color: #e4d804;
              }
            }
            .shared-date {
              margin-top: 10px;
              font-size: 12px;
              i {
                color: #e4d804;
              }
              span {
                font-weight: 500;
                color: #bcbcbc;
              }
            }
          }
        }
      }
      .tag-list {
        .list-item {
          display: inline-block;
          margin: 0px 8px 10px;
          a {
            display: block;
            background: #393939;
            font-size: 14px;
            color: #bcbcbc;
            padding: 8px 13px;
            position: relative;
            font-weight: 500;
            transition: all 0.3s ease-out 0s;
            &::before {
              content: "";
              position: absolute;
              left: -10px;
              top: 0;
              width: 0;
              height: 100%;
              border-style: solid;
              border-width: 0 0 35px 10px;
              border-color: transparent transparent #393939 transparent;
              transition: all 0.3s ease-out 0s;
            }
            &::after {
              content: "";
              position: absolute;
              right: -10px;
              top: 0;
              width: 0;
              height: 100%;
              border-style: solid;
              border-width: 0 0 35px 10px;
              border-color: transparent transparent transparent #393939;
              transition: all 0.3s ease-out 0s;
            }
            &:hover {
              background: #e4d804;
              color: black;
              &::before {
                border-color: transparent transparent #e4d804 transparent;
                color: black;
              }
              &::after {
                border-color: transparent transparent transparent #e4d804;
                color: black;
              }
            }
          }
        }
      }
    }
  }
}
</style>