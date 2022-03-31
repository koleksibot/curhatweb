import { Avatar, makeStyles, Theme } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/reducers';

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    padding: theme.spacing(0),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    width: 128,
    height: 128,
    marginBottom: 4,
  },
  name: {
    fontSize: 'x-large',
    letterSpacing: '0.15px',
  },
  title: {
    color: theme.palette.text.secondary,
    fontSize: 'medium',
  },
}));

const Header = () => {
  const classes = useStyles();
  const user = useSelector((state: RootState) => state.userProfile.payload);

  return (
    <div className={classes.header}>
      <Avatar className={classes.avatar} />
      <span className={classes.name}>{user?.fullName || 'Belum mengisi profile'}</span>
      <span className={classes.title}>{user?.userGroup.name}</span>
    </div>
  );
};

export default Header;
