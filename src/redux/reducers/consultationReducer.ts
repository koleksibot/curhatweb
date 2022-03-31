import { consultationTypes } from '../../constants/actionTypes';

const initialState: IConsultation = {
  id: '',
  description: '',
  solved: false,
  closedAt: null,
  closedBy: null,
  posts: [],
  createdAt: '',
  updatedAt: '',
  info: undefined,
  members: [],
};

const consultationListReducer = (state = initialState, action: IConsultationsAction) => {
  const { type, payload } = action;

  switch (type) {
    case consultationTypes.FETCH_CONSULTATION_SUCCESS:
      return {
        ...initialState,
        ...payload,
      };
    default:
      return state;
  }
};

export default consultationListReducer;
