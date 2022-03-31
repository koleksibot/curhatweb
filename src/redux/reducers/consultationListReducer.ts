import { consultationTypes } from '../../constants/actionTypes';

const initialState: IConsultationState = {
  isLoading: false,
  error: {},
  payload: {
    currentPage: 1,
    data: [],
    firtsPageUrl: '',
    from: 1,
    lastPage: 1,
    lastPageUrl: '',
    nextPageUrl: '',
    prevPageUrl: '',
    perPage: 10,
    to: 1,
    total: 1,
  },
};

const consultationListReducer = (
  state = initialState,
  action: IConsultationsAction,
): IConsultationState => {
  const { type, payload } = action;

  switch (type) {
    case consultationTypes.FETCH_CONSULTATION_LIST_SUCCESS:
      return {
        ...initialState,
        payload,
      };
    default:
      return state;
  }
};

export default consultationListReducer;
