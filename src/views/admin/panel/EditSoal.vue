<script>
import {defineComponent} from "vue";
import NavbarAdmin from "@/components/NavbarAdmin.vue";
import axios from "axios";

export default defineComponent({
  components: {NavbarAdmin},
  name: "EditSoal",

  data() {
    return {
      data_kelas: [],
      navbarActive: '',

      updateSoal: {
        id: this.$route.params.id,
        name: this.$route.params.name,
        classname: this.$route.params.classname,
        description: this.$route.params.description,
        divisi: this.$route.params.divisi
      },
    }
  },

  mounted() {
    this.fetchAllKelas();
    this.checkScreenSize();
  },

  methods: {
    checkScreenSize() {
      if (window.innerWidth <= 992){
        this.navbarActive = false;
      }else{
        this.navbarActive = true;
      }
    },

    async updateSoals() {
      try {
        const response = await axios.post(`http://localhost:3000/api/soal/edit/${this.updateSoal.id}`, {
          name: this.updateSoal.name,
          description: this.updateSoal.description,
          classname: this.updateSoal.classname,
          divisi: this.updateSoal.divisi
        });
        if (response.status === 200) {
          alert("Soal updated successfully");
          this.$router.push("/admin/panel/soal");
        } else {
          alert("Failure");
        }
      } catch (err) {
        console.log("Internal Server Error: ", err.message);
      }
    },

    async fetchAllKelas() {
      try {
        const response = await axios.get("http://localhost:3000/api/kelas/get");
        if (response.status === 200) {
          this.data_kelas = response.data;
        } else {
          this.data_kelas = [];
        }
      } catch (err) {
        console.log("Internal Server Error: ", err.message);
      }
    },

    soalLink(){
      this.$router.push("/admin/panel/soal");
    }

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
              <label class="fs-6 text-start fw-bold" style="font-weight: 500; color: rgba(255, 255, 255, 1);">Modifikasi Soal</label>
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
                    <input v-model="updateSoal.name" class="bg-transparent border-1 form-control form-control-sm text-light" type="text">
                  </td>
                  <td class="text-start">
                    <input v-model="updateSoal.description" class="bg-transparent border-1 form-control form-control-sm text-light" type="text">
                  </td>
                  <td class="text-start">
                    <select v-model="updateSoal.divisi" class="text-start text-dark">
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
                    <select v-model="updateSoal.classname" class="text-start text-dark">
                      <option selected disabled>Pilih Kelas</option>
                      <option v-for="(kelas, index) in data_kelas" :key="kelas.id" :value="kelas.name">{{ kelas.name }}</option>
                    </select>
                  </td>

                  <td class="text-start d-grid">
                    <button type="button" @click="updateSoals" class="btn btn-sm btn-primary"><span class="text-light"><i class="bi-save2"></i></span> Update</button>
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