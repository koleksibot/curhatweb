import { consultationPostTypes } from '../../constants/actionTypes';

const initialState: IConsultationPostState = {
  data: [],
  isLoaded: false,
};

const consultationPostsReducer = (state = initialState, action: ConsultationPostsAction) => {
  const { type, payload } = action;

  switch (type) {
    case consultationPostTypes.FETCH_CONSULTATION_POSTS_SUCCESS:
      return payload;
    default:
      return state;
  }
};

export default consultationPostsReducer;
