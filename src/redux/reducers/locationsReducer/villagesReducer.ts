import { villagesTypes } from '@redux/constants/locationsActionTypes';

const initialState: VillagesState = {
  payload: undefined,
  isLoading: false,
  error: undefined,
};

const villagesReducer = (
  state: VillagesState = initialState,
  action: VillagesAction,
): VillagesState => {
  const { type, payload, error } = action;

  switch (type) {
    case villagesTypes.FETCH_VILLAGES_SUCCESS:
      return {
        ...state,
        payload,
        isLoading: false,
      };
    case villagesTypes.FETCH_VILLAGES_FAILURE:
      return {
        ...state,
        error,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default villagesReducer;
