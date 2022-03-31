import selfUserActionTypes from '@redux/constants/selfUserActionTypes';
import * as UserServices from '@services/UserServices';
import { AppThunk } from '@utils/AppThunk';

export const requestSelfUser = (): AppThunk<Promise<void>> => async (dispatch) => {
  try {
    dispatch({ type: selfUserActionTypes.FETCH_SELF_USER });
    const response = await UserServices.getSelfUser();

    dispatch(requestSelfUserSuccess(response.payload as IUser));
  } catch (error) {
    dispatch(requestSelfUserFailure(error));
  }
};

const requestSelfUserSuccess = (user: IUser) => ({
  type: selfUserActionTypes.FETCH_SELF_USER_SUCCESS,
  payload: user,
});

const requestSelfUserFailure = (error: object) => ({
  type: selfUserActionTypes.FETCH_SELF_USER_FAILURE,
  error,
});
