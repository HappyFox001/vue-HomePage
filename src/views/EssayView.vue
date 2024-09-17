<template>
    <div class="container">
      <!-- Header Section -->
      <header class="header">
        <h1>你好，欢迎来到文章小栈</h1>
        <p>赛博修仙，机械飞升</p>
      </header>
  
      <!-- Main Content -->
      <div class="content">
        <!-- Left Section: Blog List -->
        <div class="blog-section">
        <a href="https://www.panewslab.com/zh/sqarticledetails/5l879lx82g0z.html" target="_blank" class="blog-card-link">
          <div class="blog-card">
            <div class="card-header">
              <img src="../assets/image/blog-image/文件icon.svg" alt="文件夹图标" class="folder-icon" />
              <span class="report-text">个人项目</span>
            </div>
            <h2>个人博客系统</h2>
            <p>基于Vue-CLI搭建的个人博客系统</p>
          </div>
        </a>
        <a href="https://www.panewslab.com/en/articledetails/d7rwcvtgpzbw.html" target="_blank" class="blog-card-link">
          <div class="blog-card">
            <div class="card-header">
              <img src="../assets/image/blog-image/文件icon.svg"  alt="文件夹图标" class="folder-icon" />
              <span class="report-text">个人项目</span>
            </div>
            <h2>本地 Web3 银行</h2>
            <p>基于PyQt5 和 Web3 库开发的本地钱包批量管理、监测银行</p>
          </div>
        </a>
        <a href="https://www.techflowpost.com/article/detail_19119.html" target="_blank" class="blog-card-link">
          <div class="blog-card">
            <div class="card-header">
              <img src="../assets/image/blog-image/文件icon.svg"  alt="文件夹图标" class="folder-icon" />
              <span class="report-text">个人项目</span>
            </div>
            <h2>Discord 网页机器人</h2>
            <p>基于历史信息进行交流的Discord群聊机器人</p>
          </div>
        </a>
        <a href="https://www.jinse.cn/blockchain/3692298.html" target="_blank" class="blog-card-link">
          <div class="blog-card">
            <div class="card-header">
              <img src="../assets/image/blog-image/文件icon.svg"  alt="文件夹图标" class="folder-icon" />
              <span class="report-text">投研报告 2024-07-22 </span>
            </div>
            <h2>肺癌病变图像检测</h2>
            <p>通过图像处理技术分析肺部图像在癌变周期中的特征信息</p>
          </div>
        </a>
        <a href="https://mp.weixin.qq.com/s?__biz=Mzk0NjUzMzczNQ==&mid=2247484306&idx=1&sn=126fa3580b486cf69b7e5f192b5404f4&chksm=c28c5941b772175e70594562abc7602d9dc3bc670870e3385d4ccb8b5073675fe4df5d331cfc&mpshare=1&scene=1&srcid=0914LUHrcNYBn1hFxzsT11U4&sharer_shareinfo=cbeb3e04f1a37d62d0e32fd50841271e&sharer_shareinfo_first=cbeb3e04f1a37d62d0e32fd50841271e#rd" target="_blank" class="blog-card-link">
          <div class="blog-card">
            <div class="card-header">
              <img src="../assets/image/blog-image/研究icon.svg"  alt="文件夹图标" class="folder-icon" />
              <span class="report-text-research">路径探究 2024-08-02</span>
            </div>
            <h2>格斗小车制作</h2>
            <p>通过3D建模技术自主设计小车，并组合雷达、单片机、灰度识别等功能搭建识别攻击敌方小车的闭环系统</p>
          </div>
        </a>
        <a href="https://www.odaily.news/zhtw/post/5197318" target="_blank" class="blog-card-link">
          <div class="blog-card">
            <div class="card-header">
              <img src="../assets/image/blog-image/文件icon.svg"  alt="文件夹图标" class="folder-icon" />
              <span class="report-text">投研报告 2024-08-03</span>
            </div>
            <h2>对敲安全事件复现</h2>
            <p>通过在Google扩展程序中植入恶意权限，实现Cookies盗窃，完成异地币安网页版登入</p>
          </div>
        </a>
        </div>
        <div class="profile-section">
          <div class="profile-image"></div>
          <div class="progress-card">
            <h3>Web3 历程</h3>
            <ul> 
              <li>2023.10->开始 Web3 相关知识学习</li>
              <li>2024.01—>金融知识学习</li>
              <li>2024.02—>Web3 技术学习</li>
              <li>2024.04—>LYS Lab创业</li>
              <li>2024.06—>入职Trustless Lab</li>
              <li>2024.09—>区块链项目——赛博占卜与电子护符</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  @font-face {
    font-family: '天行白鸽';
    src: url('@/fonts/字魂白鸽天行体(商用需授权).ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  .container {    display: flex;
    flex-direction: column;
    align-items: center;
    background: url('../assets/image/project-image/background.jpg') no-repeat center center fixed;
    background-size: cover;
    width: 100%;
    min-height: 100vh;
    font-family: "天行白鸽";
    padding: 20px;
    color: #00f0ff; /* 赛博朋克的霓虹色 */
  }
  
  .header {
    text-align: center;
    margin-top: 20px;
    color: #00f0ff;
    text-shadow: 0 0 5px rgba(0, 240, 255, 0.7);
    font-family: "天行白鸽";
  }
  
  .header h1 {
    font-size: 3rem;
    letter-spacing: 2px;
  }
  
  .header p {
    font-size: 1.2rem;
    font-weight: 300;
  }
  
  .content {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    width: 100%;
  }
  
  .blog-section {
    max-height: 800px;
    overflow-y: scroll;
    padding-right: 10px;
    margin-left: 200px;
  }
  .blog-card-link {
  text-decoration: none; /* 去除下划线 */
  color: inherit; /* 链接颜色继承父元素颜色 */
}

  .blog-card {
    background-color: rgba(0, 0, 0, 0.9); /* 深色透明背景 */
    margin-bottom: 20px;
    width: 1000px;
    padding: 20px;
    border: 1px solid #00f0ff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 240, 255, 0.5), 0 0 20px rgba(0, 240, 255, 0.3);
    text-align: left; /* 设置文本左对齐 */
  }
  
  .card-header {
    display: flex;
    align-items: center;
    margin-bottom: 10px; /* 图标与标题之间的间距 */
  }
  
  .folder-icon {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
  
  .report-text {
    font-size: 1rem;
    color: #7462dd;
  }
  .report-text-research{
    font-size: 1rem;
    color: rgb(175, 190, 35);
  }
  .blog-card h2 {
    font-size: 1.5rem;
    color:white;
    text-shadow: 0 0 10px rgba(219, 120, 39, 0.7);
    margin-bottom: 10px;
  }
  
  .blog-card p {
    font-size: 1.2rem;
    color: #00f0ff;
  }
  
  /* 侧边栏：赛博朋克风格 */
  .profile-section {
    width: 30%;
  }
  .profile-image {
  padding: 20px;
  margin-bottom: 20px;
  margin-right: 50px;
  border-radius: 8px;
  border: 1px solid #ff00ff;
  box-shadow: 0 0 10px rgba(255, 0, 255, 0.5), 0 0 20px rgba(255, 0, 255, 0.3);
  height: 200px; /* 确保这里的高度不是问题 */
  width: 400px; /* 和宽度 */
  background: url('../assets/image/blog-image/女孩.jpg') no-repeat center center;
  background-size: cover; /* 确保图片覆盖整个元素 */
}

  .profile-card, .progress-card {
    background-color: rgba(0, 0, 0, 0.9);
    padding: 20px;
    margin-bottom: 20px;
    margin-right: 50px;
    border-radius: 8px;
    text-align: center;
    border: 1px solid #ff00ff;
    box-shadow: 0 0 10px rgba(255, 0, 255, 0.5), 0 0 20px rgba(255, 0, 255, 0.3);
    height: 300px;
    width:400px;
  }
  
  .profile-card h3, .progress-card h3 {
    color: #ec6c16;
    font-size: 1.5rem;
    margin-bottom: 10px;
    text-shadow: 0 0 10px rgba(255, 0, 255, 0.7);
  }
  
  .profile-card p, .progress-card p {
    color: #00f0ff;
    font-size: 1.2rem;
  }
  
  .clock {
    font-size: 1.2rem;
    margin-top: 10px;
    color: #ff00ff;
    font-weight: bold;
    text-shadow: 0 0 5px rgba(255, 0, 255, 0.7);
  }
  
  .progress-card ul {
    list-style: none;
    padding: 0;
  }
  
  .progress-card li {
    margin-bottom: 10px;
    font-size: 1.1rem;
    color: #da1989;
    text-align: left; /* 设置文本左对齐 */
    text-indent: 1em;
  }
  
  /* 自定义滚动条 */
  .blog-section::-webkit-scrollbar {
    width: 8px;
  }
  
  .blog-section::-webkit-scrollbar-thumb {
    background-color: rgba(255, 0, 255, 0.6);
    border-radius: 10px;
  }
  
  .blog-section::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.1);
  }
  </style>
  

  
  <script>
  </script>
  