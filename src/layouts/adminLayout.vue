<template>
  <div class="layout flex">
    <nav class="nav__layout_header flex-none w-24 bg-white fixed z-1">
      <ul class="nav leading-10 text-center nav nav-stacked" role="tablist">
        <li role="presentation" class="logo pb-3 mt-6 cursor-poniter">
          <a
            href="#users active"
            aria-controls="users"
            role="tab"
            data-toggle="tab"
          >
            <img
              class="w-7/12 ml-3"
              src="@/assets/images/logo.png"
              alt="logo"
            />
            <span class="text-sm font-bold">L & L</span>
          </a>
        </li>
        <li role="presentation" class="w-full">
          <a href="#users" aria-controls="users" role="tab" data-toggle="tab">
            <i class="bi bi-people"></i>
            <p>User</p>
          </a>
        </li>
        <li role="presentation" class="w-full">
          <a
            href="#furniture"
            aria-controls="furniture"
            role="tab"
            data-toggle="tab"
            class="active"
          >
            <i class="bi bi-house"></i>
            <p>Furniture</p>
          </a>
        </li>
        <li role="presentation" class="w-full">
          <!-- <a
            href="#materials"
            aria-controls="materials"
            role="tab"
            data-toggle="tab"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 ml-9"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
              />
            </svg>

            <p>Material</p>
          </a> -->
          <router-link to="/materialView">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 ml-9"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
              />
            </svg>

            <p>Material</p></router-link
          >
        </li>
        <li role="presentation" class="w-full">
          <!-- <a
            href="#collections"
            aria-controls="collections"
            role="tab"
            data-toggle="tab"
          >
            <i class="bi bi-collection"></i>
            <p>Collection</p>
          </a> -->
          <router-link to="/collectionManagement">
            <i class="bi bi-collection"></i>
            <p>Collection</p>
          </router-link>
        </li>
        <li role="presentation" class="w-full">
          <!-- <a
            href="#categories"
            aria-controls="categories"
            role="tab"
            data-toggle="tab"
          >
            <i class="bi bi-tags"></i>
            <p>Category</p>
          </a> -->
          <router-link to="/categoryManagement">
            <i class="bi bi-tags"></i>
            <p>Category</p>
          </router-link>
        </li>
      </ul>

      <div class="nav__layout__avatar w-8/12">
        <router-link to="/profileAssistant">
          <img
            class="rounded-md ml-3 cursor-pointer"
            src="@/assets/images/avatar.jpg "
            alt="avatar"
          />
        </router-link>
        <p class="text-xs font-normal ml-4 mt-2">Admin</p>
      </div>
    </nav>
    <nav
      class="nav__layout__content flex-none w-80 bg-white fixed px-5 pt-4 z-1"
    >
      <div class="tab-content col-span-5">
        <div role="tabpanel" class="tab-pane" id="users">
          <h1 class="font-semibold mb-6 mt-2 text-lg">Management Users</h1>
          <div>
            <SearchAdmin />
          </div>
          <!-- <hr class="my-6" /> -->
          <div>
            <ul class="task_user leading-10 text-stone-600 mt-4">
              <li class="py-2">
                <router-link to="/dashboardUser" class="flex">
                  <i class="bi bi-columns-gap pr-3"></i>
                  <p class="font-normal">Dashboard</p>
                </router-link>
              </li>
              <li class="py-2">
                <router-link to="userManaegment" class="flex">
                  <i class="bi bi-person-check pr-3"></i>
                  <p class="font-normal">User List</p>
                </router-link>
              </li>
              <li class="cursor-none py-2">
                <div class="dropdown">
                  <div
                    class="flex"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="bi bi-person-gear pr-3"></i>
                    <p class="font-normal">Roles</p>
                    <i
                      class="bi bi-chevron-double-down text-xs pl-28"
                      style="font-size: 62%; padding-top: 10px"
                    ></i>
                  </div>
                  <ul
                    class="dropdown-menu user_roles mb-10 tex-base text-stone-600 font-normal ml-3"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <router-link to="/adManagement">
                        <i class="fa-regular fa-circle-dot"></i
                        >Admin</router-link
                      >
                    </li>
                    <li>
                      <router-link to="/cusManagement">
                        <i class="fa-regular fa-circle-dot"></i
                        >Customer</router-link
                      >
                    </li>
                    <li>
                      <router-link to="/asManagement"
                        ><i class="fa-regular fa-circle-dot"></i
                        >Assistant</router-link
                      >
                    </li>
                    <li></li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div role="tabpanel" class="tab-pane active" id="furniture">
          <h1 class="text-yellow-950 font-semibold mb-6 mt-2 text-lg">
            Management Furniture
          </h1>
          <div>
            <SearchAdmin />
          </div>
          <div>
            <ul class="task_user leading-10 text-stone-600 mt-4">
              <li class="py-2">
                <router-link to="/dashboardFurniture" class="flex">
                  <i class="bi bi-columns-gap pr-3"></i>
                  <p class="font-normal">Dashboard</p>
                </router-link>
              </li>
              <li class="py-2">
                <router-link to="/furnitureManagement" class="flex">
                  <i class="bi bi-person-check pr-3"></i>
                  <p class="font-normal">All Furniture</p>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <!-- <div role="tabpanel" class="tab-pane" id="materials">
          <h1 class="text-yellow-950 font-semibold mb-6 mt-2 text-lg">
            Material Management
          </h1>
          <div>
            <SearchAdmin />
          </div>
          <div>
            <ul class="task_user leading-10 text-stone-600 mt-4">
              <li class="py-2">
                <router-link to="/materialView" class="flex">
                  <i class="bi bi-columns-gap pr-3"></i>
                  <p class="font-normal">All Material</p>
                </router-link>
              </li>
              <li class="py-2">
                <router-link to="/furnitureManagement" class="flex">
                  <i class="bi bi-person-check pr-3"></i>
                  <p class="font-normal"></p>
                </router-link>
              </li>
            </ul>
          </div>
        </div> -->
        <!-- <div role="tabpanel" class="tab-pane" id="collections">
          <h1 class="text-yellow-950 font-semibold mb-6 mt-2 text-lg">
            Management Furniture
          </h1>
          <div>
            <SearchAdmin />
          </div>
          <div>
            <ul class="task_user leading-10 text-stone-600 mt-4">
              <li class="py-2">
                <router-link to="/dashboardFurniture" class="flex">
                  <i class="bi bi-columns-gap pr-3"></i>
                  <p class="font-normal">Dashboard</p>
                </router-link>
              </li>
              <li class="py-2">
                <router-link to="/furnitureManagement" class="flex">
                  <i class="bi bi-person-check pr-3"></i>
                  <p class="font-normal">All Furniture</p>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div role="tabpanel" class="tab-pane" id="categories">
          <h1 class="text-yellow-950 font-semibold mb-6 mt-2 text-lg">
            Management Furniture
          </h1>
          <div>
            <SearchAdmin />
          </div>
          <div>
            <ul class="task_user leading-10 text-stone-600 mt-4">
              <li class="py-2">
                <router-link to="/dashboardFurniture" class="flex">
                  <i class="bi bi-columns-gap pr-3"></i>
                  <p class="font-normal">Dashboard</p>
                </router-link>
              </li>
              <li class="py-2">
                <router-link to="/furnitureManagement" class="flex">
                  <i class="bi bi-person-check pr-3"></i>
                  <p class="font-normal">All Furniture</p>
                </router-link>
              </li>
            </ul>
          </div>
        </div> -->
      </div>
    </nav>
    <div class="content grow z-0">
      <slot />
    </div>
  </div>
</template>
<script>
import SearchAdmin from "@/components/searchAdmin.vue";

export default {
  components: {
    SearchAdmin,
  },
  data() {
    return {
      iShow: false,
    };
  },
};
</script>
<style>
.layout div,
.layout i {
  font-style: normal;
}
.layout li {
  cursor: pointer;
}
.nav__layout_header {
  border-right: 1px solid transparent;
  border-right-color: #f1f1f2;
  color: var(--bs-text-gray-400);
}
.nav__layout_header li {
  border-bottom: 1px solid transparent;
  border-bottom-color: #f1f1f2;
  padding-top: 8px;
}
.nav__layout_header i,
i {
  font-size: 22px;
}
.nav__layout_header p {
  font-size: 14px;
  font-weight: 500;
}
.nav__layout__content {
  margin-left: 96px;
  --fc-event-text-color: var(--bs-primary-inverse);
  border-right: 1px solid transparent;
  border-right-color: #f1f1f2;
}
.content {
  margin-left: 26em;
  background-color: #eeefef4d;
  padding: 0 30px;
}

.nav__layout__avatar {
  margin-top: 50%;
}
.nav__layout__content .user_roles i {
  font-size: 39%;
  margin-right: 2em;
  margin-top: 1.3em;
}
.nav__layout__content .dropdown-menu.user_roles {
  border: none;
  width: 100%;
}
.nav__layout__content .task_user p,
.nav__layout__content .user_roles {
  font-size: 15px;
  font-weight: 400;
}
.layout p,
.layout li,
.layout i,
.layout h1 {
  color: rgb(83, 61, 22);
}
</style>
