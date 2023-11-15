<template>
  <div class="forgot_password">
    <div
      class="shadow-sm border border-red-100 px-7 pt-2 pb-10 w-3/12 rounded-lg bg-white"
    >
      <div class="logo w-6/12">
        <img src="@/assets/images/logo.png" alt="logo" />
      </div>
      <hr class="mb-4" />
      <form @submit.prevent="setNewPassword">
        <div class="mb-3">
          <div class="pt-1">
            <label for="exampleInputEmail1" class="form-label">Password</label>
            <input
              v-model="password"
              type="password"
              class="form-control h-8/12"
              required
              @input="validatePassword"
            />
            <span v-if="passwordError" class="error text-xs">{{
              passwordError
            }}</span>
            <span v-else class="success text-xs">{{ passwordSuccess }}</span>
          </div>
          <div class="pt-1">
            <label for="exampleInputEmail1" class="form-label"
              >Comfirm Password</label
            >
            <input
              v-model="comfirmPasswod"
              type="password"
              class="form-control"
              required
              @input="validateConfirmPassword"
            />
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
        class="btn btn_save text-white pl-32 md:max-lg:pl-48 lg:max-xl:pl-36 font-medium"
        type="submit"
      >
        Save Change
      </button>
    </div>
  </div>
</template>
<script>
import * as signalR from "@microsoft/signalr";
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
    };
  },
  create() {
    this.handleToken();
  },
  methods: {
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
          this.connection.on("ReceiveResetPassword", (model) => {
            console.log("Received message from hub:", model);
            this.email = model.email;
            this.token = model.token;
          });
        })
        .catch((err) => console.error(err));
    },
    async setNewPassword() {
      try {
        const response = await axios.post("authentication/reset-password", {
          email: this.email,
          token: this.token,
          password: this.password,
          ConfirmPassword: this.comfirmPasswod,
        });
        if (response.status === 200) {
          alert("Password has changed successfully!");
          // this.$router.push({ name: "login" });
          this.$router.push({ name: "Customer" });
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
  background-color: #302924;
  width: 100%;
  border-radius: 4px;
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
