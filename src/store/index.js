import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

export default new Vuex.Store({
    state: {},  //定义数据
    getters: {}, // 计算属性
    mutations: {}, // 定义方法  同步触发
    actions: {},  // 异步触发方法
    modules: {},  // 模块

    /* vuex数据持久化配置 */
    plugins: [
        createPersistedState({
            // 存储方式：localStorage、sessionStorage、cookies
            storage: window.sessionStorage,
            // 存储的 key 的key值
            // key: "store",
            // render(state) {
            //   // 要存储的数据：本项目采用es6扩展运算符的方式存储了state中所有的数据
            // 	return { ...state };
            // }
        }),
    ],
});