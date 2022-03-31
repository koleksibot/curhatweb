import { Typography, Grid, makeStyles } from '@material-ui/core';
import { useQuery } from 'react-query';
import { getActiveArticle } from '@services/StatisticServices';

const useStyles = makeStyles(() => ({
  numberStyle: {
    // paddingTop: 10,
    // paddingBottom: 10,
    // // color: '#4AB117 ',
    // // fontSize: 30,
    // // fontWeight: 'bold',
  },
}));

const NumberOfArticles = () => {
  const classes = useStyles();
  // const userGroup = props;

  const ActiveArticleQuery = useQuery('arctivearticle', () => {
    return getActiveArticle();
  });

  return (
    <>
      {ActiveArticleQuery.isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <Grid container>
            <Grid item xs={8}>
              <Typography variant="h6" align="center">
                Total artikel aktif
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h5" align="center" className={classes.numberStyle}>
                {ActiveArticleQuery.data?.payload}
              </Typography>
            </Grid>
          </Grid>
        </div>
      )}
    </>
  );
};

export default NumberOfArticles;
