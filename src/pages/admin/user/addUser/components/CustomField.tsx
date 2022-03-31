import { makeStyles, Theme } from '@material-ui/core';
import { Field, FieldAttributes } from 'formik';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginBottom: theme.spacing(3),
  },
}));

const CustomField = (props: FieldAttributes<any>) => {
  const classes = useStyles();

  return <Field className={classes.root} fullWidth required {...props} />;
};

export default CustomField;
