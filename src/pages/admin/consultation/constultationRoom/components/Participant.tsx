import { Avatar, makeStyles, Theme } from '@material-ui/core';
import * as React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    flexDirection: 'row',
  },
  spacing: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  info: {
    extend: 'spacing',
    marginLeft: theme.spacing(1),
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    borderStyle: 'solid',
    borderColor: theme.palette.background.default,
    borderWidth: '0 0 1px 0',
  },
  avatar: {
    extend: 'spacing',
    width: 48,
    height: 48,
  },
  name: {
    fontSize: 16,
    color: theme.palette.text.primary,
  },
  phoneNumber: {
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
}));

interface ParticipantProps {
  avatarUri?: string;
  id: string | number;
  name: string;
  phoneNumber: string;
}

const Participant: React.FC<ParticipantProps> = (props: ParticipantProps) => {
  const { id, name, phoneNumber } = props;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar className={classes.avatar} />
      <div className={classes.info}>
        <Link to={`/admin/user/${id}`} className={classes.name}>
          {name}
        </Link>
        <span className={classes.phoneNumber}>{phoneNumber}</span>
      </div>
    </div>
  );
};

export default Participant;
