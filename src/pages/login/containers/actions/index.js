import { authConstants } from 'pages/login/constants';
import { loaderConstants } from 'components/loaders/constants';
import { loginUser } from 'services';

export const loginUserAction = (data = {}, history) => {
  return (dispatch) => {
    let remember_me = data.remember_me;
    delete data.remember_me;
    loginUser(data)
      .then((response) => {
        let data = response.data;
        Promise.resolve(
          dispatch({
            type: authConstants.LOGIN_SUCCESS,
            access_token: data.access,
            refresh_token: data.refresh,
            user: data.user,
            remember_me,
          })
        );
        dispatch({ type: loaderConstants.LOAD_END });
        history.push('/home');
      })
      .catch((error) => {
        dispatch({ type: loaderConstants.LOAD_END });
        dispatch({
          type: authConstants.LOGIN_FAILURE,
          error: error.message,
        });
      });
  };
};

export const logoutUserAction = (history) => {
  return (dispatch) => {
    dispatch({
      type: authConstants.LOGOUT,
    });
    history.push('/');
  };
};
