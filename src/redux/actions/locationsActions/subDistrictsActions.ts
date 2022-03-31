import { subDistrictsTypes } from '@redux/constants/locationsActionTypes';
import * as LocationServices from '@services/LocationServices';

export const requestSubDistricts = (districtId: IDistrict['id']) => async (
  dispatch: DispatchType,
) => {
  try {
    const response = await LocationServices.getSubDistricts(districtId);

    dispatch(requestSubDistrictsSuccess(response as ISubDistrict[]));
  } catch (error) {
    // TODO:  dispatch() error;
    // eslint-disable-next-line no-alert
    alert(JSON.stringify(error));
    dispatch(requestSubDistrictsFailure());
  }
};

export const requestSubDistrictsSuccess = (subDistricts: ISubDistrict[]) => ({
  type: subDistrictsTypes.FETCH_SUB_DISTRICTS_SUCCESS,
  payload: subDistricts,
});

export const requestSubDistrictsFailure = () => ({
  type: subDistrictsTypes.FETCH_SUB_DISTRICTS_FAILURE,
});
