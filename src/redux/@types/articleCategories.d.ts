type IArticleCategoriesPayload = IPagination<IArticleCategory>;

interface IArticleCategoriesState extends IStandardState {
  payload: IArticleCategoriesPayload;
}

interface IArticleCategoriesAction extends IStandardAction {
  type: string;
  payload: IArticleCategoriesPayload;
  error?: {};
}
