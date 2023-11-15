<template>
  <div>
    <div class="notifications-container">
      <div class="alert">
        <div class="flex">
          <div class="flex-shrink-0">
            <svg
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              class="error-svg"
            >
              <path
                clip-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                fill-rule="evenodd"
              ></path>
            </svg>
          </div>
          <div class="alert-prompt-wrap">
            <div class="error-prompt-container">
              <p class="success-prompt-heading font-semibold">Error:</p>
              <div class="error-prompt-wrap">
                <ul
                  class="error-prompt-list text-sm text-yellow-700"
                  role="list"
                >
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
  background-color: rgb(253 240 240);
  border-left-width: 4px;
  border-color: rgb(204 18 18);
  border-radius: 0.375rem;
  padding: 1rem;
  z-index: 1;
}
.success-prompt-heading {
  color: rgb(143 32 32);
}
.error-svg {
  color: #f87171;
  width: 1.25rem;
  height: 1.25rem;
}

.alert-prompt-wrap {
  margin-left: 0.75rem;
  color: rgb(202, 7, 4);
}

.alert-prompt-link {
  font-weight: 500;
  color: #b91c1c;
  text-decoration: underline;
}
/* .error-prompt-wrap {
  margin-top: 0.5rem;
  color: #b91c1c;
  font-size: 0.875rem;
  line-height: 1.25rem;
} */
.alert-prompt-link:hover {
  color: rgb(202, 47, 4);
}
</style>
