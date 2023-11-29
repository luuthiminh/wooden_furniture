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
          class="border border-indigo-600 bg-white mt-10 mx-44 pl-12 rounded-xl max-sm:mx-4 max-sm:mt-14 md:max-lg:mx-28 lg:max-xl:mx-16 lg:max-xl:mt-1 lg:max-xl:h-1/12"
        >
          <div class="">
            <form id="signup-form" @submit.prevent="login">
              <div class="flex justify-center">
                <h1 class="text-2xl pt-12 pb-11 font-bold lg:max-xl:pb-5">
                  Sign in
                </h1>
              </div>
              <div class="text-red-600 py-2">{{ message }}</div>
              <div>
                <div class="flex-column">
                  <label>Email </label>
                </div>
                <div class="inputForm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    viewBox="0 0 32 32"
                    height="20"
                  >
                    <g data-name="Layer 3" id="Layer_3">
                      <path
                        d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"
                      ></path>
                    </g>
                  </svg>
                  <input
                    v-model="email"
                    placeholder="Enter your Email"
                    class="input"
                    type="text"
                  />
                </div>

                <div class="flex-column mt-3">
                  <label>Password </label>
                </div>
                <div class="inputForm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    viewBox="-64 0 512 512"
                    height="20"
                  >
                    <path
                      d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"
                    ></path>
                    <path
                      d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"
                    ></path>
                  </svg>
                  <input
                    v-model="password"
                    placeholder="Enter your Password"
                    class="input"
                    :type="[isShowPassword ? 'text' : 'password']"
                  />
                  <span @click="isShowPassword = !isShowPassword" class="mr-2">
                    <i v-if="isShowPassword" class="bi bi-eye"></i>
                    <i v-else class="bi bi-eye-slash"></i>
                  </span>
                </div>
                <div
                  class="grid grid-cols-2 text-xs text-slate-400 mt-3 lg:max-xl:mt-px"
                >
                  <router-link
                    to="/forgotPassword"
                    class="forgot_password my-8 font-medium"
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

                <button
                  type="submit"
                  class="btn_send text-white cursor-pointer mt-2 px-1 py-1 mb-4"
                >
                  Sign In
                </button>
                <div class="flex justify-center">
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
                <br />
                <div class="flex justify-center text-xs pb-12">
                  <span class="pr-1">Need an account?</span>
                  <router-link to="/register" class="register font-bold"
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
import * as signalR from "@microsoft/signalr";
import axios from "axios";

export default {
  data() {
    return {
      rememberMe: false,
      message: "",
      token: null,
      isShowPassword: false,
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post("authentication/login", {
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
  mounted() {
    this.connection = new signalR.HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Debug)
      .withUrl("https://landlstore.azurewebsites.net/signalHub", {
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets,
      })
      .build();

    this.connection
      .start()
      .then(() => {
        console.log("Connected to hub");

        // Đăng ký sự kiện "ReceiveJWTToken"
        this.connection.on("receivedjwttoken", (token) => {
          console.log("Received message from hub:", token);
          localStorage.setItem("token", token.token);
          this.$router.push({ name: "Customer" });
        });
      })
      .catch((err) => console.error(err));
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
.btn_send {
  background-color: #302924;
  width: 100%;
  border-radius: 7px;
}
a {
  text-decoration: none;
}
/* login google */
.button_gg {
  max-width: 320px;
  display: flex;
  padding: 0.5rem 1.4rem;
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

/* form */
::placeholder {
  font-family: inherit;
}
.flex-column > label {
  color: #3d3b33;
  font-weight: 500;
  font-size: 16px;
}

.inputForm {
  border: 1.5px solid #ecedec;
  border-radius: 10px;
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  transition: 0.2s ease-in-out;
}

.input {
  margin-left: 10px;
  font-size: 14px;
  border-radius: 10px;
  border: none;
  width: 100%;
  height: 100%;
}

.input:focus {
  outline: none;
}

.inputForm:focus-within {
  border: 1.5px solid #2d79f3;
}

.flex-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
}

.flex-row > div > label {
  font-size: 14px;
  color: black;
  font-weight: 400;
}
.register,
.forgot_password {
  color: #2d79f3;
}
</style>
