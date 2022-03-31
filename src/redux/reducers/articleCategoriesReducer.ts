import articleCategoriesActionTypes from '@redux/constants/articleCategoriesActionTypes';

const initialState: IArticleCategoriesState = {
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

const articleCategoriesReducer = (
  state = initialState,
  action: IArticleCategoriesAction,
): IArticleCategoriesState => {
  const { type, payload, error } = action;

  switch (type) {
    case articleCategoriesActionTypes.FETCH_ARTICLE_CATEGORIES:
      return {
        ...state,
        isLoading: true,
      };
    case articleCategoriesActionTypes.FETCH_ARTICLE_CATEGORIES_SUCCESS:
      return {
        ...state,
        payload,
        isLoading: false,
      };
    case articleCategoriesActionTypes.FETCH_ARTICLE_CATEGORIES_FAILURE:
      return {
        ...state,
        error,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default articleCategoriesReducer;
