<template>
  <body>
    <button style="width: 40px;height: 40px;background-color: aqua;position: fixed;top: 0;left: 0; " @click="goHomePage"></button>
  <div class="shell" ref="shell">
    <div class="header">
      <h2 class="title">大标题</h2>
      <h3 class="subtitle">小标题</h3>
    </div>
    <div class="timeline">
      <div
        class="item"
        v-for="(item, index) in items"
        :key="index"
        :class="{ 'item--active': index === activeIndex }"
        :data-text="item.text"
      >
        <div class="content">
         <img :src="item.image" alt="" class="img">
          <h2 class="content-title">{{ item.year }}</h2>
          <p class="content-desc">{{ item.description }}</p>
        </div>
      </div>
    </div>

  </div>
  </body>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: "《测试文本》",
          image: require("../src/assets/image/01.jpg"),
          year: "2002",
          description:
            "安东尼奥三到四你打死的那首的矛盾马上到。",
        },
        {
          text: "《测试文本》",
          image: require("../src/assets/image/02.jpg"),
          year: "2002",
          description:
            "爱丁堡上帝那里是你打开拉萨鲁大师看到了。",
        },
        {
          text: "《测试文本》",
          image: require("../src/assets/image/03.jpg"),
          year: "2002",
          description:
            "暗杀圣诞节哦阿姐大数据的破案就是动静啊。",
        },
        {
          text: "《测试文本》",
          image: require("../src/assets/image/03.jpg"),
          year: "2002",
          description:
            "暗杀圣诞节哦阿姐大数据的破案就是动静啊。",
        },
        {
          text: "《测试文本》",
          image: require("../src/assets/image/03.jpg"),
          year: "2002",
          description:
            "暗杀圣诞节哦阿姐大数据的破案就是动静啊。",
        },
        {
          text: "《测试文本》",
          image: require("../src/assets/image/03.jpg"),
          year: "2002",
          description:
            "暗杀圣诞节哦阿姐大数据的破案就是动静啊。",
        },
        {
          text: "《测试文本》",
          image: require("../src/assets/image/03.jpg"),
          year: "2002",
          description:
            "暗杀圣诞节哦阿姐大数据的破案就是动静啊。",
        },
        
        

      ],
      activeIndex: 0,
    };
  },
  mounted() {
    this.setupTimeline();
  },
  methods: {
    goHomePage(){
     this.$router.push('/');
    },
    setupTimeline() {
      const shell = this.$refs.shell;
      const items = shell.querySelectorAll(".item");

      items.forEach((item, index) => {
        if (index === 0) {
          item.classList.add("item--active");
        }
      });

      window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const windowMid = scrollTop + windowHeight / 3;

        items.forEach((item, index) => {
          const rect = item.getBoundingClientRect();
          const itemTop = rect.top + scrollTop;
          const itemBottom = itemTop + rect.height;

          if (
            (index === items.length - 2 && scrollTop > itemTop + rect.height / 2) ||
            (windowMid <= itemBottom && windowMid >= itemTop)
          ) {
            this.activeIndex = index;
          }
        });
      });
     
    },
    
  },
};
</script>

<style scoped>
        * {
            padding: 0;
            margin: 0;
        }

        .shell {
            width: 100%;
            position: relative;
            padding: 80px 0;
            transition: 0.3s ease 0s;
            background-attachment: fixed;
            background-size: cover;
        }

        .shell:before {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background: rgba(99, 99, 99, 0.8);
            content: "";
        }

        .header {
            width: 100%;
            text-align: center;
            margin-bottom: 80px;
            position: relative;
        }

        .title {
            color: #fff;
            font-size: 46px;
            font-weight: normal;
            margin: 0;
        }

        .timeline {
            display: flex;
            margin: 0 auto;
            flex-wrap: wrap;
            flex-direction: column;
            max-width: 700px;
            position: relative;
        }

        .content-title {
            font-weight: normal;
            font-size: 66px;
            margin: -10px 0 0 0;
            transition: 0.4s;
            padding: 0 10px;
            box-sizing: border-box;
            color: #fff;
        }

        .content-desc {
            margin: 0;
            font-size: 15px;
            box-sizing: border-box;
            color: rgba(255, 255, 255, 0.7);
            line-height: 25px;
        }

        .timeline:before {
            position: absolute;
            left: 50%;
            width: 2px;
            height: 100%;
            margin-left: -1px;
            content: "";
            background: rgba(255, 255, 255, 0.07);
        }

        .item {
            padding: 40px 0;
            opacity: 0.3;
            filter: blur(2px);
            transition: 0.5s;
            box-sizing: border-box;
            width: calc(50% - 40px);
            display: flex;
            position: relative;
            transform: translateY(-80px);
        }

        .item:before {
            content: attr(data-text);
            letter-spacing: 3px;
            width: 100%;
            position: absolute;
            color: rgba(255, 255, 255, 0.5);
            font-size: 13px;
            border-left: 2px solid rgba(255, 255, 255, 0.5);
            top: 70%;
            margin-top: -5px;
            padding-left: 15px;
            opacity: 0;
            right: calc(-100% - 56px);
            font: 900 20px '';
            letter-spacing: 5px;
        }

        .item:nth-child(even) {
            align-self: flex-end;
        }

        .item:nth-child(even):before {
            right: auto;
            text-align: right;
            left: calc(-100% - 56px);
            padding-left: 0;
            border-left: none;
            border-right: 2px solid rgba(255, 255, 255, 0.5);
            padding-right: 15px;
        }

        .item--active {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0px);
        }

        .item--active:before {
            top: 50%;
            transition: 0.3s all 0.2s;
            opacity: 1;
        }

        .item--active .content-title {
            margin: -50px 0 20px 0;
        }

        .img {
            max-width: 100%;
            box-shadow: 0 10px 15px rgba(0, 0, 0, 0.4);
        }

        .subtitle {
            color: rgba(255, 255, 255, 0.5);
            font-size: 16px;
            letter-spacing: 5px;
            margin: 10px 0 0 0;
            font-weight: normal;
        }

        .footer {
            padding: 95px 0;
            text-align: center;
        }

        .footer a {
            color: #999;
            display: inline-block;
        }

        @media only screen and (max-width: 767px) {
            .item {
                align-self: baseline !important;
                width: 100%;
                padding: 0 30px 150px 80px;
            }

            .item:before {
                left: 10px !important;
                padding: 0 !important;
                top: 50px;
                text-align: center !important;
                width: 60px;
                border: none !important;
            }

            .item:last-child {
                padding-bottom: 40px;
            }
        }

        @media only screen and (max-width: 767px) {
            .timeline:before {
                left: 40px;
            }
        }
</style>
