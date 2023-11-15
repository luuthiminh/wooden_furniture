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
              class="h-5 w-5 alert-svg"
            >
              <path
                clip-rule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                fill-rule="evenodd"
              ></path>
            </svg>
          </div>
          <div class="alert-prompt-wrap">
            <div class="error-prompt-container">
              <p class="error-prompt-heading font-semibold">Wanning:</p>
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
  background-color: rgb(254 252 232);
  border-left-width: 4px;
  border-color: rgb(250 204 21);
  border-radius: 0.375rem;
  padding: 1rem;
  z-index: 1;
}

.alert-svg {
  height: 1.25rem;
  width: 1.25rem;
  color: rgb(250 204 21);
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
