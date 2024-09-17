<script>
const windowWidth = document.body.clientWidth;
const templateWidth = 320;

if(windowWidth < 840) {
  document.getElementsByTagName("html")[0].style.fontSize = (windowWidth) / templateWidth * 14 + "px";
}
</script>

<template>
  <body class="succinct">
  <div id="top">
    <span class="top-title">张谦/武汉大学/电子信息学院/二年级</span>
    <a href="#"><span class="top-download">Download</span></a>
  </div>
  <div id="wrapper">
    <div class="header">
      <div class="header-title">
        <span class="author-name">张谦</span>
        <span class="author-intro"></span>
      </div>
      <div class="header-list">
        <div class="header-left">
          <ul>
            <li>联系方式： 15297851279</li>
            <li>邮箱： <a href="">qianzhang.happyfox@gmail.com</a></li>
            <li>学历： 武汉大学/本科在读</li>
          </ul>
        </div>
        <div class="header-right">
          <!-- <ul>
            <li>期望职位： 暂无</li>
            <li>期望城市： 暂无</li>
            <li>当前坐标： 武汉</li>
          </ul> -->
        </div>
        <div class="clear-fix"></div>
      </div>
    </div>

    <div class="person-info">
      <span class="icon"></span>
      <span class="subtitle">个人信息</span>
      <span class="long-line"></span>
      <div class="detail-list">
        <div class="info-left">
          <span>籍贯： 江西赣州</span>
          <span>学校： 武汉大学/通信工程/2022级</span>
          <span>工作： 远程实习</span>
        </div>
        <div class="info-right">
          <span>出生年月： 2004.03.27/白羊座</span>
          <span>个人网站： <a href="https://happyfox001.github.io/personal-blog/">https://happyfox001.github.io/personal-blog/</a></span>
          <span>GitHub: <a href="https://github.com/penglongli">https://github.com/penglongli</a></span>
        </div>
        <div class="clear-fix"></div>
      </div>
    </div>

    <div class="pro-skill">
      <span class="icon"></span>
      <span class="subtitle">技能清单</span>
      <span class="long-line"></span>
      <div class="detail-list">
        <ul>
          <li>前端： HTML(5)标准/CSS(3)标准/JavaScript/Vite/Vue3;</li>
          <li>深度学习： Python/Tableau/PyTorch/Optuna</li>
          <li>数据库： MySQL;</li>
          <li>服务器相关： 熟悉Linux基本命令/nginx(使用)/Powershell/Prometheus;</li>
        </ul>
      </div>
    </div>

    <div class="work-experience">
      <span class="icon"></span>
      <span class="subtitle">学习经历</span>
      <span class="long-line"></span>
      <div class="detail-list">
        <div class="company">
          <h2>科研经历</h2>
          <span class="project-title">基于AI和IMU的3D皮影驱动模型</span>
          <span class="tools">开发工具： PyQt5 + PyTorch + Yolov8 + MySQL + nginx + pycharm(IDE)</span>
          <span class="project-intro">
                    我在此项目负责了GUI设计、视觉算法复现、皮影控制程序编写等，取得省级科研结项。
                </span>
        </div>

        <div class="company">
          <h2>行业经历</h2>
          <span class="project-title">LYS Lab web3 创业</span>
          <span class="project-intro">
                    2024年4月共同创办LYS Lab，负责空投课程、网络机器人识别技术等。
          </span>      
          <span class="project-title">Trustless Lab 投研实习</span>
          <span class="project-intro">
                    2024年6月入职Trustless Lab 投资研究实习。
          </span>      
          <span class="project-title">武汉大学区块链协会投研部部长</span>
          <span class="project-intro">
                    2024年7月任职武汉大学区块链协会投研部部长职位，负责及时向社团提供行业最前沿的信息和社团研究报告撰写。
          </span>
        </div>
      </div>
    </div>

    <div class="open-source">
      <span class="icon"></span>
      <span class="subtitle">开源项目和作品</span>
      <span class="long-line"></span>
      <div class="detail-list">
        <ul>
          <li>
            <span class="source-name">PBlog：</span>
            <span>一款使用Spring Framework + AngularJS写的单页应用博客系统，使用MyBatis作为ORM框架，写作语法支持Markdown。部署在阿里云的CentOS服务器上，使用Nginx作的权限控制和端口转发。</span>
            <span class="source-url">源代码地址：<a href="https://github.com/penglongli/pblog">https://github.com/penglongli/pblog</a></span>
          </li>
          <li>
            <span class="source-name">CSDN：</span>
            <span>里边存放了从开始学写代码后的一些记录，ACM刷题、Java学习、Android学习、框架以及其他的学习，并有使用JS、Java、Android写过的一些小东西。</span>
            <span class="source-url">地址：<a href="https://blog.csdn.net/u010800530">http://blog.csdn.net/u010800530</a></span>
          </li>
        </ul>
      </div>
    </div>

    <div class="honor-eva">
      <div class="honor-reward">
        <span class="icon"></span>
        <span class="subtitle">参与比赛</span>
        <span class="long-line short-line"></span>
        <div class="detail-list">
          <ul>
            <li>省级科研项目</li>
            <li>武汉大学京天杯智能机器人导航</li>
            <li>华中杯数学建模</li>
            <li>全国大学生数学建模</li>
            <li>高校算法挑战杯</li>
            <li>湖北省机器人格斗大赛</li>
          </ul>
        </div>
      </div>
      <div class="self-evaluation">
        <span class="icon"></span>
        <span class="subtitle">自我评价</span>
        <span class="long-line short-line"></span>
        <div class="detail-list">
          <ul>
            <li>喜欢折腾，善于折腾</li>
            <li>良好的语言沟通能力，团队合作经验丰富</li>
            <li>性格外向开朗，能够独立解决问题</li>
          </ul>
        </div>
      </div>
      <div class="clear-fix"></div>
    </div>
  </div>
  </body>
</template>

<style scoped src="../assets/css/succinct.css"></style>