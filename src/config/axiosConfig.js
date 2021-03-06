import axios from 'axios'
// --TODO-- Implement own cryptography algorithm
// --TODO-- Write redux actions for functions below
import Crypto from 'crypto-js'
import { TOKEN_TITLE, SECRET_KEY, TIMESTAMP, LOGOUT, POST_BLOG, LOGIN, REGISTER, EDIT_BLOG} from './constants'
// -------REFACTOR FOR COREECT HEADER INSERTION----------
export default class CustomAxios {
  constructor() {
    this.axios = axios.create({
      baseURL: '',
      headers: { Authorization: `` },
    })
    this.axios.defaults.xsrfCookieName = 'csrftoken'
    this.axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN'
  }

  getHeader() {
    return this.isValidTimeStamp ? 
    window.localStorage.getItem(TOKEN_TITLE) ? this.getDecryptData(TOKEN_TITLE)[TOKEN_TITLE] : ''
    : false
  }

  encryptData(key, value) {
    let ciphertext = Crypto.AES.encrypt(JSON.stringify({[key]: value}), SECRET_KEY).toString()
    window.localStorage.setItem(key, ciphertext)
    this.updateTimeStamp()
    return true
  }


  getDecryptData(key) {
    let ciphertext = window.localStorage.getItem(key)
    let bytes  = Crypto.AES.decrypt(ciphertext, SECRET_KEY)
    let decryptedData = JSON.parse(bytes.toString(Crypto.enc.Utf8))
    return decryptedData
  }

  updateToken() {
    window.localStorage.removeItem(TOKEN_TITLE)
  }

  post(params, url=false, type=false) {
    // Router params already inputted e.g. post to login posts localhost:8000/login/
    url = url ? url : ''
    console.log(type)
    // let token = ''
    // console.log(token, params, window.localStorage.getItem(TOKEN_TITLE))
    // params.headers = { Authorization: token }
    let authToken = this.getHeader()
      params.headers = {
        Authorization: `Token ${authToken}`
      }
    
    this.axios.defaults.xsrfCookieName = 'csrftoken'
    this.axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN'
    switch(type) {
      case LOGIN:
        return this.axios.post(url, params
          ).then(res => 
            {
              this.encryptData(TOKEN_TITLE, res.data.token)
              this.axios = axios.create({
                baseURL: '',
                headers: { Authorization: `Token ${res.data.token}` },
              })
              this.axios.defaults.xsrfCookieName = 'csrftoken'
              this.axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN'
              return res
            })

          // ---TODO---
          // Update Error Display aole.
          .catch(err => {
            console.error(err)
            return false
          })
      case LOGOUT:
        this.axios.post(url, params)
        .catch(err => console.error(err))
        this.destroySession()
        break
      case POST_BLOG:
        console.log('we are posting', params.headers, this.axios)
        this.axios.post(url, params)
        break
      case REGISTER:
          this.axios.post(url, params)
          break
      case EDIT_BLOG:
        console.log(params, url)
        this.axios.put(url, params)
        break
      default:
        return
    }
  }

  alternateAxios(headerToken) {
    let alternateAxios = axios = axios.create({
      baseURL: '',
      headers: { Authorization: '' },
    })

    
  }

  async get(url=false) {
    url = url ? url : ''
    let authToken = this.getHeader()
    let res = await axios.get(url, {
      headers: {
      Authorization: `Token ${authToken}`
      }
    }).then(res => res).catch(err => console.error(err))
    return res
  }

  isValidTimeStamp() {
    let expirationDuration = 1000 * 60 * 60 * 3 // 12 hours
    let prevAccepted = window.localStorage.getItem(TIMESTAMP)
    let currentTime = new Date().getTime()
    let notAccepted = prevAccepted == undefined
    let prevAcceptedExpired = prevAccepted != undefined && currentTime - prevAccepted > expirationDuration

    return notAccepted || prevAcceptedExpired ? false : true
  }

  updateTimeStamp() {
    let currentTime = new Date().getTime()
    window.localStorage.setItem(TIMESTAMP, currentTime)
  }

  destroySession() {
    window.localStorage.removeItem(TIMESTAMP)
    window.localStorage.removeItem(TOKEN_TITLE)
  }

  // async sessionValid() {
  //   let authToken = this.getHeader()
  //   let res = await axios('/validsession', {
  //     headers: {
  //       Authorization: authToken
  //     }
  //   }).then(res => res.data.userSession).catch(err => false)
  //   return res
  // }

  delete(url, data) {
    let authToken = this.getHeader()
    let params = {
      headers: {
        Authorization: `Token ${authToken}`
      },
      data
    }
    this.axios.delete(url, params)
  }
}