import get from '@utils/axios/get';
import * as Config from '@utils/axios/axiosConfig';

type userGroupEnum = 'admin' | 'bdn' | 'cons' | 'dsp' | 'du' | 'mommy' | 'kdr';

export const getUserCount = (userGroup: userGroupEnum) => {
  return get<PayloadResponse<number>>(
    `api/dashboard/statistic/usercount/${userGroup}`,
    Config.withToken(),
  );
};

export const getUserMonthCount = (userGroup: userGroupEnum) => {
  return get<PayloadResponse<IUserPerMonth>>(
    `api/dashboard/statistic/usermonthcount/${userGroup}`,
    Config.withToken(),
  );
};

export const getUserbyAge = (userGroup: userGroupEnum) => {
  return get<PayloadResponse<any>>(
    `api/dashboard/statistic/getuserbyage/${userGroup}`,
    Config.withToken(),
  );
};
export const getUserbyDomicile = (userGroup: userGroupEnum) => {
  return get<PayloadResponse<any>>(
    `api/dashboard/statistic/getuserbydomicile/${userGroup}`,
    Config.withToken(),
  );
};

export const getLast30DaysUser = (userGroup: userGroupEnum) => {
  return get<PayloadResponse<number>>(
    `api/dashboard/statistic/getlast30daysuser/${userGroup}`,
    Config.withToken(),
  );
};

export const getNoProfileUser = (userGroup: userGroupEnum) => {
  return get<PayloadResponse<number>>(
    `api/dashbaord/statistic/getnoprofileuser/${userGroup}`,
    Config.withToken(),
  );
};

export const getConsultationCount = () => {
  return get<PayloadResponse<number>>(
    `api/dashboard/statistic/getconsultationcount`,
    Config.withToken(),
  );
};

export const getActiveConsultationCount = () => {
  return get<PayloadResponse<number>>(
    `api/dashboard/statistic/getactiveconsultationcount`,
    Config.withToken(),
  );
};

export const getLast30DaysConsultation = () => {
  return get<PayloadResponse<number>>(
    `api/dashboard/statistic/getlast30daysconsultation`,
    Config.withToken(),
  );
};

export const getConsultationperMonth = () => {
  return get<PayloadResponse<any>>(
    `api/dashboard/statistic/consultationmonthcount`,
    Config.withToken(),
  );
};

export const getMaxRoleConsultation = () => {
  return get<PayloadResponse<any>>(
    `api/dashboard/statistic/getlastroleconsultation`,
    Config.withToken(),
  );
};

export const getActiveArticle = () => {
  return get<PayloadResponse<number>>(
    `api/dashboard/statistic/getactivearticle`,
    Config.withToken(),
  );
};

export const getTotalRating = () => {
  return get<PayloadResponse<number>>(`api/dashboard/statistic/gettotalrating`, Config.withToken());
};

export const getRateAverage = () => {
  return get<PayloadResponse<number>>(`api/dashboard/statistic/getrateaverage`, Config.withToken());
};

export const geArticleRatesperMonth = () => {
  return get<PayloadResponse<any>>(
    `api/dashboard/statistic/getarticleratespermonth`,
    Config.withToken(),
  );
};

export const getRatesperPoint = () => {
  return get<PayloadResponse<any>>(`api/dashboard/statistic/getratesperpoint`, Config.withToken());
};

export const getNumberOfCalendarUser = () => {
  return get<PayloadResponse<any>>(
    `api/dashboard/statistic/getnumberofdiaryuser`,
    Config.withToken(),
  );
};

export const getTopDiaryUser = () => {
  return get<PayloadResponse<any>>(`api/dashboard/statistic/gettopdiaryuser`, Config.withToken());
};

export const getNumberOfBreastfeed = () => {
  return get<PayloadResponse<any>>(
    `api/dashboard/statistic/getnumberofbreastfeed`,
    Config.withToken(),
  );
};

export const getNumberOfFormula = () => {
  return get<PayloadResponse<any>>(
    `api/dashboard/statistic/getnumberofformula`,
    Config.withToken(),
  );
};

export const getNumberOfOtherFood = () => {
  return get<PayloadResponse<any>>(
    `api/dashboard/statistic/getnumberofotherfood`,
    Config.withToken(),
  );
};

export const getAverageBreastfeedTime = () => {
  return get<PayloadResponse<any>>(
    `api/dashboard/statistic/getaveragebreastfeedtime`,
    Config.withToken(),
  );
};

export const getAverageFormulaTime = () => {
  return get<PayloadResponse<any>>(
    `api/dashboard/statistic/getaverageformulatime`,
    Config.withToken(),
  );
};

export const getLatestDiaryUser = () => {
  return get<PayloadResponse<any>>(
    `api/dashboard/statistic/getlatestdiaryuser`,
    Config.withToken(),
  );
};
