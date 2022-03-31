import articleListActionTypes from '@redux/constants/articleListActionTypes';

const initialState: IArticleListState = {
  isLoading: false,
  error: {},
  payload: {
    currentPage: -1,
    data: [],
    firtsPageUrl: '',
    from: -1,
    lastPage: -1,
    lastPageUrl: '',
    nextPageUrl: '',
    prevPageUrl: '',
    perPage: -1,
    to: -1,
    total: -1,
  },
};

const articleListReducer = (
  state = initialState,
  action: IArticleListAction,
): IArticleListState => {
  const { type, payload, error } = action;

  switch (type) {
    case articleListActionTypes.FETCH_ARTICLE_LIST:
      return {
        ...initialState,
        isLoading: true,
      };
    case articleListActionTypes.FETCH_ARTICLE_LIST_SUCCESS:
      return {
        ...state,
        payload,
        isLoading: false,
      };
    case articleListActionTypes.FETCH_ARTICLE_LIST_FAILURE:
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
