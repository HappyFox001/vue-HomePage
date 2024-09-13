<script>
export default {
  name: "Loading",
  props:["loading"],
}
</script>

<template>
  <div class="loading" v-if="loading">
    <div class="loading-center"></div>
  </div>
  <div class="picture">
    Welcome to My World ! Dear
  </div>
</template>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
@font-face {
  font-family: '天行白鸽';
  src: url('../fonts/字魂白鸽天行体(商用需授权).ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
.loading{
  background-size: 100%;
  background: radial-gradient(white, #d8eaff) center;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  opacity: 0.5;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.loading .loading-center{
  height: 150px;
  width: 150px;
  position: absolute;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: #472eff;
  animation: zoom 1s linear infinite;
}
.picture{
  top:0;
  z-index: 100;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  text-shadow: 1px 1px 10px #000000;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: 100vh;
  background-image: url('../assets/image/home-image/background.png');
  font-weight: 15;
  font-size: 50px;
  font-family: "天行白鸽",serif;
}
@keyframes zoom {
  0% {
    transform: scale(0);
    opacity: 1;
  }

  50% {
    opacity: 0.5;
  }

  100% {
    transform: scale(1);
    opacity: 0;
  }
}
</style>