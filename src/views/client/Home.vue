<script>
import Navbar from "@/components/Navbar.vue";
import {defineComponent} from "vue";
import axios from "axios";
import Footer from "@/components/Footer.vue";

export default defineComponent({
  components: {Navbar, Footer},

  name: "Home",

  data() {
    return {
      navbarActive: "",

      user_data: {
        courseid: '',
      },
    }
  },

  mounted() {
    this.checkScreenSize();
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

    modulLink() {
      this.$router.push(`/q/${this.user_data.courseid}`);
    },

  },

});

</script>

<template>
  <Navbar/>
  <div>
    <div class="h-100" :style="{ marginLeft: navbarActive ? '16.5rem' : '0' }" style="margin-top: 3.5rem; background-color: rgba(21, 20, 23, 0.95);">
      <div class="container-fluid text-light" style="max-width: 65rem;">
        <div class="py-4">
          <div class="row" id="card-container">
            <div class="col-md-4">
              <div class="card text-decoration-none bg-transparent border-0 mb-3" style="" data-id="card1">
                <div class="d-flex justify-content-between border-1 border-secondary border-bottom-0" style="background-color: mediumslateblue; border-top-left-radius: 1rem; border-top-right-radius: 1rem;">
                  <img style="height: 5rem; width: 10rem;" src="@/assets/img/kurikulum_merdeka.png" class="card-img-top" alt="Image 1">
                </div>
                <div class="card-body bg-transparent border-secondary border-1 border-top-0" style="border-bottom-right-radius: 1rem; border-bottom-left-radius: 1rem;">
                  <div class="d-grid">
                    <label style="font-size: 0.8rem;" class="card-title text-muted">
                      <span><i class="bi-calendar-fill"></i></span>
                      22, Juli 2023 - 12:00 WIB
                    </label>
                    <label class="text-light fw-bold">Modul Sosiologi</label>
                    <label class="text-light fw-light">Buku buku pembelajaran</label>
                  </div>
                  <div class="d-flex mt-5 justify-content-between">
                    <div class="d-flex gap-2">
                      <button class="fw-lighter" style="color: rgba(255, 255, 255, 0.5);"><span class="bi-table"></span> 1</button>
                      <button class="fw-lighter" style="color: rgba(255, 255, 255, 0.5);"><span class="bi-table"></span> 1</button>
                    </div>
                    <button @click="modulLink" style="border-radius: 0.75rem;" class="btn px-2 btn-outline-success border-secondary fw-bold">Check</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card text-decoration-none bg-transparent border-0 mb-3" style="" data-id="card2">
                <div class="d-flex justify-content-between border-1 border-secondary border-bottom-0" style="background-color: mediumorchid; border-top-left-radius: 1rem; border-top-right-radius: 1rem;">
                  <img style="height: 5rem; width: 10rem;" src="@/assets/img/kurikulum_merdeka.png" class="card-img-top" alt="Image 1">
                </div>
                <div class="card-body bg-transparent border-secondary border-1 border-top-0" style="border-bottom-right-radius: 1rem; border-bottom-left-radius: 1rem;">
                  <div class="d-grid">
                    <label style="font-size: 0.8rem;" class="card-title text-muted">
                      <span><i class="bi-calendar-fill"></i></span>
                      22, Juli 2023 - 12:00 WIB
                    </label>
                    <label class="text-light fw-bold">Tugas Harian</label>
                    <label class="text-light fw-light">Tugas tugas harian</label>
                  </div>
                  <div class="d-flex mt-5 justify-content-between">
                    <div class="d-flex gap-2">
                      <button class="fw-lighter" style="color: rgba(255, 255, 255, 0.5);"><span class="bi-table"></span> 1</button>
                      <button class="fw-lighter" style="color: rgba(255, 255, 255, 0.5);"><span class="bi-table"></span> 1</button>
                    </div>
                    <button style="border-radius: 0.75rem;" class="btn px-2 btn-outline-success border-secondary fw-bold">Check</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card text-decoration-none bg-transparent border-0 mb-3" style="" data-id="card3">
                <div class="d-flex justify-content-between border-1 border-secondary border-bottom-0" style="background-color: mediumvioletred; border-top-left-radius: 1rem; border-top-right-radius: 1rem;">
                  <img style="height: 5rem; width: 10rem;" src="@/assets/img/kurikulum_merdeka.png" class="card-img-top" alt="Image 1">
                </div>
                <div class="card-body bg-transparent border-secondary border-1 border-top-0" style="border-bottom-right-radius: 1rem; border-bottom-left-radius: 1rem;">
                  <div class="d-grid">
                    <label style="font-size: 0.8rem;" class="card-title text-muted">
                      <span><i class="bi-calendar-fill"></i></span>
                      22, Juli 2023 - 12:00 WIB
                    </label>
                    <label class="text-light fw-bold">Latihan Soal</label>
                    <label class="text-light fw-light">Soal soal latihan</label>
                  </div>
                  <div class="d-flex mt-5 justify-content-between">
                    <div class="d-flex gap-2">
                      <button class="fw-lighter" style="color: rgba(255, 255, 255, 0.5);"><span class="bi-table"></span> 1</button>
                      <button class="fw-lighter" style="color: rgba(255, 255, 255, 0.5);"><span class="bi-table"></span> 1</button>
                    </div>
                    <button style="border-radius: 0.75rem;" class="btn px-2 btn-outline-success border-secondary fw-bold">Check</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card text-decoration-none bg-transparent border-0 mb-3" style="" data-id="card4">
                <div class="d-flex justify-content-between border-1 border-secondary border-bottom-0" style="background-color: mediumorchid; border-top-left-radius: 1rem; border-top-right-radius: 1rem;">
                  <img style="height: 5rem; width: 10rem;" src="@/assets/img/kurikulum_merdeka.png" class="card-img-top" alt="Image 1">
                </div>
                <div class="card-body bg-transparent border-secondary border-1 border-top-0" style="border-bottom-right-radius: 1rem; border-bottom-left-radius: 1rem;">
                  <div class="d-grid">
                    <label style="font-size: 0.8rem;" class="card-title text-muted">
                      <span><i class="bi-calendar-fill"></i></span>
                      22, Juli 2023 - 12:00 WIB
                    </label>
                    <label class="text-light fw-bold">Evaluasi</label>
                    <label class="text-light fw-light">Evaluasi</label>
                  </div>
                  <div class="d-flex mt-5 justify-content-between">
                    <div class="d-flex gap-2">
                      <button class="fw-lighter" style="color: rgba(255, 255, 255, 0.5);"><span class="bi-table"></span> 1</button>
                      <button class="fw-lighter" style="color: rgba(255, 255, 255, 0.5);"><span class="bi-table"></span> 1</button>
                    </div>
                    <button style="border-radius: 0.75rem;" class="btn px-2 btn-outline-success border-secondary fw-bold">Check</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card text-decoration-none bg-transparent border-0 mb-3" style="" data-id="card5">
                <div class="d-flex justify-content-between border-1 border-secondary border-bottom-0" style="background-color: mediumpurple; border-top-left-radius: 1rem; border-top-right-radius: 1rem;">
                  <img style="height: 5rem; width: 10rem;" src="@/assets/img/kurikulum_merdeka.png" class="card-img-top" alt="Image 1">
                </div>
                <div class="card-body bg-transparent border-secondary border-1 border-top-0" style="border-bottom-right-radius: 1rem; border-bottom-left-radius: 1rem;">
                  <div class="d-grid">
                    <label style="font-size: 0.8rem;" class="card-title text-muted">
                      <span><i class="bi-calendar-fill"></i></span>
                      22, Juli 2023 - 12:00 WIB
                    </label>
                    <label class="text-light fw-bold">UH</label>
                    <label class="text-light fw-light">Ulangan harian</label>
                  </div>
                  <div class="d-flex mt-5 justify-content-between">
                    <div class="d-flex gap-2">
                      <button class="fw-lighter" style="color: rgba(255, 255, 255, 0.5);"><span class="bi-table"></span> 1</button>
                      <button class="fw-lighter" style="color: rgba(255, 255, 255, 0.5);"><span class="bi-table"></span> 1</button>
                    </div>
                    <button style="border-radius: 0.75rem;" class="btn px-2 btn-outline-success border-secondary fw-bold">Check</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card text-decoration-none bg-transparent border-0 mb-3" style="" data-id="card6">
                <div class="d-flex justify-content-between border-1 border-secondary border-bottom-0" style="background-color: mediumseagreen; border-top-left-radius: 1rem; border-top-right-radius: 1rem;">
                  <img style="height: 5rem; width: 10rem;" src="@/assets/img/kurikulum_merdeka.png" class="card-img-top" alt="Image 1">
                </div>
                <div class="card-body bg-transparent border-secondary border-1 border-top-0" style="border-bottom-right-radius: 1rem; border-bottom-left-radius: 1rem;">
                  <div class="d-grid">
                    <label style="font-size: 0.8rem;" class="card-title text-muted">
                      <span><i class="bi-calendar-fill"></i></span>
                      22, Juli 2023 - 12:00 WIB
                    </label>
                    <label class="text-light fw-bold">UTS</label>
                    <label class="text-light fw-light">Ulangan Tengah Semester</label>
                  </div>
                  <div class="d-flex mt-5 justify-content-between">
                    <div class="d-flex gap-2">
                      <button class="fw-lighter" style="color: rgba(255, 255, 255, 0.5);"><span class="bi-table"></span> 1</button>
                      <button class="fw-lighter" style="color: rgba(255, 255, 255, 0.5);"><span class="bi-table"></span> 1</button>
                    </div>
                    <button style="border-radius: 0.75rem;" class="btn px-2 btn-outline-success border-secondary fw-bold">Check</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card text-decoration-none bg-transparent border-0 mb-3" style="" data-id="card7">
                <div class="d-flex justify-content-between border-1 border-secondary border-bottom-0" style="background-color: mediumaquamarine; border-top-left-radius: 1rem; border-top-right-radius: 1rem;">
                  <img style="height: 5rem; width: 10rem;" src="@/assets/img/kurikulum_merdeka.png" class="card-img-top" alt="Image 1">
                </div>
                <div class="card-body bg-transparent border-secondary border-1 border-top-0" style="border-bottom-right-radius: 1rem; border-bottom-left-radius: 1rem;">
                  <div class="d-grid">
                    <label style="font-size: 0.8rem;" class="card-title text-muted">
                      <span><i class="bi-calendar-fill"></i></span>
                      22, Juli 2023 - 12:00 WIB
                    </label>
                    <label class="text-light fw-bold">UAS</label>
                    <label class="text-light fw-light">Ulangan Akhir Semester</label>
                  </div>
                  <div class="d-flex mt-5 justify-content-between">
                    <div class="d-flex gap-2">
                      <button class="fw-lighter" style="color: rgba(255, 255, 255, 0.5);"><span class="bi-table"></span> 1</button>
                      <button class="fw-lighter" style="color: rgba(255, 255, 255, 0.5);"><span class="bi-table"></span> 1</button>
                    </div>
                    <button style="border-radius: 0.75rem;" class="btn px-2 btn-outline-success border-secondary fw-bold">Check</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>


</style>