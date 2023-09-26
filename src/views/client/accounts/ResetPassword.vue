<template>
  <main className="" id="">
    <div className="container-fluid" style="max-width: 40rem;">
      <div className="my-5 mx-0 mx-md-5">
        <div className="card shadow-lg" style="border-radius: 0.5rem;">
          <div class="d-lg-flex justify-content-center">
            
            
            <div class="w-auto card-body my-5 mx-0 mx-md-5 my-md-5">
              <div className="">

                <div class="mb-4">
                  <div class="d-grid justify-content-start">
                    <label class="card-title fw-bold fs-3"><span><i class=""></i></span> Reset Password</label>
                    <label class="card-title fw-normal" style="font-size: 0.9rem;">Reset your password with Email</label>
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

                </div>

                <div className="d-grid gap-2 mt-5">
                  <a @click="reset" className="btn btn-success fw-bold" style="font-size: 1rem;">Continue</a>
                  <button className="btn btn-transparent">
                    <label class="fw-normal" style="font-size: 0.9rem;">Back to menu? <a href="login" class="fw-bold text-decoration-none">Login</a></label>
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
      // Execute code after the component is mounted
      document.querySelector('#email').focus();
    });
  },


  methods: {
  }
};
</script>