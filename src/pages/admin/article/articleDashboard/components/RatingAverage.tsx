import { Typography, Grid, makeStyles } from '@material-ui/core';
import { useQuery } from 'react-query';
import { getRateAverage, } from '@services/StatisticServices';

// const [userCounts, getUserCount]= useState('userCounts')

// const fetchUserCount = async () => {
//   const response = await fetch('http://localhost:8000/dashboard/statistic/usercount/mommy');
//   const resp = JSON.stringify(response);
//   const res = JSON.parse(resp);
//   return res;
// };

const useStyles = makeStyles(() => ({
  numberStyle: {
    paddingTop: 3,
    paddingBottom: 3,
  },
}));

const RatingAverage = () => {
  const classes = useStyles();
  // const userGroup = props;

  const RatingAverageQuery = useQuery('ratingaverage', () => {
    return getRateAverage();
  });

  return (
    <>
      {RatingAverageQuery.isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <Grid container>
            <Grid item xs={8}>
              <Typography variant="h6" align="center">
                Rata-rata Rating
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h5" align="center" className={classes.numberStyle}>
                {RatingAverageQuery.data?.payload}
              </Typography>
            </Grid>
          </Grid>
        </div>
      )}
    </>
  );
};

export default RatingAverage;
