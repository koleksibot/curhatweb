interface IConsultation extends TimeStamp {
  id: string;
  description: string;
  solved: boolean;
  closedAt: string | null;
  lastPost?: IConsultationPost;
  userId?: IUser['id'];
  closedBy: IUser | null;
  user?: IUser;
  posts: IConsultationPost[];
  info?: IConsultationInfo;
  members: IUser[];
}

interface IConsultationInfo {
  age: string;
  bab: string;
  bak: string;
  feed: string;
  height: string;
  weight: string;
  feedUsing: string;
  otherFoodGiven: boolean;
}
