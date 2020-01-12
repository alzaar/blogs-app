import axios from 'axios'

const axiosInstance =  axios.create({
  baseURL: ''
})
// For Django BE
axiosInstance.defaults.xsrfCookieName = 'csrftoken'
axiosInstance.defaults.xsrfHeaderName = 'X-CSRFTOKEN'

export default axiosInstance

