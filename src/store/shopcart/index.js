import { reqCartList,reqDeleteCartById,reqUpdateCheckedById } from "@/api"
const state = {
    cartList : []
}
const mutations = {
    GETCARTLIST(state,cartList){
        state.cartList = cartList
    }
}
const actions = {
    async getCartList({commit}){
        let res = await reqCartList()
        if(res.code==200){
            console.log(res.data)
            commit("GETCARTLIST",res.data)
        } 
    },
    //删除购物车
    async reqDeleteCartBySkuId({commit},id){
        let res = await reqDeleteCartById(id)
        if(res.code==200){
            return 'ok'
        }else{
            return new Error('failed')
        }
    },
    //修改购物车状态
    async updateCheckedById({commit},{skuId,isChecked}){
        console.log(1111)
        let res = await reqUpdateCheckedById(skuId,isChecked)
        if(res.code==200){
            return 'ok'
        }else{
            return Promise.reject(new Error('failed'))
        }
    },
    //删除全部勾选的产品
  deleteAllCheckedCart({ dispatch, getters }) {
    let PromiseAll = [];
    console.log(888)
    getters.cartList.cartInfoList.forEach((item) => {
      let promise =item.isChecked == 1? dispatch("reqDeleteCartBySkuId", item.skuId): "";
      //将每一次返回的Promise添加到数组当中
      PromiseAll.push(promise);
    });
    //全部成功才返回成功
    return Promise.all(PromiseAll);
  },
  //修改全部产品的状态
  updateAllCartIsChecked({ dispatch, state }, isChecked) {
    let promiseAll = [];
    state.cartList[0].cartInfoList.forEach((item) => {
      let promise = dispatch("updateCheckedById", {
        skuId: item.skuId,
        isChecked,
      });
      promiseAll.push(promise);
    });
    //最终返回结果
    return Promise.all(promiseAll);
  },


}
const getters = {
    cartList(state){
        return state.cartList[0] ||{}
    },

}
export default {
    namespaced:true,
    state,mutations,actions,getters
}