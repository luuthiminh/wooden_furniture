<template>
  <header class="header_components_admin flex items-center justify-between">
    <div>
      <h1 class="font-semibold text-xl">{{ title }}</h1>
      <ul class="bar flex text-sm pt-2">
        <li class="text-slate-500">
          <router-link to="/"> User/ </router-link>
        </li>
        <li class="text-slate-500">
          <router-link to="/"> User Management/ </router-link>
        </li>
        <li class="font-medium">
          <router-link to="/"> Customer</router-link>
        </li>
      </ul>
    </div>
    <div class="float-right flex">
      <!-- <div class="avatar w-8/12">
        <router-link to="/profileAssistant">
          <img
            class="rounded-md ml-3 cursor-pointer"
            src="@/assets/images/avatar.jpg "
            alt="avatar"
          />
        </router-link>
        <p class="text-xs text-slate-400 font-normal ml-4 mt-2">Admin</p>
      </div> -->
      <div class="new member">
        <router-link to="/addnewUser">
          <div
            class="flex text-white bg-gradient-to-r from-slate-600 to-slate-900 hover:from-gray-800 hover:to-blue-800 hitrounded-md px-4 py-2 text-sm font-medium rounded-lg shadow-lg shadow-cyan-500/50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="currentColor"
              class="w-5 h-1/6 mr-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            <span>New Member</span>
          </div>
        </router-link>
      </div>
      <div class="">
        <button class="Btn bg-slate-800">
          <div class="sign">
            <svg viewBox="0 0 512 512">
              <path
                d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
              ></path>
            </svg>
          </div>
        </button>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  props: ["title"],
};
</script>
<style scoped>
.header_components_admin {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  height: 100px;
  transition: left 0.3s ease;
  padding: 20px 0px;
}
/* icon_logout */
.Btn {
  --black: #000000;
  --ch-black: #141414;
  --eer-black: #1b1b1b;
  --white: #ffffff;
  --af-white: #f3f3f3;
  --ch-white: #e1e1e1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 35px;
  height: 35px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition-duration: 0.3s;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.199);
  margin-left: 27px;
}

/* plus sign */
.sign {
  width: 100%;
  transition-duration: 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sign svg {
  width: 17px;
}

.sign svg path {
  fill: var(--af-white);
}

/* button click effect*/
.Btn:active {
  transform: translate(2px, 2px);
}
</style>
