import { provincesTypes } from '@redux/constants/locationsActionTypes';
import * as LocationServices from '@services/LocationServices';

export const requestProvinces = () => async (dispatch: DispatchType) => {
  try {
    const response = await LocationServices.getProvinces();

    dispatch(requestProvincesSuccess(response as IProvince[]));
  } catch (error) {
    // TODO:  dispatch() error;
    // eslint-disable-next-line no-alert
    alert(JSON.stringify(error));
    dispatch(requestProvincesFailure());
  }
};

export const requestProvincesSuccess = (provinces: IProvince[]) => ({
  type: provincesTypes.FETCH_PROVINCES_SUCCESS,
  payload: provinces,
});

export const requestProvincesFailure = () => ({
  type: provincesTypes.FETCH_PROVINCES_FAILURE,
});
