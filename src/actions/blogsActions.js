import {  VIEW_BLOGS, VIEW_BLOGS_URL } from './actionConstants'


export const getBlogsViewProps = () => dispatch => {
  dispatch({
    type: VIEW_BLOGS,
    payload: {
      blogs: {
        url: VIEW_BLOGS_URL
      }
    }
  })
}