type IArticleListPayload = IPagination<IArticle>;

interface IArticleListState extends IStandardState {
  payload: IArticleListPayload;
}

interface IArticleListAction extends IStandardAction {
  type: string;
  payload: IArticleListPayload;
  error?: {};
}
