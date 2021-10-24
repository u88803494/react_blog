import * as actionTypes from '../actionTypes';
import firebase from 'firebase';
import * as webAPIs from '../webAPIs';

const lidemyGoogleLoginFulfilled = (res, thirdPartyData) => ({
  type: actionTypes.LIDEMY_GOOGLE_LOGIN_FULFILLED,
  res,
  thirdPartyData,
})

export const lidemyGoogleLoginRejected = (err) => ({
  type: actionTypes.LIDEMY_GOOGLE_LOGIN_REJECTED,
  err,
});

export const lidemyGoogleLogin = (thirdPartyData) => (dispatch) => {
  const user = { username: 'google', password: 'Lidemy' };
  webAPIs.logInLidemy(user)
    .then((res) =>  dispatch(lidemyGoogleLoginFulfilled(res, thirdPartyData)))
    .catch((err) => dispatch(lidemyGoogleLoginRejected(err)));
}

export const thirdPartyLoginFulfilled = (res) => (dispatch) => {
  return dispatch(lidemyGoogleLogin(res));
};

export const thirdPartyLoginRejected = (err) => ({
  type: actionTypes.THIRD_PARTY_LOGIN_REJECTED,
  err,
});

export const thirdPartyLogin = (provider) => dispatch => {
  firebase.auth().signInWithPopup(provider)
    .then(res => dispatch(thirdPartyLoginFulfilled(res)))
    .catch(err => dispatch(thirdPartyLoginRejected(err)));
};

export const thirdPartySignOut = () =>( {
  type: actionTypes.THIRD_PARTY_SIGN_OUT,
})

export const getCookiesLoginState = loginState => ({
  type: actionTypes.GET_COOKIES_LOGIN_STATE,
  loginState,
});
