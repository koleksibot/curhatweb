import addUserActionTypes from '@redux/constants/addUserActionTypes';

const initialState: IAddUserState = {
  isLoading: false,
  isSubmitted: false,
  error: {},
};

const addUserReducer = (
  state: IAddUserState = initialState,
  action: IStandardAction,
): IAddUserState => {
  const { type, error } = action;

  switch (type) {
    case addUserActionTypes.FETCH_ADD_USER:
      return {
        ...state,
        isLoading: true,
      };
    case addUserActionTypes.FETCH_ADD_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSubmitted: true,
      };
    case addUserActionTypes.FETCH_ADD_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error,
      };
    case addUserActionTypes.RESET_ADD_USER:
      return initialState;
    default:
      return state;
  }
};

export default addUserReducer;
