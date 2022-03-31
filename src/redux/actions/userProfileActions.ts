import userProfileActionTypes from '@constants/userProfileActionTypes';
import * as UserServices from '@services/UserServices';

export const requestUserProfile = (id: IUser['id']) => async (dispatch: DispatchType) => {
  try {
    dispatch({
      type: userProfileActionTypes.FETCH_USER_PROFILE,
    });

    const response = await UserServices.getUser(id);

    dispatch(requestUserProfileSuccess(response.payload as IMoms));
  } catch (error) {
    // TODO:  dispatch() error;
    // eslint-disable-next-line no-alert
    alert(JSON.stringify(error));
    dispatch(requestUserProfileFailure());
  }
};

export const requestUserProfileSuccess = (user: IUser) => ({
  type: userProfileActionTypes.FETCH_USER_PROFILE_SUCCESS,
  payload: user,
});

export const requestUserProfileFailure = () => ({
  type: userProfileActionTypes.FETCH_USER_PROFILE_FAILURE,
});
