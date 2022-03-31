type IConsultationPayload = IPagination<IConsultation>;

interface IConsultationState extends IStandardState {
  payload: IConsultationPayload;
}

interface IConsultationsAction extends IStandardAction {
  payload: IConsultationPayload;
}
