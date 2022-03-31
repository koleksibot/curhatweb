import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme, Card } from '@material-ui/core';
import Button from '@components/LinkButton';
import { RootState } from '@redux/reducers';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { resetAddUser } from '@redux/actions/addUserActions';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import UserContent from './components/UserContent';

const useStyle = makeStyles((theme: Theme) => ({
  header: {},
  tableContainer: {
    height: '80vh',
  },
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(3),
  },
  cardstyle: {
    background: 'white',
    borderRadius: 10,
    borderStyle: 'none',
    boxShadow: 'none',
    padding: 20,
  },
  buttonstyle: {
    background: theme.palette.secondary.main,
    color: 'white',
    borderRadius: 100,
    textTransform: 'none',
    paddingRight: 20,
    '&:hover': {
      background: theme.palette.secondary.dark,
    },
  },
  iconstyle: {
    margin: 10,
  },
}));

const Users = () => {
  const classes = useStyle();

  const { level } = useSelector((state: RootState) => state.selfUser.payload.userGroup);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetAddUser());
  }, []);

  return (
    <>
      <Card className={classes.cardstyle}>
        <div className={classes.headerContainer}>
          <Typography variant="h4" className={classes.header}>
            Daftar Pengguna
          </Typography>
          {level === 0 && (
            <Button to="user/add" className={classes.buttonstyle}>
              <PersonAddIcon className={classes.iconstyle} />
              <Typography variant="h6">Tambah Pengguna</Typography>
            </Button>
          )}
        </div>
        <div>
          <UserContent />
        </div>
      </Card>
    </>
  );
};

export default Users;
