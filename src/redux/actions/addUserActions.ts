import * as UserServices from '@services/UserServices';
import { IUserRequest } from '@services/UserServices';
import addUserActionTypes from '@redux/constants/addUserActionTypes';

export const requestAddUser = (data: IUserRequest) => async (dispatch: DispatchType) => {
  try {
    dispatch({ type: addUserActionTypes.FETCH_ADD_USER });
    await UserServices.postUser(data);

    dispatch(requestAddUserSuccess());
  } catch (error) {
    // TODO:  dispatch() error;
    // eslint-disable-next-line no-alert
    alert(JSON.stringify(error.response));
    dispatch(requestAddUserFailure(error.response));
  }
};

const requestAddUserSuccess = () => ({
  type: addUserActionTypes.FETCH_ADD_USER_SUCCESS,
});

const requestAddUserFailure = (error: Record<any, any>) => ({
  type: addUserActionTypes.FETCH_ADD_USER_FAILURE,
  error,
});

export const resetAddUser = () => ({
  type: addUserActionTypes.RESET_ADD_USER,
});
