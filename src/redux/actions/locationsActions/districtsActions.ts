import { districtsTypes } from '@redux/constants/locationsActionTypes';
import * as LocationServices from '@services/LocationServices';

export const requestDistricts = (provinceId: IProvince['id']) => async (dispatch: DispatchType) => {
  try {
    const response = await LocationServices.getDistricts(provinceId);

    dispatch(requestDistrictsSuccess(response as IDistrict[]));
  } catch (error) {
    // TODO:  dispatch() error;
    // eslint-disable-next-line no-alert
    alert(JSON.stringify(error));
    dispatch(requestDistrictsFailure());
  }
};

export const requestDistrictsSuccess = (districts: IDistrict[]) => ({
  type: districtsTypes.FETCH_DISTRICTS_SUCCESS,
  payload: districts,
});

export const requestDistrictsFailure = () => ({
  type: districtsTypes.FETCH_DISTRICTS_FAILURE,
});
