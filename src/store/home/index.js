import {reqCategoryList,reqGetBannerList,reqFloorList} from '@/api'


const state ={
    categoryList:[],
    bannerList:[],
    floorList:[]
}
const mutations ={
    categoryList(state,categoryList){
        state.categoryList = categoryList
    },
    GETBANNER(state,bannerList){
        state.bannerList = bannerList
    },GETFLOOR(state,floorList){
        state.floorList = floorList
    }
}
const actions = {
    async categoryList({commit}){
        let res = await reqCategoryList()
        // console.log(res)
        if(res.code==200){
            commit("categoryList",res.data)
        }
    },
    async getBannerList({commit}){
        let res = await reqGetBannerList()
        console.log(res)
        if(res.code==200){
            commit("GETBANNER",res.data)
        }
    },
    async getFloorList({commit}){
        let res = await reqFloorList()
        if(res.code==200){
            commit("GETFLOOR",res.data)
        }
    }
}
const getters = {}

export default {
    namespaced:true,
    state,mutations,actions,getters
}