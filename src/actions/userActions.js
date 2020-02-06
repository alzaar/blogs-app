import { USER_LOGIN } from './actionConstants'

export const authtenticateUser = () => disptach => {
    disptach({
        type: USER_LOGIN,
        payload: {
            authtenticated: true
        },
    })
  }