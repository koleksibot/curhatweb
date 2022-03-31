import { Grid, makeStyles, Card } from '@material-ui/core';
import BarChartArticle from './components/BarChartArticle';
import LineChartArticle from './components/LineChartArticle';
import NumberOfArticles from './components/NumberOfArticles';
import NumberOfRating from './components/NumberOfRating';
import RatingAverage from './components/RatingAverage';

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
}));

// const [userCounts, getUserCount]= useState('userCounts')

// const fetchUserCount = async () => {
//   const response = await fetch('http://localhost:8000/dashboard/statistic/usercount/mommy');
//   const resp = JSON.stringify(response);
//   const res = JSON.parse(resp);
//   return res;
// };

const ArticleDashboard = () => {
  const classes = useStyles();
  // const userGroup = props;

  return (
    <>
      <Grid container spacing={3} alignItems="stretch">
        <Grid item xs={4}>
          <Card className={classes.cardstyle}>
            <NumberOfArticles />
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.cardstyle}>
            <NumberOfRating />
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.cardstyle}>
            <RatingAverage />
          </Card>
        </Grid>
        <Grid item xs={8}>
          <Card className={classes.cardstyle}>
            <LineChartArticle />
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.cardstyle}>
            <BarChartArticle />
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default ArticleDashboard;
