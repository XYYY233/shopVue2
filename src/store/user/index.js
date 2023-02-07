import {
    reqGetCode, reqUserLogin, reqUserRegister,reqUserInfo,reqLogout
} from "@/api"
const state = {
    code: '',
    token:localStorage.getItem('TOKEN'),
    userInfo:{}
}
const mutations = {
    GETCODE(state, code) {
        state.code = code
    },
    USERLOGIN(state,data){
        state.token = data.token
    },
    GETUSERINFO(state,userInfo){
        state.userInfo = userInfo
    },
    CLEAR(state){
        state.token=''
        state.userInfo = {}
        localStorage.removeItem("TOKEN")
    }
}
const actions = {
    //验证码
    async getCode({commit}, phone) {
        let res = await reqGetCode(phone)
        if (res.code == 200) {
            commit('GETCODE', res.data)
            return 'ok'
        } else {
            return Promise.reject(new Error('failed'))
        }
    },
    //注册
    async userRegister({commit},user){
        console.log(user)
        let res = await reqUserRegister(user)
        console.log(res)
        if(res.code==200){
            return 'ok'
        }else{
            return Promise.reject(new Error('failed'))
        }
    },
    //登陆
    async userLogin({commit},data){
        let res = await reqUserLogin(data);
        console.log(res)
        if(res.code==200){
            commit('USERLOGIN',res.data)
            console.log('存入token',res.data.token)
            localStorage.setItem('TOKEN',res.data.token)
            console.log('存入tokenOK')
            return 'ok'
        }else{
            return new Promise.reject(new Error('failed'))
        }
    },
    //获取用户信息
    async getUserInfo({commit}){
        let res = await reqUserInfo();

        console.log(999,res.data)
        if(res.code==200){
            commit("GETUSERINFO",res.data)
            return 'ok'
        }else{
            return Promise.reject(new Error('failed'))
        }
    },
    //退出登陆
    async logout({commit}){
        let res = await reqLogout()
        if(res.code==200){
            commit("CLEAR")
        }else{
            return Promise.reject(new Error('failed'))
        }
    }
}
const getters = {

}
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}