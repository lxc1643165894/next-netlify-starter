<!-- <template>
 <button class="floating-button" @click="goHomePage"></button>
<div class="mainPage">
    <div class="startPart" v-show="startTextState">
      <div class="startText" ref="fadeElement">
       <span class="world" v-html="displayText" ></span>
    </div>
    </div>
    <div class="contantPart" >
       <div class="container">
        <section id="img-one" class="img">
            <h1>TIME</h1>
        </section>
        <section class="content-one">
            <div class="text-box">
                <div class="cnt">
                <h2>THE TIME</h2>
                <p>
                    Time would heal almost all wounds . If your wounds have not been healed up , please wait for a short while.
                    Life isn't about waiting for the storm to pass . it's about learning to dance in the rain.
                </p>
                <p>
                    <a href="#" class="btn">TAKE <strong>CARE OF</strong><em>YOURSEFL</em></a>
                </p>
            </div>
            </div>
        </section>
        <section class="content-two">
            <div class="text-box">
                <div class="cnt">
                <h2>LIVING</h2>
                <p>
                    Some of us get dipped in flat, some in satin, some in gloss. But every once in a while you find someone who"s iridescent, and when you do, nothing will ever compare.
                    We accept both the good and the bad, andwithout uttering a sound, we continue living.
                </p>
                <p>
                    <a href="#" class="btn">BEST <strong>WISHS</strong><em>FOR YOU</em></a>
                </p>
            </div>
            </div>
        </section>
        <section class="content-three">
            <div class="text-box">
                <div class="cnt">
                <h2>HAPPY ENDING</h2>
                <p>
                    Nobody can go back and start a new beginning , but anyone can start today and make a new ending.
                    The minute you think of giving up , think of the reason why you held on so long .
                </p>
                <p>
                    <a href="#" class="btn">TAKE <strong>CARE OF</strong><em>YOURSEFL</em></a>
                </p>
            </div>
            </div>
        </section>
        <section id="img-two" class="img">
            <h1>THOUGHTS</h1>
        </section>
        <section id="footer">FOOTER</section>
      </div>
    </div>
</div>
</template>
<script>


export default {
    name:'mainPage',
  
  data() {
    return {
      text: '这是一个示例文本\n用于演示逐字显示效果\n并在特定位置换行',
       displayText: '', // 用于逐字显示的文本
       startTextState:true

    };
  },
   beforeUnmount() {
    // 解绑所有事件监听器示例
    window.removeEventListener('scroll', this.runEventOnPageLoad);
    // 其他事件解绑操作
    window.removeEventListener('scroll', this.fadeOutElement);
  },
  async mounted() {
     document.body.style.overflow = 'hidden';
    await this.runEventOnPageLoad();
    this.fadeOutElement();
    document.body.style.overflow = ''
    setTimeout(() => {
      this.isActive=false;
    }, 2000);
  },
  methods: {
    goHomePage(){
     this.$router.push('/');
    },
   async runEventOnPageLoad() {
      for (let i = 1; i <= this.text.length; i++) {
        await this.setText(this.text.substring(0, i));
      }
    },
    setText(t) {
      return new Promise((resolve) => {
        setTimeout(() => {
          this.displayText = t.replace(/\n/g, '<br>');
          resolve();
        }, 100); // 可以根据需要调整延迟时间
      });
    },
     fadeOutElement() {
      this.$refs.fadeElement.classList.add('fade-out');
    },
   
  },
  
};
</script>
<style scoped>
@font-face {
  font-family: 'MiSans-Demibold';
  src: url('./font/MiSans-Demibold.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
*{
    margin: 0;
    padding: 0;
    font-family: "MiSans-Demibold",sans-serif;
}
        /**返回按钮 */
        .floating-button {
            position: fixed;
            left: 2%;
            bottom: 15%;
            width: 50px;
            height: 50px;
            background-color:#6e6969;
            background-image: url('./assets/image/返回.png');
            background-size: cover;
            background-repeat: no-repeat;
            border: none;
            border-radius: 50%;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
            z-index: 1000;
            cursor: pointer;
            opacity: 0.8;
        }
.mainPage{
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  position: relative;
}
.startPart{
   height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0%;
  z-index: 10;
}
.startText{
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background:radial-gradient(#233,#b41919);
}
.world{
    font-size: 20px;
    color: aliceblue;
    text-align: center;
    line-height: 2;
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.fade-out {
  animation: fadeOut 2s forwards;
}

/* 内容部分 */


.container {

    width: 100vw;
    height: auto;
}

section,
#footer {
    height: 100vh;
    position: relative;
    color: rgba(255, 255, 255, .8);
    font-size: 10vh;


    /* 文字阴影 */
    text-shadow: 4px 4px rgb(46, 43, 43);
    /* 弹性布局 */
    display: flex;
    /* 水平居中 */
    justify-content: center;
    /* 垂直居中 */
    align-items: center;
}

#footer {
    background-color: #c0b5aa;
    height: 50vh;
    color: #fff;
    font-size: 20vh;
}

.img {
    overflow: hidden;
    /* 背景图片不重复 */
    background-repeat: no-repeat;
    /* 背景图片位置：居中 */
    background-position: center;
    /* 背景图片固定 */
    background-attachment: fixed;
    background-size: cover;
    /* 禁止用户误选中 */
    user-select: none;

}

/* 首位图片 */
#img-one {
    background-image: url(./assets/image/八角楼的灯光1.png);
    background-size: cover;
}

#img-two {
    background-image: url(./assets/image/八角楼的灯光4.jpg);
}
/* 中间图片 */
.content-one {
    background: url(./assets/image/八角楼的灯光1.png) no-repeat fixed center;
    background-size: cover;
}

.content-two {
    background: url(./assets/image/八角楼的灯光2.png) no-repeat fixed center;
    background-size: cover;
}

.content-three {
    background: url(./assets/image/八角楼的灯光3.jpg) no-repeat fixed center;
    background-size: cover;
}

.text-box {
    width: 100%;
    height: 50%;
    /* 绝对定位 */
    position: absolute;
    bottom: 25%;
    /* 文字居中 */
    text-align: center;
    background-color: rgba(0, 0, 0, .3);
    /* 旋转中心 */
    transform-origin: center bottom;
    /* 扭曲斜切 */
    transform: skew(0, -8deg);

}

.text-box .cnt {
    display: inline-block;
    text-align: right;
    margin: 40px 0 10px;
    width: 90%;
    max-width: 990px;
    transform-origin: right bottom;
    transform: skew(0, 8deg);
}

.cnt h2 {
    margin-top: 100px;
    font-size: 36px;
    text-shadow: 1px 0px 0px #323232;
    letter-spacing: 0.3em;
    /* 大写字母 */
    text-transform: uppercase;
    color: #fff;
    margin-bottom: 5px;
}

.cnt p {
    font-size: 20px;
    line-height: 1.7;
    margin-bottom: 10px;
    color: #fff;
}

.cnt a.btn {
    font-size: 90%;
    letter-spacing: 0.3em;
    text-shadow: 1px 0px 0px black;
    line-height: 2.8;
    display: inline-block;
    background-color: #eaeaea;
    color: #000;
    border: 3px solid #000;
    white-space: nowrap;
    text-decoration: none;
    padding: 0 20px;

}
</style> -->
<template>
<div></div>
</template>
<style></style>
<style>
@font-face {
  font-family: 'MiSans-Demibold';
  src: url('./font/MiSans-Demibold.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
*{
    margin: 0;
    padding: 0;
    font-family: "MiSans-Demibold",sans-serif;
}</style>