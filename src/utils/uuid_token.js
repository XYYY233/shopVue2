import { v4 as uuidv4 } from 'uuid';
export const getUUID = ()=>{
    //先从本地存储获取
    let uuid_token = localStorage.getItem('UUIDTOKEN')
    if(!uuid_token){
        uuid_token = uuidv4()
        console.log('uuid',uuid_token)
        localStorage.setItem('UUIDTOKEN',uuid_token)
    }
    return uuid_token
}