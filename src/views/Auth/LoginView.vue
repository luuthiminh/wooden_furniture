<template>
  <div class="loginn">
    <div class="grid grid-cols-2 ga-x-6 rounded-2xl">
      <div>
        <img src="@/assets/images/login1.png" alt="register information" />
        <img src="@/assets/images/login2.png" alt="register information" />
      </div>
      <div class="">
        <div
          class="border border-indigo-600 bg-white mt-24 mx-44 pl-12 rounded-lg"
        >
          <div class="">
            <form id="signup-form" @submit.prevent="login">
              <div class="flex justify-center">
                <h1 class="text-2xl pt-10 pb-11 font-bold">Sign in</h1>
                <div class="bg-inherit h-px"></div>
              </div>
              <div>
                <div>
                  <label for="exampleInputEmail1" class="text-base form-label"
                    >Email</label
                  >
                  <input
                    v-model="email"
                    type="email"
                    class="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                  />
                  {{ email }}
                </div>
                <br />
                <div>
                  <label for="password" class="text-base form-label"
                    >Create Password</label
                  >
                  <input
                    v-model="password"
                    type="password"
                    class="form-control"
                    id="password"
                    aria-describedby="passwordHelp"
                  />
                  {{ password }}
                </div>
                <div class="grid grid-cols-2 text-xs text-slate-400 mt-3">
                  <router-link to="/" class="my-8"
                    >Forgot your password?</router-link
                  >
                  <div class="form-check mt-7 ml-10">
                    <input
                      v-model="rememberMe"
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="rememberMe"
                    />
                    {{ rememberMe }}
                    <label class="form-check-label mt-1" for="flexCheckDefault">
                      Remember Me
                    </label>
                  </div>
                </div>

                <!-- <div>Sign in using</div> -->
                <div class="login_text my-8 rounded-md">
                  <button class="btn text-white" type="submit">Sign In</button>
                </div>
                <div class="flex justify-center">
                  <img class="w-7 h-7" src="@/assets/images/google.png" />
                </div>
                <br />
                <div class="flex justify-center text-xs pb-12">
                  <span class="pr-1">Need an account?</span>
                  <router-link to="/register" class="font-bold text-slate-900"
                    >Register</router-link
                  >
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { ref } from "vue";
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: "",
      rememberMe: false,
    };
  },
  methods: {
    async login() {
      console.log(this.email);
      console.log(this.password);
      try {
        const response = await axios.post(
          "http://landlstore.azurewebsites.net/api/Customer/login",
          {
            email: this.email,
            password: this.password,
            rememberMe: this.rememberMe,
          }
        );
        if (response.status === 200) {
          console.log(response.data.email, response.data.password);
        } else {
          console.log("Invalid");
        }
      } catch (error) {
        console.error("Error logging in:", error);
      }
    },
  },
};
</script>

<style scoped>
.border.border-indigo-600 {
  padding-right: 2.375rem;
}
.img_google img {
  max-width: 6%;
}
.login_text {
  background-color: #44433f;
  /* padding-left: 120px; */
}
</style>
