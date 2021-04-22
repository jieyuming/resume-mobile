import xhr from "./xhr/";

// 体彩券兑换接口
export function exchange(data) {
    return xhr({
        url: `/innerExchange/exchange`,
        method: "post",
        data: data
    });
}

// 体彩券列表接口
export function queryMyTickets(data) {
    return xhr({
        url: `/innerExchange/queryMyTickets`,
        method: "post",
        data: data
    });
}

// 体彩券详情接口
export function queryMyTicketsDetail(data) {
    return xhr({
        url: `/innerExchange/queryMyTicketDetail`,
        method: "post",
        data: data
    });
}

// 获取当前用户可用电子券的数量
export function queryCountAvailElectronTicket(data) {
    return xhr({
        url: `/innerExchange/countAvailElectronTicket`,
        method: "post",
        data: data
    });
}

// 登陆接口
export function login(data) {
    return xhr({
        url: `/innerExchange/login`,
        method: "post",
        data: data
    });
}

// 发送登陆验证码接口
export function sendVerifyCode(data) {
    return xhr({
        url: `/innerExchange/sendVerifyCode`,
        method: "post",
        data: data
    });
}

// 获取当前渠道对应的配置规则
export function listRulesApi(data) {
    return xhr({
        url: `/innerExchange/channelRule`,
        method: "post",
        data: data
    });
}

// 实名认证接口
export function realNameAuth(data) {
    return xhr({
        url: `/innerExchange/realNameAuth`,
        method: "post",
        data: data
    });
}

// 获取图形验证码接口
export function qrCode(data) {
    return xhr({
        url: `/innerExchange/qrCode`,
        method: "post",
        data: data
    });
}

// 下单接口
export function placeAnOrder(data) {
    return xhr({
        url: `/innerExchange/placeAnOrder`,
        method: "post",
        data: data
    });
}

// 支付
export function payment(data) {
    return xhr({
        url: `/innerExchange/payment`,
        method: "post",
        data: data
    });
}