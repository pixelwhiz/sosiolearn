<script>
import { mapActions } from "vuex";
import axios from "axios";
import store from "@/store";

export default {
  name: 'LoginAdmin',
  data() {
    return {
      email: "",
      password: "",
    }
  },

  mounted() {
    this.$nextTick(() => {
      document.querySelector('#email').focus();
    });
  },

  methods: {
    ...mapActions(["setLoginStatusAdmin"]),
    async login() {
      try {
        const response = await axios.post('http://localhost:3000/api/users/authentication/admin/login', {
          email: this.email,
          password: this.password,
        });

        if (response.status === 200) {
          this.setLoginStatusAdmin(true);
          this.$router.push('/admin/panel/dashboard');
          alert(response.data.message);
        } else {
          this.error = 'Password is incorrect';
        }
      } catch (err) {
        this.error = 'Invalid username / password';
      }
    }
  }
}
</script>


<template>
  <div class="container-fluid" style="max-width: 25rem; margin-top: 2.5rem;">
    <div class="d-grid gap-5">
      <div class="">
        <div class="d-grid justify-content-center">
          <img src="@/assets/img/logo.svg" width="100">
        </div>
      </div>
      <div class="card bg-light">
        <div class="card-header py-3">
          <label class="fw-bold text-dark">Login to Administrator</label>
        </div>
        <div class="card-body">
          <div class="d-flex gap-2 justify-content-center">
            <div class="d-grid gap-2 w-6">
              <span class="text-dark fs-5"><i class="bi-envelope-fill"></i></span>
              <span class="text-dark fs-5"><i class="bi-lock-fill"></i></span>
            </div>
            <div class="d-grid gap-2 w-100">
              <input v-model="email" id="email" type="email" placeholder="email" class="form-control form-control-sm">
              <input v-model="password" id="password" type="password" placeholder="password" class="form-control form-control-sm">
            </div>
          </div>
          <div class="mt-3 d-grid">
            <button class="btn btn-sm btn-primary fw-bold" @click="login">Login</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>