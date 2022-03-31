import { Typography, Grid, makeStyles } from '@material-ui/core';
import { useQuery } from 'react-query';
import { getTotalRating } from '@services/StatisticServices';

const useStyles = makeStyles(() => ({
  numberStyle: {
    // paddingTop: 10,
    // paddingBottom: 10,
    // // color: '#4AB117 ',
    // // fontSize: 30,
    // // fontWeight: 'bold',
  },
}));

// const [userCounts, getUserCount]= useState('userCounts')

// const fetchUserCount = async () => {
//   const response = await fetch('http://localhost:8000/dashboard/statistic/usercount/mommy');
//   const resp = JSON.stringify(response);
//   const res = JSON.parse(resp);
//   return res;
// };

const NumberOfRating = () => {
  const classes = useStyles();
  // const userGroup = props;

  const NumberOfRatingQuery = useQuery('numberofrating', () => {
    return getTotalRating();
  });

  return (
    <>
      {NumberOfRatingQuery.isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <Grid container>
            <Grid item xs={8}>
              <Typography variant="h6" align="center">
                Total Rating
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h5" align="center" className={classes.numberStyle}>
                {NumberOfRatingQuery.data?.payload}
              </Typography>
            </Grid>
          </Grid>
        </div>
      )}
    </>
  );
};

export default NumberOfRating;
