import { createStore } from "vuex";

const store = createStore({
    state: {
        isLoggedIn: false,
        isLoggedInAdmin: false,
    },
    mutations: {
        SET_LOGIN_STATUS(state, status) {
            state.isLoggedIn = status;
        },
        SET_LOGIN_STATUS_ADMIN(state, status) {
            state.isLoggedInAdmin = status;
        },
    },
    actions: {
        setLoginStatus({ commit }, status) {
            commit('SET_LOGIN_STATUS', status);
            sessionStorage.setItem('isLoggedIn', status);
        },
        setLoginStatusAdmin({ commit }, status) {
            commit('SET_LOGIN_STATUS_ADMIN', status);
            sessionStorage.setItem('isLoggedInAdmin', status);
        },
    },
    getters: {
        isLoggedIn: state => state.isLoggedIn,
        isLoggedInAdmin: state => state.isLoggedInAdmin,
    },
});

export default store;
