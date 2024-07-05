<template>

<body>
        <!-- font awesome cdn link  -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css">



    <!-- header section starts  -->

<header class="header">

   <div id="menu-btn" class="fas fa-bars icons"></div>
   <!-- <div id="search-btn" class="fas fa-search icons"></div> -->

   <nav class="navbar">
      <a href="#home">首页</a>
      <a href="#menu">上一章节</a>
      <a href="#about">下一章节</a>
      <span class="space"></span>
      <a href="#reviews">长征时间线</a>
   </nav>

   <!-- <a href="#" class="fas fa-shopping-cart icons"></a> -->

   <!-- <a href="#home" class="logo"><img src="./assets/image/logo2.png" alt=""></a> logo设置-->  
   

</header>

<!-- header section ends  -->

<!-- home section starts  -->

<section class="home" id="home">

   <div class="content">
      <h3 data-aos="fade-up" data-aos-delay="300">长征开始</h3>
      <img data-aos="fade-up" data-aos-delay="150" src="./assets/image/MainPage_start.png" alt="">
      
      <p data-aos="fade-up" data-aos-delay="450">20世纪30年代的红军长征，是中国共产党领导的人民军队在神州大地上谱写的一首惊天动地的壮歌、一部彪炳千秋的史诗;是中国共产党领导的人民军队在人类发展史上雕刻的伟大杰作，在中国革命前进道路上矗立的不朽丰碑。 毛泽东以高超的政治智慧和斗争策略，雄伟的胆略和宏大气魄，卓越的军事思想和作战指挥才能，为中国工农红军取得长征的最后胜利作出了具有决定意义的伟大贡献。</p>
      <a data-aos="fade-up" data-aos-delay="600" class="btn" @click="scrollTo('about')">开始</a>   
   </div>

</section>

<!-- home section ends -->





<!-- about section starts  -->

<section class="about" >

   <div class="image" data-aos="fade-right" data-aos-delay="150" >
      <img src="./assets/image/MainPage_why.jpg" alt="" id="about">
   </div>

   <div class="content" data-aos="fade-left" data-aos-delay="300" >
      <h3 class="title">为什么要进行长征？</h3>
      <p>1933年初，日军大举入侵华北，中华民族的危机日益严重，国民党政府却置民族危亡于不顾，仍旧坚持推行“攘外必先安内”的反动方针，决心要消灭共产党和红军......</p>
   </div>

</section>

<!-- about section ends -->

<!-- 剧情展示部分开始  -->

<section class="blogs" id="blogs" v-for="(item, index) in items" :key="index">

   <div class="heading">
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
      <a @click="goPath('/')" class="btn">返回首页</a>
      <a @click="goPath('/MainPage_two')" class="btn">下一章节</a>
     
   </div>

</section>

<!-- 场景跳转结束 -->

</body>
</template>
<script>
export default{
  data(){
  return{
   items: [
  {
    Plot:"失利",
    Event: "冒险主义",
    EventDescription: "中共中央领导人博古和共产国际派来的军事顾问李德（德国共产党党员），先是实行冒险主义的进攻战略，后又实行保守主义的防御战略，他们放弃过去几次反“围剿”中行之有效的积极防御方针，主张“御敌于国门之外”，使红军陷于被动地位；在进攻遭受挫折后，又采取消极防御方针，实行分兵防御、“短促突击”，企图用阵地战代替游击战和运动战，同装备优良的国民党军队拼消耗。",
    EventImage: "MainPage_1_1.png",
    Result: "结果",
    ResultDescription: "红军屡战失利，导致苏区日渐缩小。",
    ResultImage:"MainPage_1_2.jpg",
  },
    {
    Plot:"错失良机",
    Event: "“左”倾",
    EventDescription: "1933年11月，国民党军第十九路军将领在福建成立“中华共和国人民革命政府”，公开宣布抗日反蒋，并派代表同红军谈判合作。这对红军打破第五次“围剿”是一个有利的机会。但“左”倾领导人继续把中间派看成最危险的敌人，不肯在军事上同第十九路军进行配合",
    EventImage: "MainPage_2_1.jpg",
    Result: "结果",
    ResultDescription: "使红军坐失良机。蒋介石在打败第十九路军后，完成对中央根据地的四面包围。",
    ResultImage:"MainPage_2_2.jpg",
  },
    {
    Plot:"损失惨重",
    Event: "广昌战役",
    EventDescription: "1934年4月，中央红军（1月由红一方面军改称）在江西省广昌与国民党军进行决战，损失惨重。1934年7月，中华苏维埃共和国中央革命军事委员会（简称中革军委）命令红军第7军团组成北上抗日先遣队，向闽浙皖赣边挺进，建立新的苏区；命令红军第6军团从湘赣苏区突围西征，到湘中发展游击战争。两个军团分别北上、西征，意在调动国民党“围剿”军，以减轻中央苏区的压力。但仍未能达到目的。1934年10月初，国民党军向中央苏区的中心区域进攻，迅速占领了兴国、宁都、石城一线，红军在苏区内打破国民党军的“围剿”已无可能。",
    EventImage: "MainPage_3_1.jpg",
    Result: "结果",
    ResultDescription: "第五次反围剿失败",
    ResultImage:"MainPage_3_2.jpg",
  },
    {
    Plot:"于都出发",
    Event: "做出改变",
    EventDescription: "由于王明“左”倾教条主义路线的错误，中央领导机关和红军主力决定推出根据地，1934年10月18日傍晚中央红军长征从于都集结出发。",
    EventImage: "MainPage_4_1.jpg",
    Result: "",
    ResultDescription: "",
    ResultImage:"MainPage_4_2.jpg",
  },
    {
    Plot:"突围",
    Event: "战略撤退",
    EventDescription: "从17日起，中央红军主力第一、第三、第五、第八、第九军团及中央、军委机关和直属部队8.6万余人，陆续从集结地出发突围。随后，红二十五军，红四方面军，红二、红六军团（即后来的红二方面军）也相继撤出鄂豫皖、川陕、湘鄂川黔等根据地，进行战略转移。",
    EventImage: "MainPage_5_1.jpg",
    Result: "突破封锁",
    ResultDescription: "10月21日，红军开始突围，25日突破第一道封锁线11月5日至8日，在湖南的汝城和广东的城口之间突破第二道封锁线；11月13日至15日，在郴县、良田、宜章、乐昌之间突破了第三道封锁线；11月27日至12月1日，红军苦战五昼夜，从广西全州、兴安间抢渡湘江，突破了国民党军的第四道封锁线。这就是著名的湘江战役，是突围以来最壮烈、最关键的一仗，是关系中央红军的生死存亡之战，也是决定长征前途的命运之战。毛泽东军与优势之敌苦战，撕开了敌重兵设防的封锁线，粉碎了蒋介石围歼红军于湘江以东的企图。但是，红军也为此付出了极为惨重的代价，部队指战员和中央机关人员由长征出发时的8万多人锐减至3万余人。",
    ResultImage:"MainPage_5_2.jpg",
  },
    {
    Plot:"通道会议",
    Event: "",
    EventDescription: "王明左倾主义慌了。他们想“逃跑”，并把战略转移变成搬家式的行动",
    EventImage: "MainPage_6_1.jpg",
    Result: "决策",
    ResultDescription: "1934年12月12日，中央领导人召开通道会议，讨论红军行动方向，若红军继续前往湘西，蒋介石已在红军北上的路上设置重兵防守，全军覆灭。李德主张从通道向北，与转战在湖南西部的贺龙、萧克的红二、红六军团会合，毛泽东强烈反对前往湘西的决议，在行军路上，他与中革军委副主席的王稼祥，中央政治局常委张闻天倾心交谈，庆幸的是，他们同意并支持了毛泽东的主张，后又取得了周恩来、朱德等同志的支持李德等人却坚持己见，不愿接受。在通道会议上，毛泽东主张前往贵州的建议被采纳，中央红军开始改变长征初期的战略计划，变被动挨打为主动进击。在黎平会议上，毛泽东进一步主张继续向贵州西北进军，在川黔边建立根据地。在猴场会议上，毛泽东主张在川黔边地区建立新的根据地，被会议以《关于渡江后新的行动方针的决定》确定下来。，",
    ResultImage:"MainPage_6_2.png",
  },

]

  };

},
methods: {
    goPath(path){
       this.$router.push(path);
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
  font-family: 'Raleway', sans-serif;
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
}

.service .box p {
  font-size: 1.5rem;
  line-height: 2;
  color: #aaa;
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