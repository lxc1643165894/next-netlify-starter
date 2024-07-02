<template>
<button class="floating-button" @click="goHomePage"></button>
 <div class="shell" id="shell">
        <div class="header">
            <h2 class="title">红军长征“立”起来</h2> 
        </div>
        <div class="timeline">
            <div class="item" data-text="长征出发">
                <div class="content">
                    <img src="./assets/image/长征出发纪念碑.png" alt="" class="img">
                    <h2 class="content-title">1933</h2>
                    <p class="content-desc">
                        1933年初，日军大举入侵华北，中华民族的危机日益严重，国民党政府却置民族危亡于不顾，仍旧坚持推行“攘外必先安内”的反动方针，决心要消灭共产党和红军......
                    </p>
                </div>
            </div>

            <div class="item" data-text="测试文本">
                <div class="content">
                    <img src="./assets/image/井冈山革博1.jpg" alt="" class="img">
                    <h2 class="content-title">2002</h2>
                    <p class="content-desc">
                        这是一段测试文本你可以自定义你需要的文本内容
                        这是一段测试文本你可以自定义你需要的文本内容
                    </p>
                </div>
            </div>
            <div class="item" data-text="测试文本">
                <div class="content">
                    <img src="./assets/image/红井3.jpg" alt="" class="img">
                    <h2 class="content-title">2002</h2>
                    <p class="content-desc">
                        这是一段测试文本你可以自定义你需要的文本内容
                        这是一段测试文本你可以自定义你需要的文本内容
                    </p>
                </div>
            </div>

            <div class="item" data-text="测试文本">
                <div class="content">
                    <img src="./assets/image/黄洋界景点2.jpg" alt="" class="img">
                    <h2 class="content-title">2002</h2>
                    <p class="content-desc">
                        这是一段测试文本你可以自定义你需要的文本内容
                        这是一段测试文本你可以自定义你需要的文本内容
                    </p>
                </div>
            </div>

            <div class="item" data-text="测试文本">
                <div class="content">
                    <img src="./assets/image/出发雕塑.png" alt="" class="img">
                    <h2 class="content-title">2002</h2>
                    <p class="content-desc">
                        这是一段测试文本你可以自定义你需要的文本内容
                        这是一段测试文本你可以自定义你需要的文本内容
                    </p>
                </div>
            </div>
            <div class="item" data-text="测试文本">
                <div class="content">
                    <img src="./assets/image/黄洋界6.jpg" alt="" class="img">
                    <h2 class="content-title">2002</h2>
                    <p class="content-desc">
                        这是一段测试文本你可以自定义你需要的文本内容
                        这是一段测试文本你可以自定义你需要的文本内容
                    </p>
                </div>
            </div>

            <div class="item" data-text="测试文本">
                <div class="content">
                    <img src="./assets/image/集结大桥全景.jpg" alt="" class="img">
                    <h2 class="content-title">2002</h2>
                    <p class="content-desc">
                        这是一段测试文本你可以自定义你需要的文本内容
                        这是一段测试文本你可以自定义你需要的文本内容
                    </p>
                </div>
            </div>

            <div class="item" data-text="测试文本">
                <div class="content">
                    <img src="./assets/image/井冈山革博2.jpg" alt="" class="img">
                    <h2 class="content-title">2002</h2>
                    <p class="content-desc">
                        这是一段测试文本你可以自定义你需要的文本内容
                        这是一段测试文本你可以自定义你需要的文本内容
                    </p>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
import $ from 'jquery'

      (function ($) {
            $.fn.timeline = function () {
                var selectors = {
                    id: $(this),
                    item: $(this).find(".item"),
                    activeClass: "item--active",
                    img: ".img"
                };

                // 将第一个时间轴项目激活，并设置时间轴背景图片为第一个项目的图片
                selectors.item.eq(0).addClass(selectors.activeClass);
                selectors.id.css(
                    "background-image",
                    "url(" +
                    selectors.item.first()
                        .find(selectors.img)
                        .attr("src") +
                    ")"
                );

                // 获取时间轴项目的总数
                var itemLength = selectors.item.length;

                // 当页面滚动时，触发滚动事件
                $(window).scroll(function () {
                    var max, min;
                    // 获取页面滚动的距离
                    var pos = $(this).scrollTop();
                    // 获取窗口高度的一半
                    var windowMid = $(this).height() / 3 + pos;

                    selectors.item.each(function (i) {
                        // 获取当前时间轴项目的最小和最大高度
                        min = $(this).offset().top;
                        max = $(this).height() + $(this).offset().top;
                        
                        // 如果滚动到最后一个项目，并且超过了当前项目高度的一半，
                        // 则将最后一个项目设置为激活状态，并设置背景图片为最后一个项目的图片
                        if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
                            selectors.item.removeClass(selectors.activeClass);
                            selectors.id.css(
                                "background-image",
                                "url(" +
                                selectors.item.last()
                                    .find(selectors.img)
                                    .attr("src") +
                                ")"
                            );
                            selectors.item.last().addClass(selectors.activeClass);
                        }
                        // 如果当前滚动位置在当前项目的最小和最大高度之间，
                        // 且窗口中间位置在当前项目的最小和最大高度之间，
                        // 则将当前项目设置为激活状态，并设置背景图片为当前项目的图片
                        else if (windowMid <= max && windowMid >= min) {
                            selectors.id.css(
                                "background-image",
                                "url(" +
                                $(this)
                                    .find(selectors.img)
                                    .attr("src") +
                                ")"
                            );
                            selectors.item.removeClass(selectors.activeClass);
                            $(this).addClass(selectors.activeClass);
                        }
                    });
                });
            };
        })($);


export default {
  name: 'timeLine',
  data: function () {
    return {}
  },
  mounted: function () {
    this.initializeTimeline();
  },
  methods: {
     goHomePage(){
     this.$router.push('/');
    },
    initializeTimeline() {
      $("#shell").timeline();
    }
  }
}
</script>
<style scoped>
        * {
            padding: 0;
            margin: 0;
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
            color:#be1f1f;
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