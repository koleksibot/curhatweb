import { snakefy } from 'snakelize';
import get from '@utils/axios/get';
import * as Config from '@utils/axios/axiosConfig';

interface getCalendarReportResponse {
  userId: IUser['id'];
  total: number;
  user: Omit<IMoms, 'activities'>;
}

export interface IGetCalendarReportParams {
  page: number;
}

export const getCalendarReport = (params: IGetCalendarReportParams) => {
  const config = snakefy({ params });

  return get<PayloadResponse<IPagination<getCalendarReportResponse>>>(
    `api/calender/report`,
    Config.withToken(config),
  );
};

export const getCalenderDownload = () =>
  get(`api/calender/download`, Config.withToken({ responseType: 'blob' }));
