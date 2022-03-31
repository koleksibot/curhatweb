import selfUserActionTypes from '@redux/constants/selfUserActionTypes';
import sessionActionTypes from '@redux/constants/sessionActionTypes';

const initialState: ISelfUserState = {
  isLoading: false,
  error: {},
  payload: {
    id: 0,
    userGroup: {
      id: 'admin',
      level: -1,
      name: 'Administrator',
    },
    chatAccessToken: null,
    createdAt: '',
    updatedAt: '',
    deletedAt: null,
    fullName: '',
    username: '',
    activities: [],
  },
};

const userReducer = (state = initialState, action: ISelfUserAction): ISelfUserState => {
  const { type, payload, error } = action;

  switch (type) {
    case selfUserActionTypes.FETCH_SELF_USER:
      return {
        ...state,
        isLoading: true,
      };
    case selfUserActionTypes.FETCH_SELF_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        payload,
      };
    case selfUserActionTypes.FETCH_SELF_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error,
      };
    case sessionActionTypes.FLUSH_SESSION:
      return initialState;
    default:
      return state;
  }
};

export default userReducer;
