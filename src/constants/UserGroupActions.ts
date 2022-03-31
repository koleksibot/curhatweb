import UserGroup from '@constants/UserGroupEnum';
import {
  mommiesTypes,
  cadresTypes,
  conselorsTypes,
  midwifesTypes,
  doctorGeneralTypes,
  doctorSpecialistTypes,
  administratorTypes,
} from './userListActionTypes';

export const FETCH = {
  [UserGroup.Mommies]: mommiesTypes.FETCH_MOMMIES,
  [UserGroup.Cadre]: cadresTypes.FETCH_CADRES,
  [UserGroup.Conselor]: conselorsTypes.FETCH_CONSELORS,
  [UserGroup.Midwife]: midwifesTypes.FETCH_MIDWIFES,
  [UserGroup.DoctorGeneral]: doctorGeneralTypes.FETCH_DOCTOR_GENERAL,
  [UserGroup.DoctorSpecialist]: doctorSpecialistTypes.FETCH_DOCTOR_SPECIALIST,
  [UserGroup.Administrator]: administratorTypes.FETCH_ADMINISTRATOR,
};

export const SUCCESS = {
  [UserGroup.Mommies]: mommiesTypes.FETCH_MOMMIES_SUCCESS,
  [UserGroup.Cadre]: cadresTypes.FETCH_CADRES_SUCCESS,
  [UserGroup.Conselor]: conselorsTypes.FETCH_CONSELORS_SUCCESS,
  [UserGroup.Midwife]: midwifesTypes.FETCH_MIDWIFES_SUCCESS,
  [UserGroup.DoctorGeneral]: doctorGeneralTypes.FETCH_DOCTOR_GENERAL_SUCCESS,
  [UserGroup.DoctorSpecialist]: doctorSpecialistTypes.FETCH_DOCTOR_SPECIALIST_SUCCESS,
  [UserGroup.Administrator]: administratorTypes.FETCH_ADMINISTRATOR_SUCCESS,
};

export const FAILURE = {
  [UserGroup.Mommies]: mommiesTypes.FETCH_MOMMIES_FAILURE,
  [UserGroup.Cadre]: cadresTypes.FETCH_CADRES_FAILURE,
  [UserGroup.Conselor]: conselorsTypes.FETCH_CONSELORS_FAILURE,
  [UserGroup.Midwife]: midwifesTypes.FETCH_MIDWIFES_FAILURE,
  [UserGroup.DoctorGeneral]: doctorGeneralTypes.FETCH_DOCTOR_GENERAL_FAILURE,
  [UserGroup.DoctorSpecialist]: doctorSpecialistTypes.FETCH_DOCTOR_SPECIALIST_FAILURE,
  [UserGroup.Administrator]: administratorTypes.FETCH_ADMINISTRATOR_FAILURE,
};
