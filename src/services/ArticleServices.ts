import get from '@utils/axios/get';
import * as Config from '@utils/axios/axiosConfig';
import destroy from '@utils/axios/destroy';
import patch from '@utils/axios/patch';
import post from '@utils/axios/post';
import put from '@utils/axios/put';

interface getArticlesParams {
  status?: string;
}

export const getArticles = (params: getArticlesParams) => {
  const { status = 'all' } = params;

  return get<IPagination<IArticle>>(
    'api/restricted/articles',
    Config.withToken({ params: { status } }),
  );
};

export const getArticle = (id: string) =>
  get<PayloadResponse<IArticle>>(`api/restricted/articles/${id}`, Config.withToken());

export const deleteArticle = (id: IArticle['id']) =>
  destroy(`api/restricted/articles/${id}`, Config.withToken());

export const restoreDeletedArticle = (id: IArticle['id']) =>
  patch(`api/restricted/articles/${id}/restore`, undefined, Config.withToken());

export interface IArticleRequest {
  title: string;
  content: string;
  articleCategoryId?: IArticleCategory['id'];
  scopes?: IUserGroup['id'][];
  tags?: string[];
}

export const postArticle = (request: IArticleRequest) =>
  post('api/restricted/articles', request, Config.withToken());

export const putArticle = (id: IArticle['id'], request: IArticleRequest) =>
  put(`api/restricted/articles/${id}`, request, Config.withToken());
