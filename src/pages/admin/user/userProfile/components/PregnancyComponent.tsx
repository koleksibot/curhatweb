import { Grid, Card, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  asd: {
    background: 'white',
    marginBottom: 20,
  },
  cardstyle: {
    background: 'white',
    borderRadius: 0,
    borderStyle: 'none',
    boxShadow: 'none',
    padding: 20,
    borderBottom: '1px solid lightGray',
  },
  labelstyle: {
    fontSize: 'small',
    color: 'grey',
    marginBottom: 10,
  },
  infostyle: {
    fontSize: 'large',
    marginBottom: 0,
  },
}));

const PregnancyComponent = (props: any) => {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Card className={classes.cardstyle}>
            <Typography className={classes.labelstyle}>Tinggi Badan</Typography>
            <Typography className={classes.infostyle}>
              {' '}
              {props.user?.profile?.pregnancy?.heightBefore || '-'} cm
            </Typography>
          </Card>
          <Card className={classes.cardstyle}>
            <Typography className={classes.labelstyle}>Berat Badan Sebelum Hamil</Typography>
            <Typography className={classes.infostyle}>
              {' '}
              {props.user?.profile?.pregnancy?.weightBefore ?? '-'} kg
            </Typography>
          </Card>
          <Card className={classes.cardstyle}>
            <Typography className={classes.labelstyle}>Berat badan Setelah Melahirkan</Typography>
            <Typography className={classes.infostyle}>
              {' '}
              {props.user?.profile?.pregnancy?.weightDuring || '-'} kg
            </Typography>
          </Card>
          <Card className={classes.cardstyle}>
            <Typography className={classes.labelstyle}>Pernah Keguguran</Typography>
            <Typography className={classes.infostyle}>
              {' '}
              {props.user?.profile?.pregnancy?.abortusExperienced ? 'Pernah' : 'Tidak Pernah'}
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card className={classes.cardstyle}>
            <Typography className={classes.labelstyle}>Jumlah Keguguran</Typography>
            <Typography className={classes.infostyle}>
              {' '}
              {props.user?.profile?.pregnancy?.abortusNum ?? '-'}
            </Typography>
          </Card>
          <Card className={classes.cardstyle}>
            <Typography className={classes.labelstyle}>Kehamilan ke-</Typography>
            <Typography className={classes.infostyle}>
              {' '}
              {props.user?.profile?.pregnancy?.pregnancyNum ?? '-'}
            </Typography>
          </Card>
          <Card className={classes.cardstyle}>
            <Typography className={classes.labelstyle}>Penyakit/Keluhan Saat Hamil</Typography>
            <Typography className={classes.infostyle}>
              {' '}
              {props.user?.profile?.pregnancy?.pregnancyComplaints ?? '-'}
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default PregnancyComponent;
