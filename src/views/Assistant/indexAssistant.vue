<template>
  <div class="home">
    <div class="h1">
      <h1><span>Welcome</span> <span>Assistant!!</span></h1>
    </div>
    <div class="h3">
      <h3>Wish you have a happy working day...</h3>
    </div>
  </div>
</template>
<script></script>
<style scoped>
.home {
  position: relative;
  color: rgb(220, 210, 210);
  margin-top: 2rem;
  background: rgba(0, 0, 0, 0.7);
}
.home::before {
  content: "";
  position: absolute;
  z-index: -1;
  inset: 0;
  background-image: url("@/assets/images/assistant/banner.png");
  background-size: cover;
  opacity: 0.7;
  height: 38.2rem;
}

/* Base */
/* .h1 {
  padding: 0;
  margin: 0;
  font-family: "Anonymous Pro", monospace;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-image: url("@/assets/images/assistant/banner.png");
} */
h1 {
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  margin-top: 0%;
  color: white;
  letter-spacing: 7px;
  font-family: "Anonymous Pro", monospace;
}
/* h1 {
  color: hsl(0, 0%, 28%);
  font-size: 50px;
  font-weight: bold;
  font-family: monospace;
  letter-spacing: 7px;
  cursor: pointer;
} */

h1 span {
  transition: 0.5s ease-out;
}
h1:hover span:nth-child(1) {
  margin-right: 5px;
}
h1:hover span:nth-child(1):after {
  content: "'";
}
h1:hover span:nth-child(2) {
  margin-left: 30px;
}
h1:hover span {
  color: #fff;
  text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 40px #fff;
}

/* h3 */
.h3 {
  padding: 0;
  margin: 0;
  /* background-color: #000; */
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-image: url("@/assets/images/assistant/banner.png");
}
h3 {
  position: relative;
  color: hsl(0, 0%, 68%);
  font-weight: bold;
  font-family: "Anonymous Pro", monospace;
  letter-spacing: 7px;
  overflow: hidden;
  border-right: 2px solid hsl(0, 0%, 80%);
  white-space: nowrap;
  animation: typewriter 4s steps(44) 1s 1 normal both,
    blinkTextCursor 500ms infinite;
}

@keyframes typewriter {
  from {
    width: 0;
  }
  to {
    width: 710px;
  }
}
@keyframes blinkTextCursor {
  from {
    border-right-color: hsl(0, 0%, 80%);
  }
  to {
    border-right-color: transparent;
  }
}
</style>
