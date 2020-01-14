import axios from 'axios'
import Crypto from 'crypto-js'

function getHeader() {
    if (window.localStorage.getItem('bttf')) {
      return getDecryptData()[0].token
    } else {
      return ''
    }
}

export const axiosInstance =  axios.create({
  baseURL: '',
  headers: { Authorization: getHeader() },
})
// For Django BE
axiosInstance.defaults.xsrfCookieName = 'csrftoken'
axiosInstance.defaults.xsrfHeaderName = 'X-CSRFTOKEN'

// Change Secret Key and put to env file

export function encryptData(header) {
  let data = [{token: header}]
  let ciphertext = Crypto.AES.encrypt(JSON.stringify(data), 'secret key 123').toString();
  window.localStorage.setItem('bttf', ciphertext)
}

export function getDecryptData() {
  let ciphertext = window.localStorage.getItem('bttf')
  let bytes  = Crypto.AES.decrypt(ciphertext, 'secret key 123');
  let decryptedData = JSON.parse(bytes.toString(Crypto.enc.Utf8));
  return decryptedData
}

