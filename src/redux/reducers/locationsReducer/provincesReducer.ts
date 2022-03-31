import { provincesTypes } from '@redux/constants/locationsActionTypes';

const initialState: ProvincesState = {
  payload: undefined,
  isLoading: false,
  error: undefined,
};

const provincesReducer = (
  state: ProvincesState = initialState,
  action: ProvincesAction,
): ProvincesState => {
  const { type, payload, error } = action;

  switch (type) {
    case provincesTypes.FETCH_PROVINCES_SUCCESS:
      return {
        ...state,
        payload,
        isLoading: false,
      };
    case provincesTypes.FETCH_PROVINCES_FAILURE:
      return {
        ...state,
        error,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default provincesReducer;
