// Form Constants
export const LOGIN_FORM_DETAILS = 'LOGIN_FORM_DETAILS'
export const BLOG_FORM_DETAILS = 'BLOG_FORM_DETAILS'
export const LOGIN_URL = '/login'
export const LOGIN_TYPE = 'LOGIN'
export const CREATE_BLOG = 'CREATE_BLOG'
export const CREATE_BLOG_URL = '/blog'
export const VIEW_BLOGS_URL = '/blogs'
export const VIEW_BLOGS = 'VIEW_BLOGS'

export const LOGIN_FORM_FIELDS = [
  {
    id: 1,
    label: 'username',
    name: 'username',
    inputType: 'text'
  },
  {
    id: 2,
    label: 'password',
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