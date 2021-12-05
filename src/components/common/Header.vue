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
            <router-link active-class="active-link" exact class="nav-link" tag="li" to="/"><a href="">home</a></router-link>
            <router-link active-class="active-link" class="nav-link" tag="li" to="/movie"><a href="">movie</a></router-link>
            <router-link active-class="active-link" class="nav-link" tag="li" to="/pricing"><a href="">pricing</a></router-link>
            <router-link active-class="active-link" class="nav-link" tag="li" to="/blog"><a href="">blog</a></router-link>
            <router-link active-class="active-link" class="nav-link" tag="li" to="/contact"><a href="">contacts</a></router-link>
          </ul>
        </div>
        <div class="header-action">
          <div class="search">
            <i class="fas fa-search"></i>
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
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
#header {
  padding: 40px 0;
  width: 100%;
  position: absolute;
  z-index: 10;
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
          margin-right: 25px;
          i {
            font-size: 16px;
          }
        }
        .lang-dropdown {
          border-left: 2px solid #32495f;
          display: flex;
          align-items: center;
          #select {
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
      }
    }
  }
}
</style>