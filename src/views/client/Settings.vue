<script>
import Navbar from "@/components/Navbar.vue";
import {defineComponent} from "vue";
import axios from "axios";

export default defineComponent({
  components: {Navbar},

  name: "Settings",

  data() {
    return {
      navbarActive: "",

      updateKelas: {
        name: this.$route.params.classname,
        maxsiswa: this.$route.params.maxsiswa,
      },

    }
  },
  mounted() {
    this.checkScreenSize();
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

    async updateClass() {
      try {
        const response = await axios.post(`http://localhost:3000/api/kelas/edit`, {
          id: this.$route.params.id,
          name: this.updateKelas.name,
          maxsiswa: this.updateKelas.maxsiswa
        });

        if (response.status === 200) {
          alert("Success");
          this.$router.push("/admin/panel/kelas");
        } else {
          alert("Failure");
        }

      } catch (err) {
        alert("Failure");
      }
    },

    kelasLink() {
      this.$router.push("/admin/panel/kelas");
    },

  },

});

</script>

<template>
  <Navbar/>
  <div>
    <div class="settings" :style="{ marginLeft: navbarActive ? '16.5rem' : '0' }" style="margin-top: 3.5rem; background-color: rgba(21, 20, 23, 0.95);">
      <div class="container-fluid text-light" style="max-width: 65rem;">
        <div class="d-grid gap-3 py-4 px-1">
          <div id="daftar" class="" style="">
            <div class="card shadow-lg" style="border: none; border-radius: 1rem; background-color: rgba(255, 255, 255, 0.05);">
              <div class="card-body d-grid gap-2 py-4 px-4">
                <div class="d-grid">
                  <label class="text-light" style="color: rgba(255, 255, 255, 0.5); font-size: 1.75rem;">Profile</label>
                  <label class="" style="color: #ddd; font-size: 0.85rem;">Gambar Profile</label>
                </div>
                <div class="d-flex">
                  <button class="btn btn-outline-success border-secondary fw-bold gap-2 d-flex" style="">
                    <img width="25" src="@/assets/img/logo.svg">
                    <span>Change</span>
                  </button>
                </div>
                <div class="d-sm-grid d-md-flex justify-content-between">
                  <div class="d-grid gap-3 mb-2">
                    <div class="d-grid">
                      <label style="color: #ddd;">Setelan Akun</label>
                      <label style="color: #999; font-weight: 200;">Mengubah sandi dan opsi keamanan, buka <a href="">disini</a></label>
                    </div>
                    <div class="d-grid">
                      <label style="color: #ddd;">Ganti Nama</label>
                      <label style="color: #999; font-weight: 200;">Untuk mengganti nama Anda, buka <a href="">disini</a></label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="daftar" class="" style="">
            <div class="card shadow-lg" style="border: none; border-radius: 1rem; background-color: rgba(255, 255, 255, 0.05);">
              <div class="card-body form-control-sm py-4 px-4">
                <div class="d-grid">
                  <label class="text-light" style="color: rgba(255, 255, 255, 0.5); font-size: 1.75rem;">Accounts</label>
                  <label class="text-muted" style="color: rgba(255, 255, 255, 0.5); font-size: 0.85rem;">Mintalah kode kursus kepada pengajar, lalu masukan kode disini</label>
                </div>
                <div class="my-3 d-flex">
                  <input class="bg-transparent form-control border-secondary text-light" style="border-bottom-right-radius: 0rem; border-top-right-radius: 0rem;">
                  <button class="btn btn-success border-secondary px-3 px-md-4" style="border-top-left-radius: 0rem; border-bottom-left-radius: 0rem;">Check</button>
                </div>
              </div>
            </div>
          </div>

          <div id="daftar" class="" style="">
            <div class="card" style="border: none; background-color: transparent;">
              <div class="card-body form-control-sm px-4">
                <label class="" style="color: rgba(255, 255, 255, 1); font-size: 0.95rem;">Untuk login menggunakan kode kelas</label>
                <ul class="" style="color: rgba(255, 255, 255, 0.5)">
                  <li>Gunakan akun yang diberi otorisasi</li>
                  <li>Gunakan kode kelas yang terdiri dari 5-7 huruf atau angka, tanpa spasi atau simbol</li>
                </ul>
                <label class="" style="color: rgba(255, 255, 255, 0.5); font-size: 0.85rem;">Jika Anda mengalami masalah saat bergabung ke kelas, <a href="">buka artikel Pusat Bantuan</a></label>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>

.settings {
  height: 150vh;
}

@media (max-width: 680px) {
  .settings {
    height: 150vh;
  }
}

</style>