<template>
  <!--componet bao bọc dữ liệu -->
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import { computed } from "vue";
// Truy cập route
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    console.log(route);
    //Trả dữ liệu để sử dụng bên trên
    return {
      layout: computed(() => route.meta.layout + "-layout"),
    };
  },
};
</script>
