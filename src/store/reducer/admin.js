import * as actionTypes from '../actionTypes';

const adminInitState = {
  error: null,
  isLogin: false,
  lidemyToken: null,
  profileName: null,
  show: false,
  token: null,
  userId: null,
};

const adminReducer = (globalState = adminInitState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_ADMIN_WINDOW:
      return {
        ...globalState,
        show: true,
      };
    case actionTypes.HIDE_ADMIN_WINDOW:
      return {
        ...globalState,
        show: false,
      };
    case actionTypes.LIDEMY_GOOGLE_LOGIN_FULFILLED:
      return {
        ...globalState,
        isLogin: true,
        lidemyToken: action.res.data.token,
        profileName: action.thirdPartyData.additionalUserInfo.profile.family_name,
        token: action.thirdPartyData.credential.accessToken,
        userId: action.thirdPartyData.additionalUserInfo.profile.id,
      };
    case actionTypes.LIDEMY_GOOGLE_LOGIN_REJECTED:
      return {
        ...globalState,
        isLogin: false,
        error: action.err
      };
    case actionTypes.THIRD_PARTY_LOGIN_REJECTED:
      return {
        ...globalState,
        isLogin: false,
        error: action.err
      };
    case actionTypes.GET_COOKIES_LOGIN_STATE:
      return {
        ...globalState,
        ...action.loginState,
      };
    case actionTypes.THIRD_PARTY_SIGN_OUT:
      return {
        ...globalState,
        ...adminInitState,
      }
    default:
      return globalState;
  }
}

export default adminReducer;
