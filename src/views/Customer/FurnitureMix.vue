<template>
  <div @mouseover="HandleHeader">
    <div class="px-3 pt-40">
      <!-- <div class="filter_category w-12/12 pb-4"></div> -->
      <div class="flex gap-x-5">
        <div class="flex-none w-96">
          <div class="dropdown dropdow">
            <div
              class="dropdown-toggle text-black text-base font-medium"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Select Furniture Category
            </div>
            <!-- <div class="border-solid border-1 border-gray rounded-full">
            <i
              @click.prevent="toggleShowHeader"
              class="bi bi-chevron-double-up items-center flex px-1 py-1"
            ></i>
          </div> -->
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <li
                  class="dropdown-item nav-link active"
                  id="nav-home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-bed"
                  type="button"
                  role="tab"
                  aria-controls="nav-bed"
                  aria-selected="true"
                >
                  Bed
                </li>
                <li
                  class="nav-link dropdown-item"
                  id="nav-profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-sofa"
                  type="button"
                  role="tab"
                  aria-controls="nav-sofa"
                  aria-selected="false"
                >
                  Sofa
                </li>
                <li
                  class="nav-link dropdown-item"
                  id="nav-profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-clock"
                  type="button"
                  role="tab"
                  aria-controls="nav-clock"
                  aria-selected="false"
                >
                  Clock
                </li>
              </div>
            </ul>
          </div>
          <div class="flex flex-cols-2 gap-x-4 mt-3">
            <form class="form">
              <label for="search" class="mt-2">
                <input
                  required=""
                  autocomplete="off"
                  placeholder="search your chats"
                  id="search"
                  type="text"
                />
                <div class="icon">
                  <svg
                    stroke-width="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="swap-on"
                  >
                    <path
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                    ></path>
                  </svg>
                  <svg
                    stroke-width="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="swap-off"
                  >
                    <path
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                    ></path>
                  </svg>
                </div>
                <button type="reset" class="close-btn">
                  <svg
                    viewBox="0 0 20 20"
                    class="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clip-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </label>
            </form>
          </div>
          <div class="tab-content" id="nav-tabContent">
            <div
              class="tab-pane fade show active"
              id="nav-bed"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <div class="img furniture">
                <div class="overflow-y-scroll snap-x pb-40">
                  <div
                    v-if="furnitures.length"
                    class="grid grid-cols-3 max-sm:grid-cols-2 max-md:grid-cols-2 mt-4"
                  >
                    <drag v-for="f in furnitures" :key="f.id" draggable="true">
                      <div class="scroll-ml-6 snap-start">
                        <div
                          class="target"
                          :style="{
                            'background-image': `url(${require(`@/assets/images/category/bed/${f.url}.png`)})`,
                          }"
                          draggable="true"
                          @dragstart="onDragstart"
                          @dragleave="onDragleave"
                          :id="f.id"
                        ></div>
                      </div>

                      <!-- <div class="scroll-ml-6 snap-start ...">
                    <img src="@/assets/images/category/bed/bed_2.png" />
                  </div>
                  <div class="scroll-ml-6 snap-start ...">
                    <img src="@/assets/images/category/bed/bed_3.png" />
                  </div>
                  <div class="scroll-ml-6 snap-start ...">
                    <img src="@/assets/images/category/bed/bed_4.png" />
                  </div>
                  <div class="scroll-ml-6 snap-start ...">
                    <img src="@/assets/images/category/bed/bed_5.png" />
                  </div> -->
                    </drag>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="nav-sofa"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              <div class="img furniture">
                <div class="overflow-y-scroll snap-x">
                  <div class="scroll-ml-6 snap-start ...">
                    <img
                      src="@/assets/images/category/sofa/sofa_1.png"
                      class="target"
                      draggable="true"
                      @dragstart="onDragstart"
                      @dragleave="onDragleave"
                      @dragenter.prevent="onDragenter"
                      id="6"
                    />
                  </div>
                  <div class="scroll-ml-6 snap-start ...">
                    <img
                      src="@/assets/images/category/sofa/sofa_2.png"
                      class="target"
                      draggable="true"
                      @dragstart="onDragstart"
                      @dragleave="onDragleave"
                      @dragenter.prevent="onDragenter"
                      id="7"
                    />
                  </div>
                  <div class="scroll-ml-6 snap-start ...">
                    <img
                      src="@/assets/images/category/sofa/sofa_3.png"
                      class="target"
                      draggable="true"
                      @dragstart="onDragstart"
                      @dragleave="onDragleave"
                      @dragenter.prevent="onDragenter"
                      id="8"
                    />
                  </div>
                  <div class="scroll-ml-6 snap-start ...">
                    <img
                      src="@/assets/images/category/sofa/sofa_4.png"
                      class="target"
                      draggable="true"
                      @dragstart="onDragstart"
                      @dragleave="onDragleave"
                      @dragenter.prevent="onDragenter"
                      id=""
                    />
                  </div>
                  <div class="scroll-ml-6 snap-start ...">
                    <img
                      src="@/assets/images/category/sofa/sofa_5.png"
                      class="target"
                      draggable="true"
                      @dragstart="onDragstart"
                      @dragleave="onDragleave"
                      @dragenter.prevent="onDragenter"
                      id="10"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="nav-clock"
              role="tabpanel"
              aria-labelledby="nav-contact-tab"
            >
              <div class="img furniture">
                <div class="overflow-y-scroll snap-x px-4">
                  <div class="scroll-ml-6 snap-start ...">
                    <img src="@/assets/images/category/clock/clock_1.png" />
                  </div>
                  <div class="scroll-ml-6 snap-start ...">
                    <img src="@/assets/images/category/clock/clock_2.png" />
                  </div>
                  <div class="scroll-ml-6 snap-start ...">
                    <img src="@/assets/images/category/clock/clock_3.png" />
                  </div>
                  <div class="scroll-ml-6 snap-start ...">
                    <img src="@/assets/images/category/clock/clock_4.png" />
                  </div>
                  <div class="scroll-ml-6 snap-start ...">
                    <img src="@/assets/images/category/clock/clock_5.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="grow z-0">
          <div class="dropdown">
            <button
              class="dropdown-toggle text-black text-base font-medium"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Backgrounds Category
            </button>
            <!-- <div class="flex gap-x-4">
              <Button
                @click.prevent="HandlePlus"
                class="w-10 h-10 rounded bg-white relative before:w-full before:h-full before:bg-primary-hover-container before:absolute before:left-0 before:top-0 before:transition before:opacity-0 before:rounded flex justify-center items-center sm+:hover:border-primary border text-base-content-secondary sm+:hover:text-primary hover:before:opacity-100 group"
                ><i class="bi bi-plus-lg"></i>
              </Button>
              <Button
                class="w-10 h-10 rounded bg-white relative before:w-full before:h-full before:bg-primary-hover-container before:absolute before:left-0 before:top-0 before:transition before:opacity-0 before:rounded flex justify-center items-center sm+:hover:border-primary border text-base-content-secondary sm+:hover:text-primary hover:before:opacity-100 group"
              >
                <i class="bi bi-dash-lg"></i>
              </Button>
              <Button
                class="w-10 h-10 rounded bg-white relative before:w-full before:h-full before:bg-primary-hover-container before:absolute before:left-0 before:top-0 before:transition before:opacity-0 before:rounded flex justify-center items-center sm+:hover:border-primary border text-base-content-secondary sm+:hover:text-primary hover:before:opacity-100 group"
              >
                <i class="bi bi-arrow-clockwise"></i>
              </Button>
            </div> -->
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <li
                  class="dropdown-item nav-link active"
                  id="nav-home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-home"
                  type="button"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                >
                  Bedroom
                </li>
                <li
                  class="nav-link dropdown-item"
                  id="nav-profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-profile"
                  type="button"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                >
                  Livingroom 1
                </li>
                <li
                  class="nav-link dropdown-item"
                  id="nav-profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-profile"
                  type="button"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                >
                  Livingroom 2
                </li>
              </div>
            </ul>
          </div>
          <div class="tab-content mt-3" id="nav-tabContent">
            <div
              class="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <!-- <img
              src="@/assets/images/mix/bg-bedroom.jpg"
              alt="background"
              class="box"
            /> -->

              <div
                class="box rotate-0"
                @dragover.prevent="onDragover"
                @drop="onDrop"
                @dragleave="onDragleave"
              ></div>
            </div>

            <div
              class="tab-pane fade"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              <img
                src="@/assets/images/mix/bg-livingroom.jpg"
                alt="background"
              />
            </div>
            <div
              class="tab-pane fade"
              id="nav-contact"
              role="tabpanel"
              aria-labelledby="nav-contact-tab"
            >
              <img
                src="@/assets/images/mix/bg_livingrom2.jpg"
                alt="background"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      furnitures: [
        {
          id: 1,
          url: "bed_1",
        },
        { id: 2, url: "bed_2" },
        { id: 3, url: "bed_3" },
        { id: 4, url: "bed_4" },
        { id: 5, url: "bed_5" },
      ],
    };
  },
  methods: {
    onDragstart(event) {
      event.dataTransfer.setData("text", event.target.id);
    },
    onDrop(event) {
      const newData = event.dataTransfer.getData("text");
      const currentTarget = document.getElementById(newData);
      console.log(newData);
      console.log(event.target);
      if (!event.target.contains(currentTarget)) {
        if (event.target.classList.contains("target")) {
          event.target.classList.remove("target");
          event.target.appendChild(document.getElementById(newData));
        } else {
          event.target.appendChild(document.getElementById(newData));
        }
      }
    },
  },
};
</script>

<style scoped>
.overflow-y-scroll.snap-x {
  height: 33em;
}
.drag {
  width: 50px;
  height: 50px;
  background-color: rgb(220, 220, 255);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 10px 10px 0 10px;
  font-size: 20px;
}

.circle-outside,
.circle-inside {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 20px;
  transform: translate(-50%, -50%);
}

.circle-inside {
  background-color: rgb(150, 150, 150);
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.circle-outside {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 30px 52px 30px;
  border-color: transparent transparent rgb(255, 200, 200) transparent;
  position: relative;
}

.circle-outside .text {
  position: absolute;
  top: 25px;
  transform: translate(0, -50%);
}

.outside {
  border: 1px solid black;
  height: 500px;
  width: 800px;
  margin: 20px auto;
  position: relative;
  padding: 10px;
}

.inside {
  position: absolute;
  border: 1px solid black;
  top: 100px;
  left: 130px;
  bottom: 100px;
  right: 130px;
  padding: 10px;
}

.mask {
  position: absolute;
  border: 1px solid black;
  top: 100px;
  left: 130px;
  bottom: 100px;
  right: 130px;
  background-color: rgba(255, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
}

.mask::before {
  content: "MASK";
  color: rgba(0, 0, 0, 0.4);
  font-size: 30px;
  font-weight: bold;
}

.drop-allowed {
  background-color: rgba(0, 255, 0, 0.2);
}

.drop-forbidden {
  background-color: rgba(255, 0, 0, 0.2);
}

.drop-in {
  box-shadow: 0 0 5px rgba(0, 0, 255, 0.4);
}
#nav-home {
  width: 67em;
  height: 36em;
  margin-bottom: 10em;
  background-image: url("@/assets/images/mix/bg_be2.jpg");
  background-size: contain;
  background-repeat: none;
}
.box {
  width: 20em;
  height: 13em;
  background: transparent;
  position: absolute;
  top: 70%;
  left: 30%;
  border: 1px solid white;
  animation: impess 500ms infinite;
}
@keyframes impess {
  from {
    border: 1px solid white;
  }
  to {
    border: 1px solid black;
  }
}

.target {
  display: block;
  height: 6em;
  background-position: center;
  background-origin: border-box;
  background-size: contain;
  background-repeat: no-repeat;
  border: 1px solid #eee;
}
.box .target {
  height: 16em;
  border: none;
  transform: scale3d(1.5, 1.5, 1.5);
}
/* search */
/* From uiverse.io by @satyamchaudharydev */
/* this button is inspired by -- whatsapp input */
/* == type to see fully interactive and click the close buttom to remove the text  == */

.form {
  --input-bg: #fff;
  /*  background of input */
  --padding: 1.5em;
  --rotate: 80deg;
  /*  rotation degree of input*/
  --gap: 2em;
  /*  gap of items in input */
  --icon-change-color: #15a986;
  /*  when rotating changed icon color */
  --height: 25px;
  /*  height */
  width: 200px;
  padding-inline-end: 1em;
  /*  change this for padding in the end of input */
  background: var(--input-bg);
  position: relative;
  border-radius: 4px;
  border: 1px solid #d0cdcd;
}

.form label {
  display: flex;
  align-items: center;
  width: 100%;
  height: var(--height);
}

.form input {
  width: 100%;
  padding-inline-start: calc(var(--padding) + var(--gap));
  outline: none;
  background: none;
  border: 0;
  font-size: 13px;
}
/* style for both icons -- search,close */
.form svg {
  /* display: block; */
  color: #111;
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: absolute;
  height: 13px;
}
/* search icon */
.icon {
  position: absolute;
  left: var(--padding);
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  justify-content: center;
  align-items: center;
}
/* arrow-icon*/
.swap-off {
  transform: rotate(-80deg);
  opacity: 0;
  visibility: hidden;
}
/* close button */
.close-btn {
  /* removing default bg of button */
  background: none;
  border: none;
  right: calc(var(--padding) - var(--gap));
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #111;
  padding: 0.1em;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transition: 0.3s;
  opacity: 0;
  transform: scale(0);
  visibility: hidden;
}

.form input:focus ~ .icon {
  transform: rotate(var(--rotate)) scale(1.3);
}

.form input:focus ~ .icon .swap-off {
  opacity: 1;
  transform: rotate(-80deg);
  visibility: visible;
  color: var(--icon-change-color);
}

.form input:focus ~ .icon .swap-on {
  opacity: 0;
  visibility: visible;
}

.form input:valid ~ .icon {
  transform: scale(1.3) rotate(var(--rotate));
}

.form input:valid ~ .icon .swap-off {
  opacity: 1;
  visibility: visible;
  color: var(--icon-change-color);
}

.form input:valid ~ .icon .swap-on {
  opacity: 0;
  visibility: visible;
}

.form input:valid ~ .close-btn {
  opacity: 1;
  visibility: visible;
  transform: scale(1);
  transition: 0s;
}

.overflow-y-scroll::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #f5f5f5;
}
.overflow-y-scroll::-webkit-scrollbar {
  width: 6px;
  background-color: #f5f5f5;
}

.overflow-y-scroll::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #cdc0aa;
}
</style>
