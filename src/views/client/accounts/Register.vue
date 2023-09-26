<template>
  <main className="" id="">
    <div className="container-fluid" style="max-width: 45rem;">
      <div className="my-5 mx-0 mx-md-5">
        <div className="card shadow-lg" style="border-radius: 0.5rem;">
          <div class="d-lg-flex justify-content-center">
            
            <form class="w-auto card-body my-5 mx-0 mx-md-5 my-md-5">
              <div className="">

                <div class="mb-4">
                  <div class="d-grid justify-content-start">
                    <label class="card-title fw-bold fs-3">Registration</label>
                    <label class="card-title fw-normal" style="font-size: 0.9rem;">Join the sociology community and discover new insights</label>
                  </div>
                </div>

                <div className="d-grid gap-3">

<!--                  <div class="sm gap-3 d-sm-none" style="display: grid;">-->
<!--                    <div class="d-flex gap-2 py-2 px-2 btn btn-sm" style="background-color: #e7f1ff; z-index: 0; cursor: default;">-->
<!--                      <img class="btn btn-sm bg-secondary" style="filter: invert(1); cursor: default;" src="@/assets/icons/person.svg">-->
<!--                      <input type="text" id="firstname" name="firstname" class="form-control form-control-sm" style="color: black; background: transparent;" placeholder="First Name" required>-->
<!--                    </div>-->
<!--                    <div class="d-flex  gap-2 py-2 px-2 btn btn-sm" style="background-color: #e7f1ff; z-index: 0; cursor: default;">-->
<!--                      <img class="btn btn-sm bg-secondary" style="filter: invert(1); cursor: default;" src="@/assets/icons/person.svg">-->
<!--                      <input type="text" id="lastname" name="lastname" class="form-control form-control-sm" style="color: black; background: transparent;" placeholder="Last Name" required>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                  <div class="lg d-md-flex d-lg-flex justify-content-start gap-3">-->
<!--                    <div class="d-flex w-100 gap-2 py-2 px-2 btn btn-sm" style="background-color: #e7f1ff; z-index: 0; cursor: default;">-->
<!--                      <img class="btn btn-sm bg-secondary" style="filter: invert(1); cursor: default;" src="@/assets/icons/person.svg">-->
<!--                      <input type="text" id="firstname" name="firstname" class="form-control form-control-sm" style="color: black; background: transparent;" placeholder="First Name" required>-->
<!--                    </div>-->
<!--                    <div class="d-flex w-100 gap-2 py-2 px-2 btn btn-sm" style="background-color: #e7f1ff; z-index: 0; cursor: default;">-->
<!--                      <img class="btn btn-sm bg-secondary" style="filter: invert(1); cursor: default;" src="@/assets/icons/person.svg">-->
<!--                      <input type="text" id="lastname" name="lastname" class="form-control form-control-sm" style="color: black; background: transparent;" placeholder="Last Name" required>-->
<!--                    </div>-->
<!--                  </div>-->
                  <div class="d-flex gap-2 py-2 px-2 btn btn-sm" style="background-color: #e7f1ff; z-index: 0; cursor: default;">
                    <span style="filter: invert(1); cursor: default;" class="btn btn-sm bg-secondary fs-6"><i class="">@</i></span>
                    <input v-model="username" type="text" id="username" name="username" class="form-control form-control-sm" style="color: black; background: transparent;" placeholder="Username"  @input="filterUsername" required/>
                  </div>

                  <div class="d-flex gap-2 py-2 px-2 btn btn-sm" style="background-color: #e7f1ff; z-index: 0; cursor: default;">
                    <span style="filter: invert(1); cursor: default;" class="btn btn-sm bg-secondary fs-6"><i class="bi-person-fill"></i></span>
                    <input v-model="name" type="text" id="name" name="name" class="form-control form-control-sm" style="color: black; background: transparent;" placeholder="Name"  @input="filterCharacters($event, 'name')" required/>
                  </div>

                  <div class="d-flex gap-2 py-2 px-2 btn btn-sm" style="background-color: #e7f1ff; z-index: 0; cursor: default;">
                    <span style="filter: invert(1); cursor: default;" class="btn btn-sm bg-secondary fs-6"><i class="bi-envelope-fill"></i></span>
                    <input v-model="email" type="text" @input="filterEmail" id="email" name="email" class="form-control form-control-sm" style="color: black; background: transparent;" placeholder="Email" required>
                  </div>

                  <div class="d-flex gap-2 py-2 px-2 btn btn-sm" style="background-color: #e7f1ff; cursor: default;">
                    <span style="filter: invert(1); cursor: default;" class="btn btn-sm bg-secondary fs-6"><i class="bi-lock-fill"></i></span>
                    <input v-model="password" type="password" id="password" name="password" class="form-control form-control-sm password-input" style="background: transparent;" placeholder="Password" required>
                    <button @click="togglePassword" class="px-1 py-0 btn-transparent">
                      <img id="EyeIcons" :src="EyeIcons" width="35" style="filter: invert(0.5)" class="">
                    </button>
                  </div>

                  <div class="d-flex gap-2 py-2 px-2 btn btn-sm" style="background-color: #e7f1ff; z-index: 0; cursor: default;">
                    <span style="filter: invert(1); cursor: default;" class="btn btn-sm bg-secondary fs-6"><i class="bi-building-fill-add"></i></span>
                    <input v-model="courseid" type="text" id="courseid" name="courseid" class="form-control form-control-sm" style="color: black; background: transparent;" placeholder="Course ID" required>
                  </div>
                </div>

                <div class="my-3">
                  <div class="d-grid px-1">
                    <label style="font-size: 0.8rem;" class="fw-light d-flex gap-2">
                      <span><i :style="{ color: pwStrength1 ? 'green' : '#555' }" v-bind:class="strengthIcons1"></i></span> Password strength: <span v-html="pwStrength"></span>
                    </label>
                    <label style="font-size: 0.8rem;" class="fw-light d-flex gap-2">
                      <span><i :style="{ color: pwStrength2 ? 'green' : '#555' }" v-bind:class="strengthIcons2"></i></span> At least 10 characters
                    </label>
                    <label style="font-size: 0.8rem;" class="fw-light d-flex gap-2">
                      <span><i :style="{ color: pwStrength3 ? 'green' : '#555' }" v-bind:class="strengthIcons3"></i></span> Have at least 3 digit numbers
                    </label>
                    <label style="font-size: 0.8rem;" class="fw-light d-flex gap-2">
                      <span><i :style="{ color: pwStrength4 ? 'green' : '#555' }" v-bind:class="strengthIcons4"></i></span> Capital letters like 'A' and 'z'
                    </label>
                    <label style="font-size: 0.8rem;" class="fw-light d-flex gap-2">
                      <span><i :style="{ color: pwStrength5 ? 'green' : '#555' }" v-bind:class="strengthIcons5"></i></span> Have symbols like '!' '@' '#' '$' '%' etc
                    </label>
                  </div>
                </div>

                <div id="html_element" class="g-recaptcha" data-sitekey="6LfkyjgnAAAAAF-p8cfXah8en-J-paVH2R_8flGc"></div>

                <div className="d-grid gap-2 mt-3">
                  <a @click="handleSubmit" id="register" class="btn btn-success fw-bold" style="font-size: 1rem;">Register</a>
                  <button href="#" className="btn btn-transparent">
                    <label class="fw-normal" style="font-size: 0.9rem;">Already have Account? <a href="login" class="fw-bold text-decoration-none">Sign In</a></label>
                  </button>
                </div>

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>

</template>

<style scoped>

@media (max-width: 992px) {
  .sm {
    display: none;
  }

  .lg {
    display: none;
  }
}


#checkbox:hover {
  cursor: pointer;
}

main input {
  border-color: transparent;
}

#showpassword label:hover {
  cursor: pointer;
}

#showpassword label {
  user-select: none;
}

main input:focus {
  box-shadow: none;
  border-color: transparent;
}

#showpassword:hover {
  color: black;
  cursor: pointer;
}

</style>
<script>
import axios from "axios";
import { v4 as uuidv4 } from "uuid";


import Eye from "@/assets/icons/eye-slash-fill.svg";
import EyeFill from "@/assets/icons/eye-fill.svg";

var Weak = "<label class='text-danger fw-bold'>Weak</label>";
var Medium = "<label class='text-warning fw-bold'>Medium</label>";
var Strong = "<label class='text-success fw-bold'>Strong</label>";

var registerWeak = "btn-success text-light fw-bold";
var registerMedium = "btn-success text-light fw-bold";
var registerStrong = "btn-success text-light fw-bold ";

export default {
  name: 'Register',

  data() {
    return {
      username: '',
      name: '',
      email: '',
      password: '',
      courseid: '',

      errorMessage: '',

      register: registerWeak,
      showPassword: false,
      pwStrength: Weak,
      pwStrength1: false,
      pwStrength2: false,
      pwStrength3: false,
      pwStrength4: false,
      pwStrength5: false,
    };
  },

  computed: {
    EyeIcons () {
      return this.showPassword ? EyeFill : Eye;
    },

    strengthIcons1 () {
      return this.pwStrength1 ? 'bi-check-circle-fill' : 'bi-x-circle-fill';
    },
    strengthIcons2 () {
      return this.pwStrength2 ? 'bi-check-circle-fill' : 'bi-x-circle-fill';
    },
    strengthIcons3 () {
      return this.pwStrength3 ? 'bi-check-circle-fill' : 'bi-x-circle-fill';
    },
    strengthIcons4 () {
      return this.pwStrength4 ? 'bi-check-circle-fill' : 'bi-x-circle-fill';
    },
    strengthIcons5 () {
      return this.pwStrength5 ? 'bi-check-circle-fill' : 'bi-x-circle-fill';
    },

  },

  mounted() {
    this.$nextTick(() => {
      document.querySelector('#username').focus();
    });
  },

  watch: {
    password(newValue) {
      this.checkPasswordLength(newValue);
      this.checkPasswordStrength();
    },
  },

  methods: {
    async handleSubmit() {
      try {
        const response = await axios.post('http://localhost:3000/api/users/register', {
          username: this.username,
          name: this.name,
          email: this.email,
          password: this.password,
          courseid: this.courseid,
        });
        if (response.status === 200) {
          this.$router.push('login');
          alert(response.data.message);
        } else {
          alert(response.data.message);
        }
      } catch (err){
        if (err.response) {
          alert(err.response.data.message);
        } else {
          alert("An error occurred");
        }
      }
    },


    async sendEmail() {
      try {
        const response = await axios.post('http://localhost:3000/api/send-email', {
          email: 'daffa11futn@gmail.com'
        });
        console.log(response);
      } catch (error) {
        console.error('Error sending email:', error.message);
      }
    },

    filterEmail() {
      this.email = this.email.replace(/[^a-zA-Z0-9@.]/g, "");
    },

    filterUsername() {
      this.username = this.username.replace(/[^a-z0-9]/g, "");
      this.username = this.username.toLowerCase();
    },

    filterCharacters(event, field) {
      const regex = /^[a-zA-Z\s]+$/; // Menambahkan \s untuk memperbolehkan spasi
      const inputText = event.target.value;
      if (!regex.test(inputText)) {
        this[field] = inputText.replace(/[^a-zA-Z\s]/g, ""); // Menambahkan \s pada karakter yang diganti
      }
    },

    checkPasswordLength(newValue) {
      if (newValue.length >= 10) {
        this.pwStrength2 = true;
      } else {
        this.pwStrength2 = false;
      }
    },
    checkPasswordStrength(newValue) {
      const regex = /(?=.*[A-Z])/;
      const hasUppercase = regex.test(this.password);
      const regexNumbers = /(?=(.*\d){3})/;
      const hasNumber = regexNumbers.test(this.password);
      const symbols = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '='];
      const hasSymbol = symbols.some(symbol => this.password.includes(symbol));

      if (hasNumber) {
        this.pwStrength3 = true;
      } else {
        this.pwStrength3 = false;
      }

      if(hasUppercase){
        this.pwStrength4 = true;
      }else{
        this.pwStrength4 = false;
      }

      if (hasSymbol){
        this.pwStrength5 = true;
      }else{
        this.pwStrength5 = false;
      }

      if (hasSymbol && hasUppercase){
        this.pwStrength1 = true;
        this.pwStrength = Medium;
        this.register = registerMedium;
      }else{
        this.pwStrength = Weak;
        this.register = registerWeak;
        this.pwStrength1 = false;
      }

      if (hasSymbol && hasUppercase && hasNumber && this.password.length >= 10){
        this.pwStrength1 = true;
        this.pwStrength = Strong;
        this.register = registerStrong;
      }else{
        this.pwStrength1 = false;
      }

    },


    togglePasswordVisibility() {
      var passwordInput = document.getElementById("password");
      var showPasswordIcon = document.getElementById("showPasswordIcons");
      this.showPassword = !this.showPassword;
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
      } else {
        passwordInput.type = "password";
      }
    }
  }
};
</script>