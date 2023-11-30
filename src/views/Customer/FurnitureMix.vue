<template>
  <div class="nav pt-36 pb-3 mb-2 max-md:pt-24">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb flex bg-none ml-28 max-sm:ml-3 max-md:ml-4">
        <li class="breadcrumb-item font-semibold text-yellow-950">
          <router-link to="customerIndex">Home</router-link>
        </li>

        <li class="breadcrumb-item active font-medium" aria-current="page">
          Customize Furnitrue
        </li>
      </ol>
    </nav>
  </div>
  <div @mouseover="HandleHeader">
    <div class="px-3 pt-4">
      <div class="flex gap-x-5">
        <div class="flex-none w-96">
          <div>
            <label
              for="exampleInputEmail1"
              class="form-label w-10/12 font-semibold"
              >Color</label
            >
            <br />
            <span class="font-medium text-sm">Please choose room!</span>
            <select
              v-if="filterRoom.length"
              class="form-select text-xs mt-3"
              aria-label="Default select example"
              v-model="furFill"
              @change="onRoomSelected"
            >
              <option v-for="ro in filterRoom" :key="ro" :value="ro">
                {{ ro }}
              </option>
            </select>
          </div>
          <div class="flex flex-cols-2 gap-x-4 mt-3"></div>
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
                    v-if="filterResult.length"
                    class="grid grid-cols-3 max-sm:grid-cols-2 max-md:grid-cols-2 mt-4"
                  >
                    <drag
                      v-for="f in filterResult"
                      :key="f.furnitureId"
                      draggable="true"
                    >
                      <div class="scroll-ml-6 snap-start">
                        <div
                          class="target"
                          :style="{
                            'background-image': `url(${f.image})`,
                          }"
                          draggable="true"
                          @dragstart="onDragstart"
                          @dragleave="onDragleave"
                          :id="f.furnitureId"
                        ></div>
                      </div>
                    </drag>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="grow z-0">
          <div class="dropdown"></div>
          <div class="tab-content mt-3" id="nav-tabContent">
            <div
              class="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <div
                class="box rotate-0"
                @dragover.prevent="onDragover"
                @drop="onDrop"
                @dragleave="onDragleave"
              ></div>
              <div
                class="box2 rotate-0"
                @dragover.prevent="onDragover"
                @drop="onDrop"
                @dragleave="onDragleave"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "App",

  components: {},
  data() {
    return {
      furnitures: [],
      filteredFurnitures: [],
      filterResult: [],
      // furnitures: [
      //   {
      //     id: 1,
      //     url: "bed_1",
      //   },
      //   { id: 2, url: "bed_2" },
      //   { id: 3, url: "bed_3" },
      //   { id: 4, url: "bed_4" },
      //   { id: 5, url: "bed_5" },
      // ],
    };
  },
  created() {
    this.getFurnitures();
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
    async getFurnitures() {
      try {
        const response = await axios.get("customer/furnitures");
        this.furnitures = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    onRoomSelected() {
      console.log("Xin chao");
      this.filterResult = this.furnitures.filter(
        (furniture) => furniture.appropriateRoom === this.furFill
      );
      console.log(this.filterResult);
      console.log(this.filterRoom);
      console.log(this.furFill);
    },
  },
  computed: {
    filterRoom() {
      return this.furnitures
        .map((furniture) => furniture.appropriateRoom)
        .filter((value, index, furs) => furs.indexOf(value) === index);
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
  background-image: url("@/assets/images/mix/bg_livingrom2.jpg");
  background-size: contain;
  background-repeat: none;
}
.box {
  width: 20em;
  border-radius: 20px;
  height: 9em;
  background: #e3dede9c;
  position: absolute;
  top: 75%;
  left: 30%;
  animation: impess 1000ms infinite;
}
@keyframes impess {
  from {
    border: 1px solid white;
  }
  to {
    border: 1px solid black;
  }
}
.box2 {
  width: 20em;
  border-radius: 20px;
  height: 9em;
  background: #e3dede9c;
  position: absolute;
  top: 75%;
  left: 70%;
  animation: impess 1000ms infinite;
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
