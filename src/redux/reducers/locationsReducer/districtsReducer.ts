import { districtsTypes } from '@redux/constants/locationsActionTypes';

const initialState: DistrictsState = {
  payload: undefined,
  isLoading: false,
  error: undefined,
};

const districtsReducer = (
  state: DistrictsState = initialState,
  action: DistrictsAction,
): DistrictsState => {
  const { type, payload, error } = action;

  switch (type) {
    case districtsTypes.FETCH_DISTRICTS_SUCCESS:
      return {
        ...state,
        payload,
        isLoading: false,
      };
    case districtsTypes.FETCH_DISTRICTS_FAILURE:
      return {
        ...state,
        error,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default districtsReducer;
