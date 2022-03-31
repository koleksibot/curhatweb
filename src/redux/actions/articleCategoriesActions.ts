import * as ArticleCategoryServices from '@services/ArticleCategoryServices';
import articleCategoriesActionTypes from '@redux/constants/articleCategoriesActionTypes';

export const requestArticleCategories = () => async (dispatch: DispatchType) => {
  try {
    dispatch({ type: articleCategoriesActionTypes.FETCH_ARTICLE_CATEGORIES });
    const response = await ArticleCategoryServices.getArticleCategories();

    dispatch(requestArticleCategoriesSuccess(response as IArticleCategoriesPayload));
  } catch (error) {
    // TODO:  dispatch() error;
    // eslint-disable-next-line no-alert
    alert(JSON.stringify(error.response));
    dispatch(requestArticleCategoriesFailure(error.response));
  }
};

const requestArticleCategoriesSuccess = (payload: IArticleCategoriesPayload) => ({
  type: articleCategoriesActionTypes.FETCH_ARTICLE_CATEGORIES_SUCCESS,
  payload,
});

const requestArticleCategoriesFailure = (error: Record<any, any>) => ({
  type: articleCategoriesActionTypes.FETCH_ARTICLE_CATEGORIES_FAILURE,
  error,
});
