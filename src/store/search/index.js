import { reqGetSearchInfo } from "@/api"

const state ={
    searchList:{}
}
const mutations ={
    GETSEARCHINFO(state,searchList){
        state.searchList = searchList
    }
}
const actions = {
    async getSearchInfo({commit},params={}){
        let res = await reqGetSearchInfo(params)
        console.log(333,res)
        if(res.code==200){
            commit('GETSEARCHINFO',res.data)
        }
    }
}
const getters = {
    //当前仓库中的state
    goodsList(state){
        //该写法可能会造成空指针
        return state.searchList.goodsList||[]
    },
    trademarkList(state){
        return state.searchList.trademarkList||[]
    },
    attrsList(state){
        return state.searchList.attrsList||[]
    }
}

export default {
    namespaced:true,
    state,mutations,actions,getters
}