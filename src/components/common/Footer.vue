<template>
  <div id="footer">
    <div class="container">
      <div class="footer-top">
        <div class="row">
          <div class="col-2">
            <a href="/" class="logo">
              <img class="img-fluid" src="/src/assets/logo.png" alt="" />
            </a>
          </div>
          <div class="col-7">
            <div class="links">
              <ul class="footer-navbar">
                <li class="nav-link"><a href="/">HOME</a></li>
                <li class="nav-link"><a href="/">MOVIE</a></li>
                <li class="nav-link"><a href="/">PAGES</a></li>
                <li class="nav-link"><a href="/">PRICING</a></li>
              </ul>
            </div>
          </div>
          <div class="col-3">
            <div class="search-bar">
              <input type="text" placeholder="Find Favorite Movie" />
              <i class="fas fa-search"></i>
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
export default {};
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
        &:focus-visible {
          outline: 0;
        }
      }
      i {
        position: absolute;
        color: #e4d804;
        font-size: 12px;
        right: 18px;
        cursor: pointer;
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
}
</style>