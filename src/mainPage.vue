<template>
<div class="mainPage">
    <div class="startText">
       <span class="world" v-html="displayText"></span>
       
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
    };
  },
  async mounted() {
    await this.runEventOnPageLoad();
  },
  methods: {
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
    }
  },
  
};
</script>
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
}
.mainPage{
  height: 100%;
  width: 100%;

}
.startText{
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background:radial-gradient(#233,#b41919)
}
.world{
    font-size: 48px;
    color: aliceblue;
    text-align: center;
    font-family: 'MiSans-Demibold',sans-serif;
    line-height: 2;
}

</style>