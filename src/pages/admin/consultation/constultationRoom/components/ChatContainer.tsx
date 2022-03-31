import { RootState } from '@redux/reducers';
import { useSelector } from 'react-redux';
import { Avatar, makeStyles, Theme } from '@material-ui/core';
import ChatRoom from './ChatRoom';
import ChatInfo from './ChatInfo';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: 'white',
    borderRadius: theme.shape.borderRadius,
    display: 'flex',
    height: '90vh',
  },
  borderStyle: {
    borderStyle: 'solid',
    borderColor: theme.palette.background.default,
  },
  main: {
    extend: 'borderStyle',
    display: 'flex',
    flex: 3,
    flexDirection: 'column',
    borderWidth: '0 1px 0 0',
  },
  secondary: {
    display: 'flex',
    flexDirection: 'column',
    flex: 2,
  },
  headerText: {
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 16,
  },
  header: {
    extend: 'borderStyle',
    paddingLeft: theme.spacing(2),
    padding: theme.spacing(1),
    height: '72px',
    display: 'flex',
    alignItems: 'center',
  },
  headerAvatar: {
    height: 48,
    width: 48,
  },
  avaContainer: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  },
  headerChat: {
    borderTopWidth: 0,
    borderBottomWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    extend: 'header',
  },
  headerContent: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: theme.spacing(1),
    '& > span': {
      '&:nth-child(1)': {
        extend: 'headerText',
      },
      '&:nth-child(2)': {
        color: theme.palette.text.secondary,
      },
    },
  },
  headerInfo: {
    extend: ['header', 'headerText'],
    borderTopWidth: 0,
    borderBottomWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
}));

const ChatContainer: React.FC = () => {
  const classes = useStyles();

  const consultation = useSelector((state: RootState) => state.consultation);

  return (
    <div className={classes.root}>
      <div className={classes.main}>
        <div className={classes.headerChat}>
          <div className={classes.avaContainer}>
            <Avatar alt={consultation.user?.fullName || ''} className={classes.headerAvatar} />
          </div>
          <div className={classes.headerContent}>
            <span>{consultation.user?.fullName || 'Belum mengisi profile'}</span>
            <span>{`Masalah : ${consultation.description}`}</span>
          </div>
        </div>
        <ChatRoom />
      </div>
      <div className={classes.secondary}>
        <div className={classes.headerInfo}>Informasi Konsultasi</div>
        <ChatInfo />
      </div>
    </div>
  );
};

export default ChatContainer;
