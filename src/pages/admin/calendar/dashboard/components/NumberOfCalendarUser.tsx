import { Typography, Grid, makeStyles } from '@material-ui/core';
import { useQuery } from 'react-query';
import { getNumberOfCalendarUser, getUserCount } from '@services/StatisticServices';

const useStyles = makeStyles(() => ({
  numberStyle: {
    // paddingTop: 10,
    // paddingBottom: 10,
    paddingRight: 10,
    color: '#4AB117 ',
    fontSize: 30,
    fontWeight: 'bold',
  },
  paddingtop: {
    paddingTop: 10,
  },
  paddingbot: {
    paddingBottom: 10,
  },
}));

const NumberOfCalendarUser = () => {
  const classes = useStyles();
  // const userGroup = props;

  const NumberOfCalendarUserQuery = useQuery('calendaruser', () => {
    return getNumberOfCalendarUser();
  });

  const userCountQuery = useQuery('userCount', () => {
    return getUserCount('mommy');
  });

  return (
    <>
      {userCountQuery.isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h6" align="center" className={classes.paddingbot}>
                Ibu yang menggunakan fitur
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h5" align="right" className={classes.numberStyle}>
                {NumberOfCalendarUserQuery.data?.payload}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6" align="left" className={classes.paddingtop}>
                / {userCountQuery.data?.payload}
              </Typography>
            </Grid>
          </Grid>
        </div>
      )}
    </>
  );
};

export default NumberOfCalendarUser;
