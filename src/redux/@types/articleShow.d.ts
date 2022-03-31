interface IArticleShowState extends IStandardState {
  payload?: IArticle;
}

interface IArticleShowAction extends IStandardAction {
  type: string;
  payload: IArticle;
  error?: {};
}
