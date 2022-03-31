import { midwifesTypes } from '../../../constants/userListActionTypes';

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

const midwifesReducer = (
  state: UserListState = initialState,
  action: UserListAction,
): UserListState => {
  const { type, payload, error } = action;

  switch (type) {
    case midwifesTypes.FETCH_MIDWIFES:
      return {
        ...state,
        isLoading: true,
      };
    case midwifesTypes.FETCH_MIDWIFES_SUCCESS:
      return {
        ...state,
        payload,
        isLoading: false,
      };
    case midwifesTypes.FETCH_MIDWIFES_FAILURE:
      return {
        ...state,
        error,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default midwifesReducer;
