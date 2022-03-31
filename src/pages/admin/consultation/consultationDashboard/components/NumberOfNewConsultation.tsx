import { Typography, Grid, makeStyles } from '@material-ui/core';
import { useQuery } from 'react-query';
import { getLast30DaysConsultation } from '@services/StatisticServices';

const useStyles = makeStyles(() => ({
  numberStyle: {
    paddingTop: 10,
    paddingBottom: 10,
    color: '#4AB117 ',
    fontSize: 30,
    fontWeight: 'bold',
  },
  numberStyleDefault: {
    paddingTop: 10,
    paddingBottom: 10,
    color: 'inherit',
  },
}));

// const [userCounts, getUserCount]= useState('userCounts')

// const fetchUserCount = async () => {
//   const response = await fetch('http://localhost:8000/dashboard/statistic/usercount/mommy');
//   const resp = JSON.stringify(response);
//   const res = JSON.parse(resp);
//   return res;
// };

const NumberOfNewConsultations = () => {
  const classes = useStyles();
  // const userGroup = props;

  const userCountQuery = useQuery('last30daysconsultationcount', () => {
    return getLast30DaysConsultation();
  });

  return (
    <>
      {userCountQuery.isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <Grid container>
            <Grid item xs={8}>
              <Typography variant="h6" align="center">
                Konsultasi dalam 30 hari ke belakang
              </Typography>
            </Grid>
            <Grid item xs={4}>
              {userCountQuery.data?.payload !== 0 ? (
                <Typography variant="h4" align="center" className={classes.numberStyle}>
                  + {userCountQuery.data?.payload}
                </Typography>
              ) : (
                <Typography variant="h4" align="center" className={classes.numberStyleDefault}>
                  + {userCountQuery.data?.payload}
                </Typography>
              )}
            </Grid>
          </Grid>
        </div>
      )}
    </>
  );
};

export default NumberOfNewConsultations;
