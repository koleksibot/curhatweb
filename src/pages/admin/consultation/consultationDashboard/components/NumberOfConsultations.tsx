import { Typography, Grid, makeStyles } from '@material-ui/core';
import { useQuery } from 'react-query';
import { getConsultationCount } from '@services/StatisticServices';

const useStyles = makeStyles(() => ({
  numberStyle: {
    paddingTop: 10,
    paddingBottom: 10,
  },
}));

// const [userCounts, getUserCount]= useState('userCounts')

// const fetchUserCount = async () => {
//   const response = await fetch('http://localhost:8000/dashboard/statistic/usercount/mommy');
//   const resp = JSON.stringify(response);
//   const res = JSON.parse(resp);
//   return res;
// };

const NumberOfConsultations = () => {
  const classes = useStyles();
  // const userGroup = props;

  const userCountQuery = useQuery('consultationCount', () => {
    return getConsultationCount();
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
                Jumlah Konsultasi Keseluruhan
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h4" align="center" className={classes.numberStyle}>
                {userCountQuery.data?.payload}
              </Typography>
            </Grid>
          </Grid>
        </div>
      )}
    </>
  );
};

export default NumberOfConsultations;
