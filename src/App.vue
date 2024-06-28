<template>
  <div class="main" >
    <div class="box_bottom">
      <div class="box_m">
        <div class="box_m_l_q"><img src="./assets/image/710101.png"></div>
        <div class="box_m_r_s"></div>
      </div>
      <div class="box_m">
        <div class="box_m_l_s"></div>
        <div class="box_m_r_q"><img src="./assets/image/710202.png"></div>
      </div>
     <div class="box_m">
        <div class="box_m_l_q"><img src="./assets/image/710301.png"></div>
        <div class="box_m_r_s"></div>
      </div>
      <div class="box_m">
        <div class="box_m_l_s"></div>
        <div class="box_m_r_q"><img src="./assets/image/710601.png"></div>
      </div>
   <div class="box_m">
        <div class="box_m_l_q"><img src="./assets/image/710602.png"></div>
        <div class="box_m_r_s"></div>
      </div>
      <div class="box_m">
        <div class="box_m_l_s"></div>
        <div class="box_m_r_q"><img src="./assets/image/710605.png"></div>
      </div>
   <div class="box_m">
        <div class="box_m_l_q"><img src="./assets/image/710606.png"></div>
        <div class="box_m_r_s"></div>
      </div>
      <div class="box_m">
        <div class="box_m_l_s"></div>
        <div class="box_m_r_q"><img src="./assets/image/710801.png"></div>
      </div>

    </div>
    <div class="box_top"> 
      <button @click="startAnime(1)"></button>
      <button @click="startAnime(-1)"></button>
    </div>

  </div>
</template>

<script>
import anime from 'animejs/lib/anime.es.js';
export default {

 methods:{

startAnime(state){  
  const parentElement = this.$el.querySelector('.box_m');
  const parentWidth = parentElement.offsetWidth;
      // 计算80%的宽度
  const translateXValue_q = parentWidth * 0.8;
  const translateXValue_s=parentWidth*0.2;
  anime({
  targets: '.box_m .box_m_l_q',
  translateX: (state*translateXValue_q)-translateXValue_q,
  duration: 2000,
  delay: function(box_m_l_q, i) {
    return i * 300;
  },
  });
  anime({
  targets: '.box_m .box_m_l_s',
  translateX:(state*translateXValue_s)-translateXValue_s,
  duration: 2000,
  delay: function(box_m_l_s, i) {
    return (i+1) * 300;
  },
  });
  anime({
  targets: '.box_m .box_m_r_q',
  translateX:state*(-translateXValue_q)+translateXValue_q,
  duration: 2000,
  delay: function(box_m_r_q, i) {
    return (i+1) * 300;
  },
  });
  anime({
  targets: '.box_m .box_m_r_s',
  translateX: state*(-translateXValue_s)+translateXValue_s,
  duration: 2000,
  delay: function(box_m_r_s, i) {
    return i * 300;
  },
  });
  

}
 }
  
}
</script>

<style>
.main{
  height: 100%;
  display: flex;
  flex-direction: column;
  background-image: url('/src/assets/image/红纸背景.jpg');
  justify-content: space-around;
  position: relative;
}
.box_bottom{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 95%;
 
}
.box_m{
  display: flex;
  flex-direction: row;
   height: 11%;
   width: 100%;
   
}
.box_m_l_q{
   display: flex;
   justify-content: center;
   align-items: center;
  height: 100%;
  width: 80%;
 
}
.box_m_l_q img {
    max-width: 100%;
    max-height: 100%;
  }
.box_m_l_s{
  height: 100%;
  width: 20%;
 
}

.box_m_r_q{
     display: flex;
   justify-content: center;
   align-items: center;
  height: 100%;
  width: 80%;
 
}
.box_m_r_q img {
    max-width: 100%;
    max-height: 100%;
  }
.box_m_r_s{
  height: 100%;
  width: 20%;
  
}

.box_top{
  position: absolute; /* Make this box absolute positioned */
  top: 80%; /* Position it 20px from the top */
  left: 30%; /* Position it 20px from the left */
  width:40%;
  height: 10%;
  background-color: red; /* Red background for visibility */
  z-index: 10; /* Higher z-index to make it float above other boxes */
}
html, body, #app {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
