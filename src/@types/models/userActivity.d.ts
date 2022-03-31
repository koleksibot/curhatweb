interface IUserActivity {
  id: number;
  userId: IUser['id'];
  event: string;
  createdAt: string;
  eventName: string;
}
