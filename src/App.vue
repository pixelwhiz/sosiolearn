<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import axios from "axios";
import store from "@/store";

export default {
  name: 'App',

  data() {
    return {
      user_data: [],
    }
  },

  mounted() {
    this.check();
    this.getUser();
  },

  created() {
    this.check();
    this.getUser();
  },

  methods: {
    async getUser() {
      try {
        const response = await axios.get("http://localhost:3000/api/users/data");
        if (response.status === 200) {
          this.user_data = response.data.user;
          store.dispatch("setLoginStatus", true);
        } else {
          console.log(response.data.message);
          store.dispatch("setLoginStatus", false);
        }
      } catch (err) {
        if (err.response) {
          console.log(err.response.data.message);
          store.dispatch("setLoginStatus", false);
        } else {
          store.dispatch("setLoginStatus", false);
          console.log(`Intenal Server Error: ${err.message}`);
        }
      }
    },

    check() {
      const isLoggedIn = sessionStorage.getItem('isLoggedIn');
      const isLoggedInAdmin = sessionStorage.getItem('isLoggedInAdmin');
      if (isLoggedIn) {
        this.$store.dispatch('setLoginStatus', isLoggedIn === 'true');
      }

      if (isLoggedInAdmin) {
        this.$store.dispatch('setLoginStatusAdmin', isLoggedInAdmin === 'true');
      }
    },
  },

};
</script>

<style scoped>

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
