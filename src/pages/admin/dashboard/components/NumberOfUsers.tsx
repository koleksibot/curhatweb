import { Typography, Grid } from '@material-ui/core';
import { useQuery } from 'react-query';
import { getUserCount } from '@services/StatisticServices';
// import UserGroup from '@constants/UserGroupEnum';

// const [userCounts, getUserCount]= useState('userCounts')

// const fetchUserCount = async () => {
//   const response = await fetch('http://localhost:8000/dashboard/statistic/usercount/mommy');
//   const resp = JSON.stringify(response);
//   const res = JSON.parse(resp);
//   return res;
// };

const NumberOfUsers = (props: any) => {
  // const userGroup = props;

  const userCountQuery = useQuery('userCount', () => {
    return getUserCount(props.user);
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
                Jumlah {groupName}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h4" align="center">
                {userCountQuery.data?.payload}
              </Typography>
            </Grid>
          </Grid>
        </div>
      )}
    </>
  );
};

export default NumberOfUsers;
