// 在 store/index.js 或者单独的模块文件中
import { createStore } from 'vuex';

const store = createStore({
    state: {
        isAdmin: false, // 初始值
        showModal: true, // 控制弹窗显示状态的值
    },
    mutations: {
        setIsAdmin(state, isAdmin) {
            state.isAdmin = isAdmin;
        },
        setShowModal(state, showModal) {
            state.showModal = showModal;
        }
    },
    actions: {
        toggleAdminStatus({ commit }) {
            const newAdminStatus = true;
            commit('setIsAdmin', newAdminStatus);
        },
        toggleModal({ commit, state }) {
            const newModalStatus = !state.showModal;
            commit('setShowModal', newModalStatus);
        }
    },
    modules: {
        // 其他可能的模块
    }
});

export default store;
