<script setup>
import NavbarAdmin from "@/components/NavbarAdmin.vue";
import DashboardAdmin from "@/views/admin/panel/Dashboard.vue";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.bubble.css";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import ResetInput from "@/components/button/ResetInput.vue";

const toolbarOptions = [{ header: 3 }]

</script>

<template>
  <NavbarAdmin/>
  <div>
    <div class="h-100" :style="{ marginLeft: navbarActive ? '16.5rem' : '0' }" style="margin-top: 3.5rem; background-color: rgba(21, 20, 23, 0.95);">
      <div class="container-fluid text-light" style="max-width: 68.5rem;">
        <div class="d-md-flex d-grid justify-content-between">
          <div class="mt-4 mx-2 d-flex gap-2">
            <label class="fs-5" style="font-weight: 500; color: rgba(255, 255, 255, 1);"><span><i class="bi-file-earmark-fill"></i></span> Kelola Soal</label>
            <label class=" fw-lighter mt-2" style="font-size: 0.9rem; color: rgba(255, 255, 255, 1);">Mengelola soal berdasarkan modul dan topik</label>
          </div>
          <div class="mt-4 mx-2 d-flex gap-2">
            <a href="dashboard" class="text-decoration-none text-light d-flex gap-2" style="font-size: 0.8rem;"><span><i class="bi-speedometer2"></i></span>Home</a>
            <label class="text-light" style="font-size: 0.8rem;"> > </label>
            <label class="text-muted" style="font-size: 0.8rem;">Soal</label>
          </div>
        </div>

        <div id="daftar" class="py-4 mx-2">
          <div class="card shadow-lg" style="border: none; background-color: rgba(255, 255, 255, 0.05); height: 30rem;">
            <div class="card-header d-grid" style="">
              <div class="d-flex justify-content-between">
                <div class="d-grid">
                  <label class="fs-6 text-start fw-normal" style="font-weight: 500; color: rgba(255, 255, 255, 1);">Daftar Soal</label>
                  <p class="fs-6 fw-lighter text-start" style="color: rgba(255, 255, 255, 1);">Semua soal yang terdaftar</p>
                </div>
                <div class="d-flex mt-0 py-3">
                  <button @click="addSoal" class="text-decoration-none" style="color: rgba(255, 255, 255, 0.5)"><span><i class="bi-plus-circle"></i></span> Buat Soal</button>
                </div>
              </div>
            </div>
            <div class="card-body" style="max-height: 20rem; overflow-y: auto;">
              <table class="table table-bordered border-secondary">
                <tbody class="text-dark fs-6 bg-light" style="background-color: rgba(255, 255, 255, 0.9); font-weight: 500;">
                <tr>
                  <td class="text-start">No</td>
                  <td class="text-start">Nama Soal</td>
                  <td class="text-start">Kelas</td>
                  <td class="text-start">Divisi</td>
                  <td class="text-start">Jumlah Soal</td>
                  <td class="text-start">Dibuat Pada</td>
                  <td class="text-start">Aksi</td>
                </tr>
                </tbody>
                <tbody class="text-light table-active fs-6 bg-transparent fw-light" style="background-color: rgba(0, 0, 0, 0.1);">
                <tr v-for="(soal, index) in data_soal" :key="data_soal.id">
                  <td class="text-start">{{ index + 1 }}</td>
                  <td class="text-start">{{ soal.name }}</td>
                  <td class="text-start">{{ soal.classname }}</td>
                  <td class="text-start" style="max-width: 10rem;">{{ soal.divisi }}</td>
                  <td class="text-start">{{ soal.filename }}</td>
                  <td class="text-start">{{ soal.createdAt }}</td>
                  <td class="text-start d-flex justify-content-start gap-2">
                    <button type="button" @click="setEdit(soal.id, soal.name, soal.description, soal.classname, soal.divisi)" class="btn btn-sm btn-primary"><span class="text-light"><i class="bi-pen-fill"></i></span> Edit</button>
                    <button type="button" @click="deleteSoal(soal.id)" class="btn btn-sm btn-danger"><span class="text-light"><i class="bi-trash-fill"></i> Hapus</span></button>
                  </td>
                </tr>
                </tbody>
              </table>
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

<style>
#daftar .card-body::-webkit-scrollbar {
  width: 0.5rem; /* Lebar scrollbar */
  height: 0.5rem;
}

#daftar .card-body::-webkit-scrollbar-track {
  background-color: transparent; /* Latar belakang track */
}

#daftar .card-body::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.25); /* Warna thumb */
  border-radius: 5px; /* Bentuk thumb */
}

#daftar .card-body::-webkit-scrollbar-thumb:hover {
  background-color: #555; /* Warna thumb saat dihover */
}
</style>

<script>
import axios from "axios";

export default {
  name: 'Modul',
  components: {
    DashboardAdmin
  },
  data() {
    return {
      navbarActive: '',
      data_soal: [],

      title: '',
      description: '',
      time: '',
      class: '',
    }
  },
  mounted() {
    this.checkScreenSize();
    this.fetchSoal();
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

    async deleteSoal(id) {
      try {
        const confirmation = confirm("Are you sure?");
        if (confirmation) {
          const response = await axios.post("http://localhost:3000/api/soal/delete/", {
            id: id,
          });
          if (response.status === 200) {
            this.fetchSoal();
          } else {
            alert("Failure");
          }
        }
      } catch (err) {
        console.log("Error: ", err.message);
      }
    },

    setEdit(id, name, description, classname, divisi) {
      this.$router.push(`/admin/panel/soal/edit/${id}/${name}/${description}/${classname}/${divisi}`);
    },

    addSoal() {
      return this.$router.push("soal/create");
    },

  },

}
</script>

