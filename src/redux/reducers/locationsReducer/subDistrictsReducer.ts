import { subDistrictsTypes } from '@redux/constants/locationsActionTypes';

const initialState: SubDistrictsState = {
  payload: undefined,
  isLoading: false,
  error: undefined,
};

const subDistrictsReducer = (
  state: SubDistrictsState = initialState,
  action: SubDistrictsAction,
): SubDistrictsState => {
  const { type, payload, error } = action;

  switch (type) {
    case subDistrictsTypes.FETCH_SUB_DISTRICTS_SUCCESS:
      return {
        ...state,
        payload,
        isLoading: false,
      };
    case subDistrictsTypes.FETCH_SUB_DISTRICTS_FAILURE:
      return {
        ...state,
        error,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default subDistrictsReducer;
