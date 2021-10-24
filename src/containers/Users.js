import React from 'react';
import { connect } from 'react-redux';
import Users from '../component/user_interface';
import * as windowActions from '../store/actions/window';
import * as adminActions from '../store/actions/admin';

const UsersContainer = props => <Users {...props} />;

const mapStateToProps = state => ({
  isLogin: state.adminState.isLogin,
  lidemyToken: state.adminState.lidemyToken,
  profileName: state.adminState.profileName,
  show: state.adminState.show,
  token: state.adminState.token,
  userId: state.adminState.userId,
});

const mapDispatchToProps = dispatch => ({
  getCookiesLoginState: loginState => dispatch(adminActions.getCookiesLoginState(loginState)),
  onHide: () => dispatch(windowActions.hideAdminWindow()),
  thirdPartyLogin: provider => dispatch(adminActions.thirdPartyLogin(provider)),
  thirdPartySignOut: () => dispatch(adminActions.thirdPartySignOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
