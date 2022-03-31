import * as Auth from '@services/AuthServices';
import { AppThunk } from '@utils/AppThunk';
import sessionActionTypes from '@redux/constants/sessionActionTypes';

export const requestLogin = (
  userGroupId: IUserGroup['id'],
  username: string,
  password: string,
): AppThunk<Promise<void>> => async (dispatch) => {
  try {
    dispatch({ type: sessionActionTypes.FETCH_LOGIN });
    const session = await Auth.login(userGroupId, username, password);

    dispatch(setSession(session as ISession));
    dispatch(loginSuccess());
  } catch (error) {
    dispatch(loginFailure(error.response?.data || { message: 'Tidak terkoneksi dengan server' }));
  }
};

const flushSession = () => ({
  type: sessionActionTypes.FLUSH_SESSION,
});

export const requestlogout = flushSession;

export const resetAuthState = flushSession;

const loginSuccess = () => ({
  type: sessionActionTypes.FETCH_LOGIN_SUCCESS,
});

const setSession = (session: ISession) => ({
  type: sessionActionTypes.SET_SESSION,
  payload: session,
});

const loginFailure = (error: object) => ({
  type: sessionActionTypes.FETCH_LOGIN_FAILURE,
  error,
});
