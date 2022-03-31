import { Grid, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(2),
    color: theme.palette.text.primary,
  },
}));

interface InfoProps {
  label: string;
  info?: string;
}

const Info = ({ label, info }: InfoProps) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={4}>
        {label}
      </Grid>
      <Grid item xs={8}>
        {info || '-'}
      </Grid>
    </Grid>
  );
};

export default Info;
