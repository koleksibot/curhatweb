import { administratorTypes } from '../../../constants/userListActionTypes';

const initialState: UserListState = {
  payload: {
    currentPage: 0,
    data: new Array<IUser>(),
    from: 0,
    lastPage: 0,
    firtsPageUrl: '',
    lastPageUrl: '',
    nextPageUrl: '',
    prevPageUrl: 'string',
    perPage: 0,
    to: 0,
    total: 0,
  },
  isLoading: false,
  error: {},
};

const administratorReducer = (
  state: UserListState = initialState,
  action: UserListAction,
): UserListState => {
  const { type, payload, error } = action;

  switch (type) {
    case administratorTypes.FETCH_ADMINISTRATOR:
      return {
        ...state,
        isLoading: true,
      };
    case administratorTypes.FETCH_ADMINISTRATOR_SUCCESS:
      return {
        ...state,
        payload,
        isLoading: false,
      };
    case administratorTypes.FETCH_ADMINISTRATOR_FAILURE:
      return {
        ...state,
        error,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default administratorReducer;
