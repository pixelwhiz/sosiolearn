<script>
import NavbarAdmin from "@/components/NavbarAdmin.vue";
import {defineComponent} from "vue";
import axios from "axios";

export default defineComponent({
  components: {NavbarAdmin},

  name: "AddModul",

  data() {
    return {
      navbarActive: "",
      data_kelas: [],
      data_modul: [],

      addModul: {
        name: "",
        description: "",
        classname: null,
        file: null,
      },
    }
  },
  mounted() {
    this.checkScreenSize();
    this.fetchAllKelas();
    window.addEventListener('resize', this.checkScreenSize);
  },

  methods: {
    onFileChange(event) {
      this.addModul.file = event.target.files[0];
    },

    checkScreenSize() {
      if (window.innerWidth <= 992){
        this.navbarActive = false;
      }else{
        this.navbarActive = true;
      }
    },

    async fetchModul() {
      try {
        const response = await axios.get('http://localhost:3000/api/modul/get');
        this.data_modul = response.data;
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

    async addModules() {
      try {
        console.log(this.addModul.name);
        console.log(this.addModul.description);
        console.log(this.addModul.file);
        console.log(this.addModul.classname);
        const formData = new FormData();
        formData.append("id", this.getRandomID(25));
        formData.append("name", this.addModul.name);
        formData.append("description", this.addModul.description);
        formData.append("classname", this.addModul.classname);
        formData.append("file", this.addModul.file);
        const response = await axios.post('http://localhost:3000/api/modul/create', formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        });
        if (response.data.status === true) {
          alert("Success");
          this.$router.push("/admin/panel/modul");
        } else {
          alert("Failure");
        }
      } catch (err) {
        console.log("Error: ", err.message);
        alert("Failure");
      }
    },

    getRandomID(length) {
      const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      let randomString = '';

      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        randomString += charset[randomIndex];
      }

      return randomString;
    },

    modulLink() {
      this.$router.push("/admin/panel/modul");
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
              <label class="fs-6 text-start fw-bold" style="font-weight: 500; color: rgba(255, 255, 255, 1);">Buat Modul</label>
            </div>
            <div class="card-body" style="max-height: 20rem; overflow-y: auto;">
              <table class="table table-bordered border-secondary">
                <tbody class="text-dark fs-6 bg-light" style="background-color: rgba(255, 255, 255, 0.9); font-weight: 500;">
                <tr>
                  <td class="text-start">Nama</td>
                  <td class="text-start">Deskripsi</td>
                  <td class="text-start">File (PDF)</td>
                  <td class="text-start">Kelas</td>
                  <td class="text-start">Aksi</td>
                </tr>
                </tbody>
                <tbody class="text-light table-active fs-6 bg-transparent fw-light" style="background-color: rgba(0, 0, 0, 0.1);">
                <tr>
                  <td class="text-start">
                    <input v-model="addModul.name" class="bg-transparent border-1 form-control form-control-sm text-light" type="text">
                  </td>
                  <td class="text-start">
                    <input v-model="addModul.description" class="bg-transparent border-1 form-control form-control-sm text-light" type="text">
                  </td>
                  <td class="text-start">
                    <input @change="onFileChange" class="bg-transparent border-1 form-control form-control-sm text-light" type="file">
                  </td>
                  <td>
                    <select v-model="addModul.classname" class="text-start text-dark">
                      <option selected disabled>Pilih Kelas</option>
                      <option v-for="(kelas, index) in data_kelas" :key="kelas.id" :value="kelas.name">{{ kelas.name }}</option>
                    </select>
                  </td>

                  <td class="text-start d-grid">
                    <button type="button" @click="addModules" class="btn btn-sm btn-primary"><span class="text-light"><i class="bi-plus-circle"></i></span> Add</button>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
            <div class="card-footer d-flex gap-2 justify-content-end">
              <button @click="modulLink" class="btn btn-secondary">Kembali</button>
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