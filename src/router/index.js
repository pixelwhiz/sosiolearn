import { createRouter, createWebHistory } from 'vue-router';
import store from "../store";

import Login from "@/views/client/accounts/Login.vue";
import Register from "@/views/client/accounts/Register.vue";
import ResetPassword from "@/views/client/accounts/ResetPassword.vue";
import ResetPasswordConfirm from "@/views/client/accounts/ResetPasswordConfirm.vue";
import AddUsername from "@/views/client/accounts/google/Username.vue";

import Classroom from "../views/client/Home.vue";
import DashboardClient from "@/views/client/Dashboard.vue";
import Course from "@/views/client/Course.vue";
import Modul from "@/views/client/Modul.vue";
import ReadModul from "@/views/client/ReadModul.vue";
import TugasHarian from "@/views/client/TugasHarian.vue";
import LatihanSoal from "@/views/client/LatihanSoal.vue";
import UlanganHarian from "@/views/client/UlanganHarian.vue";
import UjianTengahSemester from "@/views/client/UjianTengahSemester.vue";
import UjianAkhirSemester from "@/views/client/UjianAkhirSemester.vue";
import Evaluasi from "@/views/client/Evaluasi.vue";
import Settings from "@/views/client/Settings.vue";

import DashboardAdmin from "@/views/admin/panel/Dashboard.vue";
import LoginAdmin from "@/views/admin/authentication/Login.vue";
import KelasAdmin from "@/views/admin/panel/Kelas.vue";
import ModulAdmin from "@/views/admin/panel/Modul.vue";
import EditModul from "@/views/admin/panel/EditModul.vue";
import EditKelas from "@/views/admin/panel/EditKelas.vue";
import EditSoal from "@/views/admin/panel/EditSoal.vue";
import AddKelas from "@/views/admin/panel/AddKelas.vue";
import AddModul from "@/views/admin/panel/AddModul.vue";
import AddSoal from "@/views/admin/panel/AddSoal.vue";
import SoalAdmin from "@/views/admin/panel/Soal.vue";

import Checkout from "@/views/client/checkout/Create.vue";

import NotFound from "@/views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: Classroom, meta: { authClient: true } },
    { path: '/checkout', name: 'checkout', component: Checkout, meta: { authClient: false } },
    { path: '/accounts/login', name: 'login', component: Login, meta: { authClient: false } },
    { path: '/accounts/register', name: 'register', component: Register, meta: { authClient: false } },
    { path: '/accounts/resetpassword', name: 'resetpassword', component: ResetPassword, meta: { authClient: false } },
    { path: '/accounts/resetpassword/confirm', name: 'resetpasswordconfirm', component: ResetPasswordConfirm, meta: { authClient: false } },
    { path: '/accounts/google/auth/register', name: 'googleauth', component: AddUsername, meta: { authClient: false } },
    { path: '/dashboard', name: 'dashboardclient', component: DashboardClient, meta: { authClient: true } },
    { path: '/course', name: 'course', component: Course, meta: { authClient: true } },

    { path: '/q/:classId', name: 'modul', component: Modul, meta: { authClient: true } },
    { path: '/q/:classId/:modulId', name: 'readmodul', component: ReadModul, meta: { authClient: true } },
    { path: '/w/:classId', name: 'tugasharian', component: TugasHarian, meta: { authClient: true } },
    { path: '/e/:classId', name: 'latihansoal', component: LatihanSoal, meta: { authClient: true } },
    { path: '/r/:classId', name: 'ulanganharian', component: UlanganHarian, meta: { authClient: true } },
    { path: '/t/:classId', name: 'ulangantengahsemester', component: UjianTengahSemester, meta: { authClient: true } },
    { path: '/y/:classId', name: 'ulanganakhirsemester', component: UjianAkhirSemester, meta: { authClient: true } },
    { path: '/c/:classId', name: 'evaluasi', component: Evaluasi, meta: { authClient: true } },

    { path: '/accounts/settings', name: 'settings', component: Settings, meta: { authClient: true } },
    { path: '/admin/authentication/login', name: 'loginadmin', component: LoginAdmin, meta: { authAdmin: false } },
    { path: '/admin/panel/dashboard', name: 'dashboardadmin', component: DashboardAdmin, meta: { authAdmin: true } },
    { path: '/admin/panel/kelas', name: 'kelasadmin', component: KelasAdmin, meta: { authAdmin: true } },
    { path: '/admin/panel/kelas/create', name: 'addkelas', component: AddKelas, meta: { authAdmin: true } },
    { path: '/admin/panel/kelas/edit/:id/:classname/:maxsiswa', name: 'editkelas', component: EditKelas, meta: { authAdmin: true } },
    { path: '/admin/panel/modul', name: 'moduladmin', component: ModulAdmin, meta: { authAdmin: true } },
    { path: '/admin/panel/modul/create', name: 'addModul', component: AddModul, meta: { authAdmin: true } },
    { path: '/admin/panel/modul/edit/:id/:classname/:name/:description', name: 'editmodul', component: EditModul, meta: { authAdmin: true } },
    { path: '/admin/panel/soal', name: 'soaladmin', component: SoalAdmin, meta: { authAdmin: true } },
    { path: '/admin/panel/soal/edit/:id/:name/:description/:classname/:divisi', name: 'editsoal', component: EditSoal, meta: { authAdmin: true } },
    { path: '/admin/panel/soal/create', name: 'addSoal', component: AddSoal, meta: { authAdmin: true } },
    { path: '/:catchAll(.*)', component: NotFound, name: 'NotFound' },
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authClient)) {
    const isLoggedIn = store.getters.isLoggedIn;
    if (!isLoggedIn) {
      next('/accounts/login');
    } else {
      next();
    }
  } else {
    const isLoggedIn = store.getters.isLoggedIn;
    if (isLoggedIn && (to.path === '/accounts/login' || to.path === '/accounts/register' || to.path === '/checkout')) {
      next('/beranda');
    } else {
      next();
    }
  }
});

router.beforeEach((to, from, next) => {
  const isLoggedInAdmin = store.getters.isLoggedInAdmin;
  if (to.matched.some(record => record.meta.authAdmin)) {
    if (!isLoggedInAdmin) {
      next('/admin/authentication/login');
    } else {
      next();
    }
  } else if (isLoggedInAdmin && (to.path === '/admin/authentication/login' || to.path === '/admin/authentication/register')) {
    next('/admin/panel/dashboard');
  } else {
    next();
  }
});



export default router;
