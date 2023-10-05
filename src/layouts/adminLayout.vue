<template>
  <div class="flex">
    <nav class="nav_title flex-none w-24 bg-white fixed z-1">
      <ul class="leading-10 px-2 text-gray-500 text-center">
        <li class="logo pb-6 mt-6">
          <router-link to="/furnitureManage">
            <img
              class="w-7/12 ml-3"
              src="@/assets/images/logo_icon.png"
              alt="logo"
            />
          </router-link>
        </li>
        <li>
          <i class="bi bi-columns-gap"></i>
          <p>Dasboard</p>
        </li>
        <li>
          <router-link to="/userManagment">
            <i class="bi bi-people"></i>
            <p>User</p>
          </router-link>
        </li>
        <li>
          <router-link to="/furnitureView">
            <i class="bi bi-tree"></i>
            <p>Furniture</p>
          </router-link>
        </li>
        <li>
          <router-link to="/materialView">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 ml-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
              />
            </svg>

            <p>Material</p>
          </router-link>
        </li>
        <li>
          <i class="bi bi-person-gear"></i>
          <p>Account</p>
        </li>
      </ul>

      <div class="avatar w-8/12">
        <router-link to="/profileAssistant">
          <img
            class="rounded-md ml-3 cursor-pointer"
            src="@/assets/images/avatar.jpg "
            alt="avatar"
          />
        </router-link>
        <p class="text-xs text-slate-400 font-normal ml-4 mt-2">Admin</p>
      </div>
    </nav>
    <nav class="nav_content flex-none w-80 bg-white fixed p-5 z-1">
      <div>
        <div class="group">
          <svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
            <g>
              <path
                d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
              ></path>
            </g>
          </svg>
          <input placeholder="Search" type="search" class="input" />
        </div>
      </div>
      <div>
        <h1 class="text-slate-700 font-semibold mb-6 mt-5 text-lg">
          Management Users
        </h1>
        <ul class="task_user leading-10 text-gray-500">
          <li>
            <router-link to="userManaegment" class="flex">
              <i class="bi bi-person-check pr-4"></i>
              <p class="font-normal">User List</p>
            </router-link>
          </li>

          <li class="text-gray-500 cursor-none">
            <div
              class="flex"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="true"
            >
              <i class="bi bi-person-lines-fill pr-4"></i>
              <p class="font-normal">Roles</p>
            </div>
            <ul
              class="user_roles mb-10 tex-base text-slate-500 font-normal ml-3"
            >
              <li>
                <router-link to="/adManagement">
                  <i class="fa-regular fa-circle-dot"></i>Admin</router-link
                >
              </li>
              <li>
                <router-link to="/cusManagement">
                  <i class="fa-regular fa-circle-dot"></i>Customer</router-link
                >
              </li>
              <li>
                <router-link to="/asManagement"
                  ><i class="fa-regular fa-circle-dot"></i
                  >Assistant</router-link
                >
              </li>
              <li>
                <router-link to="/ownerManagement"
                  ><i class="fa-regular fa-circle-dot"></i>Shop
                  Owner</router-link
                >
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
    <div class="content grow z-0">
      <slot />
    </div>
  </div>
</template>
<style scoped>
div,
i {
  font-style: normal;
}
li {
  cursor: pointer;
}
.nav_title {
  border-right: 1px solid transparent;
  border-right-color: #f1f1f2;
  color: var(--bs-text-gray-400);
}
.nav_title li {
  border-bottom: 1px solid transparent;
  border-bottom-color: #f1f1f2;
  padding-top: 8px;
}
.nav_title i,
i {
  font-size: 22px;
}
.nav_title p {
  font-size: 14px;
  font-weight: 500;
}
.nav_content {
  margin-left: 96px;
  --fc-event-text-color: var(--bs-primary-inverse);
  border-right: 1px solid transparent;
  border-right-color: #f1f1f2;
}
.content {
  margin-left: 26em;
  background-color: #f3f6f9;
  padding: 0 30px;
}
/* icon_search */
.group {
  display: flex;
  line-height: 28px;
  align-items: center;
  position: relative;
  max-width: 225px;
}

.input {
  width: 100%;
  height: 40px;
  line-height: 28px;
  padding: 0 1rem;
  padding-left: 2.5rem;
  border: 2px solid transparent;
  border-radius: 8px;
  outline: none;
  background-color: #f3f3f4;
  color: #0d0c22;
  transition: 0.3s ease;
}

.input::placeholder {
  color: #9e9ea7;
}

.input:focus,
input:hover {
  outline: none;
  border-color: rgba(234, 76, 137, 0.4);
  background-color: #fff;
  box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
}

.icon {
  position: absolute;
  left: 1rem;
  fill: #9e9ea7;
  width: 1rem;
  height: 1rem;
}
svg .dashboard {
  margin-left: 28px;
}
.avatar {
  margin-top: 50%;
}
.user_roles i {
  font-size: 39%;
  margin-right: 2em;
  margin-top: 1.3em;
}
.dropdown-menu.user_roles {
  border: none;
  width: 100%;
}
.task_user p,
.user_roles {
  font-size: 15px;
  font-weight: 400;
}
</style>
