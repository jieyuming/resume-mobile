import xhr from "./xhr/";

// 短信验证码登录
export function userLogin(data) {
    return xhr({
        url: `/user/login`,
        method: "post",
        data: data
    });
}

// 发送短信验证码
export function sendVerifyCode(data) {
    return xhr({
        url: `/user/sendVerifyCode`,
        method: "post",
        data: data
    });
}

// 通过卡密登录
export function exchangeSecret(data) {
    return xhr({
        url: `/user/exchangeSecret`,
        method: "post",
        data: data
    });
}

// 兑换卡密成功页面接口
export function exchangeSuccess(data) {
    return xhr({
        url: `/user/exchangeSuccess`,
        method: "post",
        data: data
    });
}