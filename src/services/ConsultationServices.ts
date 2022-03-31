import get from '@utils/axios/get';
import * as Config from '@utils/axios/axiosConfig';

export enum ConsultationType {
  Closed = 'closed',
  OnGoing = 'ongoing',
  Waiting = 'waiting',
}

export const getConsultations = (page = 1, type?: ConsultationType) => {
  const config = {
    ...(type && { params: { type, page } }),
    ...(page && { params: { page } }),
  };

  return get<PayloadResponse<IConsultationPayload>>(
    'api/dashboard/consultations',
    Config.withToken(config),
  );
};

export const getConsultation = (id: IConsultation['id']) =>
  get<PayloadResponse<IConsultation>>(`api/consultations/${id}`, Config.withToken());

export const getConsultationPost = (id: IConsultation['id']) =>
  get<IConsultationPost[]>(
    `api/consultations/${id}/consultation_posts?sortBy=asc`,
    Config.withToken(),
  );

export const getConsultationsDownload = () =>
  get<Blob>(`api/consultations/export`, Config.withToken({ responseType: 'blob' }));

export const getConsultationPostsDownload = (id: IConsultation['id']) =>
  get<Blob>(
    `api/consultations/${id}/consultation_posts/export`,
    Config.withToken({ responseType: 'blob' }),
  );
