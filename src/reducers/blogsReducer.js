import { VIEW_BLOGS, SELECT_BLOG } from '../actions/actionConstants'
const initialState = {
  blogs: {
    url: '',
    data: [],
  },
  selectedBlog: {}
}

export default function blogsReducer(state=initialState, action) {
  switch (action.type) {
    case VIEW_BLOGS:
      return {
        ...state, 
        blogs: action.payload.blogs,
      }
    case SELECT_BLOG:
      return {
        ...state, 
        selectedBlog: action.payload.selectedBlog
      }
    default:
      return state
  }
}