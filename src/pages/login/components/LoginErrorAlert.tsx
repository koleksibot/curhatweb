/* eslint-disable @typescript-eslint/no-unused-vars */

import { RootState } from '@redux/reducers';
import { useSelector } from 'react-redux';
import Alert, { AlertProps } from '@material-ui/lab/Alert';

const LoginErrorAlert = (props: AlertProps) => {
  const error = useSelector((state: RootState) => state.session.error);

  return (
    <Alert severity="error" {...props}>
      {error?.message}
    </Alert>
  );
};

export default LoginErrorAlert;
