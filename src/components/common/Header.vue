<template>
  <div id="header">
    <div class="container">
      <div class="nav">
        <div class="logo">
          <router-link tag="div" to="/">
            <a href="/"><img src="/src/assets/logo.png" alt="" /></a>
          </router-link>
        </div>
        <div class="links">
          <ul class="header-navbar">
            <router-link
              active-class="active-link"
              exact
              class="nav-link"
              tag="li"
              to="/"
              ><a href="">home</a></router-link
            >
            <router-link
              active-class="active-link"
              class="nav-link"
              tag="li"
              to="/movie"
              ><a href="">movie</a></router-link
            >
            <router-link
              active-class="active-link"
              class="nav-link"
              tag="li"
              to="/pricing"
              ><a href="">pricing</a></router-link
            >
            <router-link
              active-class="active-link"
              class="nav-link"
              tag="li"
              to="/blog"
              ><a href="">blog</a></router-link
            >
            <router-link
              active-class="active-link"
              class="nav-link"
              tag="li"
              to="/contact"
              ><a href="">contacts</a></router-link
            >
          </ul>
        </div>
        <div class="header-action">
          <div class="search">
            <i @click="clicked = true" class="fas fa-search"></i>
          </div>
          <div class="lang-dropdown">
            <i class="fas fa-globe"></i>
            <select id="select">
              <option value="en">en</option>
              <option value="au">au</option>
              <option value="ar">ar</option>
              <option value="tu">tu</option>
            </select>
          </div>
          <div class="sign-in-button">
            <a href="/">sign in</a>
          </div>
          <div class="menu-icon">
            <i @click="openMenu" class="fa fa-bars" aria-hidden="true"></i>
          </div>
        </div>
      </div>
      <div :class="{ show: clicked }" class="search-layer">
        <div class="content">
          <form action="#">
            <input
              id="search"
              name="search"
              placeholder="Search here..."
              type="text"
            />
            <button><i class="fa fa-search" aria-hidden="true"></i></button>
          </form>
        </div>
        <div @click="clicked = false" class="close-icon">
          <i class="fa fa-times" aria-hidden="true"></i>
        </div>
      </div>
    </div>
    <div id="preloader" style="display: block">
      <div id="loading-center">
        <div id="loading-center-absolute">
          <img src="/src/assets/preloader.svg" alt="" />
        </div>
      </div>
    </div>
    <div class="mobile-menu">
      <div class="nav-logo">
        <router-link tag="div" to="/">
          <a href="/"><img src="/src/assets/logo.png" alt="" /></a>
        </router-link>
        <i @click="closeMenu" class="fa fa-times" aria-hidden="true"></i>
      </div>
      <div class="nav-menu">
        <ul class="menu-links">
          <router-link
            active-class="active-link"
            exact
            class="nav-link"
            tag="li"
            to="/"
            ><a href="">home</a></router-link
          >
          <router-link
            active-class="active-link"
            class="nav-link"
            tag="li"
            to="/movie"
            ><a href="">movie</a></router-link
          >
          <router-link
            active-class="active-link"
            class="nav-link"
            tag="li"
            to="/pricing"
            ><a href="">pricing</a></router-link
          >
          <router-link
            active-class="active-link"
            class="nav-link"
            tag="li"
            to="/blog"
            ><a href="">blog</a></router-link
          >
          <router-link
            active-class="active-link"
            class="nav-link"
            tag="li"
            to="/contact"
            ><a href="">contacts</a></router-link
          >
        </ul>
      </div>
      <ul class="social-links">
        <li class="social-icon">
          <a href="#">
            <i class="fa-brands fa-twitter"></i>
          </a>
        </li>
        <li class="social-icon">
          <a href="#">
            <i class="fa-brands fa-facebook-square"></i>
          </a>
        </li>
        <li class="social-icon">
          <a href="#">
            <i class="fa-brands fa-pinterest-p"></i>
          </a>
        </li>
        <li class="social-icon">
          <a href="#">
            <i class="fa-brands fa-instagram"></i>
          </a>
        </li>
        <li class="social-icon">
          <a href="#">
            <i class="fa-brands fa-youtube"></i>
          </a>
        </li>
      </ul>
    </div>
    <div @click="closeLayer" class="menu-layer"></div>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  data() {
    return {
      clicked: false,
    };
  },
  methods: {
    openMenu() {
      $(".mobile-menu").css({ right: "0", opacity: "1" });
      $("body").css({ overflow: "hidden" });
      $(".menu-layer").css({ visibility: "visible", opacity: "0.9" });
    },
    closeMenu() {
      $(".mobile-menu").css({ right: "-100%", opacity: "0" });
      $("body").css({ overflowY: "auto" });
      $(".menu-layer").css({ visibility: "hidden", opacity: "0" });
    },
    closeLayer() {
      $(".menu-layer").css({ visibility: "hidden", opacity: "0" });
      $(".mobile-menu").css({ right: "-100%", opacity: "0" });
      $("body").css({ overflowY: "auto" });
    },
  },
};
</script>
<style lang="scss" scoped>
#header {
  padding: 40px 0;
  width: 100%;
  position: absolute;
  z-index: 10;
  #preloader {
    background-color: #171d22;
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: 1;
    margin-top: 0px;
    top: 0px;
    z-index: 99;
    #loading-center-absolute {
      position: absolute;
      left: 50%;
      top: 50%;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
    }
  }
  .mobile-menu {
    position: fixed;
    right: -100%;
    top: 0;
    width: 300px;
    max-width: 100%;
    height: 100%;
    z-index: 99;
    opacity: 0;
    background: #171d22;
    border-radius: 0px;
    transition: 0.7s;
    box-shadow: -9px 0 14px 0px #00000014;
    .nav-logo {
      padding: 30px 25px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      i {
        color: white;
        font-size: 22px;
      }
    }
    .nav-link {
      padding: 0;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      &:last-child {
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }
      a {
        display: block;
        padding: 14px 25px;
        font-size: 15px;
        font-weight: 500;
        color: #fff;
        text-transform: capitalize;
        transition: 0.5s;
        border: none;
        text-align: left;
      }
    }
    .social-links {
      padding: 25px;
      .social-icon {
        i {
          font-size: 16px;
          color: white;
          margin: 0px 10px;
          transition: 0.3s;
          &:hover {
            color: #e4d804;
          }
        }
      }
    }
  }
  .menu-layer {
    position: fixed;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    transition: 0.7s;
    opacity: 0;
    visibility: hidden;
    background: #171d22;
    cursor: pointer;
  }
  .container {
    .nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      font-weight: 700;
      .logo {
        a {
          display: flex;
          img {
            object-fit: cover;
          }
        }
      }
      .links {
        ul {
          display: flex;
          .nav-link {
            a {
              color: white;
              text-transform: uppercase;
              &:hover {
                color: #e4d804;
              }
            }
          }
        }
      }
      .header-action {
        color: white;
        display: flex;
        align-items: center;
        .search {
          margin-right: 16px;
          margin-top: 3px;
          i {
            font-size: 16px;
          }
        }
        .lang-dropdown {
          border-left: 2px solid #32495f;
          display: flex;
          align-items: center;
          #select {
            &:focus-visible {
              outline: none;
            }
            font-weight: 700;
            border: none;
            text-transform: uppercase;
            background: transparent;
            color: white;
            option {
              color: black;
            }
          }
          i {
            color: #e4d804;
            font-size: 17px;
            margin-left: 10px;
            margin-right: 6px;
          }
        }
        .sign-in-button {
          a {
            display: inline-block;
            border: 2px solid #e4d804;
            border-radius: 100px;
            padding: 10px 34px;
            margin-left: 25px;
            color: white;
            text-transform: uppercase;
            letter-spacing: 1px;
            &:hover {
              background: #e4d804;
              color: black;
            }
          }
        }
        .menu-icon {
          display: none;
          i {
            color: white;
            font-size: 30px;
            margin-left: 35px;
          }
        }
      }
    }
    .search-layer {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1050;
      background-color: rgba(23, 26, 33, 0.98);
      visibility: hidden;
      opacity: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      outline: 0;
      padding: 20px;
      transition: 0.3s;
      .content {
        form {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          min-width: 700px;
          input {
            width: 100%;
            font-size: 36px;
            border: none;
            border-bottom: 3px solid rgba(255, 255, 255, 0.1);
            background: 0 0;
            color: #fff;
            padding: 0 85px 12px 40px;
          }
          button {
            position: absolute;
            right: 40px;
            margin-bottom: 0;
            font-size: 30px;
            background: 0 0;
            border: none;
            cursor: pointer;
            color: #e4d804;
            top: 8px;
          }
        }
      }
      .close-icon {
        display: flex;
        justify-content: flex-end;
        i {
          font-size: 40px;
          color: white;
          margin-right: 10px;
        }
      }
    }
    .show {
      visibility: visible;
      opacity: 1;
    }
  }
}
//media-queries
@media (max-width: 1200px) {
  #header {
    .container {
      .nav {
        .header-action {
          .sign-in-button {
            display: none;
          }
        }
      }
    }
  }
}
@media (max-width: 991.9px) {
  #header {
    .container {
      .nav {
        .header-action {
          .menu-icon {
            display: block;
          }
        }
        .links {
          ul {
            display: none;
          }
        }
      }
      .search-layer {
        font-size: 26px;
        .content {
          form {
            button {
              top: -4px;
              font-size: 26px;
            }
            input {
              font-size: 26px;
            }
          }
        }
        .close-icon {
          i {
            font-size: 30px;
          }
        }
      }
    }
  }
}
@media (min-width: 991.9px) {
  #header {
    .mobile-menu,
    .menu-layer {
      display: none;
    }
  }
}
@media (max-width: 767.9px) {
  #header {
    .container {
      .nav {
        .header-action {
          .lang-dropdown,
          .search {
            display: none;
          }
        }
      }
    }
  }
}
@media (max-width: 575.9px) {
}
</style>
