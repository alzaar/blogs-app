import axios from 'axios'
// --TODO-- Implement own cryptography algorithm
// --TODO-- Write redux actions for functions below
import Crypto from 'crypto-js'
import { TOKEN_TITLE, SECRET_KEY, UPDATE_TOKEN, TIMESTAMP } from './constants'

export class CustomAxios {
  constructor() {
    this.axios = axios.create({
      baseURL: '',
      headers: { Authorization: this.getHeader() },
    })
    this.axios.defaults.xsrfCookieName = 'csrftoken'
    this.axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN'
  }

  getHeader() {
    return window.localStorage.getItem(TOKEN_TITLE) ? this.getDecryptData(TOKEN_TITLE).token : ''
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

  post(url, params, type) {
    this.axios.post(url, params).then(res => this.encryptData(TOKEN_TITLE, res.data.token))
    // ---TODO---
    // Update Error Display aole.
    .catch(err => type === UPDATE_TOKEN ? this.updateToken() : console.log(err))
  }

  get() {
    // TODO: ADD METHOD
  }

  isValidTimeStamp() {
    let timestamp = this.getDecryptData(TIMESTAMP)[TIMESTAMP]
    return timestamp === new Date().getHours() ? false : true
  }

}