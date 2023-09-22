<template>
  <div class="loginn">
    <div
      class="grid grid-cols-2 rounded-2xl max-sm:block md:max-lg:block lg:max-xl:h-full"
    >
      <div class="max-sm:hidden max-lg:hidden">
        <img src="@/assets/images/login1.png" alt="register information" />
        <img src="@/assets/images/login2.png" alt="register information" />
      </div>
      <div class="">
        <div
          class="border border-indigo-600 bg-white mt-10 mx-44 pl-12 rounded-lg max-sm:mx-4 max-sm:mt-14 md:max-lg:mx-28 lg:max-xl:mx-16 lg:max-xl:mt-1 lg:max-xl:h-1/12"
        >
          <div class="">
            <form id="signup-form" @submit.prevent="login">
              <div class="flex justify-center">
                <h1 class="text-2xl pt-10 pb-11 font-bold lg:max-xl:pb-5">
                  Sign in
                </h1>
                <div class="bg-inherit h-px"></div>
              </div>
              <div class="text-red-600 py-3">{{ message }}</div>
              <div>
                <div>
                  <label for="exampleInputEmail1" class="text-base form-label"
                    >Email</label
                  >
                  <input
                    v-model="email"
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    required
                  />
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
                    required
                  />
                </div>
                <div
                  class="grid grid-cols-2 text-xs text-slate-400 mt-3 lg:max-xl:mt-px"
                >
                  <router-link to="/forgotPassword" class="my-8"
                    >Forgot your password?</router-link
                  >

                  <div
                    class="form-check mt-7 ml-10 max-sm:ml-8 md:max-lg:ml-28"
                  >
                    <input
                      v-model="rememberMe"
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="rememberMe"
                    />
                    <label class="form-check-label mt-1" for="flexCheckDefault">
                      Remember Me
                    </label>
                  </div>
                </div>
                <!-- <div>Sign in using</div> -->
                <div class="login_text my-8 rounded-md">
                  <button
                    class="btn text-white pl-32 md:max-lg:pl-48 lg:max-xl:pl-36"
                    type="submit"
                  >
                    Sign In
                  </button>
                </div>
                <div class="flex justify-center">
                  <a
                    href="https://landlstore.azurewebsites.net/api/customer/signin-google"
                  >
                    <img class="w-7 h-7" src="@/assets/images/google.png"
                  /></a>
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
import axios from "axios";

export default {
  data() {
    return {
      rememberMe: false,
      message: "",
      token: null,
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post("customer/login", {
          email: this.email,
          password: this.password,
          rememberMe: this.rememberMe,
        });
        if (response.status === 200) {
          localStorage.setItem("token", response.data.token);
          this.$router.push({ name: "Customer" });
        }
      } catch (error) {
        this.message = "Password or email does not exist!";
        console.error(error);
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
