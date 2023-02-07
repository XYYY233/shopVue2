import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex)

// // state:仓库存储数据的地方
// const state = {}
// //mutations 修改state的唯一手段
// const mutations = {}
// //可以书写业务逻辑，处理异步
// const actions  = {}
// //getters 理解为计算属性，用于简化仓库数据
// const getters = {}
import home from "./home";
import search from "./search";
import detail from "./detail";
import shopcart from "./shopcart";
import user from "./user";
export default new Vuex.Store({
    modules:{
        home,search,detail,shopcart,user
    }
})