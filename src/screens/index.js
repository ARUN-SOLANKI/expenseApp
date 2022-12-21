import * as constant from '../utills/constants'
export { Auth } from './Auth'
export { Home } from './Home'


export const Pages = {
    home: '/',
    login: "/login",
}

export const PrivatePage = ({component}) =>{
    const isLogIn = localStorage.getItem(constant.IS_LOGIN)
}