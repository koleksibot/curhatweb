interface IArticleRate extends TimeStamp {
  id: number;
  articleId: IArticle['id'];
  userId: IUser['id'];
  rate: number;
  user: IUser;
}
