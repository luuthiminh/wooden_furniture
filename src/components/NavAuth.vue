<template>
  <navigation />
  <section>
    <div class="menu bg-slate-600 text-white w-60 leading-10">
      <div>
        <h2 class="flex ju font-bold px-6 py-3">Menu Product</h2>
      </div>
      <div>
        <ul class="px-2">
          <li>Hot Furniture</li>
          <li>New Furnitrue</li>
          <li>The living room's furniture</li>
          <li>Bedroom furniture</li>
          <li>Kitchen furniture</li>
          <li>Bedroom furniture</li>
          <li>Collection</li>
        </ul>
      </div>
    </div>
  </section>
  <slot />
</template>

<script>
import Navigation from "@/components/NavAuth.vue";

export default {
  components: { Navigation },
};
</script>

<style scoped></style>
