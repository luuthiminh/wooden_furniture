<template>
  <header class="header_components_admin flex items-center justify-between">
    <div>
      <h1 class="font-semibold text-xl">{{ title }}</h1>
      <ul class="bar flex text-sm pt-2">
        <li>
          <router-link
            to="/userManaegment"
            class="text-decoration-none font-medium"
          >
            Admin
          </router-link>
        </li>
      </ul>
    </div>
    <div class="absolute right-3 flex items-center top-5 my-2">
      <div
        @click="OpenNavBar"
        class="hidden border border-1 border-solid-yellow-950 rounded-md hover:bg-slate-200 cursor-pointer ring-1 ring-yellow-600 max-sm:block max-md:block bg-yellow-900 opacity-70"
      >
        <i class="bi bi-list px-2 text-white hover:text-yellow-950"></i>
      </div>
    </div>
    <div class="float-right flex max-sm:hidden max-md:hidden cursor-pointer">
      <a
        class="ring-1 ring-yellow-900 rounded-md mr-2 flex items-center text-center px-2"
        href="https://landlstore.azurewebsites.net/api/User/customer-infor/csv"
      >
        <span class="text-sm font-semibold text-yellow-800">Download CSV</span>
      </a>

      <div>
        <div class="new member">
          <div
            data-toggle="modal"
            data-target="#exampleModalLong"
            data-dismiss="modal"
            data-backdrop="false"
            @click="opentModal('add')"
            class="new_member flex text-white hitrounded-md px-3 py-2 text-sm font-medium rounded-lg shadow-lg shadow-cyan-500/50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="currentColor"
              class="w-5 h-1/6 mr-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            <span class="text-white">New Member</span>
          </div>
          <modal
            v-if="modalType == 'add'"
            @close="closeModal"
            data-target="#myModal"
          >
            <template v-slot:title>
              <div
                class="flex items-center text-base font-semibold text-yellow-950"
              >
                ADD NEW USER
              </div>
            </template>
            <template v-slot:body>
              <div class="form_register">
                <div class="mb-2 mx-3 max-sm:mx-3 max-lg:mx-2">
                  <div class="">
                    <div class="text-red-600 pt-3">{{ message }}</div>
                    <!-- </div> -->
                    <form id="signup-form" @submit.prevent="register">
                      <div class="form justify-center">
                        <div class="grid grid-cols-2 gap-x-6">
                          <div>
                            <label for="firstname" class="form-label"
                              >First Name</label
                            >
                            <input
                              v-model="firstName"
                              type="text"
                              class="form-control"
                              id="firstname"
                              aria-describedby="firstnameHelp"
                              required
                            />
                          </div>
                          <div>
                            <label for="lastname" class="form-label"
                              >Last Name</label
                            >
                            <input
                              v-model="lastName"
                              type="text"
                              class="form-control"
                              id="lastname"
                              aria-describedby="lastnameHelp"
                              required
                            />
                          </div>
                        </div>
                        <div class="grid grid-cols-2 gap-x-6 mt-2">
                          <div>
                            <label for="gender" class="form-label"
                              >Gender</label
                            >
                            <select
                              v-model="gender"
                              class="form-select pl-3"
                              aria-label="Default select example"
                              required
                            >
                              <option value="">
                                --Please choose your gender--
                              </option>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>
                          <div>
                            <label for="dob" class="form-label">Dob</label>
                            <input
                              v-model="date"
                              type="date"
                              class="form-control"
                              id="dob"
                              aria-describedby="dobHelp"
                              required
                            />
                          </div>
                        </div>
                        <div class="mt-2">
                          <label for="exampleInputEmail1" class="form-label"
                            >Email address</label
                          >
                          <input
                            v-model="email"
                            type="email"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            required
                            @input="validateEmail"
                          />
                          <span v-if="emailError" class="error text-xs">{{
                            emailError
                          }}</span>
                          <span v-else class="success text-xs">{{
                            emailSuccess
                          }}</span>
                        </div>
                        <div class="mt-2">
                          <label for="phone" class="form-label">Phone</label>
                          <input
                            v-model="phone"
                            type="text"
                            class="form-control"
                            id="phone"
                            aria-describedby="phonelHelp"
                            required
                          />
                        </div>
                        <div class="mt-2">
                          <label for="password" class="form-label"
                            >Password</label
                          >
                          <div class="flex relative">
                            <input
                              v-model="password"
                              :type="[isShowPassword ? 'text' : 'password']"
                              class="form-control"
                              id="password"
                              aria-describedby="passwordHelp"
                              required
                              @input="validatePassword"
                            />
                            <span
                              @click="isShowPassword = !isShowPassword"
                              class="mr-2 absolute right-2 mt-2"
                            >
                              <i v-if="isShowPassword" class="bi bi-eye"></i>
                              <i v-else class="bi bi-eye-slash"></i>
                            </span>
                          </div>
                          <span v-if="passwordError" class="error text-xs">{{
                            passwordError
                          }}</span>
                          <span v-else class="success text-xs">{{
                            passwordSuccess
                          }}</span>
                        </div>
                      </div>
                      <div class="flex gap-x-4 py-3">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                            v-model="roleId"
                            value="2"
                          />
                          <label
                            class="form-check-label font-medium text-sm"
                            for="flexRadioDefault1"
                          >
                            Assistant
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                            v-model="roleId"
                            value="3"
                          />
                          <label
                            class="form-check-label font-medium text-sm"
                            for="flexRadioDefault2"
                          >
                            Shop Owner
                          </label>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </template>
            <template v-slot:footer>
              <div class="bg-yellow-900 rounded-md">
                <span
                  type="button"
                  class="btn text-white"
                  data-dismiss="modal"
                  @click="HandleRegister"
                >
                  Sign up
                </span>
              </div>
            </template>
          </modal>
        </div>
      </div>

      <div v-if="isLogin" @click="Logout">
        <button class="Btn">
          <div class="sign">
            <svg viewBox="0 0 512 512">
              <path
                d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
              ></path>
            </svg>
          </div>
        </button>
      </div>
    </div>
  </header>
  <!-- <div class="card_download">
    <div class="icon_download">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
        <g
          stroke-linejoin="round"
          stroke-linecap="round"
          id="SVGRepo_tracerCarrier"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-width="1.5"
            stroke="#ffffff"
            d="M20 14V17.5C20 20.5577 16 20.5 12 20.5C8 20.5 4 20.5577 4 17.5V14M12 15L12 3M12 15L8 11M12 15L16 11"
          ></path>
        </g>
      </svg>
    </div>
    <div class="content">
      <span class="title">Good news Mac users!</span>
      <div class="desc">This software is now available for download.</div>
      <div class="actions">
        <div>
          <a href="#" class="download">Try it free</a>
        </div>
        <div>
          <a href="#" class="notnow">Not now</a>
        </div>
      </div>
    </div>
    <button type="button" class="close">
      <svg
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>
  </div> -->
  <div v-show="isNavBar">
    <div class="overlay">
      <div class="nav_bar">
        <div class="logo border-1 border-bottom boder-slate-300">
          <div class="flex px-5 py-3">
            <img
              class="w-2/12 ml-3"
              src="@/assets/images/logo.png"
              alt="logo"
            />
            <span class="font-bold text-2xl items-center">L&L</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import modal from "@/components/ModalPage.vue";
import axios from "axios";
export default {
  components: {
    modal,
  },
  props: ["title"],
  data() {
    return {
      isNavBar: false,
      modalType: null,
      message: "",
      passwordError: "",
      passwordSuccess: "",
      emailError: "",
      emailSuccess: "",
      firstNameError: "",
      firstNameSuccess: "",
      lastNameError: "",
      lastNameSuccess: "",
      isShowModal: "",
      isShowPassword: false,
      roleId: 2,
      isLogin: false,
    };
  },
  created() {
    this.checkLogin();
  },
  methods: {
    checkLogin() {
      if (localStorage.getItem("token") !== null) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    },
    OpenNavBar() {
      this.isNavBar = !this.isNavBar;
    },
    closeNavBar() {
      this.isNavBar = !this.isNavBar;
    },
    opentModal(type) {
      this.modalType = type;
    },
    closeModal() {
      this.modalType = null;
    },
    async HandleRegister() {
      try {
        const response = await axios.post(
          "authentication/create-account/" + this.roleId,
          {
            firstName: this.firstName,
            lastName: this.lastName,
            gender: this.gender,
            email: this.email,
            password: this.password,
            phoneNumbers: this.phone,
            doB: this.date,
            username: this.email,
          }
        );

        if (response.status === 201) {
          alert("Register successful");
        }
        if (response.status === 406) {
          alert(response.data.message);
        }
      } catch (error) {
        this.message = error.response.data.message;
        console.error(error.response.data.message);
      }
    },
    validateEmail() {
      if (this.email === "") {
        this.emailError = "Please enter your email";
      } else {
        this.emailError === "";
        this.emailSuccess = "Email is valid";
      }
    },
    validatePassword() {
      const regex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if (!regex.test(this.password)) {
        this.passwordError =
          "Password minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character";
      } else {
        this.passwordError = "";
        this.passwordSuccess = "Password is valid";
      }
    },
    Logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      localStorage.removeItem("expiration");
      this.$router.push({ name: "login" });
    },
  },
};
</script>
<style scoped>
.header_components_admin {
  height: 100px;
  transition: left 0.3s ease;
  margin-bottom: 1em;
  position: fixed;
  background: white;
  z-index: 10;
  width: 69em;
  max-width: 100%;
  margin-left: -2em;
  padding-right: 2em;
  padding-left: 2em;
}
.overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(29, 29, 29, 0.3);
  animation: fadeIn linear 0.2s;
  z-index: 100;
  margin-left: -2em;
}
.nav_bar {
  width: 15.4em;
  height: 100%;
  background: rgb(251, 250, 250);
  /* background: black; */
  box-shadow: 10px 0 5px -2px #b6b2b2;
}
.new_member {
  background-color: #ab7442;
}
/* icon_logout */
.Btn {
  --black: #000000;
  --ch-black: #141414;
  --eer-black: #1b1b1b;
  --white: #ffffff;
  --af-white: #f3f3f3;
  --ch-white: #e1e1e1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 35px;
  height: 35px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition-duration: 0.3s;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.199);
  margin-left: 27px;
  background: #ab7442;
}

/* plus sign */
.sign {
  width: 100%;
  transition-duration: 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sign svg {
  width: 17px;
}

.sign svg path {
  fill: var(--af-white);
}

/* button click effect*/
.Btn:active {
  transform: translate(2px, 2px);
}
h1,
li {
  color: rgb(79, 59, 25);
}
.form-label {
  font-size: 15px;
  font-weight: 500;
}
.form-control,
.form-select {
  border: none;
  background-color: #dde4e794;
}
.error {
  color: red;
}
.success {
  color: green;
}

.card_download .content {
  margin-left: 0.75rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 400;
}

.card_download .title {
  margin-bottom: 0.25rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
  color: rgb(255, 255, 255);
}

.card_download .desc {
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 400;
  color: rgb(202, 200, 200);
}

.card_download .actions {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-gap: 0.5rem;
  gap: 0.5rem;
}

.card_download .download,
.card_download .notnow {
  width: 100%;
  display: inline-flex;
  justify-content: center;
  border-radius: 0.5rem;
  padding: 0.375rem 0.5rem;
  text-align: center;
  font-size: 0.75rem;
  line-height: 1rem;
  color: rgb(255, 255, 255);
  outline: 2px solid transparent;
  border: 1px solid rgba(253, 253, 253, 0.363);
}

.card_download .download {
  background-color: #284385;
  font-weight: 600;
}

.card_download .download:hover {
  background-color: #153586;
}

.card_download .notnow {
  background-color: #606c88;
  font-weight: 500;
}

.card_download .notnow:hover {
  background-color: #3f4c6b;
}

.card_download .close {
  margin: -0.375rem -0.375rem -0.375rem auto;
  height: 2rem;
  width: 2rem;
  display: inline-flex;
  border-radius: 0.5rem;
  background-color: #606c88;
  padding: 0.375rem;
  color: rgba(255, 255, 255, 1);
  border: none;
}

.card_download .close svg {
  height: 1.25rem;
  width: 1.25rem;
}

.card_download .close:hover {
  background-color: rgb(58, 69, 83);
}
</style>
