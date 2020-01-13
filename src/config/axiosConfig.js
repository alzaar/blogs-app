import axios from 'axios'

const axiosInstance =  axios.create({
  baseURL: '',
  // headers: { Authorization: 'Token 710caba6c1ce48357c421557274a75be8ec65ef6d479a916b677dfb187ee1cb3' },
})
// For Django BE
axiosInstance.defaults.xsrfCookieName = 'csrftoken'
axiosInstance.defaults.xsrfHeaderName = 'X-CSRFTOKEN'

export default axiosInstance

