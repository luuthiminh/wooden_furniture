<template>
  <navigation />
  <slot />
</template>

<script>
import Navigation from "@/components/NavAuth.vue";

export default {
  components: { Navigation },
};
</script>

<style scoped></style>
