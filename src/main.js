import { createApp } from 'vue'
import App from './App.vue'
import homePage from './homePage.vue'
import mainPage from './mainPage.vue'
import timeLine from './timeLine.vue'
import NewHomePage from './NewHomePage.vue'
import NewMainPage from './NewMainPage.vue'
import MainPage_two from './MainPage_two.vue'
import AOS from 'aos';
import 'aos/dist/aos.css';
import store from './store'; // 导入 Vuex store
// 引入路由
import router from "./router/router.js";

// 初始化 AOS
AOS.init({
    duration: 800,
});

// 创建 homePage 实例并挂载
const homePageApp = createApp(homePage)
homePageApp.use(router)
homePageApp.mount('#homePage')

// 创建 mainPage 实例并挂载
const mainPageApp = createApp(mainPage)
mainPageApp.use(router)
mainPageApp.mount("#mainPage")

const AppApp = createApp(App)
AppApp.use(router)
AppApp.use(store); // 注册 Vuex store
AppApp.mount("#App")

const timeLineApp = createApp(timeLine)
timeLineApp.use(router)
timeLineApp.mount('#timeLine')

const NewHomePageApp = createApp(NewHomePage)
NewHomePageApp.use(router)
NewHomePageApp.mount('#NewHomePage')

const NewMainPageApp = createApp(NewMainPage)
NewMainPageApp.use(router)
NewMainPageApp.mount('#NewMainPage')

const MainPage_twoApp=createApp(MainPage_two)
MainPage_twoApp.use(router)
MainPage_twoApp.mount('#MainPage_two')

// 使 AOS 在每次路由变化后重新初始化
AppApp.mixin({
    mounted() {
        AOS.refresh();
    }
});

NewMainPageApp.mixin({
    mounted() {
        AOS.refresh();
    }
});