<template>
  <div class="register">
    <div class="grid grid-cols-2 ga-x-6">
      <div>
        <div class="img">
          <img src="@/assets/images/3.png" alt="register information" />
        </div>
      </div>
      <div class="form_register bg-gray-50">
        <div class="my-20 mx-11">
          <div class="bg-white border border-indigo-600 mt-16 px-11 rounded-lg">
            <form id="signup-form" @submit.prevent="processForm">
              <div>
                <h1 class="text-xl my-9 font-bold">Sign up for account</h1>
              </div>
              <div class="form justify-center">
                <div class="grid grid-cols-2 gap-x-6">
                  <div>
                    <label for="firstname" class="form-label">First Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="firstname"
                      aria-describedby="firstnameHelp"
                    />
                  </div>
                  <div>
                    <label for="lastname" class="form-label">Last Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="lastname"
                      aria-describedby="lastnameHelp"
                    />
                  </div>
                </div>
                <div class="grid grid-cols-2 gap-x-6">
                  <div>
                    <label for="gender" class="form-label">Gender</label>
                    <input
                      type="text"
                      class="form-control"
                      id="gender"
                      aria-describedby="genderHelp"
                    />
                  </div>
                  <div>
                    <label for="dob" class="form-label">Dob</label>
                    <input
                      type="date"
                      class="form-control"
                      id="dob"
                      aria-describedby="dobHelp"
                    />
                  </div>
                </div>
                <div>
                  <label for="exampleInputEmail1" class="form-label"
                    >Email address</label
                  >
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div>
                  <label for="phone" class="form-label">Phone</label>
                  <input
                    type="number"
                    class="form-control"
                    id="phone"
                    aria-describedby="phonelHelp"
                  />
                </div>
                <div>
                  <label for="password" class="form-label"
                    >Create Password</label
                  >
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    aria-describedby="passwordHelp"
                  />
                </div>
              </div>
              <div class="my-1">
                <!-- <button type="submit" class="btn my-8">Create</button> -->
                <router-link to="/otp" class="btn my-8">Create</router-link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script></script>
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
</style>
