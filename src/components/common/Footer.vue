<template>
  <div id="footer">
    <div class="container">
      <div class="footer-top">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-2">
            <router-link tag="div" to="/">
              <a href="/" class="logo"
                ><img src="/src/assets/logo.png" alt=""
              /></a>
            </router-link>
          </div>
          <div class="col-sm-12 col-md col-lg-7">
            <div class="links">
              <ul class="footer-navbar">
                <router-link class="nav-link" tag="li" to="/">
                  <a href="/">HOME</a>
                </router-link>
                <router-link class="nav-link" tag="li" to="/movie">
                  <a href="/">MOVIE</a>
                </router-link>
                <router-link class="nav-link" tag="li" to="/">
                  <a href="/">PAGES</a>
                </router-link>
                <router-link class="nav-link" tag="li" to="/pricing">
                  <a href="/">PRICING</a>
                </router-link>
              </ul>
            </div>
          </div>
          <div class="col-sm-12 col-md col-lg-3">
            <div class="search-bar">
              <input
                :class="{ 'is-invalid': $v.search.$error }"
                @blur="$v.search.$touch()"
                v-model="search"
                type="text"
                placeholder="Find Favorite Movie"
              />
              <button :disabled="$v.$invalid" class="btn">
                <i class="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <ul class="quick-link">
          <li class="nav-link"><a href="/">FAQ</a></li>
          <li class="nav-link"><a href="/">HELP CENTER</a></li>
          <li class="nav-link"><a href="/">TERMS OF USE</a></li>
          <li class="nav-link"><a href="/">PRIVACY</a></li>
        </ul>
        <div class="social">
          <a href=""><i class="fab fa-facebook-f"></i></a>
          <a href=""><i class="fab fa-twitter"></i></a>
          <a href=""><i class="fab fa-pinterest-p"></i></a>
          <a href=""><i class="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </div>
    <div class="copyright">
      <div class="container">
        <div class="wrapper">
          <p>Copyright © 2021. All Rights Reserved By <a href="">Movflx</a></p>
          <div class="card">
            <img class="img-fluid" src="/src/assets/card.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { required } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      search: "",
    };
  },
  validations: {
    search: {
      required,
    },
  },
};
</script>
<style lang="scss" scoped>
#footer {
  padding: 42px 0 0;
  background-image: url("/src/assets/footerbg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  .container {
    .footer-top {
      position: relative;
      padding-bottom: 35px;
      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -1px;
        width: 100%;
        height: 1px;
        background-color: rgb(18, 21, 30);
        box-shadow: 0px 3px 0px 0px rgba(143, 143, 143, 0.14);
      }
      .row {
        align-items: center;
        .logo {
          display: flex;
          width: 100%;
          object-fit: cover;
        }
        .links {
          .footer-navbar {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            .nav-link {
              a {
                color: #c3c3c3;
                font-weight: 700;
                font-size: 14px;
                &:hover {
                  color: #e4d804;
                }
              }
            }
          }
        }
      }
    }
    .search-bar {
      position: relative;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      input {
        width: 100%;
        padding: 14px 62px 14px 22px;
        background: #12151e;
        border: none;
        border-radius: 40px;
        font-size: 12px;
        font-weight: 500;
        color: white;
        border: 1px solid transparent;
        &:focus-visible {
          outline: 0;
        }
      }
      .btn {
        position: absolute;
        right: 10px;
        i {
          color: #e4d804;
          font-size: 12px;
          cursor: pointer;
          border-radius: 50px;
        }
      }
    }
    .footer-bottom {
      padding: 35px 0 55px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      a {
        font-weight: 500;
        font-size: 13px;
        color: #c3c3c3;
        &:hover {
          color: #e4d804;
        }
      }
      .quick-link {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        .nav-link {
          &:first-child {
            padding-left: 0;
            margin-left: 0;
          }
        }
      }
      .social {
        display: flex;
        a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          box-shadow: inset 0px 4px 9px 0px rgba(0, 0, 0, 0.25);
          background-color: rgb(18, 21, 30);
          margin: 0 4px;
          &:last-child {
            margin: 0;
          }
        }
      }
    }
  }
  .copyright {
    background: #171b22;
    padding: 25px 0;
    .wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        font-size: 13px;
        color: #c3c3c3;
        a {
          color: #e4d804;
        }
      }
      img {
        width: 100%;
        object-fit: cover;
        background: #171b22;
      }
    }
  }
  .is-invalid {
    border: red 1px solid !important;
    transition: 0.3s;
  }
}
//media queries
@media (max-width: 1200px) {
}
@media (max-width: 991.9px) {
  #footer {
    .container {
      .footer-top {
        .row {
          .logo {
            img {
              margin: 0 auto 30px auto;
            }
          }
          .links {
            .footer-navbar {
              justify-content: flex-start;
              .nav-link {
                &:first-child {
                  padding-left: 0;
                }
              }
            }
          }
        }
      }
    }
  }
}
@media (max-width: 767.9px) {
  #footer {
    .container {
      .footer-top {
        .row {
          .links {
            .footer-navbar {
              justify-content: center;
              margin-bottom: 20px;
            }
          }
        }
      }
      .footer-bottom {
        padding: 20px 0 55px;
        flex-direction: column;
        .quick-link {
          margin-bottom: 20px;
        }
      }
    }
    .copyright {
      .container {
        .wrapper {
          flex-direction: column;
          p {
            margin-bottom: 20px;
          }
        }
      }
    }
  }
}
@media (max-width: 575.9px) {
}
</style>