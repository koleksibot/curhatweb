import { Typography, makeStyles, Grid } from '@material-ui/core';
import { useQuery } from 'react-query';
import { getLast30DaysUser } from '@services/StatisticServices';

// import UserGroup from '@constants/UserGroupEnum';

// const [userCounts, getUserCount]= useState('userCounts')

// const fetchUserCount = async () => {
//   const response = await fetch('http://localhost:8000/dashboard/statistic/usercount/mommy');
//   const resp = JSON.stringify(response);
//   const res = JSON.parse(resp);
//   return res;
// };

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

const UserAddition = (props: any) => {
  const classes = useStyles();
  // const userGroup = props;

  const userCountQuery = useQuery('Last30DaysUser', () => {
    return getLast30DaysUser(props.user);
  });

  let groupName;

  if (props.user === 'mommy') {
    groupName = 'Ibu';
  }
  if (props.user === 'kdr') {
    groupName = 'Kader';
  }
  if (props.user === 'bdn') {
    groupName = 'Bidan';
  }
  if (props.user === 'cons') {
    groupName = 'Konselor';
  }
  if (props.user === 'dsp') {
    groupName = 'Dokter Spesialis';
  }
  if (props.user === 'du') {
    groupName = 'Dokter Umum';
  }
  if (props.user === 'admin') {
    groupName = 'Admin';
  }

  return (
    <>
      {userCountQuery.isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <Grid container>
            <Grid item xs={8}>
              <Typography variant="h6" align="center">
                {' '}
                Pertumbuhan User {groupName} Bulan Ini
              </Typography>
            </Grid>
            <Grid item xs={4}>
              {userCountQuery.data?.payload !== 0 ? (
                <Typography variant="h4" align="center" className={classes.numberStyle}>
                  + {userCountQuery.data?.payload}
                </Typography>
              ) : (
                <Typography variant="h4" align="center" className={classes.numberStyleDefault}>
                  {userCountQuery.data?.payload}
                </Typography>
              )}
            </Grid>
          </Grid>
        </div>
      )}
    </>
  );
};

export default UserAddition;
