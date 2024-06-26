
import homePage from "../homePage.vue"
import mianPage from "../mainPage.vue"
import timeLine from "../timeLine.vue"
import { createRouter, createWebHashHistory } from "vue-router"
const routes = [
    {
        path: '/',
        component: homePage
    },
    {
        path:'/mainPage',
        component: mianPage
    },
    {
       path:'/timeLine',
       component:timeLine
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes // 修正这里的属性名为 routes 而不是 router
})

export default router