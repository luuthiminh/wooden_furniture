<template>
  <header class="header_components_admin flex items-center justify-between">
    <div>
      <h1 class="font-semibold text-xl">{{ title }}</h1>
      <ul class="bar flex text-sm pt-2">
        <li>
          <router-link to="/userManaegment" class="text-decoration-none">
            User /
          </router-link>
        </li>
        <li>
          <router-link to="/adManagement" class="text-decoration-none">
            Roles /
          </router-link>
        </li>
        <li class="font-medium">
          <router-link to="/adManagement" class="text-decoration-none">
            Admin
          </router-link>
        </li>
      </ul>
    </div>
    <div class="absolute right-3 flex items-center top-5 my-2">
      <div
        @click="OpenNavBar"
        class="hidden border border-1 border-solid-yellow-950 rounded-md hover:bg-slate-200 cursor-pointer ring-1 ring-yellow-600 max-sm:block max-md:block bg-yellow-900 opacity-70"
      >
        <i class="bi bi-list px-2 text-white hover:text-yellow-950"></i>
      </div>
    </div>
    <div class="float-right flex max-sm:hidden max-md:hidden">
      <div class="new member">
        <router-link to="/addnewUser" class="text-decoration-none">
          <div
            class="new_member flex text-white hitrounded-md px-3 py-2 text-sm font-medium rounded-lg shadow-lg shadow-cyan-500/50"
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
            <span class="text-white">New Member</span>
          </div>
        </router-link>
      </div>
      <div class="">
        <button class="Btn">
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
  <div v-show="!isNavBar">
    <div class="overlay">
      <div class="nav_bar">
        <div class="logo border-1 border-bottom boder-slate-300">
          <div class="flex px-5 py-3">
            <img
              class="w-2/12 ml-3"
              src="@/assets/images/logo.png"
              alt="logo"
            />
            <span class="font-bold text-2xl items-center">L&L</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title"],
  data() {
    return {
      isNavBar: false,
    };
  },
  methods: {
    OpenNavBar() {
      this.isNavBar = !this.isNavBar;
    },
    closeNavBar() {
      this.isNavBar = !this.isNavBar;
    },
  },
};
</script>
<style scoped>
.header_components_admin {
  height: 100px;
  transition: left 0.3s ease;
  margin-bottom: 1em;
  position: fixed;
  background: white;
  z-index: 10;
  width: 69em;
  max-width: 100%;
  margin-left: -2em;
  padding-right: 2em;
  padding-left: 2em;
}
.overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(29, 29, 29, 0.3);
  animation: fadeIn linear 0.2s;
  z-index: 100;
  margin-left: -2em;
}
.nav_bar {
  width: 15.4em;
  height: 100%;
  background: rgb(251, 250, 250);
  /* background: black; */
  box-shadow: 10px 0 5px -2px #b6b2b2;
}
.new_member {
  background-color: #ab7442;
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
  background: #ab7442;
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
h1,
li {
  color: rgb(79, 59, 25);
}
</style>
