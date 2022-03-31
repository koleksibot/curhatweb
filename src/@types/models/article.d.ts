interface IArticle extends TimeStamp {
  title: string;
  content: string;
  createBy: IUser['id'];
  id: number;
  status: string;
  showApiUrl: string;
  showUrl: string;
  editUrl: string;
  deleteUrl: string;
  restoreUrl: string;
  averageRating: string | null;
  postedAt: string | null;
  viewCount: number;
  creator: IUser;
  rates: IArticleRate[];
  articleScopes: IUserGroup[];
  // TODO: fix this
  articleCategoryId?: IArticleCategory['id'];
  category: IArticleCategory;
  tags: IArticleTag[];
}
