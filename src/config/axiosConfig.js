import axios from 'axios'
// --TODO-- Implement own cryptography algorithm
// --TODO-- Write redux actions for functions below
import Crypto from 'crypto-js'
import { TOKEN_TITLE, SECRET_KEY, UPDATE_TOKEN, TIMESTAMP } from './constants'
// -------REFACTOR FOR COREECT HEADER INSERTION----------
export default class CustomAxios {
  constructor() {
    this.axios = axios.create({
      baseURL: '',
      headers: { Authorization: this.getHeader() },
    })
    this.axios.defaults.xsrfCookieName = 'csrftoken'
    this.axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN'
  }

  getHeader() {
    return window.localStorage.getItem(TOKEN_TITLE) ? this.getDecryptData(TOKEN_TITLE)[TOKEN_TITLE] : ''
  }

  encryptData(key, value) {
    let ciphertext = Crypto.AES.encrypt(JSON.stringify({[key]: value}), SECRET_KEY).toString()
    window.localStorage.setItem(key, ciphertext)
  }


  getDecryptData(key) {
    let ciphertext = window.localStorage.getItem(key)
    let bytes  = Crypto.AES.decrypt(ciphertext, SECRET_KEY);
    let decryptedData = JSON.parse(bytes.toString(Crypto.enc.Utf8))
    return decryptedData
  }

  updateToken() {
    window.localStorage.removeItem(TOKEN_TITLE)
  }

  post(params, url=false) {
    // Router params already inputted e.g. post to login posts localhost:8000/login/
    url = url ? url : ''
    // let token = ''
    // console.log(token, params, window.localStorage.getItem(TOKEN_TITLE))
    // params.headers = { Authorization: token }
    
    console.log(params, this.axios, url)
    this.axios.post(url, params).then(res => this.encryptData(TOKEN_TITLE, res.data.token))
    // ---TODO---
    // Update Error Display aole.
    .catch(err => {
      console.error(err)
    })
  }

  get() {
    const auth = this.getHeader()
    console.log(this.getDecryptData(TOKEN_TITLE)[TOKEN_TITLE])
   axios.get('', {
     headers: {
    'Content-type': 'application/json',
    Authorization: auth
     }
  }).then(res =>console.log(res)).catch(err => console.error(err))
  }

  isValidTimeStamp() {
    let timestamp = this.getDecryptData(TIMESTAMP)[TIMESTAMP]
    return timestamp === new Date().getHours() ? false : true
  }

}