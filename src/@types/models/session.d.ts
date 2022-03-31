interface ISession {
  accessToken: string;
  refreshToken: string;
  tokenType: string;
  expiresIn?: number;
}
