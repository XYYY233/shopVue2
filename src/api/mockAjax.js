// 对axios进行二次封装
import axios from "axios";
import nProgress from "nprogress";
import "nprogress/nprogress.css"
const request = axios.create({
    baseURL:"/mock",
    //请求超时5s
    timeout:5000
})
// 请求拦截器，在请求发起前处理
request.interceptors.request.use((config)=>{
    //config:配置对象，立面包含header
    nProgress.start()
    return config
});

//响应拦截器
request.interceptors.response.use((res)=>{
    nProgress.done()
    return res.data
},(error)=>{
    console.log(error)
    return Promise.reject(new Error('falied'))
})

export default request;