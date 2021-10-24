// region 1. Platform Libraries
import Cookies from 'js-cookie';
import React, { useEffect } from 'react';
import { Modal } from 'react-bootstrap';
// end-region

// region 2. Project Libraries
import SignIn from './Sign_in';
import SignOut from './Sign_out';
// end-region

// region U. UI Markups
import './users.css';
// end-region

const Users = ({
  isLogin,
  getCookiesLoginState,
  lidemyToken,
  onHide,
  profileName,
  show,
  token,
  thirdPartyLogin,
  thirdPartySignOut,
  userId,
}) => {

  useEffect(() => { // 載入 cookie
    const loginState = Cookies.get('loginState');
    if (loginState) {
      getCookiesLoginState(JSON.parse(loginState));
    }
  }, [getCookiesLoginState]);

  useEffect(() => { // 利用 cookie 儲存登入
    if (isLogin === true) {
      Cookies.set(
        'loginState',
        { isLogin, profileName, token, userId, lidemyToken },
        { expires: 7 }
      );
      onHide();
    };
  }, [isLogin, lidemyToken, profileName, token, userId, onHide]);

  return (
    <Modal {...{ show, onHide }} >
      {!isLogin ? (
        <SignIn {...{ show, onHide, thirdPartyLogin }} />
      ) : (
        <SignOut {...{ onHide, thirdPartySignOut }} />
      )}
    </Modal>
  );
};

export default Users;
