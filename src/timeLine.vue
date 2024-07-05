<template>
<button class="floating-button" @click="goHomePage"></button>
 <div class="shell" id="shell">
        <div class="header">
            <h2 class="title">长征精神“立”起来</h2> 
        </div>
        <div class="timeline">
            <div class="item" data-text="于都出发" @click="goPath('/NewMainPage')">
                <div class="content">
                    <img src="./assets/image/于都出发.jpeg" alt="" class="img">
                    <h2 class="content-title">1933.10</h2>
                    <p class="content-desc">
                        1933年初，日军大举入侵华北，中华民族的危机日益严重，国民党政府却置民族危亡于不顾，仍旧坚持推行“攘外必先安内”的反动方针，决心要消灭共产党和红军......
                    </p>
                </div>
            </div>

            <div class="item" data-text="血战湘江" @click="goPath('/NewMainPage')">
                <div class="content">
                    <img src="./assets/image/MainPage_5_1.jpg" alt="" class="img">
                    <h2 class="content-title">1934.11.27</h2>
                    <p class="content-desc">
                        1934年11月27日至12月1日，我亲身经历了关系中央红军生死存亡的一战——湘江战役。当我率领红军大部队行至广西北部的湘江地区时，我们在兴安县、全州县和灌阳县与国民党军展开了殊死的战斗，持续了整整五昼夜......
                    </p>
                </div>
            </div>
            <div class="item" data-text="遵义会议" @click="goPath('/MainPage_two')" >
                <div class="content">
                    <img src="./assets/image/遵义会议.jpeg" alt="" class="img">
                    <h2 class="content-title">1935.1.15</h2>
                    <p class="content-desc">
                        在湘江战役之后，惨重的损失确实引起了军中广大干部和战士对王明军事路线的怀疑。尽管我们中央红军仍然按照原定计划向湘西前进，但当时的军事态势已经发生了显著的变化。蒋介石已判明我们的行动企图，并在我们前行的道路上部署了重兵。面对这样的危急情况，我深感必须做出重大的战略调整......
                    </p>
                </div>
            </div>

            <div class="item" data-text="巧渡金沙河">
                <div class="content">
                    <img src="./assets/image/巧渡金沙江.jpg" alt="" class="img">
                    <h2 class="content-title">1935.5.3</h2>
                    <p class="content-desc">
                       遵义会议之后，我成为了中央政治局常委。在川滇黔边境的鸡鸣三省村召开的常委会议上，我们进行了常委的重新分工。不少同志提议由我来主持工作，但我认为在当前形势下，由张闻天同志代替博古负总责更为合适，我将全力作为周恩来同志在军事指挥上的帮助者。
                    </p>
                </div>
            </div>

            <div class="item" data-text="强渡大渡河">
                <div class="content">
                    <img src="./assets/image/强渡大渡河.png" alt="" class="img">
                    <h2 class="content-title">1935.5.29</h2>
                    <p class="content-desc">
                       那个烽火连天的1935年5月，我们红军在四川的征程中，遭遇了国民党军队的猛烈追击和重重围剿。面对如此严峻的形势，我深知，我们必须采取果断的行动，才能摆脱敌人的包围。于是，我决定实施强渡大渡河的战略。
                    </p>
                </div>
            </div>
            <div class="item" data-text="飞夺泸定桥">
                <div class="content">
                    <img src="./assets/image/飞夺泸定桥.jpg" alt="" class="img">
                    <h2 class="content-title">1935.5.29</h2>
                    <p class="content-desc">
                       1935年5月25日，中央红军长征先头部队红1军团第1师第1团一部在四川省安顺场强渡大渡河成功后，蒋介石急调川军2个旅增援泸定桥。为了迅速渡过大渡河，挫败敌人的阴谋，我决定派红一军团及干部团由安顺场继续渡河，沿大渡河左岸北上，而主力则由安顺场沿大渡河右岸北上，两路并进，火速夺占泸定桥。
                    </p>
                </div>
            </div>

            <div class="item" data-text="爬雪山">
                <div class="content">
                    <img src="./assets/image/爬雪山.jpg" alt="" class="img">
                    <h2 class="content-title">1935.6.12</h2>
                    <p class="content-desc">
                       在长征途中，翻越雪山的经历至今历历在目，其中尤以翻越夹金山和党岭山的记忆最为深刻......
                    </p>
                </div>
            </div>

            <div class="item" data-text="懋功会师">
                <div class="content">
                    <img src="./assets/image/懋功会师.jpeg" alt="" class="img">
                    <h2 class="content-title">19.35.6</h2>
                    <p class="content-desc">
                      1935年6月，我们中央红军在李先念率领的红四方面军先头部队的迎接下，在懋功胜利会师了。
                    </p>
                </div>
            </div>
             <div class="item" data-text="过草地">
                <div class="content">
                    <img src="./assets/image/过草地.jpeg" alt="" class="img">
                    <h2 class="content-title">1935.8.21</h2>
                    <p class="content-desc">
                        1935年6月中旬，我率领的红一方面军从四川宝兴进入阿坝州，开始了长征途中最艰难的一段旅程。我们翻越了夹金山、梦笔山、垭口山等数座海拔在4000多米以上的高原雪山，历经千辛万苦，最终在8月进入了川西北草地......
                    </p>
                </div>
            </div>
             <div class="item" data-text="激战腊子口">
                <div class="content">
                    <img src="./assets/image/激战腊子口.jpeg" alt="" class="img">
                    <h2 class="content-title">1935.9.16</h2>
                    <p class="content-desc">
                        在长征的途中，我们面临了无数的艰难险阻，其中腊子口的战斗尤为激烈和关键。那是1935年9月的一天，我率领的中国工农红军陕甘支队正沿着甘肃南部向北挺进。
                    </p>
                </div>
            </div>
             <div class="item" data-text="大会师">
                <div class="content">
                    <img src="./assets/image/大会师.jpeg" alt="" class="img">
                    <h2 class="content-title">1935.10</h2>
                    <p class="content-desc">
                        在红军长征的壮阔征程中，大会师那一刻的到来，对我军而言，具有无比深远的意义。那是我们无数红军战士，在历经风霜雨雪、跋涉万水千山后，终于迎来的一次盛大团聚。这不仅是战士们心中的一次狂欢，更是中国共产党领导下的人民军队在艰苦卓绝的斗争中所展现出的无比坚韧与团结的象征。
                    </p>
                </div>
            </div>
             <div class="item" data-text="胜利会师">
                <div class="content">
                    <img src="./assets/image/胜利会师.jpg" alt="" class="img">
                    <h2 class="content-title">1935.10.9</h2>
                    <p class="content-desc">
                       经过长征途中的长途跋涉和艰苦斗争，1935年9月13日，我率领中共中央、中央军委以及由红一方面军主力第一、第三军团与直属部队组成的陕甘支队，从俄界继续北上。我们攻占了天险腊子口，进占了哈达铺，并成功翻越了六盘山。这一路上，我们克服了无数艰难险阻，但始终保持着坚定的信念和昂扬的斗志。
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
    goPath(path){
       this.$router.push(path);
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
            color:#be1f1f;
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