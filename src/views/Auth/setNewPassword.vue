<template>
  <div class="forgot_password">
    <div
      class="shadow-sm border border-red-100 px-7 pt-2 pb-10 w-3/12 rounded-2xl bg-white"
    >
      <div class="pb-10">
        <div class="logo w-6/12">
          <img
            src="@/assets/images/logo.png"
            alt="logo"
            class="w-6/12 ml-10 mb-2 mt-10"
          />
        </div>
        <p class="font-bold text-2xl text-center text-yellow-950">L & L</p>
      </div>
      <!-- <hr class="mb-2 h-px bg-slate-100" /> -->
      <span class="font-medium text-sm text-gray-500 mt-1"
        >Please enter new your password!</span
      >
      <form @submit.prevent="setNewPassword">
        <div class="mb-3">
          <div class="pt-4">
            <label
              for="exampleInputEmail1"
              class="form-label font-medium text-sm"
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
            <span v-else class="success text-xs">{{ passwordSuccess }}</span>
          </div>
          <div class="mt-3">
            <label
              for="exampleInputEmail1"
              class="form-label font-medium text-sm"
              >Comfirm Password</label
            >
            <div class="flex relative">
              <input
                v-model="confirmPasswod"
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
            <span v-if="confirmPasswordError" class="error text-xs">{{
              confirmPasswordError
            }}</span>
            <span v-else class="success text-xs">{{
              confirmPasswordSuccess
            }}</span>
          </div>
        </div>
      </form>
      <button
        @click.prevent="setNewPassword"
        class="btn btn_save text-white pl-32 md:max-lg:pl-48 lg:max-xl:pl-36 font-medium my-3"
        type="submit"
      >
        Save Change
      </button>
    </div>
  </div>
</template>
<script>
// import * as signalR from "@microsoft/signalr";
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      token: "",
      password: "",
      comfirmPasswod: "",
      passwordError: "",
      passwordSuccess: "",
      confirmPasswordError: "",
      confirmPasswordSuccess: "",
      tokent: "",
      isShowPassword: false,
    };
  },
  create() {
    this.handleToken();
  },
  methods: {
    // mounted() {
    //   this.connection = new signalR.HubConnectionBuilder()
    //     .configureLogging(signalR.LogLevel.Debug)
    //     .withUrl("https://landlstore.azurewebsites.net/signalHub", {
    //       skipNegotiation: true,
    //       transport: signalR.HttpTransportType.WebSockets,
    //     })
    //     .build();

    //   this.connection
    //     .start()
    //     .then(() => {
    //       console.log("Connected to hub");
    //       // Đăng ký sự kiện "ReceiveJWTToken"
    //       this.connection.on("ReceiveResetPassword", (model) => {
    //         console.log("Received message from hub:", model);
    //         this.email = model.email;
    //         this.token = model.token;
    //       });
    //     })
    //     .catch((err) => console.error(err));
    // },
    async setNewPassword() {
      try {
        const response = await axios.post("authentication/reset-password", {
          email: this.$route.query.email,
          // token: this.$route.query.token.trim().split(" ").join("+"),
          token: this.$route.query.token.trim().split(" ").join("+"),
          password: this.password,
          confirmPassword: this.confirmPasswod,
        });
        if (response.status === 200) {
          alert("Password has changed successfully!");
          this.$router.push({ name: "login" });
        }
      } catch (error) {
        this.message = error.response.data.message;
        console.error(error.response.data.message);
      }
    },
    validatePassword() {
      const regex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if (!regex.test(this.password)) {
        this.passwordError =
          "Password minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character";
      } else {
        this.passwordSuccess = "Password is valid";
      }
    },
    validateConfirmPassword() {
      if (this.confirmPassword != this.password) {
        this.confirmPasswordError = "Not match password";
      } else {
        this.confirmPasswordSuccess = "Matched password";
      }
    },
  },
};
</script>
<style scoped>
.border {
  position: absolute;
  top: 5%;
  left: 38%;
}
.btn_save {
  background-color: #4f4c3d;
  width: 100%;
  border-radius: 7px;
}
.logo {
  transform: translateX(50%);
}
.error {
  color: red;
}
.success {
  color: green;
}
</style>
