<template>
  <div class="pt-32 gap-x-10">
    <div class="flex">
      <div class="flex gap-x-2">
        <div
          class="target targer_1 w-6/12"
          draggable="true"
          @dragstart="onDragstart"
          @dragleave="onDragleave"
          @dragenter.prevent="onDragenter"
          id="target"
        ></div>
        <div
          class="target target_2 w-6/12"
          draggable="true"
          @dragstart="onDragstart"
          @dragleave="onDragleave"
          @dragenter.prevent="onDragenter"
          id="target drag2"
        ></div>
        <div
          class="target target_2 w-6/12"
          draggable="true"
          @dragstart="onDragstart"
          @dragleave="onDragleave"
          @dragenter.prevent="onDragenter"
          id="drag3"
        ></div>
        <div
          class="target target_2 w-6/12"
          draggable="true"
          @dragstart="onDragstart"
          @dragleave="onDragleave"
          @dragenter.prevent="onDragenter"
          id="drag4"
        ></div>
      </div>
      <div
        v-if="(isDropTarget = 'true')"
        class="box"
        @dragover.prevent="onDragover"
        @drop.stop.prevent="onDrop"
      ></div>
      <div
        class="box"
        @dragover.prevent="onDragover"
        @drop.stop.prevent="onDrop"
      ></div>
      <div
        class="box"
        @dragover.prevent="onDragover"
        @drop.stop.prevent="onDrop"
      ></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isDropTarget: true,
      currentTarget: null,
    };
  },
  create() {},
  methods: {
    onDragstart(event) {
      this.currentTarget = event.dataTransfer.setData("text", event.target.id);
    },
    onDragover(event) {
      console.log(event);
      console.log(this.currentTarget);
    },
    onDragleave(event) {
      console.log(event);
    },
    onDrop(event) {
      const newData = event.dataTransfer.getData("text");
      console.log(newData);
      console.log(this.currentTarget);
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
.box {
  position: relative;
  align-items: center;
  width: 100px;
  height: 100px;
  border: 1px solid black;
  justify-items: center;
  left: 20%;
  margin-top: 2em;
  margin-bottom: 10em;
}
.target {
  width: 14em;
  min-width: 20px; /* Thêm kích thước tối thiểu */
  min-height: 20px; /* Thêm kích thước tối thiểu */
  background-size: cover;
}
.targer_1 {
  width: 10em;
  height: 10em;
  background-image: url("@/assets/images/category/bed/bed_6.png");
}
.target_2 {
  width: 10em;
  height: 10em;
  background-image: url("@/assets/images/category/bed/bed_5.png");
}
</style>
