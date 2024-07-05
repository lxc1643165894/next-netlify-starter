// 在 store/index.js 或者单独的模块文件中
import { createStore } from 'vuex';

const store = createStore({
    state: {
        isAdmin: false, // 初始值
    },
    mutations: {
        setIsAdmin(state, isAdmin) {
            state.isAdmin = isAdmin;
        }
    },
    actions: {
        toggleAdminStatus({ commit }) {
            const newAdminStatus = true;
            commit('setIsAdmin', newAdminStatus);
        }
    },
    modules: {
        // 其他可能的模块
    }
});

export default store;
