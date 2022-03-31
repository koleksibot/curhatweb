interface ISessionState extends IStandardState {
  payload: ISession;
  isLoggedIn: boolean;
}

interface ISessionAction extends IStandardAction {
  payload: ISession;
}
