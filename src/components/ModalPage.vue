<template>
  <div
    class="modal fade"
    id="exampleModalLong"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLongTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">
            <slot name="title"></slot>
          </h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body"><slot name="body"></slot></div>
        <div class="modal-footer">
          <slot name="footer"></slot>
          <button
            data-dismiss="modal"
            @click.prevent="close"
            type="button"
            class="ring-1 ring-yellow-900 text-yellow-950 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeModal() {
      this.$emit("close");
    },
    // props: ["tyle"],
  },
};
</script>
<style scoped>
.modal.fade {
  background: #000000a6;
}
</style>
