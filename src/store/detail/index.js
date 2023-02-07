
import {reqGoodsInfo,reqAddUpdateShopCart} from "@/api"
import {getUUID} from '@/utils/uuid_token'
const state = {
    goodInfo:{},
    uuid_token:getUUID()
}
const mutations={
    GETGOODINFO(state,goodInfo){
        state.goodInfo = goodInfo
    },
    // ADDSHOPCART(state,)
}
const actions = {
    async getGoodInfo({commit},id){
        let res = await reqGoodsInfo(id)
        // console.log(res)
        if(res.code==200){
            commit('GETGOODINFO',res.data)
        }
    },
    //添加购物车
    async addOrUpdateShopCart({commit},{skuId,skuNum}){
        // console.log(555,skuId,skuNum)

        let res = await reqAddUpdateShopCart(skuId,skuNum)
        if(res.code ==200){
            console.log(res)
            return "ok"
        }else{
            return Promise.reject(new Error('failed'))
        }
    }

}
//简化数据而生
const getters = {
    categoryView(state){
        return state.goodInfo.categoryView || {}
    },
    skuInfo(state){
        return state.goodInfo.skuInfo || {}
    },
    spuSaleAttrList(state){
        return state.goodInfo.spuSaleAttrList|| []
    }
}
export default {
    namespaced:true,
    state,
    actions,
    mutations,
    getters
}