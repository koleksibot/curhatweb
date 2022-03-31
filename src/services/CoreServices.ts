import get from '@utils/axios/get';
import post from '@utils/axios/post';
import put from '@utils/axios/put';
import * as Config from '@utils/axios/axiosConfig';

// Get
const getProfile = () => get('api/profile', Config.withToken());
const getConsultations = (config: any) => get('api/consultations', Config.withToken(config));
const getConsultationPost = (id: number) =>
  get(`api/consultations/${id}/consultation_posts?sortBy=desc`, Config.withToken());
const getMidwifes = () => get('api/midwifes', Config.withToken());
const getConselor = () => get('api/conselors', Config.withToken());
const getDoctorGeneral = () => get('api/doctor-general', Config.withToken());
const getDoctorSpecialist = () => get('api/doctor-specialist', Config.withToken());
const getMomsProfile = (userId: number) => get(`api/mommies/${userId}`, Config.withToken());
const getArticleList = () => get('api/articles', Config.withToken());

// Post
const postGenerateToken = (data: any) => post('auth/token', Config.bodyWithOauth(data));
const postAcceptConsultation = (id: string) =>
  post(`api/consultations/${id}/join`, null, Config.withToken());
const postRejectConsultation = (id: string) =>
  post(`api/consultations/${id}/leave`, null, Config.withToken());
const postStoreConsultationPost = (id: string, data: any) =>
  post(`api/consultations/${id}/consultation_posts`, data, Config.withToken());
const postInviteUserToConsultation = (id: string, userId: string) =>
  post(`api/consultations/${id}/invite/${userId}`, null, Config.withToken());
const postChangeProfilePicture = (data: any) =>
  post('api/profile/picture', data, Config.withToken());
const postUpdateProfile = (data: any) => post('api/profile', data, Config.withToken());

// Put
const putCloseConsulation = (id: string) =>
  put(`api/consultations/${id}/close`, null, Config.withToken());

// Delete

const CoreServices = {
  getProfile,
  getConsultations,
  getConsultationPost,
  getMidwifes,
  getConselor,
  getDoctorGeneral,
  getDoctorSpecialist,
  getMomsProfile,
  getArticleList,
  postGenerateToken,
  postAcceptConsultation,
  postRejectConsultation,
  postStoreConsultationPost,
  postInviteUserToConsultation,
  postChangeProfilePicture,
  postUpdateProfile,
  putCloseConsulation,
};

export default CoreServices;
