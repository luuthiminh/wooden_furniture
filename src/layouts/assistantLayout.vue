<template>
  <header>
    <ul class="header">
      <li class="ml-10 grid grid-cols-3 gap-x-2 w-1/12">
        <div class="col-span-1">
          <router-link to="/furnitureManage">
            <img
              class="w-10/12"
              src="@/assets/images/logo_icon.png"
              alt="logo"
            />
          </router-link>
        </div>
        <p class="col-span-2 items-center text-2xl font-medium mt-1">L & L</p>
      </li>
      <li class="ml-40">
        <div class="border border-gray-900 rounded-md">
          <i
            class="fa-solid fa-bars text-slate-500 px-1 py-1 cursor-pointer"
          ></i>
        </div>
      </li>
      <li class="mx-3"><p class="stock">STOCK INFORMATION</p></li>
      <li>
        <i class="fa-regular fa-bell"><sup>2</sup></i>
      </li>
      <li class="w-1/12">
        <img
          class="rounded-full ml-10 w-4/12"
          src="https://ordinaryofficial.vn/wp-content/uploads/2022/12/con-gai-han-quoc.jpg"
          alt="avatar"
        />
      </li>
      <li><i class="fa-solid fa-arrow-right-from-bracket"></i></li>
    </ul>
  </header>
  <div class="content pt-16">
    <div class="flex flex-cols-10">
      <div class="col-span-3 fixed">
        <div class="grid grid-cols-2">
          <nav class="col-span-1 nav">
            <div class="user">
              <div class="user-box text-center">
                <div class="avatar ml-1">
                  <img
                    class="img-profile img-circle img-responsive center-block rounded-full"
                    src="https://ordinaryofficial.vn/wp-content/uploads/2022/12/con-gai-han-quoc.jpg"
                    alt="avatar"
                  />
                </div>
                <div class="user-info mt-1">
                  <span class="user_name">Minh</span>
                  <span class="assistant">Assistant</span>
                </div>
                <hr class="user_hr text-slate-500" />
              </div>
            </div>

            <ul class="bar leading-4 nav nav-stacked" role="tablist">
              <li role="presentation" class="active pl-3">
                <a
                  href="#furniture"
                  aria-controls="furniture"
                  role="tab"
                  data-toggle="tab"
                >
                  <i class="fa-solid fa-store"></i>
                  <p>Furniture</p></a
                >
              </li>
              <li role="presentation" class="pl-3">
                <a
                  href="#material"
                  aria-controls="material"
                  role="tab"
                  data-toggle="tab"
                >
                  <i class="fa-solid fa-flask"></i>
                  <p>Material</p></a
                >
              </li>
              <li role="presentation" class="pl-2">
                <a
                  href="#feeback"
                  aria-controls="feedback"
                  role="tab"
                  data-toggle="tab"
                >
                  <i class="fa-solid fa-comment"></i>
                  <p>Feedback</p></a
                >
              </li>
              <li role="presentation" class="pl-3">
                <a
                  href="#wishlist"
                  aria-controls="wishlist"
                  role="tab"
                  data-toggle="tab"
                >
                  <i class="fa-solid fa-heart-circle-check"></i>
                  <p>Wishlist</p></a
                >
              </li>
              <li role="presentation" class="pl-1">
                <a
                  href="#notification"
                  aria-controls="notification"
                  role="tab"
                  data-toggle="tab"
                >
                  <i class="fa-solid fa-bell"></i>
                  <p>Notification</p></a
                >
              </li>
            </ul>
          </nav>
          <div class="col-span-2 bar_content pt-2 bg-gray-50">
            <!-- Tab panes -->
            <div class="tab-content col-span-5">
              <div role="tabpanel" class="tab-pane active" id="furniture">
                <div class="">
                  <div class="h-12/12 px-2">
                    <div class="px-2 pt-9 pb-2 mt-9">
                      <h3 class="text-center font-medium">Manager Furniture</h3>
                      <hr class="w-12/12 ml-1 mt-9" />
                      <div class="search mt-4">
                        <div class="container">
                          <input
                            type="text"
                            name="text"
                            class="input"
                            placeholder="Dark Twitch Search"
                          />
                          <button class="search__btn">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="22"
                              height="22"
                            >
                              <path
                                d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"
                                fill="#efeff1"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="px-4 text-sm">
                      <ul class="furniture leading-10">
                        <li>
                          <router-link to="/furnitureManage"
                            >All Furniture</router-link
                          >
                        </li>
                        <li>
                          <router-link to="/newFurniture"
                            >New Furniture</router-link
                          >
                        </li>
                        <li>Export products</li>
                        <li>Inventory</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div role="tabpanel" class="tab-pane" id="material">
                <div class="">
                  <div class="h-12/12 px-2">
                    <div class="px-2 pt-9 pb-2 mt-9">
                      <h3 class="text-center font-medium">Manager Material</h3>
                      <hr class="w-12/12 ml-1 mt-9" />
                      <div class="search mt-4">
                        <div class="container">
                          <input
                            type="text"
                            name="text"
                            class="input"
                            placeholder="Dark Twitch Search"
                          />
                          <button class="search__btn">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="22"
                              height="22"
                            >
                              <path
                                d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"
                                fill="#efeff1"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="px-4 text-sm">
                      <ul class="furniture leading-10">
                        <li>All material</li>
                        <li>New material</li>
                        <li>Export material</li>
                        <li>Inventory material</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div role="tabpanel" class="tab-pane" id="feedback"></div>
              <div role="tabpanel" class="tab-pane" id="wishlist"></div>
              <div role="tabpanel" class="tab-pane" id="notification"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-7">
        <!-- <div class="px-3">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb bg-transparent text-xs pt-3">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item"><a href="#">All Product</a></li>
              <li class="breadcrumb-item active" aria-current="page">Sofa</li>
            </ol>
          </nav>
        </div> -->
        <slot />
      </div>
    </div>
  </div>
</template>
<style scoped>
.header {
  background-color: #302924;
  position: fixed;
  z-index: 99;
  color: wheat;
  display: flex;
  align-items: center;
  height: 70px;
  border: 1px solid #d3c2ae;
}
li {
  cursor: pointer;
}
.user_hr {
  width: 6em;
  margin-left: -20px;
}
.col-span-2.bar_content {
  margin-top: -44em;
  width: 50%;
  margin-left: 6em;
  z-index: 10;
  border-left: 1px solid #d3e0e0;
}
.col-span-7 {
  background-color: #f7f7f7;
  /* background-color: #f1f1f1; */
  margin-left: 22em;
  width: 100%;
}
nav ul {
  border-bottom: none;
}
nav li {
  display: block;
  float: none;
  font-size: 14px;
  border-bottom: 1px solid #dce1e6;
  margin-right: 0;
  margin-bottom: 0;
  color: #616670;
  padding-top: 14px;
  padding-bottom: 13px;
  text-align: center;
}
nav {
  display: block;
  background: white;
  bottom: 0;
  -webkit-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
  width: 16em;
  padding-right: 10em;
  height: 43em;
}
.bar.leading-4 {
  margin-top: 8em;
}
nav i {
  padding-bottom: 15px;
}
.avatar {
  height: 48px;
  width: 48px;
}
.user_name {
  color: #343a40;
  display: block;
  font-weight: 600;
  font-size: 15px;
}
.assistant {
  font-size: 13px;
  color: #98a6ad !important;
}
.user-box {
  min-height: 80px;
  padding: 20px;
  position: relative;
}
/* search */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
}

.input {
  max-width: 190px;
  height: 100%;
  outline: none;
  font-size: 12px;
  font-weight: 500;
  /* background-color: #66645f; */
  background-color: #413f3b;
  caret-color: #f7f7f8;
  color: #fff;
  padding: 7px 10px;
  border: 2px solid transparent;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
  margin-right: 1px;
  transition: all 0.2s ease;
}

.input:hover {
  border: 2px solid rgba(255, 255, 255, 0.16);
}

.input:focus {
  border: 2px solid #a970ff;
  background-color: #0e0e10;
}

.search__btn {
  border: none;
  cursor: pointer;
  /* background-color: rgb(51, 51, 62); */
  background-color: #413f3b;
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
  height: 100%;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.search__btn:hover {
  background-color: rgba(54, 54, 56, 1);
}
.stock {
  margin-right: 43em;
}

.bar_content {
  border-right: 1px solid #d3e0e0;
}
.user {
  height: 0px;
}
.fa-regular {
  font-size: 19px;
}
.fa-solid {
  font-size: 17px;
}
.furniture li {
  color: #616670;
}
.user-box,
.bar.leading-4 {
  background: #f1f1f1;
}
</style>
