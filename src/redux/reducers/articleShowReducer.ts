import articleShowActionTypes from '@redux/constants/articleShowActionTypes';

const initialState: IArticleShowState = {
  isLoading: false,
  error: {},
  payload: undefined,
};

const articleListReducer = (
  state = initialState,
  action: IArticleShowAction,
): IArticleShowState => {
  const { type, payload, error } = action;

  switch (type) {
    case articleShowActionTypes.FETCH_ARTICLE_SHOW:
      return {
        ...initialState,
        isLoading: true,
      };
    case articleShowActionTypes.FETCH_ARTICLE_SHOW_SUCCESS:
      return {
        ...state,
        payload,
        isLoading: false,
      };
    case articleShowActionTypes.FETCH_ARTICLE_SHOW_FAILURE:
      return {
        ...state,
        error,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default articleListReducer;
