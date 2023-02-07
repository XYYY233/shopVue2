import store from '@/store';
import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

Vue.use(VueRouter)

let originPush = VueRouter.prototype.push;
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject)
    } else {
        originPush.call(this, location, () => {}, () => {})
    }
}


let router = new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        return {
            y: 0
        }
    }
})

// 全局守卫、前置守卫
router.beforeEach(async (to, from, next) => {
    /* must call `next` */
    let token = store.state.user.token;
    let name = store.state.user.userInfo.name
    // console.log(token)
    if (token != '') {
        if (to.path == '/login') {
            next('/')
        } else {
            if (name) {
                next()
            } else {
                //登陆了且没有用户信息
                //在路由跳转之前获取用户信息且放行
                try {
                    await store.dispatch('user/getUserInfo');
                    next();
                } catch (error) {
                    //token失效从新登录
                    await store.dispatch('user/userLogout');
                    next('/login')
                }
            }

        }
    } else {
        next()
    }
});

export default router