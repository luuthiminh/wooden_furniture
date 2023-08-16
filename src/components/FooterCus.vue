<template>
  <footer-cus />
  <div class="footer">
    <div class="grid gird-cols-4">
      <div class=""></div>
      <div class=""></div>
    </div>
  </div>
</template>
<script>
import FooterCus from "@/components/FooterCus.vue";

export default {
  components: { FooterCus },
};
</script>

<style>
.footer {
  position: relative;
}
grid gird-cols-4::before {
  content: "";
  position: absolute;
  z-index: -1;
  inset: 0;
  background: rgb(215, 212, 212);
  opacity: 0.99;
  background-image: url("@/assets/images/footer.png");
  background-size: cover;
  background-position: center;
}
</style>
