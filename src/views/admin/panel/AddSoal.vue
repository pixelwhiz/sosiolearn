<script>
import NavbarAdmin from "@/components/NavbarAdmin.vue";
import {defineComponent} from "vue";
import axios from "axios";

export default defineComponent({
  components: {NavbarAdmin},

  name: "AddSoal",

  data() {
    return {
      navbarActive: "",
      data_kelas: [],
      data_soal: [],

      addSoal: {
        name: "",
        description: "",
        divisi: null,
        classname: null,
      },
    }
  },
  mounted() {
    this.checkScreenSize();
    this.fetchAllKelas();
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

    async fetchSoal() {
      try {
        const response = await axios.get('http://localhost:3000/api/soal/get');
        this.data_soal = response.data;
      } catch (error) {
        console.log('Error: ', error.message);
      }
    },

    async fetchAllKelas() {
      try {
        const response = await axios.get('http://localhost:3000/api/kelas/get');
        this.data_kelas = response.data;
        console.log(response.data);
      } catch (error) {
        console.log('Error: ', error.message);
      }
    },

    async addSoals() {
      try {
        const response = await axios.post('http://localhost:3000/api/soal/create', {
          id: this.getRandomID(25),
          name: this.addSoal.name,
          description: this.addSoal.description,
          divisi: this.addSoal.divisi,
          classname: this.addSoal.classname,
        });
        if (response.data.status === true) {
          this.fetchSoal();
          this.$router.push("/admin/panel/soal");
          alert(response.data.message);
        } else {
          alert("Failure");
        }
      } catch (err) {
        console.log("Error: ", err.message);
        alert("Failure");
      }
    },

    soalLink() {
      this.$router.push("/admin/panel/soal");
    },

  },

});

</script>

<template>
  <NavbarAdmin/>
  <div>
    <div class="h-100" :style="{ marginLeft: navbarActive ? '16.5rem' : '0' }" style="margin-top: 3.5rem; background-color: rgba(21, 20, 23, 0.95);">
      <div class="container-fluid text-light" style="max-width: 68.5rem;">
        <div id="daftar" class="py-4 mx-2" style="margin-bottom: 20rem;">
          <div class="card shadow-lg" style="border: none; background-color: rgba(255, 255, 255, 0.05); height: 20rem;">
            <div class="card-header d-grid py-3" style="">
              <label class="fs-6 text-start fw-bold" style="font-weight: 500; color: rgba(255, 255, 255, 1);">Buat Soal</label>
            </div>
            <div class="card-body" style="max-height: 20rem; overflow-y: auto;">
              <table class="table table-bordered border-secondary">
                <tbody class="text-dark fs-6 bg-light" style="background-color: rgba(255, 255, 255, 0.9); font-weight: 500;">
                <tr>
                  <td class="text-start">Nama</td>
                  <td class="text-start">Deskripsi</td>
                  <td class="text-start">Divisi</td>
                  <td class="text-start">Kelas</td>
                  <td class="text-start">Aksi</td>
                </tr>
                </tbody>
                <tbody class="text-light table-active fs-6 bg-transparent fw-light" style="background-color: rgba(0, 0, 0, 0.1);">
                <tr>
                  <td class="text-start">
                    <input v-model="addSoal.name" class="bg-transparent border-1 form-control form-control-sm text-light" type="text">
                  </td>
                  <td class="text-start">
                    <input v-model="addSoal.description" class="bg-transparent border-1 form-control form-control-sm text-light" type="text">
                  </td>
                  <td class="text-start">
                    <select v-model="addSoal.divisi" class="text-start text-dark">
                      <option selected disabled>Pilih Divisi</option>
                      <option>Tugas Harian</option>
                      <option>Latihan Soal</option>
                      <option>Ulangan Harian</option>
                      <option>Ulangan Tengah Semester</option>
                      <option>Ulangan Akhir Semester </option>
                      <option>Evaluasi</option>
                    </select>
                  </td>
                  <td>
                    <select v-model="addSoal.classname" class="text-start text-dark">
                      <option selected disabled>Pilih Kelas</option>
                      <option v-for="(kelas, index) in data_kelas" :key="kelas.id" :value="kelas.name">{{ kelas.name }}</option>
                    </select>
                  </td>

                  <td class="text-start d-grid">
                    <button type="button" @click="addSoals" class="btn btn-sm btn-primary"><span class="text-light"><i class="bi-plus-circle"></i></span> Add</button>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
            <div class="card-footer d-flex gap-2 justify-content-end">
              <button @click="soalLink" class="btn btn-secondary">Kembali</button>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-4 py-3 card shadow-lg" style="background-color: rgba(0, 0, 0, 0.1);">
        <div class="d-lg-flex d-grid justify-content-center justify-content-lg-between px-lg-5">
          <div class="text-start fw-light d-lg-flex d-flex justify-content-center gap-4" style="font-size: 0.9rem;">
            <a href="" class="text-decoration-none">@dpntech</a>
            <a href="" class="text-decoration-none">Licenses</a>
            <a href="" class="text-decoration-none">Help</a>
          </div>
          <div class="text-end d-lg-flex d-grid gap-lg-2 gap-2 fw-light" style="font-size: 0.9rem;">
            <label class="text-muted text-start">Created with <a href="" class="text-primary text-decoration-none">Bootstrap 5</a> and <a href="" class="text-primary text-decoration-none">VueJS</a></label>
            <div class="d-flex justify-content-center">
              <button @click=""><img width="30" style="margin-top: -0.3rem; border-radius: 2rem;" src="@/assets/img/bootstrap-icons.png"></button>
              <button @click=""><img width="30" style="margin-top: -0.3rem; border-radius: 2rem;" src="@/assets/img/vuejs-icons.png"></button>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>

</style>