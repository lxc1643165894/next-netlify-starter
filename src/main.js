import { createApp } from 'vue'
import App from './App.vue'
import homePage from './homePage.vue'
import mainPage from './mainPage.vue'


// 引入路由
import router from "./router/router.js";


// 创建 homePage 实例并挂载
const homePageApp = createApp(homePage)
homePageApp.use(router)
homePageApp.mount('#homePage')
createApp(mainPage).mount('#mainPage')
//创建 mainPage 实例并挂载
const mainPageApp=createApp(mainPage)
mainPageApp.use(router)
mainPageApp.mount("#mainPage")

const AppApp =createApp(App)
AppApp.use(router)
AppApp.mount("#App")