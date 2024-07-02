<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
<body>
    <header> 
        <div class="logo">
            <img src="./assets/image/logo2.png" alt="logo">
        </div>
        <nav>
            <ui :class="['menu',{'active':isActive}]">
                <li><a href="#">首页</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contacts</a></li>
            </ui>
            <i class="fa-solid fa-bars" id="toggle" @click="menuActive" style="z-index: 20; color: #fff;"></i>
        </nav>
    </header>
    <section class="home">
        <div class="home-content">
              <h1>长征精神立起来</h1>
              <p>——红色文创手工DIY开创者</p>
              
        </div> 
        <div class="book">
            <ul :class="['bookBox',{'bookFlip':isBookFlip}]">
                <li class="inBook"><img src="./assets/image/长征封面.png"></li>
                <li class="inBook"><img src="./assets/image/长征内页-于都2.png"></li>
                <li class="inBook"><img src="./assets/image/长征内页-于都3.png"></li>
                <li class="inBook"><img src="./assets/image/长征内页-于都4.png"></li>
                <li class="inBook"><img src="./assets/image/长征内页-于都5.png"></li>
                <li class="inBook"><img src="./assets/image/长征内页-于都6.png"></li>
                <li class="inBook"><img src="./assets/image/长征内页-于都7.png"></li> 
            </ul>
        </div>
        <button @click="bookFlip">开始</button>
        <div class="images"> 
            <div class="img-1"></div>    
            <div class="img-2"></div>
            <div class="img-3"></div>
            <div class="img-4"></div>
            <div class="img-5"></div>  
         
        </div>
    </section>
</body>

</template>

<script>
import gsap from 'gsap';
export default {
  data(){
        return{
            isActive:false,
            isBookFlip:false
        }
 
  },
  mounted() {
    // 使用 GSAP 创建动画
    // gsap.from('.img-5',1.2, { opacity:0, y:150,delay:0.5 });
    gsap.from('.img-2',1.2, { opacity:0, y:150,delay:0.5 });
    gsap.from('.img-3', 1.2,{ opacity:0, y:150,delay:0.75 });
    gsap.from('.img-4',1.2,{ opacity:0, y:150,delay:1 });
    gsap.from('.img-1',1.2,{ opacity:0, y:150,delay:1.25 });
    gsap.from('.img-5',1.2,{ opacity:0, y:150,delay:1.5 });
    
    gsap.from('h1',1.2, { opacity:0, y:-80,delay:1.25 });
    gsap.from('p',1.2, { opacity:0, y:-80,delay:1 });
    gsap.from('button',1.2, { opacity:0, y:-80,delay:0.75 });

    
    
  },
  methods:{
    menuActive(){
        this.isActive=!this.isActive
    },
    startAnimate(){
        
    },
    bookFlip(){
         this.isBookFlip=true
    }
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
header{
    position: relative;
    z-index: 20;
    box-shadow: 0 8px 8px rgba(0, 0, 0, 0.1); /* 添加阴影 */
    background:#88000b;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 60px;
    padding: 0 5%;
    color:#88000b;
    font-size: 18px;

}
header .logo{
    padding-top: 160px;
    margin-right: auto;
    width: 40px;
}
header .logo img{

    width: 100%;
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
    background: url(./assets/image/2.png);
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
  width: 80%;
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
        font-size: 3rem;
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
    margin-top: 400px;
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
    header nav .menu{
        flex-direction: column;
        row-gap: 1.5rem;
        position: absolute;
        left: -100%;
        top: 60px;
        width: 100%;
        padding-top: 220px;
        background: #0a2f44;
        height: calc(100vh - 60px);   /*调整整个menu的高度 */
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
        color: #c74f11;
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