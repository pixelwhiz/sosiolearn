<script>
import {defineComponent} from "vue";
import axios from "axios";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default defineComponent({
  components: {Footer, Navbar},

  name: "Modul",

  data() {
    return {
      navbarActive: "",
      data_modul: [],
      user_data: {
        courseid: "",
      },
    }
  },
  mounted() {
    this.checkScreenSize();
    this.fetchModul();
    this.fetchUser();
    window.addEventListener('resize', this.checkScreenSize);
  },
  methods: {
    checkScreenSize() {
      if (window.innerWidth <= 992){
        this.navbarActive = false;
      }else{
        this.navbarActive = true;
      }
    },

    async fetchUser() {
      try {
        const response = await axios.get("http://localhost:3000/api/users/data");
        this.user_data.courseid = response.data.user.currentClassId;
      } catch (err) {
        console.log("Internal Server Error: ", err.message);
      }
    },

    async fetchModul() {
      try {
        const response = await axios.get("http://localhost:3000/api/modul/get");
        this.data_modul = response.data;
        console.log(response.data);
      } catch (err) {
        console.log("Internal Server Error: ", err.message);
      }
    },

    modulLink(id) {
      this.$router.push(`/q/${this.user_data.courseid}/${id}`);
    },

  },

});

</script>

<template>
  <Navbar/>
  <div>
    <div class="h-100" :style="{ marginLeft: navbarActive ? '16.5rem' : '0' }" style="margin-top: 3.5rem; background-color: rgba(21, 20, 23, 0.95);">
      <div class="container-fluid text-light" style="max-width: 68.5rem;">
        <div class="" style="height: 100vh;">
          <h1>Daftar Modul Kelas</h1>
          <ul v-for="modul in data_modul" :key="data_modul.id">
            <li>
              <button @click="modulLink(modul.id)" class="btn btn-primary">{{ modul.name }}</button>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>

</style>