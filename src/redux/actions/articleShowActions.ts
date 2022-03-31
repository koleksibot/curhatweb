import * as ArticleServices from '@services/ArticleServices';
import articleShowActionTypes from '@redux/constants/articleShowActionTypes';

export const requestArticle = (id: string) => async (dispatch: DispatchType) => {
  try {
    dispatch({ type: articleShowActionTypes.FETCH_ARTICLE_SHOW });
    const response = await ArticleServices.getArticle(id);

    dispatch(requestArticleSuccess(response.payload as IArticle));
  } catch (error) {
    // TODO:  dispatch() error;
    // eslint-disable-next-line no-alert
    alert(JSON.stringify(error.response));
    dispatch(requestArticleFailure(error.response));
  }
};

const requestArticleSuccess = (payload: IArticle) => ({
  type: articleShowActionTypes.FETCH_ARTICLE_SHOW_SUCCESS,
  payload,
});

const requestArticleFailure = (error: Record<any, any>) => ({
  type: articleShowActionTypes.FETCH_ARTICLE_SHOW_FAILURE,
  error,
});
