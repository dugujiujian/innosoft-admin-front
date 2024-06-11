import Http from '../http'

//登录验证码
export const verificationImg = function () {
  return Http.get('/captcha?t=' + Math.random())
}

//登录二维码
export const loginQrcode = function () {
  return Http.get('/login/loginQrcode')
}
