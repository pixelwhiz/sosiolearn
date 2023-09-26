<template>
  <main className="" id="">
    <div className="container-fluid" style="max-width: 60rem;">
      <div className="my-5 mx-0">
        <div className="card shadow-lg" style="border-radius: 0.5rem;">
          <div class="d-lg-flex justify-content-center">
            <div class="d-lg-none w-100 card-body px-lg-4 py-lg-4">
              <div class="bg-success text-center card-header h-100" style="border-radius: 0.5rem;">
                <div class="py-0 px-0 px-md-5 py-md-5">
                  <div class="d-flex justify-content-center mb-md-3">
                    <img class="w-75 h-100" src="@/assets/img/logo.svg">
                  </div>
                  <div class="d-md-grid justify-content-center gap-4 d-none d-md-block">
                    <label style="font-family: 'Gill Sans MT'; filter: invert(0.1);" class="fw-bold fs-3">Hello Everyone 👋</label>
                    <label style="font-family: 'Gill Sans MT';" class="fw-lighter text-light fs-6">We believe in your ability to achieve academic excellence. Sign up for our classroom, log in, and let us help you unlock your full potential.</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="sm w-50 card-body px-lg-3 py-lg-3">
              <div class="text-center card-header bg-success h-100" style="border-radius: 0.5rem; background-color: #00bd8d;">
                <div class="py-5 px-5">
                  <div class="d-flex justify-content-center mb-3">
                    <img class="w-75 h-100" src="@/assets/img/logo.svg">
                  </div>
                  <div class="d-grid justify-content-center gap-4">
                    <label style="font-family: 'Gill Sans MT'; filter: invert(0.1);" class="fw-bold fs-3">Hello Everyone 👋</label>
                    <label style="font-family: 'Gill Sans MT';" class="fw-lighter text-light fs-6">We believe in your ability to achieve academic excellence. Sign up for our classroom, log in, and let us help you unlock your full potential.</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-auto card-body my-5 mx-0 mx-md-5 my-md-5">
              <div className="">

                <div class="mb-4">
                  <div class="d-grid justify-content-start">
                    <label class="card-title fw-bold fs-3">Welcome Back!</label>
                    <label class="card-title fw-normal" style="font-size: 0.9rem;">Stay studying with your friends</label>
                  </div>
                </div>

                <div v-if="error" class="alert small alert-danger" role="alert">
                  {{ error }}
                </div>

                <div className="d-grid gap-3">
                  <div class="d-flex gap-2 py-2 px-2 btn btn-sm" style="background-color: #e7f1ff; z-index: 0; cursor: default;">
                    <img class="btn btn-sm bg-secondary" style="filter: invert(1); cursor: default;" src="@/assets/icons/envelope-fill.svg">
                    <input v-model="email" type="email" id="email" name="email" class="form-control form-control-sm" style="color: black; background: transparent;" placeholder="example@gmail.com" required>
                  </div>

                  <div class="d-flex gap-2 py-2 px-2 btn btn-sm" style="background-color: #e7f1ff; cursor: default;">
                    <img class="btn btn-sm bg-secondary" style="filter: invert(); cursor: default;" src="@/assets/icons/lock-fill.svg">
                    <input v-model="password" type="password" id="password" name="password" class="form-control form-control-sm password-input" style="background: transparent;" placeholder="At least 10 characters" required>
                    <button @click="togglePasswordVisibility" class="px-1 py-0 btn-transparent">
                      <img id="EyeIcons" :src="EyeIcons" width="35" style="filter: invert(0.5)" class="">
                    </button>

                  </div>
                </div>

                <div class="my-3 d-flex justify-content-end">
                  <a href="resetpassword" class="text-primary text-decoration-none fw-bold" style="font-size: 0.9rem;">Forgot Password?</a>
                </div>

                <div className="d-grid gap-2">
                  <a @click="login" className="btn btn-success fw-bold" style="font-size: 1rem;">Login</a>
                  <button className="btn btn-transparent">
                    <label class="fw-normal" style="font-size: 0.9rem;">Dont have Account? <a href="register" class="fw-bold text-decoration-none">Sign Up</a></label>
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

</template>

<style scoped>

@media (max-width: 992px) {
  .sm {
    display: none;
  }
}


#checkbox:hover {
  cursor: pointer;
}

main input {
  border-color: transparent;
}

main input[placeholder] {
  font-weight: normal;
}

#showpassword label:hover {
  cursor: pointer;
}

#showpassword label {
  user-select: none;
}

main input:focus {
  box-shadow: none;
  border-color: transparent;
}

#showpassword:hover {
  color: black;
  cursor: pointer;
}

</style>
<script>
import {mapActions} from "vuex";

import axios from "axios";
import store from "../../../store";

import Eye from "@/assets/icons/eye-slash-fill.svg";
import EyeFill from "@/assets/icons/eye-fill.svg";

export default {
  name: 'Login',

  data() {
    return {
      email: '',
      password: '',

      error: '',

      showPassword: false,
    };
  },

  computed: {
    EyeIcons () {
      return this.showPassword ? EyeFill : Eye;
    },
  },

  mounted() {
    this.$nextTick(() => {
      document.querySelector('#email').focus();
    });
  },


  methods: {

    async login() {
      try {
        const response = await axios.post('http://localhost:3000/api/users/login', {
          email: this.email,
          password: this.password,
        });

        if (response.status === 200) {
          store.dispatch("setLoginStatus", true);
          this.$router.push('/');
        } else {
          alert("Invalid Credentials");
        }
      } catch (err){
        alert("Failure");
      }
    },

    togglePasswordVisibility() {
      var passwordInput = document.getElementById("password");
      var showPasswordIcon = document.getElementById("showPasswordIcons");
      this.showPassword = !this.showPassword;
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
      } else {
        passwordInput.type = "password";
      }
    },

  }
};
</script>