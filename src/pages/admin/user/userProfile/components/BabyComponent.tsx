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

const BabyComponent = (props: any) => {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Card className={classes.cardstyle}>
            <Typography className={classes.labelstyle}>Tanggal lahir bayi</Typography>
            <Typography className={classes.infostyle}>
              {' '}
              {props.user?.profile?.baby?.dob ?? '-'}
            </Typography>
          </Card>
          <Card className={classes.cardstyle}>
            <Typography className={classes.labelstyle}>Usia kehamilan saat melahirkan</Typography>
            <Typography className={classes.infostyle}>
              {' '}
              {props.user?.profile?.baby?.pregnancyWeeks ?? '-'} minggu
            </Typography>
          </Card>
          <Card className={classes.cardstyle}>
            <Typography className={classes.labelstyle}>Berat badan bayi</Typography>
            <Typography className={classes.infostyle}>
              {' '}
              {props.user?.profile?.baby?.weight ?? '-'} kg
            </Typography>
          </Card>
          <Card className={classes.cardstyle}>
            <Typography className={classes.labelstyle}>Panjang/Tinggi Badan Bayi</Typography>
            <Typography className={classes.infostyle}>
              {' '}
              {props.user?.profile?.baby?.height ?? '-'} cm
            </Typography>
          </Card>
          <Card className={classes.cardstyle}>
            <Typography className={classes.labelstyle}>Diameter lingkar kepala bayi</Typography>
            <Typography className={classes.infostyle}>
              {' '}
              {props.user?.profile?.baby?.diameter ?? '-'} cm
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card className={classes.cardstyle}>
            <Typography className={classes.labelstyle}>Jenis Kelamin</Typography>
            <Typography className={classes.infostyle}>
              {' '}
              {props.user?.profile?.baby?.gender === 'male' ? 'Laki-laki' : 'Perempuan'}
            </Typography>
          </Card>
          <Card className={classes.cardstyle}>
            <Typography className={classes.labelstyle}>Asupan</Typography>
            <Typography className={classes.infostyle}>
              {' '}
              {props.user?.profile?.baby?.feeds ?? '-'}
            </Typography>
          </Card>
          <Card className={classes.cardstyle}>
            <Typography className={classes.labelstyle}>Inisiasi menyusui dini</Typography>
            <Typography className={classes.infostyle}>
              {' '}
              {props.user?.profile?.baby?.imd ? 'Ya' : 'Tidak'}{' '}
            </Typography>
          </Card>
          <Card className={classes.cardstyle}>
            <Typography className={classes.labelstyle}>Waktu IMD</Typography>
            <Typography className={classes.infostyle}>
              {' '}
              {props.user?.profile?.baby?.oneHourInit
                ? 'Lebih dari satu jam'
                : 'Kurang dari satu jam'}
            </Typography>
          </Card>
          <Card className={classes.cardstyle}>
            <Typography className={classes.labelstyle}>Cara Melahirkan</Typography>
            <Typography className={classes.infostyle}>
              {' '}
              {props.user?.profile?.baby?.birthproccess ?? '-'}{' '}
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default BabyComponent;
