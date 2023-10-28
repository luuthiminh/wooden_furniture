<template>
  <header-admin :title="title" />
  <div class="tab_content bg-white mb-5 mb-xl-10 rounded-lg mt-32">
    <div class="flex">
      <div></div>
      <div class="card-title cursor-pointer">
        <h1 class="font-semibold text-lg px-6 py-6">Add New Member</h1>
        <hr class="bg-slate-400" />
        <div class="infor py-6 px-6">
          <div class="row mb-4 flex">
            <label class="col-lg-4 font-medium text-sm text-slate-500"
              >Full Name</label
            >
            <div class="col-lg-8">
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
          </div>
          <div class="row mb-4 flex">
            <label class="col-lg-4 font-medium text-sm text-slate-500"
              >Full Name</label
            >
            <div class="col-lg-8">
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
          </div>
          <div class="row mb-4 flex">
            <label class="col-lg-4 font-medium text-sm text-slate-500"
              >Gender</label
            >
            <div class="col-lg-8">
              <select class="form-select" aria-label="Default select example">
                <option selected>Choose gender</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
                <option value="3">Other</option>
              </select>
            </div>
          </div>
          <div class="row mb-4 flex">
            <label class="col-lg-4 font-medium text-sm text-slate-500"
              >DoB</label
            >
            <div class="col-lg-8">
              <input
                v-model="date"
                type="date"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
          </div>
          <div class="row mb-4 flex">
            <label class="col-lg-4 font-medium text-sm text-slate-500"
              >Phone</label
            >
            <div class="col-lg-8 font-semibold text-sm flex">
              <input
                type="text"
                class="form-control w-6/12"
                id="exampleInputPassword1"
              />
              <button
                class="bg-slate-600 text-white px-2 py-1 rounded-md ml-2 text-xs cursor-pointer"
              >
                Verified
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderAdmin from "@/components/headerAdmin.vue";
export default {
  components: {
    HeaderAdmin,
  },
  data() {
    return {
      title: "Add New Member",
    };
  },
};
</script>
