// region 1. Platform Libraries
import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import firebase from 'firebase';
// end-region

const SignIn = ({ onHide, thirdPartyLogin }) => {
  const googleSignIn = () => { // 彈出視窗註冊
    const provider = new firebase.auth.GoogleAuthProvider(); // google 註冊初始
    thirdPartyLogin(provider);
  }

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>登入</Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button variant="danger" onClick={googleSignIn}>
          GOOGLE 登入
        </Button>
        <Button variant="secondary" onClick={onHide}>
          取消
        </Button>
      </Modal.Footer>
    </>
  );
};

export default SignIn;
