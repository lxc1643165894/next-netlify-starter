import { createRouter, createWebHashHistory } from "vue-router";

import homePage from "../homePage.vue";
import mainPage from "../mainPage.vue";
import timeLine from "../timeLine.vue";
import NewHomePage from '../NewHomePage.vue';
import NewMainPage from '../NewMainPage.vue';
import MainPage_two from "../MainPage_two.vue";
import MainPage_three from "../MainPage_three.vue";


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
    },
    {
        path:'/MainPage_three',
        name:MainPage_three,
        component:MainPage_three
    }
    
];


const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior() {
       
       {
           
            return { x: 0, y: 0 };
        }
    }
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
router.afterEach(() => {
    // 使用 setTimeout 确保在 DOM 更新之后执行滚动
    setTimeout(() => {
        // 滚动页面的主滚动条
        window.scrollTo(0, 0);

        // 滚动所有其他滚动容器
        const scrollableElements = document.querySelectorAll('.scrollable');
        scrollableElements.forEach(element => {
            element.scrollTop = 0;
        });
    }, 0);
});
export default router;
