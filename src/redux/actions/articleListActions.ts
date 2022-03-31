import * as ArticleServices from '@services/ArticleServices';
import articleListActionTypes from '@redux/constants/articleListActionTypes';
import { AppThunk } from '@utils/AppThunk';

export const requestArticleList = (status?: string): AppThunk<Promise<void>> => async (
  dispatch,
) => {
  try {
    dispatch({ type: articleListActionTypes.FETCH_ARTICLE_LIST });
    const response = await ArticleServices.getArticles({ status });

    dispatch(requestArticleListSuccess(response as IArticleListPayload));
  } catch (error) {
    // TODO:  dispatch() error;
    // eslint-disable-next-line no-alert
    alert(JSON.stringify(error.response));
    dispatch(requestArticleListFailure(error.response));
  }
};

export const deleteArticle = (id: IArticle['id']): AppThunk<Promise<void>> => async (dispatch) => {
  try {
    await ArticleServices.deleteArticle(id);

    dispatch(requestArticleList());
  } catch (error) {
    // TODO:  dispatch() error;
    // eslint-disable-next-line no-alert
    alert(JSON.stringify(error.response));
    dispatch(requestArticleListFailure(error.response));
  }
};

export const restoreDeletedArticle = (id: IArticle['id']): AppThunk<Promise<void>> => async (
  dispatch,
) => {
  try {
    await ArticleServices.restoreDeletedArticle(id);

    dispatch(requestArticleList('trash'));
  } catch (error) {
    // TODO:  dispatch() error;
    // eslint-disable-next-line no-alert
    alert(JSON.stringify(error.response));
    dispatch(requestArticleListFailure(error.response));
  }
};

const requestArticleListSuccess = (payload: IArticleListPayload) => ({
  type: articleListActionTypes.FETCH_ARTICLE_LIST_SUCCESS,
  payload,
});

const requestArticleListFailure = (error: Record<any, any>) => ({
  type: articleListActionTypes.FETCH_ARTICLE_LIST_FAILURE,
  error,
});
