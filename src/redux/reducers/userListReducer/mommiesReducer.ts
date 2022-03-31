import { mommiesTypes } from '../../../constants/userListActionTypes';

const initialState: UserListState<IMoms> = {
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

const mommiesReducer = (
  state: UserListState<IMoms> = initialState,
  action: UserListAction,
): UserListState<IMoms> => {
  const { type, payload, error } = action;

  switch (type) {
    case mommiesTypes.FETCH_MOMMIES:
      return {
        ...state,
        isLoading: true,
      };
    case mommiesTypes.FETCH_MOMMIES_SUCCESS:
      return {
        ...state,
        payload,
        isLoading: false,
      };
    case mommiesTypes.FETCH_MOMMIES_FAILURE:
      return {
        ...state,
        error,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default mommiesReducer;
