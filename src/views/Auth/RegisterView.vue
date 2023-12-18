<template>
  <div class="register">
    <div class="grid grid-cols-2 max-sm:max-lg:block bg-gray-50">
      <div class="max-sm:hidden">
        <div class="img">
          <img
            src="@/assets/images/register.png"
            alt="register information"
            class="fixed w-6/12"
          />
        </div>
      </div>
      <div class="form_register">
        <div class="mb-20 mx-32 max-sm:mx-3 max-lg:mx-2">
          <div
            class="bg-white border border-indigo-600 mt-4 px-11 rounded-lg max-sm:px-2"
          >
            <div class="text-red-600 pt-3">{{ message }}</div>
            <!-- </div> -->
            <form id="signup-form" @submit.prevent="register">
              <div>
                <h1 class="text-xl my-9 font-bold max-sm:text-center">
                  Sign up for account
                </h1>
              </div>
              <div class="form justify-center">
                <div class="grid grid-cols-2 gap-x-6">
                  <div>
                    <label for="firstname" class="form-label">First Name</label>
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
                    <label for="lastname" class="form-label">Last Name</label>
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
                    <label for="gender" class="form-label">Gender</label>
                    <select
                      v-model="gender"
                      class="form-select pl-3"
                      aria-label="Default select example"
                      required
                    >
                      <option selected="selected" value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                    <span v-if="emailError" class="error text-xs">{{
                      emailError
                    }}</span>
                    <span v-else class="success text-xs">{{
                      emailSuccess
                    }}</span>
                  </div>
                  <div>
                    <label for="dob" class="form-label">Dob</label>
                    <input
                      v-model="date"
                      type="date"
                      class="form-control"
                      id="dob"
                      aria-describedby="dobHelp"
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
                  <span v-else class="success text-xs">{{ emailSuccess }}</span>
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
                  <label for="password" class="form-label">Password</label>
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
              <div class="form-check py-4">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  required
                />
                <label class="form-check-label text-sm" for="flexCheckChecked">
                  I accept the<router-link
                    to="/term"
                    class="text-blue-600 after:content-['_↗'] ..."
                    target="_blank"
                  >
                    terms of service</router-link
                  >
                  and
                  <router-link
                    to="/policy"
                    class="text-blue-600 after:content-['_↗'] ..."
                    target="_blank"
                  >
                    privacy policy</router-link
                  >
                </label>
              </div>
              <div>
                <button type="submit" class="btn my-2">Sign up</button>
              </div>
            </form>
            <div class="flex gap-x-10">
              <div
                class="border border-1 border-bottom border-solid-gray h-px w-96 mt-3"
              ></div>
              <span class="text-base">or</span>
              <div
                class="border border-1 border-bottom border-solid-gray h-px w-96 mt-3"
              ></div>
            </div>
            <div class="flex justify-center py-6">
              <a
                @click="loginGg"
                href="https://landlstore.azurewebsites.net/api/authentication/signin-google"
              >
                <div class="button_gg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid"
                    viewBox="0 0 256 262"
                  >
                    <path
                      fill="#4285F4"
                      d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                    ></path>
                    <path
                      fill="#34A853"
                      d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                    ></path>
                    <path
                      fill="#FBBC05"
                      d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                    ></path>
                    <path
                      fill="#EB4335"
                      d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                    ></path>
                  </svg>
                  Login with Google
                </div>
              </a>
            </div>
            <div class="flex gap-x-2 pl-32 font-medium pt-2 pb-6 text-sm">
              <span class="text-gray-600">Have an account?</span>
              <router-link to="/" class="text-blue-700 font-bold"
                >Login</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      message: "",
      passwordError: "",
      passwordSuccess: "",
      emailError: "",
      emailSuccess: "",
      firstNameError: "",
      firstNameSuccess: "",
      lastNameError: "",
      lastNameSuccess: "",
      isShowPassword: false,
    };
  },
  methods: {
    async register() {
      try {
        const response = await axios.post("authentication/create-account/1", {
          firstName: this.firstName,
          lastName: this.lastName,
          gender: this.gender,
          email: this.email,
          password: this.password,
          phoneNumbers: this.phone,
          doB: this.date,
          username: this.email,
        });

        if (response.status === 201) {
          alert("Please confirm the code in your email!");
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
  },
};
</script>
<style scoped>
h1 {
  color: #44433f;
}
.btn.my-2 {
  background-color: #44433f;
  color: white;
  width: 100%;
}
.img img {
  height: 710px;
}
.error {
  color: red;
}
.success {
  color: green;
}
.button_gg {
  display: flex;
  padding: 0.5rem 7.4rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  text-align: center;
  vertical-align: middle;
  align-items: center;
  border-radius: 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.25);
  gap: 0.75rem;
  color: rgb(65, 63, 63);
  background-color: #fff;
  cursor: pointer;
  transition: all 0.6s ease;
}

.button_gg svg {
  height: 24px;
}

.button_gg:hover {
  transform: scale(1.02);
}
</style>
