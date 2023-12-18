<template>
  <div class="forgot_password">
    <div
      class="shadow-sm border border-red-100 px-7 pt-2 pb-10 w-3/12 rounded-2xl bg-white"
    >
      <div class="logoforgot mb-3 pb-4">
        <div class="w-6/12">
          <img
            src="@/assets/images/logo.png"
            alt="logo"
            class="w-6/12 ml-10 mb-2 mt-10"
          />
        </div>
        <p class="font-bold text-2xl text-center text-yellow-900">L & L</p>
      </div>
      <!-- <hr class="mb-2 h-px bg-slate-100" /> -->
      <span class="font-medium text-sm text-gray-500 mt-1"
        >Please enter new your password!</span
      >
      <form @submit.prevent="setNewPassword">
        <div class="mb-3">
          <div class="pt-2">
            <label
              for="exampleInputEmail1"
              class="font-semibold text-yellow-950 text-sm"
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
              class="font-semibold text-yellow-950 text-sm"
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

      <div class="grid grid-cols-2 gap-x-1 mt-4 mb-2">
        <button
          @click.prevent="setNewPassword"
          class="btn_save text-white md:max-lg:pl-48 lg:max-xl:pl-36 font-medium rounded-md text-base"
          type="submit"
        >
          Save Change
        </button>
        <router-link to="/login" class="text-decoration-none">
          <div class="bg-yellow-800 rounded-md text-center">
            <span type="button" class="px-4 py-1 text-white text-base">
              Cancel
            </span>
          </div>
        </router-link>
      </div>

      <p class="signup-link text-center mt-3">
        Don't have an account?
        <a href="/register" class="signup-link link"> Sign up now</a>
      </p>
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
      tokent: "",
      isShowPassword: false,
    };
  },
  create() {
    this.handleToken();
  },
  methods: {
    async setNewPassword() {
      try {
        const response = await axios.post("authentication/reset-password", {
          email: this.$route.query.email,
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
.forgot_password {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #2d2c2cd9;
}
.btn_save {
  background-color: royalblue;
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
.signup-link {
  align-self: center;
  font-weight: 400;
  font-size: 14px;
}

.signup-link .link {
  font-weight: 500;
  color: #2d79f3;
}
.logoforgot {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px dashed gray;
}
</style>
