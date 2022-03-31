import { Theme, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/reducers';
import { Redirect, Route } from 'react-router-dom';
import { DEBUG_MODE } from '@utils/config';
import LoginForm from './components/LoginForm';
import { version } from '../../../package.json';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(4),
    justifyContent: 'center',
    height: '100vh',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'white',
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(4),
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(3),
  },
}));

const Login = () => {
  const classes = useStyles();
  const session = useSelector((state: RootState) => state.session);

  return (
    <Route>
      {!session.isLoggedIn ? (
        <div className={classes.root}>
          <Container maxWidth="xs" className={classes.container}>
            <div className={classes.header}>
              <h2>Curhat ASI</h2>
            </div>
            <LoginForm />
          </Container>
          {DEBUG_MODE && (
            <span>
              You are running this application in
              <b>{` ${process.env.NODE_ENV} `}</b>
              mode. Version {version}.
            </span>
          )}
        </div>
      ) : (
        <Redirect to="/admin" />
      )}
    </Route>
  );
};

export default Login;
