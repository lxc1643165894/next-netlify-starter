<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
<body>
     <div class="container" v-if="isLoadPage">

        <span class="item item1" style="--delay:-1.1s"></span>

        <span class="item item2" style="--delay:-1.0s"></span>

        <span class="item item3" style="--delay:-0.9s"></span>

        <span class="item item4" style="--delay:-0.8s"></span>

        <span class="item item5" style="--delay:-0.7s"></span>

    </div>
    <header> 
        <div class="logo">
            <img src="./assets/image/logo2.png" alt="logo">
        </div>
        <nav>
            <ui :class="['menu',{'active':isActive}]">
                <li><a href="#"  @click="menuActive">首页</a></li>
                <li><a @click="goPath('/timeLine')">长征时间线</a></li>
                <li><a @click="goPath('/NewMainPage')">长征故事</a></li>
            </ui>
            <i class="fa-solid fa-bars" id="toggle" @click="menuActive" style="z-index: 20; color: #fff;"></i>
        </nav>
    </header>
    <section class="home" v-show="homeActive" >
        <div class="home-content">
              <h1>长征精神“立”起来</h1>
              <p>——红色文创手工DIY开创者</p>           
        </div> 
        <div class="book">
            <ul :class="['bookBox',{'bookFlip':isBookFlip}]">
                <li class="inBook"><img src="./assets/image/长征封面.png"></li>
                <li class="inBook"><img src="./assets/image/长征内页-于都2.jpg"></li>
                <li class="inBook"><img src="./assets/image/长征内页-于都3.jpg"></li>
                <li class="inBook"><img src="./assets/image/长征内页-于都4.jpg"></li>
                <li class="inBook"><img src="./assets/image/长征内页-于都5.jpg"></li>
                <li class="inBook"><img src="./assets/image/长征内页-于都6.jpg"></li>
                <li class="inBook"><img src="./assets/image/长征内页-于都7.jpg"></li> 
            </ul>
        </div>
        <button @click="StartText">开始</button>
        <div class="images"> 
            <div class="img-1"></div>    
            <div class="img-2"></div>
            <div class="img-3"></div>
            <div class="img-4"></div>
            <div class="img-5"></div>        
        </div>
        <!-- <div class="selectCard" v-show="cardState" >
          <div :class="['card',{'cardChange': isCardActive}]">
            <div class="front" @click="pickPatternA">
             
                <img src="./assets/image/长征内页-于都2.png">
                   <h2 style="position: relative; top: -20vh;"> cardA</h2>
                
            </div>
            <div class="back" @click="pickPatternB">
                <title style="font-size: 20px; font-family: 'MiSans-Demibold',sans-serif;">{{ cardB }}</title>
                <img src="./assets/image/长征内页-于都4.png">
            </div>
         </div>
            <button id="changeBtn" @click="patternChange" :disabled="isDisabled">开始</button>
      </div> -->
    </section>
</body>

</template>

<script>
import gsap from 'gsap';
import { mapState, mapActions } from 'vuex';
export default {
  data(){
        return{
            loaded:false,//加载状态
            isLoadPage:true,//控制加载动画
            isActive:false,//menu菜单
            homeActive:true,
            isBookFlip:false,//书翻页
            cardState:false,//整个卡片选择page是否可见
            isCardActive:false,//控制卡片反转
            isDisabled: false,//控制按钮是否可以点击
        }
 
  },
  computed: {
    ...mapState({
      isAdmin: state => state.isAdmin
    })
  },
//    props: {
//     isFirstLoad: {
//       type: Boolean,
//       default: false,
//     },
//   },
  mounted() {
    window.onload = this.handlePageLoad;    
    if(this.isAdmin){
         // 这里可以触发你想要的动画或其他操作
      this.isLoadPage=false;
      console.log('All resources finished loading!');
      
      this.startAnimation()   
    }
  },
  methods:{
     ...mapActions(['toggleAdminStatus']) ,// 将 toggleAdminStatus action 映射到组件的 methods 中
     handlePageLoad() {
    
     this.loaded = true;
      // 这里可以触发你想要的动画或其他操作
      this.isLoadPage=false;
      console.log('All resources finished loading!');
      
      this.startAnimation()   
    },
    startAnimation() {
         // 使用 GSAP 创建动画
    // gsap.from('.img-5',1.2, { opacity:0, y:150,delay:0.5 });
    gsap.from('.img-2',1.2, { opacity:0, y:150,delay:0.5 });
    gsap.from('.img-3',1.2, { opacity:0, y:150,delay:0.5 });
    gsap.from('.img-4',1.2, { opacity:0, y:150,delay:0.5 });
    gsap.from('.img-1',1.2, { opacity:0, y:150,delay:0.5 });
    gsap.from('.img-5',1.2, { opacity:0, y:150,delay:0.5 });

    // gsap.to('.img-2',1.2, { opacity:1, y:0,delay:0.5 });
    // gsap.to('.img-3', 1.2,{ opacity:1, y:0,delay:0.75 });
    // gsap.to('.img-4',1.2,{ opacity:1, y:0,delay:1 });
    //  gsap.to('.img-1',1.2,{ opacity:1, y:0,delay:1.25 });
    // gsap.to('.img-5',1.2,{ opacity:1, y:0,delay:1.5 });
    
    gsap.from('h1',1.2, { opacity:0, y:-80,delay:1.25 });
    gsap.from('p',1.2, { opacity:0, y:-80,delay:1 });
    gsap.from('button',1.2, { opacity:0, y:-80,delay:0.75 });
    },

    menuActive(){
        this.isActive=!this.isActive
        if(this.homeActive){
            this.homeActive=!this.homeActive
        }
        else setTimeout(()=>{
            this.homeActive=!this.homeActive
        },300)
        
    },
    goPath(path){
       this.$router.push(path);
    },
     StartText(){
        this.cardState=false,
        this.isBookFlip=true
         // 使用 setTimeout 延时跳转
    setTimeout(() => {
        this.$router.push('/timeLine');
        this.toggleAdminStatus();
    }, 1000); // 延时时间，单位为毫秒，这里是延时1秒
       
  },
    selectBtn(){
    this.cardState=true
     },
    patternChange(){
     this.isDisabled = true;
     this.isCardActive = !this.isCardActive;
       setTimeout(() => {
            this.isDisabled = false;
          }, 1000); //1秒
    },
    pickPatternA(){
        this.cardState=false,
        this.isBookFlip=true
         // 使用 setTimeout 延时跳转
    setTimeout(() => {
        this.$router.push('/timeLine');
    }, 1000); // 延时时间，单位为毫秒，这里是延时1秒
       
  },
  pickPatternB(){
        this.cardState=false,
        this.isBookFlip=true
        // 使用 setTimeout 延时跳转
    setTimeout(() => {
        this.$router.push('/mainPage');
    }, 1000); // 延时时间，单位为毫秒，这里是延时1秒
  },
  }
};
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: "MiSans-Demibold",sans-serif;
}
body{
    height: 100vh;
    background: #c5daff;
    overflow: hidden;
    min-width: 300px;
    
}
/**加载动画部分 */
        .container { 
            position: absolute;
            z-index: 999;

            width: 100%;

            height: 100%;

            display: flex;

            justify-content: center;

            align-items: center;

            background-color:#c4d5fa;

        }



        .item {

            width: 12px;

            height: 60px;

            margin: 0 2px;

            background-color: #c4000f;

            animation: wave 1.2s infinite ease-in-out;

            animation-delay: var(--delay);

        }



        @keyframes wave {



            0%,

            40%,

            100% {

                transform: scale(0.4);

            }



            20% {

                transform: scale(1);

            }

        }

/**加载动画部分结束 */
header{
    position: relative;
    z-index: 20;
    box-shadow: 0 8px 8px rgba(0, 0, 0, 0.1); /* 添加阴影 */
    background:#88000b;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 40px; /**top栏高度 */
    padding: 0 5%;
    color:#88000b;
    font-size: 18px;

}
header .logo{
    margin-top: 5px;
    margin-right: auto;
    width: 30px;   /**logod大小 */
    color: #fff;
}
header .logo img{
    transform: translateY(-60px);
    width: 100%;
    filter: drop-shadow(#fff 0 60px) 
}
header nav{
    display: flex;
    align-items: center;
}
header .menu{
    display: flex;
    align-items: center;
}
header nav .menu li a{
    position: relative;
    color: #0a2f44;
    font-size: 1rem;
    font-weight: 500;
    margin-left: 40px;

    
}
header nav #toggle{
    font-size: 1.5rem;
    margin-left: 120px;
    cursor: pointer;
}
/* Home */
.home{
    padding: 0 5%;
    color: #c4000f;
    text-align: center;
    width: 700px;
    margin: 0 auto;
}
.home h1{
    position: relative;
    z-index: 20;
    text-transform: uppercase;
    font-size: 4.5rem;
    font-weight: 500;
    margin-top: -30px;
    padding-top: 60px;
}
.home p{
    position: relative;
    z-index: 20;
    font-size: 1.85rem;
    font-weight: 300;
    margin: -10px 0 20px;
}
.home button{
    position: relative;
    z-index: 20;
    margin-top: 600px;
    background-color: #c4000f;
    padding: 0.45rem 2.1rem;
    outline: none;
    border: none;
    color: #fff;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    border-radius: 2.5rem;
}
.home .images .img-1,
.home .images .img-2,
.home .images .img-3,
.home .images .img-4,
.home .images .img-5
{
    /* transform: translateY(10vh);
    opacity: 0; */
    width: 100%;
    height: 100vh;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
}
.home .images .img-1{
    background: url(./assets/image/1.png);
    background-position: center;
    background-size: cover;
}
.home .images .img-2{
    background: url(./assets/image/2.jpg);
    background-position: center;
    background-size: cover;
}
.home .images .img-3{
    background: url(./assets/image/3.png);
    background-position: center;
    background-size: cover;
}
.home .images .img-4{
    background: url(./assets/image/5.png);
    background-position: center;
    background-size: cover;
}
.home .images .img-5{
    background: url(./assets/image/4.png);
    background-position: center;
    background-size: cover;
}
/* 模式选择卡片 */
.selectCard{
  position: absolute; 
 /* 弹性布局，让页面元素水平+垂直居中 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0; 
  left: 0;
  width:100%;
  height: 100%;
  perspective: 1000px;
  background-color: rgba(0,0,0,0.5);
  backdrop-filter: blur(2px);
  z-index: 30;
}
.card{
    /* 相对定位 */
    position: relative;
    width: 40vh;
    margin-top: -18vh;
    /* 圆角 */
    border-radius: 30px;
    /* 鼠标移到元素上光标变为小手 */
    cursor: pointer;
    background-color: #fff;
    /* 盒子阴影 */
    box-shadow: 1px 1px 20px rgba(0,0,0,0.1);
    /* 给父元素添加一个3D盒子属性，那么子元素就到背面了，这个属性是加到父元素上的，但是影响的是子元素 */
    transform-style: preserve-3d;
    /* 给卡片添加默认动画 */
    animation: rotate-reverse 1.2s cubic-bezier(0.66,-0.47,0.33,1.5) forwards;
}
.card img{
    width: 100%;
}
/* 设置鼠标移入卡片时执行动画 */
.cardChange{
    /* 动画（名称 时长 第三个属性是贝塞尔曲线，我们可以自定义动画的运动轨迹，让动画的运动轨迹有了很多种可能 第四个属性是当我们的动画完成时的状态，一般动画完成之后就回到了0%的状态，默认值是backwards，当我们给的属性值是forwards时，那么动画到100%的时候就会停下来，不会回到0%） */
    /* 哈哈，这里又啰嗦了，大家见谅哈 */
    animation: rotate 1.2s cubic-bezier(0.66,-0.47,0.33,1.5) forwards;
    /* 大家有没有发现咱们的动画看起来有点生硬，不是很自然 */
    /* 这里再给大家介绍一个属性，划重点了哦！！ */
}
.front,.back{
    /* 绝对定位 子元素是绝对定位，父元素需要相对定位 */
    position:absolute;
    top: 0;
    left: 0;
    width:100%;
    height:100%;
    /* 弹性布局，让元素垂直陈列 */
    display: flex;
    flex-direction: column;
    /* 现在子元素垂直陈列，那么就是让子元素水平居中 */
    align-items: center;
    /* 平均分配高度给每一个子元素 */
    justify-content: space-around;
    font-size: 20px;
    background-color: #fff;
    border-radius: 30px;
    /* 隐藏旋转div元素的背面 */
    backface-visibility: hidden;
}
.back{
    /* 因为背面卡片要到后面去，所以我们给背面卡片加一个沿Y轴旋转180度的属性，这里我们可以看到旋转了，但是没到后面去，原因就是父盒子现在不是3D盒子，而是一个2D盒子，所以我们需要让父元素变成一个3D盒子（哈哈，有点啰嗦了） */
    transform: rotateY(180deg);
}
/* 接下来我们定义一下旋转动画 */
@keyframes rotate{
    0%{
        transform: rotateY(0deg);
    }
    100%{
        transform: rotateY(180deg);
    }
}
@keyframes rotate-reverse{
    0%{
        transform: rotateY(180deg);
    }
    100%{
        transform: rotateY(0deg);
    }
}
#changeBtn{
    position: relative;
    z-index: 20;
    left: auto;
    top: 15vh;
    margin-top: 45vh;
    background-color: #c4000f;
    padding: 0.45rem 2.1rem;
    outline: none;
    border: none;
    color: #fff;
    font-size: 2rem;
    font-weight: 500;
    cursor: pointer;
    border-radius: 2.5rem;
}

/* book */
.book{
   margin-top: 3.3rem;
   padding: 0.45rem 2.1rem;
   justify-content: center;
   align-items: center;
   display: flex;
   transition: .8s;
  
}
.bookBox{
   display: flex;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
  perspective: 900px;
  list-style: none;
  width: 50vw;
  z-index: 20;
}
.inBook{
  width: 100%;
  height: 100%;
  position: absolute;
  transform-origin: left;
}
.inBook img{
  width: 100%;
 
  box-shadow: 1px 4px 5px rgba(0,0,0,0.2);
}
.bookBox li:nth-child(1){
  transform: rotateY(-25deg);
 
}
.bookBox li:nth-child(2){
  transform: rotateY(-23deg);
  
}
.bookBox li:nth-child(3){
  transform: rotateY(-21deg);
 
}
.bookBox li:nth-child(4){
  transform: rotateY(-19deg);
 
}
.bookBox li:nth-child(5){
  transform: rotateY(-17deg);
 
}
.bookBox li:nth-child(6){
  transform: rotateY(-15deg);
  
}
.bookBox li:nth-child(7){
  transform: rotateY(-13eg);
}
.bookFlip{
  transform: translateX(150px);
  transition: 1.5s;
}
.bookFlip li:nth-child(1){
  transform: rotateY(-180deg);
  transition: 1.4s;
}
.bookFlip li:nth-child(2){
  transform: rotateY(-180deg);
  transition: 2s;
}
.bookFlip li:nth-child(3){
  transform: rotateY(-180deg);
  transition: 2.6s;
}
.bookFlip li:nth-child(4){
  transform: rotateY(-180deg);
  transition: 3.2s;
}
.bookFlip li:nth-child(5){
  transform: rotateY(-180deg);
  transition: 3.8s;
}
.bookFlip li:nth-child(6){
  transform: rotateY(-180deg);
  transition: 4.4s;
}
@media(max-width:800px){
    .home{
        width: 390px;
        
        
    }
    .home h1{
        margin-top: 65px;
        font-size: 4rem;
        font-weight: 400;
        padding-top: 0;
    }
    .home p{
        font-size: 0.95rem;
        margin: 10px 0 20px;
    }
    .home button{
    position: relative;
    z-index: 20;
    left: auto;
    margin-top: 45vh;
    background-color: #c4000f;
    padding: 0.45rem 2.1rem;
    outline: none;
    border: none;
    color: #fff;
    font-size: 2rem;
    font-weight: 500;
    cursor: pointer;
    border-radius: 2.5rem;
}
    header nav .menu{
        flex-direction: column;
        row-gap: 1.5rem;
        position: absolute;
        left: -100%;
        top: 40px;
        width: 100%;
        padding-top: 220px;
        background: #0a2f44;
        height: calc(100vh - 40px);   /*调整整个menu的高度 */
        z-index: 999;
        transition: left 0.4s ease;
   
    }
    header nav .menu.active{
        left: 0;

    }
    header nav .menu li a{
        margin-left: unset;
        font-size: 2rem;
        font-weight: 700;
        text-transform: uppercase;
        color:  #c4000f;
        width: 250px;
        height: 60px;
        line-height: 60px;
        display: block;
        text-align: center;
        border-radius: 5px;
        transition: 0.25s ease;
        z-index:999
    }
    header nav .menu li a:hover{
        background-color: #8cdcbe;
        color: #0a2f44;
    }
}
</style>