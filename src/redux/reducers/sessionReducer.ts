import sessionActionTypes from '@redux/constants/sessionActionTypes';

const initialState: ISessionState = {
  isLoading: false,
  error: {},
  isLoggedIn: false,
  payload: {
    accessToken: '',
    refreshToken: '',
    tokenType: 'Bearer',
    expiresIn: undefined,
  },
};

const sessionReducer = (state = initialState, action: ISessionAction): ISessionState => {
  const { type, payload, error } = action;

  switch (type) {
    case sessionActionTypes.FLUSH_SESSION:
      return initialState;
    case sessionActionTypes.SET_SESSION:
      return {
        ...state,
        payload,
      };
    case sessionActionTypes.FETCH_LOGIN:
      return {
        ...state,
        isLoading: true,
      };
    case sessionActionTypes.FETCH_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
      };
    case sessionActionTypes.FETCH_LOGIN_FAILURE:
      return {
        ...state,
        error,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default sessionReducer;
