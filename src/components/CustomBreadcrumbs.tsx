import { Breadcrumbs, makeStyles, Theme, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) => ({
  prev: {
    fontSize: 16,
    textDecoration: 'none',
    color: theme.palette.text.secondary,
  },
}));

interface CustomBreadcrumbsProps {
  className?: string;
  levelOneTo: string;
  levelOneLabel: string;
  levelTwoLabel: string;
}

const CustomBreadcrumbs = (props: CustomBreadcrumbsProps) => {
  const { className, levelOneTo, levelOneLabel, levelTwoLabel } = props;
  const classes = useStyles();

  return (
    <Breadcrumbs aria-label="breadcrumb" className={className}>
      <Link to={levelOneTo} className={classes.prev}>
        {levelOneLabel}
      </Link>
      <Typography color="textPrimary">{levelTwoLabel}</Typography>
    </Breadcrumbs>
  );
};

export default CustomBreadcrumbs;
