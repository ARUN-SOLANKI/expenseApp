import * as constant from '../utills/constants'
import {Navigate } from "react-router-dom";
export { Auth } from './Auth'
export { Home } from './Home'


export const Pages = {
    home: '/',
    login: "/login",
}

export const PrivatePage = ({ component }) => {
    const loggedIn = sessionStorage.getItem(constant.IS_LOGIN);
    const Component = component;
    if (true) {
      return <Component />;
    }
    return <Navigate to={Pages.login} />;
  };