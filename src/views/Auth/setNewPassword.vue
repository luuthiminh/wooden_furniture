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
          <div>
            <label for="exampleInputEmail1" class="form-label"
              >Email address</label
            >
            <input v-model="email" type="text" class="form-control" required />
          </div>
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
          <div class="pt-1">
            <label for="exampleInputEmail1" class="form-label">Token</label>
            <input v-model="token" type="text" class="form-control" required />
          </div>
        </div>
        <button
          type="submit"
          class="btn_send text-white cursor-pointer mt-4 px-1 py-1"
        >
          Send
        </button>
      </form>
    </div>
  </div>
</template>
<script>
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
    };
  },
  methods: {
    async setNewPassword() {
      try {
        const response = await axios.post("customer/reset-password", {
          email: this.email,
          token: this.token,
          password: this.password,
          ConfirmPassword: this.comfirmPasswod,
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
.btn_send {
  /* background-color: #302924; */
  background-color: #ffffff;
  margin-bottom: 16px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid gray;
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
