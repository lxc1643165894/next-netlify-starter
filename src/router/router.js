import { createRouter, createWebHashHistory } from "vue-router";
import homePage from "../homePage.vue";
import mainPage from "../mainPage.vue";
import timeLine from "../timeLine.vue";
import NewHomePage from '../NewHomePage.vue';
import NewMainPage from '../NewMainPage.vue';
import MainPage_two from "../MainPage_two.vue";


const routes = [
    {
        path: '/',
        name: 'Home',
        component: NewHomePage,
        // props: route => ({ isFirstLoad: route.query.firstLoad === 'true' }),
    },
    {
        path: '/mainPage',
        name: 'MainPage',
        component: mainPage
    },
    {
        path: '/timeLine',
        name: 'TimeLine',
        component: timeLine
    },
    {
        path: '/NewHomePage',
        name: 'NewHomePage',
        component: homePage
    },
    {
        path: '/NewMainPage',
        name: 'NewMainPage',
        component: NewMainPage
    },
    {
        path:'/MainPage_two',
        name:'MainPage_two',
        component:MainPage_two
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

// router.beforeEach((to, from, next) => {
//     if (to.name === 'Home' && !from.name) {
//         // 如果是从其他页面首次导航到首页，传递 firstLoad 参数
//         next({ query: { firstLoad: true } });
//     } else {
//         next();
//     }
// });

// // 首次加载时跳转到首页并设置 firstLoad 参数为 false
// router.isReady().then(() => {
//     if (!router.currentRoute.value.query.firstLoad) {
//         router.replace({ name: 'Home', query: { firstLoad: false } });
//     }
// });

export default router;
