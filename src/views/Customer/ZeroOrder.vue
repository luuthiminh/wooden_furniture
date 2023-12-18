<template>
  <div>
    <span class="mt-40">Hello</span>
    <vue-view360
      image="@/assets/images/category/clock/clock_1.png"
      width="600"
      height="400"
      yaw="0"
      pitch="0"
      fov="65"
      auto-rotate="true"
      auto-rotate-delay="2000"
      auto-rotate-speed="0.1"
    />
  </div>
</template>

<script>
import VueView360 from "@egjs/vue-view360";

export default {
  components: {
    VueView360,
  },
};
</script>
