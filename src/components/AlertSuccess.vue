<template>
  <div>
    <div class="notifications-container">
      <div class="alert">
        <div class="flex">
          <div class="flex-shrink-0">
            <svg
              class="succes-svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <div class="alert-prompt-wrap">
            <div class="error-prompt-container">
              <p class="success-prompt-heading font-semibold">Success:</p>
              <div class="error-prompt-wrap">
                <ul class="error-prompt-list text-sm text-lime-700" role="list">
                  <slot name="message"></slot>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script></script>
<style scoped>
.notifications-container {
  width: 320px;
  height: auto;
  font-size: 0.875rem;
  line-height: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.flex {
  display: flex;
}

.flex-shrink-0 {
  flex-shrink: 0;
}

.alert {
  background-color: rgb(240 253 244);
  border-left-width: 4px;
  border-color: rgb(20 170 32);
  border-radius: 0.375rem;
  padding: 1rem;
  z-index: 1;
}
.success-prompt-heading {
  color: rgb(22 101 52);
}
.succes-svg {
  color: rgb(74 222 128);
  width: 1.25rem;
  height: 1.25rem;
}

.alert-prompt-wrap {
  margin-left: 0.75rem;
  color: rgb(202 138 4);
}

.alert-prompt-link {
  font-weight: 500;
  color: rgb(141, 56, 0);
  text-decoration: underline;
}

.alert-prompt-link:hover {
  color: rgb(202 138 4);
}
</style>
