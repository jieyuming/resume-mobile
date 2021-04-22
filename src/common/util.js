
export function filterMoney(value) {
    if (value) {
        let money = value * 0.01
        return money
    } else {
        return ''
    }
}

// 检查手机号
export function checkoutPhone(value) {
    let reg = /^1\d{10}$/
    if (reg.test(value)) {
        return true
    } else {
        return false
    }
}

// 检查短信验证码
export function checkoutCode(value) {
    let reg = /^\d{4}$/
    if (reg.test(value)) {
        return true
    } else {
        return false
    }
}