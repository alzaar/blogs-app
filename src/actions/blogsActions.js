import {  VIEW_BLOGS, VIEW_BLOGS_URL, SELECT_BLOG } from './actionConstants'
import CustomAxios from '../config/axiosConfig';

const axios = new CustomAxios()

export const getBlogsViewProps =  () => async dispatch => {
  let data = (await axios.get('/blogs')) !== undefined ? (await axios.get('/blogs')).data : false
  dispatch({
    type: VIEW_BLOGS,
    payload: {
      blogs: {
        url: VIEW_BLOGS_URL,
        blogs: data
      }
    }
  })  
}

export const selectBlog = (blog) => dispatch => {
  dispatch({
    type: SELECT_BLOG,
    payload: {
      selectedBlog: blog
    }
  })
}