<template>
  <Loading v-bind:loading="loading"/>
  <div class="main">
    <div class="left">
      <div class="left-logo"></div>
      <div class="left-place">
        <div class="left-place-word">位置：武汉</div>
        <div class="left-place-word">工作：学生+实习</div>
      </div>
      <div class="left-tag">
        <div class="timeline">
          <div class="timeline-item">2020：&emsp;&emsp;实力摆烂</div>
          <div class="timeline-item">2021：&emsp;&emsp;努力奋斗</div>
          <div class="timeline-item">2022：&emsp;&emsp;步入大学</div>
          <div class="timeline-item">2023：&emsp;&emsp;进入Web3</div>
          <div class="timeline-item">2024：&emsp;&emsp;一心赚钱</div>
          <div class="timeline-item">2025：&emsp;&emsp;逆天改命</div>
          <div class="timeline-item">2026：&emsp;&emsp;平步青云</div>
          <div class="timeline-item">2027：&emsp;&emsp;飞黄腾达</div>
          <div class="timeline-item">2028：&emsp;&emsp;名垂青史</div>
          <div class="timeline-item">2029：&emsp;&emsp;独断万古</div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="right-header">
        <div class="right-header-left">
          <div class="right-welcome"><p class="right-title">Welcome to My World</p></div>
          <div class="right-description first-description">⏳&ensp;<span>Geek Enthusiast and Web3 Idealist</span></div>
          <div class="right-description second-description">📝&ensp;<span>Do something cool and change the word!</span></div>
          <div class="right-about">
            <a class="right-icon" href="https://github.com/"><img alt="github" src="../assets/image/home-image/github.svg"></a>
            <a class="right-icon" href="https://im.qq.com/"><img alt="qq" src="../assets/image/home-image/qq.svg"></a>
            <a class="right-icon" href="https://discord.com/"><img alt="discord" src="../assets/image/home-image/discord.svg"></a>
        </div>
      
      </div>
      <div class="svg-container">
          <img src="../assets/image/home-image/snake-Light.svg" alt="Example SVG" class="custom-svg" />
        </div>
      </div>
      <div class="right-content">
        <div class="personal-info">
          <p>🎓 武汉大学区块链协会投研部部长</p>
          <p>💻 Trustless Lab 投研员</p>
          <p>📘 专业：通信工程</p>
          <p>⚙️ 技能：机器学习、深度学习、前端开发、大数据处理、项目投研</p>
          <p>⭐️ 简要经历：LYS Lab Web3自媒体创业 + 多次团队合作经验 + 省级科研项目结项</p>
          <p>🚀 兴趣：All in Web 3</p>
        </div>
      </div>
      <div class="right-bottom">
        <div class="right-menu">
          <span class="right-title">I SAY</span>
        </div>
        <div class="right-project">
          <router-link class="project-link project-item" v-bind:to="{name:'succinct'}">
            <div class="project-item-left">
              <h1>简介</h1>
              <p>没有被世俗玷污的精神</p>
            </div>
            <div class="project-item-right">
              <img src="../assets/image/home-image/succinct.svg" alt="">
            </div>
          </router-link>
          <router-link class="project-link project-item" v-bind:to="{name:'blog'}">
            <div class="project-item-left">
              <h1>博客</h1>
              <p>没有被知识污染的净土</p>
            </div>
            <div class="project-item-right">
              <img src="../assets/image/home-image/blog.svg" alt="">
            </div>
          </router-link>
          <router-link class="project-link project-item" v-bind:to="{name:'essay'}">
            <div class="project-item-left">
              <h1>深思</h1>
              <p>没有被思想侵略的荒原</p>
            </div>
            <div class="project-item-right">
              <img src="../assets/image/home-image/write.svg" alt="">
            </div>
          </router-link>
          <router-link class="project-link project-item" v-bind:to="{name:'project'}">
            <div class="project-item-left">
              <h1>项目</h1>
              <p>没有被恶意吞没的大厦</p>
            </div>
            <div class="project-item-right">
              <img src="../assets/image/home-image/project.svg" alt="">
            </div>
          </router-link>
        </div>

      </div>
    </div>
  </div>
</template>
<script>

import {ref} from "vue";
import {onMounted} from "vue";
import Loading from "@/components/Loading.vue";
export default {
  name: "Home",
  components: {Loading},
  setup(){
    let loading=ref(true);
    onMounted(()=>{
      setTimeout(()=>{loading.value=false},1000)})
    return {loading}
  },
}

</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
@font-face {
  font-family: '天行白鸽';
  src: url('@/fonts/字魂白鸽天行体(商用需授权).ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Dancing Script';
  src: url('@/fonts/DancingScript-Regular-2.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
body, html {
  width: 100%;
  height: 100%;
  background-color: #222; /* 设置整体背景颜色为深色 */
}
.main {
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);
  box-shadow: 0 0 20px rgba(0,0,0,0.5);
  border-radius: 15px;
  overflow: hidden;
}
.left {
  overflow-y: scroll;
  width: 230px;
  height: 100vh;
  display: flex;
  position: sticky;
  top: 0;
  left: 0;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  padding: 20px;
}
.left::-webkit-scrollbar {
  display: none;
}
.left-logo {
  background-image: url("../assets/image/home-image/logo.jpg");
  width: 80%;
  aspect-ratio: 1/1;
  margin-top: 50px;
  background-size: cover;
  border-radius: 50%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}
.left-logo:hover {
  transform: scale(1.1); /* Increase the size on hover */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Add shadow on hover */
}
.left-place {
  width: 80%;
  height: 80px;
  margin-top: 40px;
  background: linear-gradient(45deg, #ff007f, #00d4ff);
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
}
.left-place::before {
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

.left-place::after {
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

.left-place:hover {
  transform: scale(1.05);
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.left-place-word {
  margin-top: 15px;
  padding-left: 15px;
  text-align: left;
  color: #fff;
  position: relative;
  z-index: 3;
  font-size: 15px;
  font-weight: bold;
  font-family: 天行白鸽,serif;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  animation: fadeIn 2s ease-in-out;
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

.left-tag {
  width: 100%;
  height: 200px;
  margin-top: 80px;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  padding: 10px;
  overflow-y: auto;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  position: relative;
}

.left-tag::-webkit-scrollbar {
  width: 0; /* 隐藏滚动条 */
}

.timeline {
  position: relative;
}

.timeline-item {
  background: linear-gradient(45deg, #ff007f, #00d4ff);
  color: #fff;
  font-size: 12px;
  font-family: 天行白鸽,serif;
  padding: 12px;
  margin: 10px 0;
  border-radius: 5px;
  text-align: left;
  position: relative;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, background 0.3s ease;
}

.timeline-item:hover {
  transform: scale(1.05);
  background: linear-gradient(45deg, #00d4ff, #ff007f);
}

.right {
  background-color: #282c34;
  background-image: url("../assets/image/home-image/right-picture.png");
  background-repeat: no-repeat;
  background-size: cover; 
  background-position: center center; /* 将图片居中 */
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding-top: 0;
  border-left: 2px solid rgba(255, 255, 255, 0.1);
  color: #fff;
  font-size: 24px;
  opacity: 60%;
}

.right-header {
  display: flex;
  justify-content: space-between; 
  top:0;
  left: 0;
  height: 100%;
  width: 100%;
}

.right-header-left {
  display: flex;
  flex-direction: column;
  position: relative;
}

.right-welcome{
  position: relative ;
  top:15px;
  height: 40%;
  width: 100%;
  left: 40px;
  margin-bottom: 0;
}
.right-title {
  text-align: left;
  font-family:"Algerian",serif;
  font-size: 2em;
  background: linear-gradient(90deg,
  rgba(128, 0, 128, 1) 0%,
  rgba(186, 85, 211, 1) 25%,
  rgba(218, 112, 214, 1) 50%,
  rgba(255, 215, 0, 1) 75%,
  rgba(255, 223, 0, 1) 100%);
  background-size: 200% 100%;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: dark-to-light-glow 3s linear infinite;
}

@keyframes dark-to-light-glow {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 200% 0;
  }
}
.right-description{
  margin-left: 30px;
  text-align: left;
}
.first-description{
  margin-top: -10px;
}
.second-description{
  margin-top: 20px;
}
.right-description span{
  font-family: 'Dancing Script', cursive;
  color: blueviolet;
  position: relative;
  display: inline-block;
  font-weight: bold;
}
.right-description span::before {
  font-size: 1.5em;
  position: absolute;
  top: -0.2em;
  left: -0.5em;
  animation: sparkle 2s infinite ease-in-out;
}

.right-description span::after {
  content: '✨';
  font-size: 1.5em;
  position: absolute;
  bottom: -0.2em;
  right: -0.5em;
  animation: sparkle 2s infinite ease-in-out alternate;
}

@keyframes sparkle {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.2);
  }
}
.right-about{
  position: relative;
  margin-top: 30px;
  margin-left: 20px;
  text-align: left;

}
.right-about .right-icon{
  margin-left: 20px;
  left: 0;
}
.right-about .right-icon img{
  margin-left: 0;
  left: 0;
  width: 40px;
  height: 40px;
}
.right-about .right-icon img:hover {
  transform: scale(1.2); /* Increase the size on hover */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Add shadow on hover */
}
.svg-container {
  margin-top: 40px;
  margin-left: -25px;

}
.personal-info {
  margin: 20px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: black;
  font-size: 24px;
  line-height: 1.8;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  text-align: left; 
  font-family: '天行白鸽', serif;
}


.right-bottom{
  display: flex;
  flex-direction: column;
  position: relative;
  top:60px;
  left: 0;
  height: 100%;
  width: 100%;
}
.right-menu{
  margin-top: -20px;
  position: relative;
  left: 40px;
  text-align: left;
}
.right-project {
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 20px;
  flex-wrap: wrap;

}

.project-link {
  text-decoration: none;
}

.project-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 300px;
}

.project-item:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
}

.project-item-left {
  flex: 1;
  color: black;
  font-family: '天行白鸽', serif;
}

.project-item-left h1 {
  margin-bottom: 10px;
  font-size: 24px;
}

.project-item-left p {
  font-size: 16px;
}

.project-item-right {
  width: 80px;
  height: 80px;
}

.project-item-right img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

</style>
