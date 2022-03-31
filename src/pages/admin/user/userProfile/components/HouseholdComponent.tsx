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

const HouseholdComponent = (props: any) => {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Card className={classes.cardstyle}>
            <Typography className={classes.labelstyle}>Relasi</Typography>
            <Typography className={classes.infostyle}>
              {' '}
              {props.user?.profile?.husband?.relationTypeText ?? '-'}
            </Typography>
          </Card>
          <Card className={classes.cardstyle}>
            <Typography className={classes.labelstyle}>Tempat Lahir </Typography>
            <Typography className={classes.infostyle}>
              {' '}
              {props.user?.profile?.husband?.pob ?? '-'}
            </Typography>
          </Card>
          <Card className={classes.cardstyle}>
            <Typography className={classes.labelstyle}>Tanggal Lahir</Typography>
            <Typography className={classes.infostyle}>
              {' '}
              {props.user?.profile?.husband?.dob ?? '-'}
            </Typography>
          </Card>
          <Card className={classes.cardstyle}>
            <Typography className={classes.labelstyle}>Agama</Typography>
            <Typography className={classes.infostyle}>
              {props.user?.profile?.husband?.religionText ?? '-'}
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card className={classes.cardstyle}>
            <Typography className={classes.labelstyle}>Nama</Typography>
            <Typography className={classes.infostyle}>
              {' '}
              {props.user?.profile?.husband?.name ?? '-'}
            </Typography>
          </Card>
          <Card className={classes.cardstyle}>
            <Typography className={classes.labelstyle}>Pendidikan</Typography>
            <Typography className={classes.infostyle}>
              {' '}
              {props.user?.profile?.husband?.educationText ?? '-'}
            </Typography>
          </Card>
          <Card className={classes.cardstyle}>
            <Typography className={classes.labelstyle}>Pekerjaan/Profesi</Typography>
            <Typography className={classes.infostyle}>
              {' '}
              {props.user?.profile?.husband?.occupationName ?? '-'}
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default HouseholdComponent;
