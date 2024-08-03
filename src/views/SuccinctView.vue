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
          <ul>
            <li>期望职位： 暂无</li>
            <li>期望城市： 暂无</li>
            <li>当前坐标： 武汉</li>
          </ul>
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
          <span>GitHub： <a href="https://github.com/penglongli">https://github.com/penglongli</a></span>
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
          <li>Web开发： Java(精通)/Spring Framework/MyBatis/Struts2/Hibernate/Apache Shiro/Go(入门);</li>
          <li>前端： HTML(5)标准/CSS(3)标准/JavaScript/jQueyr/gulp/Less/AngularJS;</li>
          <li>数据库： MySQL/MSSQL;</li>
          <li>服务器相关： 熟悉Linux基本命令/nginx(使用)/Bash</li>
        </ul>
      </div>
    </div>

    <div class="work-experience">
      <span class="icon"></span>
      <span class="subtitle">工作经历</span>
      <span class="long-line"></span>
      <div class="detail-list">
        <div class="company">
          <h2>XX公司（xxxx年xx月-xxxx年xx月）</h2>
          <span class="tools">开发工具： Spring Framework + Shiro + Hibernate + MySQL + nginx + IDEA(IDE)</span>

          <span class="project-title">xx项目</span>
          <span class="project-intro">
                    我在此项目负责了哪些工作，分别在哪些地方做得出色/和别人不一样/成长快，这个项目中，我最困难的问题是什么，我采取了什么措施，最后结果如何。这个项目中，我最自豪的技术细节是什么，为什么，实施前和实施后的数据对比如何，同事和领导对此的反应如何。
                </span>
        </div>

        <div class="company">
          <h2>XX公司（xxxx年xx月-xxxx年xx月）</h2>
          <span class="tools">开发工具： Spring Framework + Shiro + Hibernate + MySQL + nginx + IDEA(IDE)</span>

          <span class="project-title">xx项目</span>
          <span class="project-intro">
                    我在此项目负责了哪些工作，分别在哪些地方做得出色/和别人不一样/成长快，这个项目中，我最困难的问题是什么，我采取了什么措施，最后结果如何。这个项目中，我最自豪的技术细节是什么，为什么，实施前和实施后的数据对比如何，同事和领导对此的反应如何。
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
        <span class="subtitle">荣誉奖励</span>
        <span class="long-line short-line"></span>
        <div class="detail-list">
          <ul>
            <li>武汉大学2022社团活动积极分子</li>
            <li>大学生创新创业省级立项</li>
            <li>武汉大学京天杯智能机器人导航冠军</li>
            <li>华中杯数学建模省级三等奖</li>
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
            <li>工作认真，愿意尝试新东西，对新东西有好奇心</li>
            <li>良好的语言沟通能力，能够积极主动交流以便解决问题</li>
            <li>性格外向开朗，喜欢运动，喜欢打篮球，能够独立解决问题</li>
          </ul>
        </div>
      </div>
      <div class="clear-fix"></div>
    </div>
  </div>
  </body>
</template>

<style scoped src="../assets/css/succinct.css"></style>