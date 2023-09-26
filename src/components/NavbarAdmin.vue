<template scope="">
  <nav id="navbars" class="navbar navbar-expand-lg navbar-dark shadow-sm fixed-top" style="background-color: #00bd8d; color: #ddd; font-weight: 500;">
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
        <button class="btn btn-primary" style="font-size: 0.8rem;"><span><i class="bi-moon"></i></span></button>
      </div>
    </div>
    <hr>

    <div id="navbarside" tabindex="-1" aria-hidden="true" class="navbar-side shadow-lg modal shadow-sm" style="background-color: #252525;" :class="{ 'navbar-side-active': navbarActive }">
      <div class="">
        <div class="">

          <div class="card bg-transparent" style="border-color: transparent;">
            <div class="card-body d-flex gap-3 mx-auto my-auto">
              <div class="d-flex gap-3">
                <img width="50" height="0" src="../assets/img/logos.png" class="my-auto mx-auto" style="border-radius: 20rem;">
                <div class="d-grid my-auto mx-auto text-start">
                  <label class="fw-normal" style="font-size: 0.8rem;">Administrator</label>
                  <label class="fw-lighter" style="font-size: 0.75rem;">Administrator</label>
                </div>
              </div>
              <div class="d-flex gap-3">
                <button @click="handleLogout" class="d-flex fs-6 mx-auto my-auto" style="color: rgba(255, 255, 255, 0.5);">
                  <i class="bi-box-arrow-left"></i>
                </button>
              </div>
            </div>
          </div>

          <div class="d-grid gap-0 mt-0 me-3 ms-2">
            <div id="dashboard" style="" class="py-0 card ps-2 border-top-0 border-end-0 border-bottom-0" :style="{ backgroundColor: dashboard ? 'rgba(255, 255, 255, 0.05)' : 'transparent', border: dashboard ? '0.15rem solid white' : 'none' }">
              <a class="btn fw-normal py-2 btn-sm d-flex justify-content-start gap-3" @click="dashboardLink">
                <span :style="{ color: dashboard ? 'white' : 'rgba(255, 255, 255, 0.5)' }" class="fs-5"><i class="bi-speedometer2"></i></span>
                <span style="font-size: 0.8rem; transform: translateY(0.3rem);" :style="{ color: dashboard ? 'white' : 'rgba(255, 255, 255, 0.5)' }" class="">Dashboard</span>
              </a>
            </div>
            <div id="kelas" style="" class="py-0 card ps-2 border-top-0 border-end-0 border-bottom-0" :style="{ backgroundColor: kelas ? 'rgba(255, 255, 255, 0.05)' : 'transparent', border: kelas ? '0.15rem solid white' : 'none' }">
              <a class="btn fw-normal py-2 btn-sm d-flex justify-content-start gap-3" @click="kelasLink">
                <span :style="{ color: kelas ? 'white' : 'rgba(255, 255, 255, 0.5)' }" class="fs-5"><i class="bi-building"></i></span>
                <span style="font-size: 0.8rem; transform: translateY(0.3rem);" :style="{ color: kelas ? 'white' : 'rgba(255, 255, 255, 0.5)' }" class="">Kelas</span>
              </a>
            </div>
            <div id="modul" style="" class="py-0 card ps-2 border-top-0 border-end-0 border-bottom-0" :style="{ backgroundColor: modul ? 'rgba(255, 255, 255, 0.05)' : 'transparent', border: modul ? '0.15rem solid white' : 'none' }">
              <a class="btn fw-normal py-2 btn-sm d-flex justify-content-start gap-3" @click="modulLink">
                <span :style="{ color: modul ? 'white' : 'rgba(255, 255, 255, 0.5)' }" class="fs-5"><i class="bi-folder"></i></span>
                <span style="font-size: 0.8rem; transform: translateY(0.3rem);" :style="{ color: modul ? 'white' : 'rgba(255, 255, 255, 0.5)' }" class="">Modul</span>
              </a>
            </div>
            <div id="soal" style="" class="py-0 card ps-2 border-top-0 border-end-0 border-bottom-0" :style="{ backgroundColor: soal ? 'rgba(255, 255, 255, 0.05)' : 'transparent', border: soal ? '0.15rem solid white' : 'none' }">
              <a class="btn fw-normal py-2 btn-sm d-flex justify-content-start gap-3" @click="soalLink">
                <span :style="{ color: soal ? 'white' : 'rgba(255, 255, 255, 0.5)' }" class="fs-5"><i class="bi-folder"></i></span>
                <span style="font-size: 0.8rem; transform: translateY(0.3rem);" :style="{ color: soal ? 'white' : 'rgba(255, 255, 255, 0.5)' }" class="">Soal</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  </nav>

</template>

<style>

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
  position: fixed;
  top: 3.75rem;
//left: -100%;
  display: none;
  width: 16.5rem;
  height: 100vh;
  transition: left 0.3s ease-in-out;
}

.navbar-side-active {
//left: 0;
  display: block;
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

@media (max-width: 992px) {

  #logo {
    display: none;
  }
}

@media (max-width: 992px){
  .navbar-side {
    width: 17.5rem;
  }
}
</style>

<script>

import { eventBus } from '@/main.js';
import {mapActions} from "vuex";

export default {
  name: 'NavbarAdmin',

  el: '#link',

  data() {
    return {
      darkTheme: true,
      logout: '',
      navbarActive: '',

      dashboard: '',
      kelas: '',
      modul: '',
      soal: '',
    };
  },

  mounted() {
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
  },

  watch: {
    $route(to, from) {
      this.checkRouter();
    }
  },

  methods: {

    ...mapActions(['setLoginStatusAdmin']),
    handleLogout() {
      this.setLoginStatusAdmin(false);
      this.$router.push('/admin/authentication/login');
      alert("Logout Successfully")
    },

    checkScreenSize() {
      if (window.innerWidth <= 992){
        this.navbarActive = false;
      }else{
        this.navbarActive = true;
      }
    },

    checkRouter() {
      if (this.$route.path === '/admin/panel/dashboard') {
        this.dashboard = true;
      } else {
        this.dashboard = false;
      }

      if (this.$route.path === '/admin/panel/kelas') {
        this.kelas = true;
      }else{
        this.kelas = false;
      }

      if (this.$route.path === '/admin/panel/modul') {
        this.modul = true;
      }else{
        this.modul = false;
      }

      if (this.$route.path === '/admin/panel/soal') {
        this.soal = true;
      }else{
        this.soal = false;
      }
    },

    dashboardLink() {
      this.$router.push('/admin/panel/dashboard');
    },

    kelasLink() {
      this.$router.push('/admin/panel/kelas');
    },

    modulLink() {
      this.$router.push('/admin/panel/modul');
    },

    soalLink() {
      this.$router.push('/admin/panel/soal');
    },

    toggleSettings() {
      var toggleIcon = document.getElementById('toggleIcon');

      if (toggleIcon.classList.contains('bi-chevron-left')) {
        toggleIcon.classList.remove('bi-chevron-left');
        toggleIcon.classList.add('bi-chevron-down');
      } else {
        toggleIcon.classList.remove('bi-chevron-down');
        toggleIcon.classList.add('bi-chevron-left');
      }
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

    toggleTheme() {
      var navbarside = document.getElementById("navbarside");
      var navbar = document.getElementById("navbars");
      var dropdownFlags = document.getElementById("dropdown-flags");
      this.darkTheme = !this.darkTheme;
      if (this.darkTheme) {
        document.body.classList.add("dark-mode");
        navbar.classList.add("bg-dark");
        dropdownFlags.classList.add("bg-dark");
      } else {
        document.body.classList.remove("dark-mode");
        navbar.classList.remove("bg-dark");
        dropdownFlags.classList.remove("bg-dark");
      }
    },
  },
};
</script>