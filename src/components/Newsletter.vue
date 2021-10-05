<template>
  <div id="newsletter-section">
    <div class="container">
      <div class="wrapper">
        <div class="row">
          <div class="col-6">
            <div class="about">
              <h1>TRIAL START FIRST 30 DAYS.</h1>
              <p>Enter your email to create or restart your membership.</p>
            </div>
          </div>
          <div class="col-6">
            <form class="form" action="#">
              <input type="email" required placeholder="Enter your email" />
              <button>GET STARTED</button>
            </form>
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
#newsletter-section {
  padding: 42px 0;
  background-image: url("../assets/newsbg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  .container {
    .wrapper {
      padding: 0 95px;
      .row {
        .about {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          color: #171d22;
          h1 {
            font-weight: bold;
            font-size: 30px;
          }
          p {
            font-size: 14px;
            font-weight: 500;
          }
        }
        .form {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          input {
            color: #171d22;
            width: 100%;
            box-shadow: 0px 3px 4px 0px rgba(30, 30, 30, 0.17);
            font-size: 14px;
            border: none;
            padding: 20px 30px;
            border-radius: 5px;
            &::placeholder {
              color: #9c9c9c;
            }
            &:focus-visible {
              outline: 0;
            }
          }
          button {
            background: #171d22;
            border: 2px solid #171d22;
            color: #e4d804;
            border-radius: 5px;
            padding: 15px 35px;
            transition: 0.3s;
            font-weight: 600;
            letter-spacing: 1px;
            font-size: 15px;
            position: absolute;
            right: 2px;
            &:hover {
              background-color: #e4d804;
              color: #171d22;
            }
          }
        }
      }
    }
  }
}
</style>