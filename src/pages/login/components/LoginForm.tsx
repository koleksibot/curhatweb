import * as React from 'react';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { Button, makeStyles, Theme } from '@material-ui/core';
import { TextField } from 'formik-material-ui';
import { requestLogin, resetAuthState } from '@redux/actions/authActions';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@redux/reducers';
import UserGroup from '@constants/UserGroupEnum';
import LoginErrorAlert from './LoginErrorAlert';
import Field from './CustomField';
import UserGroupField from './UserGroupField';

// TODO: Fix validation schema
const validationSchema = yup.object({
  username: yup.string().required('Email is required'),
  password: yup
    .string()
    .max(6, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

const useStyles = makeStyles((theme: Theme) => ({
  loginAlert: {
    marginBottom: theme.spacing(3),
  },
}));

interface ILoginInput {
  username: string;
  password: string;
  userGroupId: UserGroup;
}

const LoginForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { error, isLoading } = useSelector((state: RootState) => state.session);

  React.useEffect(() => {
    dispatch(resetAuthState());
  }, []);

  const initialValues = {
    username: 'admin',
    password: 'admin',
    userGroupId: UserGroup.Administrator,
  };

  const handleSubmit = ({ userGroupId, username, password }: ILoginInput) => {
    dispatch(requestLogin(userGroupId, username, password));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <UserGroupField name="userGroupId" label="Jabatan" disabled={isLoading} />
        <Field
          component={TextField}
          name="username"
          label="Nomor Handphone"
          autoFocus
          disabled={isLoading}
        />
        <Field
          component={TextField}
          name="password"
          label="PIN (6 Digit)"
          type="password"
          disabled={isLoading}
        />
        {error.message !== undefined && <LoginErrorAlert className={classes.loginAlert} />}
        <Button
          color="primary"
          variant="contained"
          type="submit"
          fullWidth
          disableElevation
          disabled={isLoading}
        >
          Login
        </Button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
