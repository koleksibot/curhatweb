import * as ConsultationService from '@services/ConsultationServices';
import { consultationTypes } from '../../constants/actionTypes';

export const requestConsultation = (id: IConsultation['id']) => async (dispatch: DispatchType) => {
  try {
    const consultation = await ConsultationService.getConsultation(id);

    dispatch(requestConsultationsSuccess(consultation.payload));
  } catch (error) {
    // TODO:  dispatch() error;
    // eslint-disable-next-line no-alert
    // alert(JSON.stringify(error));
  }
};

export const requestConsultationsSuccess = (consultations: IConsultation) => ({
  type: consultationTypes.FETCH_CONSULTATION_SUCCESS,
  payload: consultations,
});
