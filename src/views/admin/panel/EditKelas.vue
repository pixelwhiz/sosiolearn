<script>
import NavbarAdmin from "@/components/NavbarAdmin.vue";
import {defineComponent} from "vue";
import axios from "axios";

export default defineComponent({
  components: {NavbarAdmin},

  name: "EditKelas",

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
  <NavbarAdmin/>
  <div>
    <div class="h-100" :style="{ marginLeft: navbarActive ? '16.5rem' : '0' }" style="margin-top: 3.5rem; background-color: rgba(21, 20, 23, 0.95);">
      <div class="container-fluid text-light" style="max-width: 68.5rem;">
        <div id="daftar" class="py-4 mx-2" style="margin-bottom: 20rem;">
          <div class="card shadow-lg" style="border: none; background-color: rgba(255, 255, 255, 0.05); height: 20rem;">
            <div class="card-header d-grid py-3" style="">
              <label class="fs-6 text-start fw-bold" style="font-weight: 500; color: rgba(255, 255, 255, 1);">Edit Kelas</label>
            </div>
            <div class="card-body" style="max-height: 20rem; overflow-y: auto;">
              <table class="table table-bordered border-secondary">
                <tbody class="text-dark fs-6 bg-light" style="background-color: rgba(255, 255, 255, 0.9); font-weight: 500;">
                <tr>
                  <td class="text-start">Nama Kelas</td>
                  <td class="text-start">Total Siswa (max)</td>
                  <td class="text-start">Aksi</td>
                </tr>
                </tbody>
                <tbody class="text-light table-active fs-6 bg-transparent fw-light" style="background-color: rgba(0, 0, 0, 0.1);">
                <tr>
                  <td class="text-start">
                    <input v-model="updateKelas.name" class="bg-transparent border-1 form-control form-control-sm text-light">
                  </td>
                  <td class="text-start">
                    <input v-model="updateKelas.maxsiswa" class="bg-transparent border-1 form-control form-control-sm text-light" type="number">
                  </td>
                  <td class="text-start d-grid">
                    <button type="button" @click="updateClass" class="btn btn-sm btn-primary"><span class="text-light"><i class="bi-save2"></i></span> Save</button>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
            <div class="card-footer d-flex gap-2 justify-content-end">
              <button @click="kelasLink" class="btn btn-secondary">Kembali</button>
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