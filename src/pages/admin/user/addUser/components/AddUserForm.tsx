import { Button, makeStyles, MenuItem, Theme } from '@material-ui/core';
import * as yup from 'yup';
import { Form, Formik } from 'formik';
import { Select, TextField } from 'formik-material-ui';
import { KeyboardDatePicker } from 'formik-material-ui-pickers';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { requestAddUser } from '@redux/actions/addUserActions';
import { IUserRequest } from '@services/UserServices';
import UserGroup from '@constants/UserGroupEnum';
import { format } from 'date-fns';
import { useDispatch } from 'react-redux';
import Field from './CustomField';
import LocationFields from './LocationFields';

const useStyles = makeStyles((theme: Theme) => ({
  loginAlert: {
    marginBottom: theme.spacing(3),
  },
}));

interface AddUserFormValue {
  userGroupId?: IUserGroup['id'];
  phoneNumber: string;
  pin: string;
  name: string;
  pob: string;
  dob: Date;
  province?: IProvince;
  district?: IDistrict;
  subDistrict?: ISubDistrict;
  village?: IVillage;
}

const validationSchema = yup.object({
  userGroupId: yup.string().required(),
  phoneNumber: yup.string().required('Nomor Handphone harus diisi'),
  pin: yup
    .string()
    .matches(/^[0-9]+$/, 'PIN harus angka')
    .min(6, 'PIN harus 6 digit')
    .max(6, 'PIN harus 6 digit')
    .required('PIN harus diisi'),
  name: yup.string().required('Nama harus diisi'),
  pob: yup.string().required('Tempat lahir harus diisi'),
  dob: yup.date().required('Tanggal lahir harus diisi'),
  province: yup.object().required('Provinsi harus diisi'),
  district: yup.object().required('Kota/kabupaten harus diisi'),
  subDistrict: yup.object().required('Kecamatan harus diisi'),
  village: yup.object().required('Kelurahan/desa harus diisi'),
});

const userGroupMenu: IUserGroup[] = [
  {
    id: UserGroup.Cadre,
    name: 'Kader',
    level: 0,
  },
  {
    id: UserGroup.Conselor,
    name: 'Konselor',
    level: 0,
  },
  {
    id: UserGroup.DoctorGeneral,
    name: 'Dokter Umum',
    level: 0,
  },
  {
    id: UserGroup.DoctorSpecialist,
    name: 'Dokter Spesialis',
    level: 0,
  },
  {
    id: UserGroup.Midwife,
    name: 'Bidan',
    level: 0,
  },
];

const AddUserForm = () => {
  // eslint-disable-next-line no-underscore-dangle
  const _classes = useStyles();

  const dispatch = useDispatch();

  const initialValues: AddUserFormValue = {
    phoneNumber: '',
    pin: '',
    name: '',
    pob: '',
    dob: new Date(1970, 0, 1),
  };

  const onSubmit = async (values: AddUserFormValue) => {
    const data: IUserRequest = {
      userGroupId: values.userGroupId || '',
      name: values.name,
      phoneNumber: values.phoneNumber,
      pin: values.pin,
      pob: values.pob,
      dob: format(values.dob, 'yyyy-MM-dd'),
      villageId: values.village?.id || '',
    };

    dispatch(requestAddUser(data));
  };

  const renderUserGroupMenu = () =>
    userGroupMenu.map((menu) => (
      <MenuItem key={menu.id} value={menu.id}>
        {menu.name}
      </MenuItem>
    ));

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form>
          <Field component={Select} name="userGroupId" label="Jabatan" autoFocus>
            {renderUserGroupMenu()}
          </Field>
          <Field component={TextField} name="phoneNumber" label="Nomor Handphone" autoFocus />
          <Field component={TextField} name="pin" type="number" label="PIN Sementara" />
          <Field component={TextField} name="name" label="Nama" />
          <Field component={TextField} name="pob" label="Tempat Lahir" />
          <Field
            component={KeyboardDatePicker}
            label="Tanggal Lahir"
            name="dob"
            variant="inline"
            format="dd MMM yyyy"
          />
          <LocationFields />
          <Button color="primary" variant="contained" type="submit" fullWidth disableElevation>
            Daftar
          </Button>
        </Form>
      </Formik>
    </MuiPickersUtilsProvider>
  );
};

export default AddUserForm;
