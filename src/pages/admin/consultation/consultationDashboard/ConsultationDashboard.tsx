import { Grid, Card, makeStyles } from '@material-ui/core';
import BarChartConsultation from './components/BarChart';
import LineChartConsultation from './components/LineChartConsultation';
import NumberOfActiveConsultations from './components/NumberOfActiveConsultations';
import NumberOfConsultations from './components/NumberOfConsultations';
import NumberOfNewConsultations from './components/NumberOfNewConsultation';

const useStyles = makeStyles(() => ({
  cardstyle: {
    background: 'white',
    borderRadius: 10,
    borderStyle: 'none',
    boxShadow: 'none',
    padding: 20,
  },
}));

const ConsultationDashboard = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Card className={classes.cardstyle}>
            <NumberOfConsultations />
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.cardstyle}>
            <NumberOfNewConsultations />
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.cardstyle}>
            <NumberOfActiveConsultations />
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card className={classes.cardstyle}>
            <LineChartConsultation />
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card className={classes.cardstyle}>
            <BarChartConsultation />
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default ConsultationDashboard;
