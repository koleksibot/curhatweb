import { Grid, Card, makeStyles } from '@material-ui/core';
import AverageBreastfeedingTime from './components/AverageBreastFeedingTime';
import AverageFormula from './components/AverageFormula';
import LatestDiaryUser from './components/LatestDiaryUser';
import NumberOfBreastfeed from './components/NumberOfBreastfeed';
import NumberOfCalendarUser from './components/NumberOfCalendarUser';
import NumberOfFormula from './components/NumberOfFormula';
import NumberOfOtherFood from './components/NumberOfOtherFood';
import TopUserCalendar from './components/TopUserCalendar';

const useStyles = makeStyles(() => ({
  numberStyle: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  cardstyle: {
    background: 'white',
    borderRadius: 10,
    borderStyle: 'none',
    boxShadow: 'none',
    padding: 20,
  },
  paddingbot: {
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

const CalendarDashboard = () => {
  const classes = useStyles();
  // const userGroup = props;

  return (
    <>
      <Grid container spacing={3} alignItems="stretch">
        <Grid item xs={7}>
          <Grid container spacing={3} alignItems="stretch">
            <Grid item xs={12}>
              <Card className={classes.cardstyle}>
                <TopUserCalendar />
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card className={classes.cardstyle}>
                <LatestDiaryUser />
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={5}>
          <Grid container spacing={3} alignItems="stretch">
            <Grid item xs={12}>
              <Card className={classes.cardstyle}>
                <NumberOfCalendarUser />
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card className={classes.cardstyle}>
                <NumberOfBreastfeed />
                <NumberOfFormula />
                <NumberOfOtherFood />
                <AverageBreastfeedingTime />
                <AverageFormula />
              </Card>
            </Grid>
            {/* <Grid item xs={12}>
              <Card className={classes.cardstyle}>
                <NumberOfBreastfeed />
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card className={classes.cardstyle}>
                <NumberOfFormula />
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card className={classes.cardstyle}>
                <NumberOfOtherFood />
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card className={classes.cardstyle}>
                <AverageBreastfeedingTime />
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card className={classes.cardstyle}>
                <AverageFormula />
              </Card>
            </Grid> */}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default CalendarDashboard;
