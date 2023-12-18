<template>
  <div class="confirmOtp">
    <form class="form">
      <div class="logo mb-3 pb-4">
        <div class="w-6/12">
          <img
            src="@/assets/images/logo.png"
            alt="logo"
            class="w-6/12 ml-8 mb-2 mt-10"
          />
        </div>
        <p class="font-bold text-2xl text-center text-yellow-900">L & L</p>
      </div>
      <div class="title">OTP</div>
      <div class="title">Verification Code</div>
      <p class="message">
        We have sent a verification code to your mobile number
      </p>
      <div class="inputs flex">
        <!-- <input v-model="number1" id="input1" type="text" maxlength="1" />
        <input v-model="number2" id="input2" type="text" maxlength="1" />
        <input v-model="number3" id="input3" type="text" maxlength="1" />
        <input v-model="number4" id="input4" type="text" maxlength="1" />
        <input v-model="number5" id="input5" type="text" maxlength="1" />
        <input v-model="number6" id="input6" type="text" maxlength="1" /> -->
        <input v-model="otp" />
      </div>
      <div class="flex gap-x-1 mt-10 mb-2">
        <button class="action px-4 py-2" @click="Handle2AF">Verify me</button>
        <router-link to="/login" class="text-decoration-none">
          <div class="bg-yellow-800 rounded-md">
            <span type="button" class="px-4 py-2 text-white"> Cancel </span>
          </div>
        </router-link>
      </div>
    </form>
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
      isShowPassword: false,
      isLogin2AF: false,
    };
  },
  methods: {
    async Handle2AF() {
      let otp =
        this.number1 +
        this.number2 +
        this.number3 +
        this.number4 +
        this.number5 +
        this.number6;
      console.log(otp);
      let email = localStorage.getItem("email");
      try {
        const response = await axios.post("authentication/login-2FA", {
          email: email,
          token: this.otp,
        });
        if (response.status === 200) {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("expiration", response.data.expiration);
          if (response.data.role === "CUSTOMER") {
            this.$router.push({ name: "Customer" });
          } else if (response.data.role === "ASSISTANT") {
            this.$router.push({ name: "dashboardAssistant" });
          } else if (response.data.role === "SHOP_OWNER") {
            this.$router.push({ name: "DashboardFurniture" });
          }
        }
      } catch (error) {
        this.message = "OTP is not vaild!";
        console.error(error);
      }
    },
  },
};
</script>
<style scoped>
.confirmOtp {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #2d2c2cd9;
}
.logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px dashed gray;
}
.form {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  width: 300px;
  background-color: white;
  border-radius: 12px;
  padding: 20px;
}

.title {
  font-size: 20px;
  font-weight: bold;
  color: black;
}

.message {
  color: #a3a3a3;
  font-size: 14px;
  margin-top: 4px;
  text-align: center;
}

.inputs {
  margin-top: 10px;
}

.inputs input {
  width: 32px;
  height: 32px;
  text-align: center;
  border: none;
  border-bottom: 1.5px solid #d2d2d2;
  margin: 0 10px;
}

.inputs input:focus {
  border-bottom: 1.5px solid royalblue;
  outline: none;
}

.action {
  border-radius: 8px;
  border: none;
  background-color: royalblue;
  color: white;
  cursor: pointer;
  align-self: end;
}
</style>
