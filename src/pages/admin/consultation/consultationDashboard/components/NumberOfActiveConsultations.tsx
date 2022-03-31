import { Typography, Grid, makeStyles } from '@material-ui/core';
import { useQuery } from 'react-query';
import { getActiveConsultationCount } from '@services/StatisticServices';

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

const NumberOfActiveConsultations = () => {
  const classes = useStyles();
  // const userGroup = props;

  const userCountQuery = useQuery('activeConsultationCount', () => {
    return getActiveConsultationCount();
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
                Konsultasi Aktif
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

export default NumberOfActiveConsultations;
