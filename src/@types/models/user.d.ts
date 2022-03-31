interface IUser extends TimeStamp {
  id: number;
  userGroupId?: UserGroupId;
  userGroup: IUserGroup;
  username: string;
  deletedAt: string | null;
  chatAccessToken: string | null;
  fullName: string | null;
  activities: IUserActivity[];
}
