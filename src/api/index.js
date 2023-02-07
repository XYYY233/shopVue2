import request from "./request";
import mockRequests from './mockAjax'
//三级联动接口
export const reqCategoryList = ()=>request({url:'/product/getBaseCategoryList',method:'get'})

// 轮播图
export const reqGetBannerList = ()=>mockRequests.get('/banner')

export const reqFloorList = ()=>mockRequests.get('/floor')

// 搜索接口
export const reqGetSearchInfo = (params)=>request({
    url:'/list',
    method:'post',
    data:params
})

export const reqGoodsInfo = (id)=>request({
    url:`item/${id}`,
    method:'get'
})

export const reqAddUpdateShopCart = (skuId,skuNum) =>request({
    url:`cart/addToCart/${skuId}/${skuNum}`,
    method:'post'
})
//购物车列表
export const reqCartList = () =>request({
    url:'cart/cartList',
    method:'get'
})

//删除购物车
export const reqDeleteCartById = (skuId)=>request({
    url:`/cart/deleteCart/${skuId}`,
    method:'delete'
})

//修改购物车状态
export const reqUpdateCheckedById = (skuId,isChecked)=>request({
    url:`/cart/checkCart/${skuId}/${isChecked}`,
    method:'get'
})

//获取验证码 
export const reqGetCode = (phone)=>request({
    url:`/user/passport/sendCode/${phone}`,
    method:'get'
})

//注册
export const reqUserRegister = (data)=>request({
    url:`/user/passport/register`,
    method:'post',
    data
})

//登陆
export const reqUserLogin = (data)=>request({
    url:'/user/passport/login',
    data,method:'post'
})

export const reqUserInfo = ()=>request({
    url:'/user/passport/auth/getUserInfo',
    method:'get'
})

//退出登陆
export const reqLogout = ()=>request({
    url:'/user/passport/logout',
    method:'get'
})

//用户地址信息
export const reqAddressInfo = ()=>request({
    url:'/user/userAddress/auth/findUserAddressList',
    method:'get'
})