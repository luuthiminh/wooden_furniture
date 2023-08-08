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
            <form id="signup-form" @submit.prevent="processForm">
              <div class="flex justify-center">
                <h1 class="text-2xl pt-10 pb-11 font-bold">Sign in</h1>
                <div class="bg-inherit h-px"></div>
              </div>
              <div>
                <div>
                  <label for="exampleInputEmail1" class="text-base form-label"
                    >Email address</label
                  >
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <br />
                <div>
                  <label for="password" class="text-base form-label"
                    >Create Password</label
                  >
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    aria-describedby="passwordHelp"
                  />
                </div>
                <div class="text-xs text-slate-400 mt-3">
                  <router-link to="/" class="my-8"
                    >Forgot your password?</router-link
                  >
                </div>
                <!-- <div>Sign in using</div> -->
                <div class="login_text my-8 rounded-md">
                  <router-link
                    to="/customerIndex"
                    class="btn text-white flex justify-center"
                    >Sign In</router-link
                  >
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
export default {
  data() {
    return {
      username: "",
      password: "",
      submitted: false,
    };
  },
};
</script>
<style scoped>
/* .loginn {
  background-image: url("@/assets/images/login2.png");
  background-size: cover;
  margin-top: 0;
} */
.border.border-indigo-600 {
  padding-right: 2.375rem;
}
.img_google img {
  max-width: 6%;
}
.login_text {
  background-color: #44433f;
}
</style>
