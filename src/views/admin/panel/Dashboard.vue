<template>
  <div>
    <!-- Halaman Login -->
<!--    <div v-if="!loggedIn">-->
<!--      <h1>Halaman Login</h1>-->
<!--      <div class="form-group">-->
<!--        <label for="username">Username:</label>-->
<!--        <input type="text" id="username" v-models="username" class="form-control" />-->
<!--      </div>-->
<!--      <div class="form-group">-->
<!--        <label for="password">Password:</label>-->
<!--        <input type="password" id="password" v-models="password" class="form-control" />-->
<!--      </div>-->
<!--      <button @click="login" class="btn btn-primary">Login</button>-->
<!--    </div>-->

    <!-- Panel Admin -->
<!--    <div v-else>-->
    <div>
      <NavbarAdmin/>
      <div class="h-100" :style="{ marginLeft: navbarActive ? '16.5rem' : '0' }" style="margin-top: 3.5rem; background-color: rgba(21, 20, 23, 0.95);">
        <div class="container-fluid" style="max-width: 68.5rem;">
          <div class="d-md-flex d-grid justify-content-between">
            <div class="mt-4 mx-2 d-flex gap-2">
              <label class="fs-5" style="font-weight: 500; color: rgba(255, 255, 255, 1);"><span><i class="bi-speedometer2"></i></span> Dashboard</label>
              <label class=" fw-lighter mt-2" style="font-size: 0.9rem; color: rgba(255, 255, 255, 1);">Melihat semua daftar dan statistik</label>
            </div>
            <div class="mt-4 mx-2 d-flex gap-2">
              <a href="dashboard" class="text-decoration-none text-light d-flex gap-2" style="font-size: 0.8rem;"><span><i class="bi-speedometer2"></i></span>Home</a>
              <label class="text-muted" style="font-size: 0.8rem;"> > </label>
              <label class="text-muted" style="font-size: 0.8rem;"></label>
            </div>
          </div>

          <div class="mx-2 my-4">
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
              <div class="col">
                <div class="card h-100 shadow-lg" style="background-color: rgba(255, 255, 255, 0.05); border-radius: 0;">
                  <div class="card-body d-flex align-items-center">
                    <span class="text-light me-3" style="font-size: 2.25rem;"><i class="bi-person"></i></span>
                    <div>
                      <h5 class="card-title" style="font-size: 0.9rem; color: rgba(255, 255, 255, 0.75)">Siswa</h5>
                      <p class="card-text" style="font-weight: 600; color: rgba(255, 255, 255, 0.75); font-size: 0.9rem;">{{ daftar_siswa }}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100 shadow-lg" style="background-color: rgba(255, 255, 255, 0.05); border-radius: 0;">
                  <div class="card-body d-flex align-items-center">
                    <span class="text-light me-3" style="font-size: 2.25rem;"><i class="bi-building"></i></span>
                    <div>
                      <h5 class="card-title" style="font-size: 0.9rem; color: rgba(255, 255, 255, 0.75)">Kelas</h5>
                      <p class="card-text" style="font-weight: 600; color: rgba(255, 255, 255, 0.75); font-size: 0.9rem;">{{ daftar_kelas }}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100 shadow-lg" style="background-color: rgba(255, 255, 255, 0.05); border-radius: 0;">
                  <div class="card-body d-flex align-items-center">
                    <span class="text-light me-3" style="font-size: 2.25rem;"><i class="bi-bank"></i></span>
                    <div>
                      <h5 class="card-title" style="font-size: 0.9rem; color: rgba(255, 255, 255, 0.75)">Saldo</h5>
                      <p class="card-text" style="font-weight: 600; color: rgba(255, 255, 255, 0.75); font-size: 0.9rem;">Rp 49.999</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100 shadow-lg" style="background-color: rgba(255, 255, 255, 0.05); border-radius: 0;">
                  <div class="card-body d-flex align-items-center">
                    <span class="text-light me-3" style="font-size: 2.25rem;"><i class="bi-people"></i></span>
                    <div>
                      <h5 class="card-title" style="font-size: 0.9rem; color: rgba(255, 255, 255, 0.75)">Visitor</h5>
                      <p class="card-text" style="font-weight: 600; color: rgba(255, 255, 255, 0.75); font-size: 0.9rem;">{{ visitorCount }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="daftar" class="py-4 mx-2">
            <div class="card shadow-lg" style="border: none; background-color: rgba(255, 255, 255, 0.05); height: 30rem;">
              <div class="card-header d-grid py-3" style="">
                <label class="fs-6 text-start fw-bold" style="font-weight: 500; color: rgba(255, 255, 255, 1);">Daftar Siswa</label>
                <p class="fs-6 fw-lighter text-start" style="color: rgba(255, 255, 255, 1);">Lihat semua siswa yang terdaftar</p>
              </div>
              <div class="card-body" style="max-height: 20rem; overflow-y: auto;">
                <table class="table table-bordered border-secondary">
                  <tbody class="text-dark fs-6 bg-light" style="background-color: rgba(255, 255, 255, 0.9); font-weight: 500;">
                  <tr>
                    <td class="text-start">No</td>
                    <td class="text-start">Nama Pengguna</td>
                    <td class="text-start">Nama</td>
                    <td class="text-start">Masuk Pada</td>
                  </tr>
                  </tbody>
                  <tbody class="text-light table-active fs-6 bg-transparent fw-light" style="background-color: rgba(0, 0, 0, 0.1);">
                  <tr v-for="(siswa, index) in data_siswa" :key="data">
                    <td class="text-start">{{ index + 1 }}</td>
                    <td class="text-start">@{{ siswa.username }}</td>
                    <td class="text-start">{{ siswa.name }}</td>
                    <td class="text-start">{{ siswa.createdAt }}</td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div id="daftar" class="py-4 mx-2">
            <div class="card shadow-lg" style="border: none; background-color: rgba(255, 255, 255, 0.05); height: 30rem;">
              <div class="card-header d-grid py-3" style="">
                <label class="fs-6 text-start fw-bold" style="font-weight: 500; color: rgba(255, 255, 255, 1);">Daftar Modul</label>
                <p class="fs-6 fw-lighter text-start" style="color: rgba(255, 255, 255, 1);">Lihat semua modul yang terdaftar</p>
              </div>
              <div class="card-body" style="max-height: 20rem; overflow-y: auto;">
                <table class="table table-bordered border-secondary">
                  <tbody class="text-dark fs-6 bg-light" style="background-color: rgba(255, 255, 255, 0.9); font-weight: 500;">
                  <tr>
                    <td class="text-start">No</td>
                    <td class="text-start">Kelas</td>
                    <td class="text-start">Nama Modul</td>
                    <td class="text-start">Deskripsi Modul</td>
                    <td class="text-start">Nama File</td>
                    <td class="text-start">Aksi</td>
                  </tr>
                  <!-- Tampilkan data kelas menggunakan v-for -->
                  <tr v-for="(modul, index) in daftar_modul" :key="index">
                    <td class="text-start">{{ index + 1 }}</td>
                    <td class="text-start">{{ modul.class }}</td>
                    <td class="text-start">{{ modul.name }}</td>
                    <td class="text-start">{{ modul.description }}</td>
                    <td class="text-start">{{ modul.filename }}</td>
                    <td class="text-start d-flex justify-content-start gap-2">
                      <button class="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#editModal">
                        <span class="text-light"><i class="bi-pen-fill"></i></span> Edit
                      </button>
                      <button class="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal">
                        <span class="text-light"><i class="bi-trash-fill"></i> Hapus</span>
                      </button>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div id="daftar" class="py-4 mx-2">
            <div class="card shadow-lg" style="border: none; background-color: rgba(255, 255, 255, 0.05); height: 30rem;">
              <div class="card-header d-grid py-3" style="">
                <label class="fs-6 text-start fw-bold" style="font-weight: 500; color: rgba(255, 255, 255, 1);">Daftar Soal</label>
                <p class="fs-6 fw-lighter text-start" style="color: rgba(255, 255, 255, 1);">Lihat semua soal yang terdaftar</p>
              </div>
              <div class="card-body" style="max-height: 20rem; overflow-y: auto;">
                <table class="table table-bordered border-secondary">
                  <tbody class="text-dark fs-6 bg-light" style="background-color: rgba(255, 255, 255, 0.9); font-weight: 500;">
                  <tr>
                    <td class="text-start">No</td>
                    <td class="text-start">Nama Soal</td>
                    <td class="text-start">Deskripsi Soal</td>
                    <td class="text-start">Waktu Soal</td>
                    <td class="text-start">Kelas</td>
                    <td class="text-start">Aksi</td>
                  </tr>
                  <!-- Tambahkan lebih banyak baris di sini -->
                  </tbody>
                  <tbody class="text-light table-active fs-6 bg-transparent fw-light" style="background-color: rgba(0, 0, 0, 0.1);">
                  <tr v-for="(soal, index) in daftar_soal" :key="index">
                    <td class="text-start">{{ index + 1 }}</td>
                    <td class="text-start">{{ soal.name }}</td>
                    <td class="text-start">{{ soal.description }}</td>
                    <td class="text-start">{{ soal.timeout }}</td>
                    <td class="text-start">{{ soal.class }}</td>
                    <td class="text-start d-flex justify-content-start gap-2">
                      <button class="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#editModal">
                        <span class="text-light"><i class="bi-pen-fill"></i></span> Edit
                      </button>
                      <button class="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal">
                        <span class="text-light"><i class="bi-trash-fill"></i> Hapus</span>
                      </button>
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
  </div>


</template>

<script>

import NavbarAdmin from "@/components/NavbarAdmin.vue";
import FooterAdmin from "@/components/FooterAdmin.vue";
import axios from "axios";

export default {
  name: 'AdminPanel',
  components: {NavbarAdmin},
  data() {
    return {
      loggedIn: false,
      username: '',
      password: '',
      navbarActive: '',

      data_siswa: [],

      daftar_kelas: '',
      daftar_siswa: '',
      daftar_modul: '',
      daftar_soal: '',

      visitorCount: 0,
    };
  },

  mounted() {
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize);

    this.fetchDataSiswa();

    this.fetchKelas();
    this.fetchSiswa();
    this.fetchModul();
    this.fetchSoal();
  },

  methods: {

    async fetchKelas() {
      try {
        const response = await axios.get('http://localhost:3000/api/kelas/getcount');
        this.daftar_kelas = response.data.count;
      } catch (err) {
        console.log("Error: ", err.message);
      }
    },

    async fetchDataSiswa() {
      try {
        const response = await axios.get("http://localhost:3000/api/users/get");
        this.data_siswa = response.data.rows;
      } catch (err) {
        console.log("Internal Server Error: ", err.message);
      }
    },

    async fetchSiswa() {
      try {
        const response = await axios.get("http://localhost:3000/api/users/get");
        this.daftar_siswa = response.data.count;
      } catch (err) {
        console.log(err.message);
      }
    },

    async fetchModul() {
      try {
        const response = await axios.get('http://localhost:3000/api/statistics/daftar_modul');
        this.daftar_modul = response.data.count;
      } catch (err) {
        console.log("Error: ", err.message);
      }
    },

    async fetchSoal() {
      try {
        const response = await fetch('http://localhost:3000/api/statistics/daftar_soal');
        this.daftar_soal = response.data.count;
      } catch (err) {
        console.log("Error: ", err.message);
      }
    },



    checkScreenSize() {
      if (window.innerWidth <= 992){
        this.navbarActive = false;
      }else{
        this.navbarActive = true;
      }
    },

    login() {
      // Contoh validasi login sederhana
      if (this.username === 'admin' && this.password === 'password') {
        this.loggedIn = true;
      } else {
        alert('Login gagal. Coba lagi!');
        this.username = '';
        this.password = '';
      }
    },
  },
};
</script>

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



@media (max-width: 992px){
  .sm {
    display: none;
  }
}

</style>
