import userProfileActionTypes from '@constants/userProfileActionTypes';

const initialState: UserProfileState = {
  error: {},
  isLoading: false,
  payload: undefined,
};

const userProfileReducer = (
  state: UserProfileState = initialState,
  action: UserProfileAction,
): UserProfileState => {
  const { type, payload, error } = action;

  switch (type) {
    case userProfileActionTypes.FETCH_USER_PROFILE:
      return {
        ...initialState,
        isLoading: true,
      };
    case userProfileActionTypes.FETCH_USER_PROFILE_SUCCESS:
      return {
        ...state,
        payload,
        isLoading: false,
      };
    case userProfileActionTypes.FETCH_USER_PROFILE_FAILURE:
      return {
        ...state,
        error,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default userProfileReducer;
