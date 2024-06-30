<template>
<div class="main">
 <div class="loadIn"  v-if="showLoadIn" ></div>
    <div class="mTitle"><img src="./assets/image/长征标题.png"></div>
     <div class="book">
       <ul :class="['bookBox',{'bookFlip':isBookFlip}]">
         <li class="inBook"><img src="./assets/image/01.jpg"></li>
         <li class="inBook"><img src="./assets/image/02.jpg"></li>
         <li class="inBook"><img src="./assets/image/03.jpg"></li>
         <li class="inBook"><img src="./assets/image/01.jpg"></li>
         <li class="inBook"><img src="./assets/image/01.jpg"></li>
         <li class="inBook"><img src="./assets/image/01.jpg"></li>
         <li class="inBook"><img src="./assets/image/01.jpg"></li>
       </ul>
     </div>
    <div class="mPeople"><img src="./assets/image/lead_people.png"></div>
    <div class="mBottom"><img src="./assets/image/mBottom.png"></div>
    <div class="mBtn"><button id="selectBtn" @click="selectBtn">{{ msg }}</button></div>
    <div class="selectCard" v-show="cardState" >
      <div :class="['card',{'cardChange': isActive}]">
          <div class="front" @click="pickPatternA">
           
            <img src="./assets/image/711004.png">
             <title style="font-size: 20px; font-family: 'MiSans-Demibold',sans-serif;">{{ cardA }}</title>
          </div>
          <div class="back" @click="pickPatternB">
            <title style="font-size: 20px; font-family: 'MiSans-Demibold',sans-serif;">{{ cardB }}</title>
            <img src="./assets/image/710202.png">
          </div>
      </div>
      <button id="changeBtn" @click="patternChange" :disabled="isDisabled"></button>
    </div>
    
</div>
</template>
<script>

export default {
  name: 'homePage',
 data(){
  return{
    showLoadIn: true,
    msg:'模式选择',
    cardA:'pickPatternA',
    cardB:'pickPatternB',
    cardState:false,
    isActive:false,
    isDisabled: false,
    isBookFlip:false
  }
 },
 mounted(){
   // 2秒后隐藏背景
    setTimeout(() => {
      this.showLoadIn = false;
    }, 2000);
  },
 
 methods:{
  
  selectBtn(){
    this.cardState=true
  },
  patternChange(){
     this.isDisabled = true;
    this.isActive = !this.isActive;
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
}
</script>
<style>
@font-face {
  font-family: 'MiSans-Demibold';
  src: url('./font/MiSans-Demibold.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
html, body, #homePage{
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}
.loadIn{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
 
  animation: loadInAnimate 3s;
}
@keyframes loadInAnimate {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.main{
  width: 100vw; /* 宽度为视窗宽度的100% */
  height: 100vh; /* 高度为视窗高度的100% */
  overflow: hidden; /* 防止内容溢出 */
  display: flex;
  flex-direction: column;
  background-image: url('/src/assets/image/红纸背景.jpg');
  background-size: cover;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  position: relative;
}

.mTitle{
  position: absolute; /* Make this box absolute positioned */
  top:0%; /* Position it 20px from the top */
  left: 50%; /* Position it 20px from the left */
  width: 50%;
  height: 60%;
  /* background-color: red;  */
  z-index: 10; /* Higher z-index to make it float above other boxes */
}
.mTitle img{
    max-width: 100%;
    max-height: 100%;
}
.top{
  display: flex;
  flex-direction: row;
  height: 10%;
  width: 100%;
}
.mPeople{
  position: absolute; /* Make this box absolute positioned */
  top: 60%; /* Position it 20px from the top */
  left: 0%; /* Position it 20px from the left */
  width: 50%;
  height: 40%;
  z-index: 9; /* Higher z-index to make it float above other boxes */
}
.mPeople img{
  width: 100%;
  height: 100%;
  
}
.mBottom{
  position: absolute; /* Make this box absolute positioned */
  top: 70%; /* Position it 20px from the top */
  left: 0%; /* Position it 20px from the left */
  width: 100%;
  height: 30%;
  /* background-color: red;  */
  z-index: 10; /* Higher z-index to make it float above other boxes */
}
.mBottom img{
  width: 100%;
  height: 100%;
  object-fit: fill; /* 拉伸图片以填充容器 */
}
.mBtn{
  position: absolute; 
  top: 91%; 
  left: 60%;
  width:40%;
  height: 10%;
  z-index: 11; 
}
.mBtn button{
  width:80%;
  height: 50%;
  background-color: transparent; /* 背景透明 */
  background-image: url('./assets/image/ui_btn_2.png'); /* 背景图片 */
  background-size: cover; /* 使图片覆盖整个按钮 */
  border: none; /* 去除按钮边框 */
  color: white; /* 按钮文字颜色 */
  font-size:14px; /* 按钮文字大小 */
  text-align: center; /* 按钮文字居中 */
  line-height: 14px; /* 使文字垂直居中 */
   font-family: 'MiSans-Demibold',sans-serif;
  
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
  z-index: 12; 
  perspective: 1000px;
  background-color: rgba(0,0,0,0.5);
  backdrop-filter: blur(2px);
  z-index: 14;
}
.card{
    /* 相对定位 */
    position: relative;
    width: 60%;
    height: 40%;
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
    position: relative; /* 相对定位 */
    top: 10%; 
    left:0%; 
    width: 10%;
    height: 10%;
    background-color: transparent; /* 背景透明 */
  background-image: url('./assets/image/切换.png'); /* 背景图片 */
  background-size: cover; /* 使图片覆盖整个按钮 */
  border: none; /* 去除按钮边框 */
}
/* 书本翻转 */
.book{
   width: 100%;
   height: 50%;
     justify-content: center;
  align-items: center;
   display: flex;
   transition: .8s;
   z-index: 13;
}
.bookBox{
   display: flex;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
  perspective: 900px;
  list-style: none;
  width: 50%;
  height: 50%;
}
.inBook{
  width: 100%;
  height: 100%;
  position: absolute;
  transform-origin: left;
}
.inBook img{
  width: 100%;
  height: 100%;
  box-shadow: 1px 4px 5px rgba(0,0,0,0.2);
}
.bookBox li:nth-child(1){
  transform: rotateY(-25deg);
  transition: 2s;
}
.bookBox li:nth-child(2){
  transform: rotateY(-23deg);
  transition: 1.7s;
}
.bookBox li:nth-child(3){
  transform: rotateY(-21deg);
  transition: 1.4s;
}
.bookBox li:nth-child(4){
  transform: rotateY(-19deg);
  transition: 1.1s;
}
.bookBox li:nth-child(5){
  transform: rotateY(-17deg);
  transition: 0.8s;
}
.bookBox li:nth-child(6){
  transform: rotateY(-15deg);
  transition: 0.5s;
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
  transition: 3.8ms;
}
.bookFlip li:nth-child(6){
  transform: rotateY(-180deg);
  transition: 4.4s;
}

</style>