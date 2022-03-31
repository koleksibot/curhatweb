import { makeStyles, Theme } from '@material-ui/core';
import * as React from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    padding: theme.spacing(1),
    borderWidth: 0,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.palette.background.default,
  },
  label: {
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
  info: {
    fontSize: 16,
    color: theme.palette.text.primary,
  },
}));

interface InfoProps {
  label: string;
  info?: string;
}

const Info: React.FC<InfoProps> = ({ label, info = '-' }: InfoProps) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <span className={classes.label}>{label}</span>
      <span className={classes.info}>{info}</span>
    </div>
  );
};

export default Info;
