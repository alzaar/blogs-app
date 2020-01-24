import { VIEW_BLOGS } from '../actions/actionConstants'
const initialState = {
  blogs: {
    url: ''
  }
}

export default function blogsReducer(state=initialState, action) {
  switch (action.type) {
    case VIEW_BLOGS:
      return {
        ...state, 
        blogs: action.payload.blogs
      }
    default:
      return state
  }
}