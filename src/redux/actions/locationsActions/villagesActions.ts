import { villagesTypes } from '@redux/constants/locationsActionTypes';
import * as LocationServices from '@services/LocationServices';

export const requestVillages = (subDistrictId: ISubDistrict['id']) => async (
  dispatch: DispatchType,
) => {
  try {
    const response = await LocationServices.getVillages(subDistrictId);

    dispatch(requestVillagesSuccess(response as IVillage[]));
  } catch (error) {
    // TODO:  dispatch() error;
    // eslint-disable-next-line no-alert
    alert(JSON.stringify(error));
    dispatch(requestVillagesFailure());
  }
};

export const requestVillagesSuccess = (villages: IVillage[]) => ({
  type: villagesTypes.FETCH_VILLAGES_SUCCESS,
  payload: villages,
});

export const requestVillagesFailure = () => ({
  type: villagesTypes.FETCH_VILLAGES_FAILURE,
});
