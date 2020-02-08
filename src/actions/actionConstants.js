// Form Constants
export const LOGIN_FORM_DETAILS = 'LOGIN_FORM_DETAILS'
export const BLOG_FORM_DETAILS = 'BLOG_FORM_DETAILS'
export const LOGIN_URL = '/login'
export const LOGIN_TYPE = 'LOGIN'
export const CREATE_BLOG = 'CREATE_BLOG'
export const CREATE_BLOG_URL = '/blogs/'
export const VIEW_BLOGS_URL = '/allblogs'
export const VIEW_BLOGS = 'VIEW_BLOGS'
export const SELECT_BLOG = 'SELECT_BLOG'
export const LOGIN_FORM_FIELDS = [
  {
    id: 1,
    label: 'Username',
    name: 'username',
    inputType: 'text'
  },
  {
    id: 2,
    label: 'Password',
    name: 'password',
    inputType: 'password'
  },
]
export const BLOG_FORM_FIELDS = [
  {
    id: 1,
    label: 'title',
    name: 'title',
    inputType: 'text'
  },
  {
    id: 2,
    label: 'description',
    name: 'description',
    inputType: 'text'
  },
]

//User Reducer/Actions
export const USER_LOGIN = 'USER_LOGIN'

// Register details
export const REGISTER_FORM_FIELDS = [
  {
    id: 1,
    label: 'Username',
    name: 'username',
    inputType: 'text'
  },
  {
    id: 2,
    label: 'Password',
    name: 'password',
    inputType: 'password'
  },
  {
    id: 3,
    label: 'Email',
    name: 'email',
    inputType: 'email'
  }
]

export const REGISTER_URL = '/register/'
export const REGISTER_TYPE = 'REGISTER'
export const REGISTER = 'REGISTER'
