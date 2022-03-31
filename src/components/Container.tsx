import { makeStyles, Theme } from '@material-ui/core';
import * as React from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: 'white',
    padding: theme.spacing(6),
    borderRadius: theme.shape.borderRadius,
  },
}));

interface ContainerProps {
  children?: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
};

export default Container;
