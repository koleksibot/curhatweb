interface UserProfileAction {
  type: string;
  payload: IMoms;
  error?: {};
}

interface UserProfileState {
  payload?: IMoms;
  isLoading: boolean;
  error: Record;
}
