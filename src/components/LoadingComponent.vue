<template>
  <div class="loadding">
    <div class="loaderBar"></div>
    <span class="text-sm mt-3">Loadding...</span>
  </div>
</template>
<style scoped>
.loaderBar {
  width: calc(160px / 0.707);
  height: 10px;
  background: #f9f9f9;
  border-radius: 10px;
  border: 1px solid #e2a14b;
  position: relative;
  overflow: hidden;
}

.loaderBar::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  border-radius: 5px;
  background: repeating-linear-gradient(45deg, #f2e600 0 30px, #e2a14b 0 40px)
    right/200% 100%;
  animation: fillProgress 6s ease-in-out infinite,
    lightEffect 1s infinite linear;
  animation-fill-mode: forwards;
}

@keyframes fillProgress {
  0% {
    width: 0;
  }

  33% {
    width: 33.333%;
  }

  66% {
    width: 66.67%;
  }

  100% {
    width: 100%;
  }
}

@keyframes lightEffect {
  0%,
  20%,
  40%,
  60%,
  80%,
  100% {
    background: repeating-linear-gradient(45deg, #c5812c 0 30px, #e2a14b 0 40px)
      right/200% 100%;
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    background: repeating-linear-gradient(
        45deg,
        #c5812c 0 30px,
        #e2a14b 0 40px,
        rgba(255, 255, 255, 0.3) 0 40px
      )
      right/200% 100%;
  }
}
.loadding {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
}
</style>
