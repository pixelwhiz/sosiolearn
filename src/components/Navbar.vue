<template>
  <nav id="navbars" class="navbar navbar-expand-lg border-1 border-secondary border-top-0 border-start-0 navbar-dark shadow-lg fixed-top" style="background-color: #00bd8d; color: #ddd; font-weight: 500;">
    <div id="navbar" class="container-fluid" style="max-width: 82.5rem;">
      <div class="navbar-brand">
        <span @click="" id="logo" class="btn btn-sm py-0 px-2 text-light">
          <span id="logo" class=""><img width="30" src="@/assets/img/logo.svg"></span>
        </span>
        <button @click="toggleNavbar" class="btn btn-sm py-0 px-2 me-2 text-light d-lg-none">
          <span style="font-size: 1.5rem; color: rgba(255, 255, 255, 0.5);" class="fw-bold"><i :class="navbarIcon"></i></span>
        </button>
        <label style="font-size: 1rem;"  class="fw-normal mt-1 text-light">sosiolearn.com</label>
      </div>
      <div class="d-flex">
        <button @click="" class="btn btn-transparent fs-5 text-light" style="font-size: 1.25rem;"><i class="bi-plus-square-dotted"></i></button>
        <button @click="" class="btn btn-transparent fs-5 text-light" style="font-size: 1.25rem;"><i class="bi-bell-fill"></i></button>
      </div>
    </div>

    <div id="navbarside" tabindex="-1" aria-hidden="true" class="navbar-side border-secondary border-end border-end-1 modal shadow-sm overflow-auto" style="background-color: #252525;" :class="{ 'navbar-side-active': navbarActive }">
      <div class="card my-2 me-3 border-secondary border-start-0 border-top-1 border-end-1 border-bottom-1" style="border-color: white; background-color: rgba(255, 255, 255, 0.05); border-top-right-radius: 1rem; border-bottom-right-radius: 1rem; border-bottom-left-radius: 0rem; border-top-left-radius: 0rem;">
        <div class="d-flex gap-3 mx-auto my-auto">
          <div class="d-flex gap-3">
            <img width="50" height="0" src="../assets/img/logos.png" class="my-auto mx-auto" style="border-radius: 20rem;">
            <div class="d-grid my-auto mx-auto text-start">
              <label class="fw-normal" style="font-size: 0.8rem;">{{ name }}</label>
              <label class="fw-lighter" style="font-size: 0.75rem;">{{ coursename }}</label>
            </div>
          </div>
          <div class="d-flex gap-3">
            <button @click="handleLogout" class="d-flex fs-6 mx-auto my-auto" style="color: rgba(255, 255, 255, 0.5);">
              <i class="bi-box-arrow-left"></i>
            </button>
          </div>
        </div>
      </div>

      <hr>

      <div class="d-grid me-3">
        <div id="link" class="py-0 card ps-2 border-0" style="border-bottom-left-radius: 0rem; border-top-left-radius: 0rem; border-bottom-right-radius: 1rem; border-top-right-radius: 1rem;" :style="{ backgroundColor: home ? 'rgba(0, 0, 0, 0.25)' : 'transparent', borderLeftColor: home ? 'none' : 'none' }">
          <a class="btn fw-normal py-2 btn-sm d-flex justify-content-start gap-3" @click="homeLink">
            <span :style="{ color: home ? 'white' : 'rgba(255, 255, 255, 0.5)' }" class="fs-5"><i class="bi-house-door"></i></span>
            <span style="font-size: 0.8rem; transform: translateY(0.3rem);" :style="{ color: home ? 'white' : 'rgba(255, 255, 255, 0.5)' }" class="">Beranda</span>
          </a>
        </div>
        <div id="link" class="py-0 card ps-2 border-0" style="border-bottom-left-radius: 0rem; border-top-left-radius: 0rem; border-bottom-right-radius: 1rem; border-top-right-radius: 1rem;" :style="{ backgroundColor: dashboard ? 'rgba(0, 0, 0, 0.25)' : 'transparent', borderLeftColor: dashboard ? 'none' : 'none' }">
          <a id="dashboard" class="btn fw-normal py-2 btn-sm d-flex justify-content-start gap-3" @click="dashboardLink">
            <span :style="{ color: dashboard ? 'white' : 'rgba(255, 255, 255, 0.5)' }" class="fs-5"><i class="bi-speedometer2"></i></span>
            <span style="font-size: 0.8rem; transform: translateY(0.3rem);" :style="{ color: dashboard ? 'white' : 'rgba(255, 255, 255, 0.5)' }" class="">Dashboard</span>
          </a>
        </div>
      </div>

      <hr>

      <div class="d-grid me-3">
        <div
            id="link"
            class="py-0 card ps-2 border-0"
            style="border-bottom-left-radius: 0rem; border-top-left-radius: 0rem; border-bottom-right-radius: 1rem; border-top-right-radius: 1rem;"
            :style="{ backgroundColor: divisi ? 'transparent' : 'transparent', borderLeftColor: divisi ? 'none' : 'none' }"
            @click="toggleButtons"
        >
          <a id="divisi" class="btn fw-normal py-2 btn-sm d-flex justify-content-start gap-3">
            <span :style="{ color: divisi ? 'rgba(255, 255, 255, 0.5)' : 'rgba(255, 255, 255, 0.5)' }" class="mt-1"><i class="bi-caret-right-fill"></i></span>
            <span :style="{ color: divisi ? 'rgba(255, 255, 255, 0.5)' : 'rgba(255, 255, 255, 0.5)' }" class="fs-5"><i class="bi-table"></i></span>
            <span style="font-size: 0.8rem; transform: translateY(0.3rem);" :style="{ color: divisi ? 'rgba(255, 255, 255, 0.5)' : 'rgba(255, 255, 255, 0.5)' }" class="">Terdaftar</span>
          </a>
        </div>

      </div>

      <hr>

      <div class="d-grid me-3">
        <div id="link" class="py-0 card ps-2 border-0" style="border-bottom-left-radius: 0rem; border-top-left-radius: 0rem; border-bottom-right-radius: 1rem; border-top-right-radius: 1rem;" :style="{ backgroundColor: settings ? 'rgba(0, 0, 0, 0.25)' : 'transparent', borderLeftColor: settings ? 'none' : 'none' }">
          <a id="settings" class="btn fw-normal py-2 btn-sm d-flex justify-content-start gap-3" @click="settingsLink">
            <span :style="{ color: settings ? 'white' : 'rgba(255, 255, 255, 0.5)' }" class="fs-5"><i class="bi-gear"></i></span>
            <span style="font-size: 0.8rem; transform: translateY(0.3rem);" :style="{ color: settings ? 'white' : 'rgba(255, 255, 255, 0.5)' }" class="">Settings</span>
          </a>
        </div>
      </div>

    </div>
  </nav>

</template>

<style scoped>

  #dropdown-flags a:hover {
    background: rgba(0, 0, 0, 0.1);
  }

  .navbar {
    height: 3.75rem;
  }

  #link {
    text-align: left;
  }

  .navbar-side {
    position: absolute;
    top: 3.75rem;
    left: -100%;
    width: 16.5rem;
    height: 100vh;
    transition: left 10s ease-in-out;
  }

  .navbar-side-active {
    left: 0;
    //display: block;
  }

  .navbar input:focus, .navbar input:valid {
    box-shadow: none;
    border-color: #ddd;
    font-size: 1rem;
  }

  .navbar a:focus, .navbar a:valid {
    box-shadow: none;
  }

  #profile-picture {
    border-radius: 5rem;
    width: 3rem;
    height: 3rem;
    transform: translateY(1rem);
  }

  .dark-mode {
    background-color: #2c3034;
    color: #fff;
  }

  .navbar button:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  .active {
    border-left-color: white;
    background-color: rgba(255, 255, 255, 0.05);
    color: #fff;
  }

  .navbar-side-onactive {
    background-origin: border-box;
  }

  .navbar button:focus, .navbar button:valid {
    box-shadow: none;
  }

  .navbar button {
    border: transparent;
  }

  @media (max-width: 992px){
    .navbar-side {
      width: 17.5rem;
    }
  }
</style>

<script>
import store from "../store";
import { mapActions, mapState } from "vuex";
import axios from "axios";

export default {
  name: 'Navbar',

  el: '#link',

  data() {
    return {
      darkTheme: true,
      navbarActive: "",

      home: '',
      dashboard: '',
      settings: '',

      divisi: '',

      user_data: [],

      name: '',
      courseid: '',
      coursename: '',
    };
  },

  mounted() {
    this.fetch();
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize);
  },

  computed: {
    themeIcon () {
      return this.darkTheme ? './src/assets/icons/sun.svg' : './src/assets/icons/moon.svg';
    },

    navbarIcon () {
      return this.navbarActive ? 'bi-x' : 'bi-list';
    },
  },

  created() {
    this.checkRouter();
    this.fetch();
  },

  watch: {
    $route(to, from) {
      this.checkRouter();
    }
  },

  methods: {
    toggleButtons() {
      this.divisi = !this.divisi;
    },

    async fetch() {
      try {
        const response = await axios.get("http://localhost:3000/api/users/data");
        this.name = response.data.user.name;
        this.courseid = response.data.user.currentClassId;
        this.coursename = response.data.user.currentClassName;
      } catch (err) {
        console.log("Internal Server Error: ", err.message);
      }
    },

    checkRouter() {
      if (this.$route.path === '/') {
        this.home = true;
      } else {
        this.home = false;
      }

      if (this.$route.path === '/dashboard') {
        this.dashboard = true;
      }else{
        this.dashboard = false;
      }

      if (this.$route.path === '/accounts/settings') {
        this.settings = true;
      }else{
        this.settings = false;
      }
    },
    ...mapActions(['setLoginStatus']),
    async handleLogout() {
      try {
        const response = await axios.post("http://localhost:3000/api/users/logout");
        this.setLoginStatus(false);
        this.$router.push('/accounts/login');
        sessionStorage.removeItem('jwt', response.data.token);
        alert(response.data.message);
      } catch (err) {
        console.error("Error during logout: ", err.message);
      }
    },
    homeLink() {
      this.$router.push('/');
    },
    dashboardLink() {
      this.$router.push('/dashboard');
    },
    settingsLink() {
      this.$router.push('/accounts/settings');
    },

    closeNavbar() {
      this.navbarActive = false;
      var navbar = document.getElementById("navbar");
      var navbarside = document.getElementById("navbarside");
      document.body.classList.remove("navbar-side-onactive");
    },

    toggleNavbar() {
      this.navbarActive = !this.navbarActive;
      var navbar = document.getElementById("navbars");
      var navbarside = document.getElementById("navbarside");
      document.body.classList.add("navbar-side-onactive");
      navbar.classList.add("navbar-side-onactive");
    },

    checkScreenSize() {
      if (window.innerWidth <= 992){
        this.navbarActive = false;
      }else{
        this.navbarActive = true;
      }
    },

  },
};
</script>