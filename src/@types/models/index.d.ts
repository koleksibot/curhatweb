interface TimeStamp {
  createdAt: string;
  updatedAt: string;
}

interface IStandardState {
  isLoading: boolean;
  error: Record;
}

interface IStandardAction {
  type: string;
  error?: Record;
}

type DispatchType<T = IStandardAction> = (args: T) => T;
