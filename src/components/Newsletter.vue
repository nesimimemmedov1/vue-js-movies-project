<template>
  <div id="newsletter-section">
    <div class="container">
      <div class="wrapper">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-6">
            <div class="about">
              <h1>TRIAL START FIRST 30 DAYS.</h1>
              <p>Enter your email to create or restart your membership.</p>
            </div>
          </div>
          <div class="col-sm-12 col-md-12 col-lg-6">
            <form @submit.prevent="onSubmit" class="form" action="#">
              <input
                @blur="$v.email.$touch()"
                :class="{ 'is-invalid': $v.email.$error }"
                v-model="email"
                type="email"
                placeholder="Enter your email"
              />
              <button class="btn" :disabled="$v.$invalid">GET STARTED</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { required, email } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      email: "",
    };
  },
  validations: {
    email: {
      email,
      required,
    },
  },
  methods: {
    onSubmit() {
      this.email = "";
    },
  },
};
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
            border: 1px solid transparent;
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
            right: 3px;
            &:hover {
              background-color: #e4d804;
              color: #171d22;
            }
            &:focus {
              box-shadow: none;
            }
          }
        }
      }
    }
  }
  .is-invalid {
    border: red 1px solid!important;
    transition: 0.3s;
  }
}
// media queries
@media (max-width: 1200px) {
  #newsletter-section {
    .container {
      .wrapper {
        padding: 0;
        .row {
          .about {
            align-items: center;
            h1 {
              font-size: 26px;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 991.9px) {
   #newsletter-section {
    .container {
      .wrapper {
        .row {
          .about {
            margin-bottom: 25px;
          }
        }
      }
    }
  }
}
@media (max-width: 767.9px) {
  #newsletter-section {
    .container {
      .wrapper {
        .row {
          .form {
            flex-direction: column;
            button {
              font-size: 13px;
              position: static;
              margin-top: 20px;
            }
          }
          .about{
            h1{
            font-size: 24px;
            }
            p{
              font-size: 13px;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 575.9px) {
}
</style>