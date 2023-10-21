<template>
  <div class="register">
    <div class="grid grid-cols-2 max-sm:max-lg:block">
      <div class="max-sm:hidden">
        <div class="img">
          <img src="@/assets/images/banner2.png" alt="register information" />
        </div>
      </div>
      <div class="form_register bg-gray-50">
        <div class="mb-20 mx-11 max-sm:mx-3 max-lg:mx-2">
          <div
            class="bg-white border border-indigo-600 mt-16 px-11 rounded-lg max-sm:px-2"
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
                      <option value="">--Please choose your gender--</option>
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
                  />
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
                  <input
                    v-model="password"
                    type="password"
                    class="form-control"
                    id="password"
                    aria-describedby="passwordHelp"
                    required
                    @input="validatePassword"
                  />
                  <span v-if="passwordError" class="error text-xs">{{
                    passwordError
                  }}</span>
                  <span v-else class="success text-xs">{{
                    passwordSuccess
                  }}</span>
                </div>
              </div>
              <div class="my-1">
                <button type="submit" class="btn my-8">Create</button>
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
      message: "",
      passwordError: "",
      passwordSuccess: "",
    };
  },
  methods: {
    async register() {
      try {
        const response = await axios.post("customer/create-account", {
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
  },
};
</script>
<style scoped>
h1 {
  color: #44433f;
}
.btn.my-8 {
  background-color: #44433f;
  color: white;
  margin-left: 75%;
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
</style>
