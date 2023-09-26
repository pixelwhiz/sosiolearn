<script setup>
import NavbarAdmin from "@/components/NavbarAdmin.vue";
import DashboardAdmin from "@/views/admin/panel/Dashboard.vue";
</script>
<template>
  <NavbarAdmin/>
  <div>
    <div class="h-100" :style="{ marginLeft: navbarActive ? '16.5rem' : '0' }" style="margin-top: 3.5rem; background-color: rgba(21, 20, 23, 0.95);">
      <div class="container-fluid text-light" style="max-width: 68.5rem;">
        <div class="d-md-flex d-grid justify-content-between">
          <div class="mt-4 mx-2 d-flex gap-2">
            <label class="fs-5" style="font-weight: 500; color: rgba(255, 255, 255, 1);"><span><i class="bi-file-earmark-fill"></i></span> Kelola Modul</label>
            <label class=" fw-lighter mt-2" style="font-size: 0.9rem; color: rgba(255, 255, 255, 1);">Mengelola modul sesuai topik anda</label>
          </div>
          <div class="mt-4 mx-2 d-flex gap-2">
            <a href="dashboard" class="text-decoration-none text-light d-flex gap-2" style="font-size: 0.8rem;"><span><i class="bi-speedometer2"></i></span>Home</a>
            <label class="text-light" style="font-size: 0.8rem;"> > </label>
            <label class="text-muted" style="font-size: 0.8rem;">Modul</label>
          </div>
        </div>

        <div id="daftar" class="py-4 mx-2">
          <div class="card shadow-lg" style="border: none; background-color: rgba(255, 255, 255, 0.05); height: 30rem;">
            <div class="card-header d-grid" style="">
              <div class="d-flex justify-content-between">
                <div class="d-grid">
                  <label class="fs-6 text-start fw-normal" style="font-weight: 500; color: rgba(255, 255, 255, 1);">Daftar Modul</label>
                  <p class="fs-6 fw-lighter text-start" style="color: rgba(255, 255, 255, 1);">Semua modul yang terdaftar</p>
                </div>
                <div class="d-flex mt-0 py-3">
                  <button @click="addModul" class="text-decoration-none" style="color: rgba(255, 255, 255, 0.5)"><span><i class="bi-plus-circle"></i></span> Buat Modul</button>
                </div>
              </div>
            </div>
            <div class="card-body" style="max-height: 20rem; overflow-y: auto;">
              <table class="table table-bordered border-secondary">
                <tbody class="text-dark fs-6 bg-light" style="background-color: rgba(255, 255, 255, 0.9); font-weight: 500;">
                <tr>
                  <td class="text-start">No</td>
                  <td class="text-start">Kelas</td>
                  <td class="text-start">Nama</td>
                  <td class="text-start">Deskripsi</td>
                  <td class="text-start">Nama File</td>
                  <td class="text-start">Dibuat Pada</td>
                  <td class="text-start">Aksi</td>
                </tr>
                </tbody>
                <tbody class="text-light table-active fs-6 bg-transparent fw-light" style="background-color: rgba(0, 0, 0, 0.1);">
                <tr v-for="(modul, index) in data_modul" :key="data_modul.id">
                  <td class="text-start">{{ index + 1 }}</td>
                  <td class="text-start text-muted">{{ modul.classname }}</td>
                  <td class="text-start">{{ modul.name }}</td>
                  <td class="text-start" style="max-width: 10rem;">{{ modul.description }}</td>
                  <td class="text-start">{{ modul.filename }}</td>
                  <td class="text-start">{{ modul.createdAt }}</td>
                  <td class="text-start d-flex justify-content-start gap-2">
                    <button type="button" @click="setEdit(modul.id, modul.classname, modul.name, modul.description)" class="btn btn-sm btn-primary"><span class="text-light"><i class="bi-pen-fill"></i></span> Edit</button>
                    <button type="button" @click="deleteModul(modul.id)" class="btn btn-sm btn-danger"><span class="text-light"><i class="bi-trash-fill"></i> Hapus</span></button>
                    <button type="button" @click="downloadFile(modul.id, modul.classname, modul.filename)" class="btn btn-sm btn-success"><span class="text-light"><i class="bi-cloud-download-fill"></i> Download</span></button>
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

@media (max-width: 668px){
  #actionText {
    display: none;
  }
}

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
      data_modul: [],
      selectedKelas: null,
      data_kelas: [],
    }
  },
  mounted() {
    this.checkScreenSize();
    this.fetchModul();

    window.addEventListener('resize', this.checkScreenSize);
  },

  created() {
    this.fetchModul();
  },

  methods: {
    async fetchModul() {
      try {
        const response = await axios.get('http://localhost:3000/api/modul/get');
        this.data_modul = response.data;
      } catch (error) {
        console.log('Error: ', error.message);
      }
    },

    setEdit(id, classname, name, description) {
      this.$router.push(`/admin/panel/modul/edit/${id}/${classname}/${name}/${description}`);
    },

    onFileChange(event) {
      this.newModul.file = event.target.files[0];
    },

    async deleteModul(modul_id) {
      try {
        const confirmation = confirm("Are you sure");
        if (confirmation) {
          const response = await axios.post('http://localhost:3000/api/modul/delete', {
            id: modul_id,
          });
          if (response.status === 200) {
            this.fetchModul();
          } else {
            alert("Failed to Delete");
          }
        }
      } catch (err) {
        console.log("Internal Server Error: ", err.message);
      }
    },

    async downloadFile(id, classname, filename) {
      try {
        const response = await axios.get(`http://localhost:3000/api/modul/download/${classname}/${filename}`, {
          responseType: 'arraybuffer'
        });

        const blob = new Blob([response.data], {
          type: 'application/pdf'
        });

        const blobUrl = window.URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = filename;
        link.click();

        window.URL.revokeObjectURL(blobUrl);
      } catch (error) {
        console.error('Error downloading file:', error);
      }
    },

    async addModul() {
      return this.$router.push("modul/create");
    },

    checkScreenSize() {
      if (window.innerWidth <= 992){
        this.navbarActive = false;
      }else{
        this.navbarActive = true;
      }
    },
  },

}
</script>

