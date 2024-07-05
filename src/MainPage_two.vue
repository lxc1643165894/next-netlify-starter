<template>

<body>
        <!-- font awesome cdn link  -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css">



    <!-- header section starts  -->

<header class="header">

   <div id="menu-btn" :class="['fas', 'fa-bars', 'icons', { 'fa-times': isMenuActive }]" @click="toggleMenu"></div>
   <!-- <div id="search-btn" class="fas fa-search icons"></div> -->

   <nav :class="['navbar',{'active':isMenuActive}]">
      <a @click="goPath('/')">首页</a>
      <a @click="goPath('/NewMainPage')">上一章节</a>
      <span class="space"></span>
      <a @click="goPath('/timeLine')">长征时间线</a>
   </nav>

   <!-- <a href="#" class="fas fa-shopping-cart icons"></a> -->

   <!-- <a href="#home" class="logo"><img src="./assets/image/logo2.png" alt=""></a> logo设置-->  
   

</header>

<!-- header section ends  -->

<!-- home section starts  -->

<section class="home" id="home">

   <div class="content">
      <h3 data-aos="fade-up" data-aos-delay="300">转折点——遵义会议</h3>
      <img data-aos="fade-up" data-aos-delay="150" src="./assets/image/MainPage_start.png" alt="">
      
      <p data-aos="fade-up" data-aos-delay="450">1935年1月15日至17日，中共中央政治局在贵州遵义召开的扩大会议，
周恩来在副报告中指出，第五次反“围剿”失利的主要原因是军事领导的错误，并主动承担了责任。</p>
      <a data-aos="fade-up" data-aos-delay="600" class="btn" @click="scrollTo('about')">开始</a>   
   </div>

</section>

<!-- home section ends -->





<!-- about section starts  -->

<!-- <section class="about" >

   <div class="image" data-aos="fade-right" data-aos-delay="150" >
      <img src="./assets/image/MainPage_why.jpg" alt="" id="about">
   </div>

   <div class="content" data-aos="fade-left" data-aos-delay="300" >
      <h3 class="title">为什么要进行长征？</h3>
      <p>1933年初，日军大举入侵华北，中华民族的危机日益严重，国民党政府却置民族危亡于不顾，仍旧坚持推行“攘外必先安内”的反动方针，决心要消灭共产党和红军......</p>
   </div>

</section> -->

<!-- about section ends -->

<!-- 剧情展示部分开始  -->

<section class="blogs" id="blogs" v-for="(item, index) in items" :key="index">

   <div class="heading" id="about">
      <!-- <img src="./assets/image/logo2.png" alt=""> -->
      <h3>{{item.Plot}}</h3>
   </div>

   <div class="box-container">

      <div class="box" data-aos="fade-up" data-aos-delay="150">
         <div class="image">
            <img :src="require('../src/assets/image/' + item.EventImage)" alt="">

         </div>
         <div class="content">
            <h3>{{item.Event}}</h3>
            <p>{{ item.EventDescription }}</p>

         </div>
      </div>

      <div class="box" data-aos="fade-up" data-aos-delay="300">
         <div class="image">
            <img :src="require('../src/assets/image/' + item.ResultImage)" alt="">

         </div>
         <div class="content">
            <h3>{{item.Result}}</h3>
            <p>{{item.ResultDescription}}</p>
         </div>

      </div>

   </div>

</section>

<!-- 剧情展示结束 -->


<!-- 事件选择部分开始  -->
<!-- 
<section class="contact" id="contact">

   <div class="heading">
      <h3>1934年12月12日，中央领导人召开通道会议，讨论红军行动方向
李德主张从通道向北，与转战在湖南西部的贺龙、萧克的红二、红六军团会合，</h3>
   </div>

   <div class="row">

      <iframe data-aos="fade-up" data-aos-delay="150" class="map" src="https://lbsyun.baidu.com/jsdemo/demo/k0_4.htm" allowfullscreen="" loading="lazy"></iframe>

      <div class="form">

         <div class="icons-container">

            <div class="icons" data-aos="fade-up" data-aos-delay="150">
               <i class="fas fa-thumbs-up"></i>
               <h3>赞同</h3>
               <p> &nbsp;&nbsp;&nbsp;  </p>
            </div>

            <div class="icons" data-aos="fade-up" data-aos-delay="300">
               <i class="fas fa-thumbs-down"></i>
               <h3>反对</h3>
               <p>&nbsp;&nbsp;&nbsp;</p>

            </div>     
         </div>
      </div>

   </div>

</section> -->

<!-- 事件选择部分结束 -->


<!-- 场景跳转开始-->

<section class="footer">

   <div class="links">
      <a @click="goPath('/NewMainPage')" class="btn">上一章节</a>
      <a  @click="goPath('/')" class="btn">首页</a>
     
   </div>

</section>

<!-- 场景跳转结束 -->

</body>
</template>
<script>
export default{
  data(){
  return{
    isMenuActive:false,//menu的状态
   items: [
  {
    Plot:"调整",
    Event: "会议",
    EventDescription: "博古在会上作关于第五次反“围剿”的总结报告。 他对军事指挥上的错误作了一些检讨，但主要还是强调客观原因，张闻天代表毛泽东和王稼祥和他自己作了联合发言，毛泽东在发言中明确指出了导致第五次反'围剿'失败和大转移严重损失的原因，批驳了博古、李德执行的“左”倾冒险主义军事路线。",
    EventImage: "遵义会议.jpeg",
    Result: "决定",
    ResultDescription: "这次会议调整党和军队领导的几项重要决定，毛泽东被选为常委；指定洛甫同志起草决议，委托常委审査后，发到支部讨论；取消三人团，仍由最高军事首长朱、周为军事指挥者。",
    ResultImage:"遵义会议_2.png",
  },
  //   {
  //   Plot:"最重要的是“人”",
  //   Event: " ",
  //   EventDescription: "在之前这段时间里，毛泽东经历了长时间被孤立的痛苦磨炼，毛泽东深刻领悟到团结大多数的极端重要性，王稼祥在这次会议前后发挥了巨大的作用，是最早受毛泽东影响的人；张闻天同志，他在遵义会议上的报告至关重要，还有周恩来同志，他不计较个人得失，全力支持毛泽东参与领导中央红军。如果周恩来不同意，遵义会议是开不起来的。",
  //   EventImage: "遵义会议.jpeg",
  //   Result: " ",
  //   ResultDescription: "虽然毛泽东成为中央政治局常委有决策权但是没有直接的军事指挥权。中央政治局在川、滇、黔边境的鸡鸣三省村召开的常委会议上进行常委重新分工时，大家都希望毛泽东来主持工作，但毛泽东认为张天闻替代博古更合适，毛泽东来做周恩来军事指挥上的帮助者，毛泽东被任命为前敌政治委员。这个会议上毛泽东们讨论了是否攻打鼓新场。毛泽东以辞去前敌总指挥的职务力争，但还是没能说服大家。后来，毛泽东找周恩来同志缓发作战命令，周恩来同志在第二天的会议上说服了大家，这才使红军避免了不必要的伤亡。",
  //   ResultImage:"MainPage_2_2.jpg",
  // },

    
]

  };

},
methods: {
    goPath(path){
       this.$router.push(path);
    },
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive; // 切换菜单状态
    },
    scrollTo(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

}
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@100;300;400;500;600&display=swap");
* {
  font-family: 'MiSans-Regular', sans-serif;
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  text-decoration: none;
  outline: none;
  border: none;
  text-transform: capitalize;
  -webkit-transition: all .2s linear;
  transition: all .2s linear;
}
:global(html) {
  font-size: 62.5%;
  scroll-behavior: smooth;
  scroll-padding-top: 8rem;
  overflow-x: hidden;
}

:global(html::-webkit-scrollbar) {
  width: 1rem;
}

:global(html::-webkit-scrollbar-track) {
  background: #000;
}

:global(html::-webkit-scrollbar-thumb) {
  background: #eacf4f;
  border-radius: 5rem;
}

body {
  background: url(./assets/image/background.jpg);
  background-attachment: fixed;
  background-position: center;
  overflow-x: hidden;
}

section {
  padding: 3rem 9%;
}

.heading {
  text-align: center;
  margin-bottom: 3rem;
}

.heading h3 {
  font-size: 4rem;
  text-transform: uppercase;
  color: #fff;
  margin-top: 1rem;
}

.btn {
  display: inline-block;
  margin-top: 1rem;
  cursor: pointer;
  color: #fff;
  border: 0.2rem solid rgba(255, 255, 255, 0.3);
  background: no-repeat;
  font-size: 1.7rem;
  padding: 1rem 3rem;
}

.btn:hover {
  color: #000;
  background: #fff;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: #000;
  padding: 3rem 9%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  gap: 1rem;
}

.header .icons {
  font-size: 2.5rem;
  cursor: pointer;
  color: #fff;
}

.header .icons:hover {
  color: #eacf4f;
}

.header #menu-btn {
  display: none;
}

.header .navbar a {
  color: #fff;
  font-size: 2rem;
  margin: 0 2rem;
}

.header .navbar a:hover {
  text-decoration: underline;
  text-underline-offset: 1rem;
  color: #eacf4f;
}

.header .navbar .space {
  display: inline-block;
  width: 16rem;
}

.header .logo {
  position: absolute;
  top: 3rem;
  left: 48.5%;
  -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
}

.header .logo img {
  width: 15rem;
}

.header .search-form {
  height: 7rem;
  padding: 0 2rem;
  border-top: 0.2rem solid rgba(255, 255, 255, 0.3);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  background: #000;
  position: absolute;
  top: 99%;
  left: 0;
  right: 0;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
          clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
}

.header .search-form.active {
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}

.header .search-form input {
  width: 100%;
  background: none;
  text-transform: none;
  font-size: 1.6rem;
  color: #fff;
}

.header .fa-times {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.home {
  margin-top: 3rem;
  background: url(./assets/image/home-bg.png) no-repeat;
  background-size: cover;
  background-position: center;
}

.home .content {
  max-width: 70rem;
  text-align: center;
  margin: 0 auto;
}

.home .content img {
  width: 100%;
}

.home .content h3 {
  font-size: 4rem;
 line-height: 6rem;
  text-transform: uppercase;
  color: #fff;

}

.home .content p {
      text-align: left;
    text-indent: 2em;
  font-size: 1.7rem;
  line-height: 2;
  color: #aaa;
  padding: 2rem 0;
}

.service {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: (minmax(31rem, 1fr))[auto-fit];
      grid-template-columns: repeat(auto-fit, minmax(31rem, 1fr));
  gap: 2rem;
}

.service .box {
  text-align: center;
  padding: 2rem;
}

.service .box i {
  height: 7rem;
  width: 7rem;
  line-height: 7rem;
  font-size: 2.5rem;
  color: #000;
  background: #eacf4f;
  margin-bottom: 1rem;
  border-radius: 50%;
}

.service .box h3 {
  padding: 1rem 0;
  font-size: 2rem;
  text-transform: uppercase;
  color: #fff;
      text-align: left;
    text-indent: 2em;
}

.service .box p {
  font-size: 1.5rem;
  line-height: 2;
  color: #aaa;
      text-align: left;
    text-indent: 2em;
}

.menu .box-container {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: (minmax(31rem, 1fr))[auto-fit];
      grid-template-columns: repeat(auto-fit, minmax(31rem, 1fr));
  gap: 2rem;
}

.menu .box-container .box {
  text-align: center;
}

.menu .box-container .box:hover img {
  -webkit-transform: translateY(1rem);
          transform: translateY(1rem);
}

.menu .box-container .box img {
  height: 25rem;
}

.menu .box-container .box .content {
  padding: 1rem 0;
}

.menu .box-container .box .content .stars {
  margin-bottom: 2rem;
}

.menu .box-container .box .content .stars i {
  font-size: 1.7rem;
  color: #eacf4f;
}

.menu .box-container .box .content h3 {
  font-size: 2rem;
  text-transform: uppercase;
  color: #fff;

}

.menu .box-container .box .content .price {
  font-size: 2rem;
  line-height: 2;
  color: #aaa;
}

.about {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  gap: 3rem;
}

.about .image {
  -webkit-box-flex: 1;
      -ms-flex: 1 1 40rem;
          flex: 1 1 40rem;
}

.about .image img {
  width: 100%;
}

.about .content {
  -webkit-box-flex: 1;
      -ms-flex: 1 1 40rem;
          flex: 1 1 40rem;
}

.about .content .title {
  font-size: 2.5rem;
  text-transform: uppercase;
  color: #fff;
}

.about .content p {
  font-size: 1.5rem;
  line-height: 2;
  color: #aaa;
  padding: 2rem 0;
}

.about .content .icons {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 2rem;
  margin-top: 1rem;
}

.about .content .icons h3 {
  -webkit-box-flex: 1;
      -ms-flex: 1 1 16rem;
          flex: 1 1 16rem;
  font-size: 1.5rem;
  text-transform: uppercase;
  color: #fff;
}

.about .content .icons h3 i {
  padding-right: .5rem;
  color: #eacf4f;
}

.reviews .box-container {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: (minmax(31rem, 1fr))[auto-fit];
      grid-template-columns: repeat(auto-fit, minmax(31rem, 1fr));
  gap: 2rem;
}

.reviews .box-container .box {
  text-align: center;
  padding: 2rem;
}

.reviews .box-container .box img {
  height: 10rem;
  width: 10rem;
  border-radius: 50%;
  margin-bottom: 1rem;
}

.reviews .box-container .box h3 {
  font-size: 2rem;
  text-transform: uppercase;
  color: #fff;
}

.reviews .box-container .box p {
  font-size: 1.4rem;
  line-height: 2;
  color: #aaa;
  padding: 1rem 0;
}

.reviews .box-container .box .stars {
  padding-top: .5rem;
}

.reviews .box-container .box .stars i {
  font-size: 1.7rem;
  color: #eacf4f;
}

.contact .row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  gap: 3rem;
}

.contact .row .map {
  -webkit-box-flex: 1;
      -ms-flex: 1 1 40rem;
          flex: 1 1 40rem;
  width: 100%;
}

.contact .row .form {
  -webkit-box-flex: 1;
      -ms-flex: 1 1 40rem;
          flex: 1 1 40rem;
}

.contact .row .form .icons-container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 3rem;
}

.contact .row .form .icons-container .icons {
  -webkit-box-flex: 1;
      -ms-flex: 1 1 17rem;
          flex: 1 1 17rem;
  text-align: center;
}

.contact .row .form .icons-container .icons i {
  height: 6rem;
  width: 6rem;
  line-height: 6rem;
  border-radius: 50%;
  background: #eacf4f;
  color: #000;
  font-size: 2rem;
  margin-bottom: 1rem;
}

.contact .row .form .icons-container .icons h3 {
  padding: 1rem 0;
  font-size: 2rem;
  text-transform: uppercase;
  color: #fff;
}

.contact .row .form .icons-container .icons p {
  font-size: 1.5rem;
  line-height: 2;
  color: #aaa;
}

.contact .row .form form {
  text-align: center;
}

.contact .row .form form .box {
  padding: 1.2rem 1.4rem;
  font-size: 1.6rem;
  color: #fff;
  background: none;
  border: 0.2rem solid rgba(255, 255, 255, 0.3);
  text-transform: none;
  width: 100%;
  margin: .7rem 0;
}

.contact .row .form form .box:focus {
  border-color: #eacf4f;
}

.contact .row .form form textarea {
  height: 15rem;
  resize: none;
}

.blogs .box-container {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: (minmax(31rem, 1fr))[auto-fit];
      grid-template-columns: repeat(auto-fit, minmax(31rem, 1fr));
  gap: 2rem;
}

.blogs .box-container .box {
  position: relative;
}

.blogs .box-container .box:hover .image img {
  -webkit-transform: scale(1.1);
          transform: scale(1.1);
}

.blogs .box-container .box:hover .image .icons {
  -webkit-transform: translateY(0);
          transform: translateY(0);
}

.blogs .box-container .box .image {
  height: 25rem;
  overflow: hidden;
  position: relative;
}

.blogs .box-container .box .image .icons {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  padding: 2rem;
  background: #000;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  -webkit-transform: translateY(10rem);
          transform: translateY(10rem);
}

.blogs .box-container .box .image .icons a {
  font-size: 1.5rem;
  color: #fff;
}

.blogs .box-container .box .image .icons a i {
  padding-right: .5rem;
  color: #eacf4f;
}

.blogs .box-container .box .image .icons a:hover {
  color: #eacf4f;
}

.blogs .box-container .box .image img {
  height: 100%;
  width: 100%;
  -o-object-fit: cover;
     object-fit: cover;
}

.blogs .box-container .box .content {
  text-align: center;
  padding: 2rem;
}

.blogs .box-container .box .content h3 {
  font-size: 2rem;
  text-transform: uppercase;
  color: #fff;

}

.blogs .box-container .box .content p {
  font-size: 1.5rem;
  line-height: 2;
  color: #aaa;
  padding: 1.5rem 0;
      text-align: left;
    text-indent: 2em;
}

.footer {
  text-align: center;
  background: -webkit-gradient(linear, left top, left bottom, from(transparent), to(#000));
  background: linear-gradient(transparent, #000);
}

.footer .links a {
  margin: 1rem;
}

.footer .credit {
  font-size: 2rem;
  line-height: 2;
  color: #aaa;
  padding-top: 2rem;
}

.footer .credit span {
  color: #eacf4f;
}

@media (max-width: 1200px) {
  .header {
    padding: 1rem;
  }
  section {
    padding: 1rem  2rem 0rem;
  }
}

@media (max-width: 991px) {
  html {
    font-size: 55%;
  }
  .header {
    -webkit-box-pack: end;
        -ms-flex-pack: end;
            justify-content: flex-end;
    gap: 2rem;
  }
  .header .logo {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    left: 3rem;
  }
  .header #menu-btn {
    display: inline-block;
  }
  .header .navbar {
    position: absolute;
    top: 99%;
    left: 0;
    right: 0;
    background: #000;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
            clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
  }
  .header .navbar.active {
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
  .header .navbar a {
    display: block;
    margin: 3rem 2rem;
  }
  .header .navbar .space {
    display: none;
  }
}

@media (max-width: 768px) {
  .home .content h3 {
    font-size: 2.5rem;
  }
}

@media (max-width: 450px) {
  html {
    font-size: 50%;
  }
}
</style>