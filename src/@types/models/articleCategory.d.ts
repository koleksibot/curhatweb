interface IArticleCategory extends TimeStamp {
  id: number;
  parentId: number;
  name: string;
  deleteUrl: string;
  editUrl: string;
  children: IArticleCategory[];
}
