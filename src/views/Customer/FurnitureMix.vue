<template>
  <div class="px-3 py-36">
    <!-- <div class="filter_category w-12/12 pb-4"></div> -->
    <div class="flex gap-x-10">
      <div class="flex-none w-80">
        <div class="dropdown">
          <button
            class="btn dropdown-toggle text-black px-2"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Furniture Category
          </button>

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
        <div class="tab-content" id="nav-tabContent">
          <div
            class="tab-pane fade show active"
            id="nav-bed"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <div class="img furniture">
              <div class="overflow-y-scroll snap-x px-4 pb-40">
                <div v-if="furnitures.length">
                  <drag v-for="f in furnitures" :key="f.id" draggable="true">
                    <div class="scroll-ml-6 snap-start">
                      <div
                        class="target"
                        style="
                           {
                            backgroundimage: `url(
                                '@/assets/images/category/bed/bed_2.png'
                              )
                              `;
                          }
                        "
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
              <div class="overflow-y-scroll snap-x px-4 pb-40">
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
                    id="9"
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
              <div class="overflow-y-scroll snap-x px-4 pb-40">
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
            class="btn dropdown-toggle text- px-2"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Backgrounds Category
          </button>

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
        <div class="tab-content" id="nav-tabContent">
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
            <img src="@/assets/images/mix/bg-livingroom.jpg" alt="background" />
          </div>
          <div
            class="tab-pane fade"
            id="nav-contact"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
          >
            <img src="@/assets/images/mix/bg_livingrom2.jpg" alt="background" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { Drag, Drop, DropMask } from "vue-easy-dnd";
export default {
  name: "App",
  // components: {
  //   Drag,
  //   Drop,
  //   DropMask,
  // },
  data() {
    return {
      furnitures: [
        {
          id: 1,
          url: "../assets/images/category/bed/bed_1.png",
        },
        { id: 2, url: "../assets/images/category/bed/bed_2.png" },
        { id: 3, url: "../assets/images/category/bed/bed_3.png" },
        { id: 4, url: "../assets/images/category/bed/bed_4.png" },
        { id: 5, url: "../assets/images/category/bed/bed_5.png" },
      ],
      // iShow: false,
      // insideDropped: false,
      // outsideDropped: false,
      // urlInside: "",
      // urlOutSide: "",
    };
  },
  methods: {
    // inside(data) {
    //   this.insideDropped = true;
    //   this.urlInside = data;
    // },
    // outside(data) {
    //   this.outsideDropped = true;
    //   this.urlOutSide = data;
    // },
    onDragstart(event) {
      event.dataTransfer.setData("text", event.target.id);
    },
    onDrop(event) {
      const newData = event.dataTransfer.getData("text");
      console.log(newData);
      console.log(event.target);
      if (event.target.classList.contains("target")) {
        event.target.classList.remove("target");
        event.target.appendChild(document.getElementById(newData));
      } else {
        event.target.appendChild(document.getElementById(newData));
      }
    },
  },
};
</script>

<style scoped>
.overflow-y-scroll.snap-x {
  height: 43em;
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
  margin-top: 2em;
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
  margin-top: -22%;
  width: 90%;
}
</style>
