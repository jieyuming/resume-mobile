import { userLogin, sendVerifyCode, exchangeSecret } from "@/api/user";
// import {Toast} from 'vant'

// 手机短信验证码快捷登录
export async function userFastLogin(mobile, verifyCode) {
    let params = {
        mobile: mobile,
        verifyCode: verifyCode
    }
    let info = await userLogin(params)
    if (info.succeed) {
        let data = info.data || {}
        localStorage.setItem('userInfo', JSON.stringify(data));
        return {succeed:true, data: data}
    } else {
        // Toast(info.data.msg)
        return  {succeed:false, data: info.data}
    }
}

export async function getVerifyCode(mobile) {
    let params = {
        mobile: mobile,
    }
    let info = await sendVerifyCode(params)
    if(info.succeed){
        return {succeed:true, data: info.data}
      } else {
        return {succeed:false, data: info.data}
      }
}

// 卡密登录方式
export async function exchangeSecretLogin(mobile,cardPwd) {
    let params = {
        mobile: mobile,
        cardPwd:cardPwd
    }
    let info = await exchangeSecret(params)
    if(info.succeed){
        let data = info.data || {}
        localStorage.setItem('userInfo', JSON.stringify(data));
        return {succeed:true, data: info.data}
      } else {
        return {succeed:false, data: info.data}
      }
}