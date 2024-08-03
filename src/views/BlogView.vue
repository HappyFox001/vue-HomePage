<template>
  <div class="container">
    <div class="sidebar">
      <h2></h2>
      <p></p>
    </div>
    <div class="content">
      <div class="scroll-content">
        <div  class="content-item">
          <div class="left">
            <p class="word">Name:&ensp;个人博客系统</p>
            <a class="word" href="https://happyfox001.github.io/personal-blog/">Link:&ensp;网页展示</a>
          </div>
          <div class="right">
            <div class="right-title">
              <p class="word">Description:</p>
            </div>
           <div class="right-description">
            <p class="word">基于Vue-CLI搭建的个人博客系统</p>
           </div>
          </div>
        </div>
        <div  class="content-item"></div>
        <div  class="content-item"></div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      items: Array.from({ length: 5 }, (_, i) => `Item ${i + 1}`)
    };
  },
};
</script>

<style scoped>
@font-face {
  font-family: '天行白鸽';
  src: url('@/fonts/字魂白鸽天行体(商用需授权).ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
.container {
  display: flex;
  height: 100vh;
  overflow: hidden;
}

.sidebar {
  width: 500px;
  background-color: #2c3e50;
  color: white;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
}

.sidebar::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, rgba(255,255,255,0.3), rgba(255,255,255,0));
  animation: flow 5s linear infinite;
}

@keyframes flow {
  0% {
    transform: rotate(0deg) translateX(0);
  }
  100% {
    transform: rotate(360deg) translateX(-100%);
  }
}

.content {
  flex: 1;
  overflow-y: auto;
  background-color: #ecf0f1;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
}

.scroll-content {
  display: flex;
  flex-direction: column;
}

.content-item {
  position: relative;
  height:150px;
  margin-bottom: 30px;
  padding: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background: linear-gradient(45deg, #ff007f, #00d4ff);
  border-radius: 15px;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  color: white;
  display: flex;
  flex-direction: row;
}

.content-item:hover {
  transform: scale(1.01);
}
.content-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: conic-gradient(from 0deg, rgba(255, 0, 127, 0.5), rgba(0, 212, 255, 0.5), rgba(0, 255, 255, 0.5), rgba(255, 0, 127, 0.5));
  animation: rotate 6s linear infinite;
  z-index: 1;
}

.content-item::after {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: calc(100% - 4px);
  height: calc(100% - 4px);
  background: rgba(0, 0, 0, 0.8);
  border-radius: 13px;
  z-index: 2;
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.left {
  top:0;
  position: relative;
  width: 40%;
  height: 100%;
  text-align: left;
}
.word{
  font-size: 18px;
  font-weight: bold;
  font-family: 天行白鸽,serif;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  animation: fadeIn 2s ease-in-out;
  text-align: left;
  color: #fff;
}
.left p{
  margin-top: 30px;
  padding-left: 15px;
  position: relative;
  z-index: 3;
}
.left a{
  display: inline-block;
  margin-top: 10px;
  padding-left: 15px;
  position: relative;
  z-index: 3;
}
.right{
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
}
.right-title{
  position: relative;
  width: 40%;
  height: 100%;
  z-index: 3;
  margin-right: 0;
}
.right-description{
  position: relative;
  margin-left: -120px;
  width: 100%;
  height: 100%;
  z-index: 3;
}
.right h1 {
  position: relative;
  margin-top: 30px;
  padding-left: 15px;
}
.right p{
  margin-top: 30px;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
