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

const ProfileComponent = (props: any) => {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Card className={classes.cardstyle}>
            <Typography className={classes.labelstyle}>Nomor Telepon</Typography>
            <Typography className={classes.infostyle}> {props.user?.username ?? '-'}</Typography>
          </Card>
          <Card className={classes.cardstyle}>
            <Typography className={classes.labelstyle}>Tempat Lahir</Typography>
            <Typography className={classes.infostyle}>
              {' '}
              {props.user?.profile?.pob ?? '-'}
            </Typography>
          </Card>
          <Card className={classes.cardstyle}>
            <Typography className={classes.labelstyle}>Tanggal Lahir</Typography>
            <Typography className={classes.infostyle}>
              {' '}
              {props.user?.profile?.dob ?? '-'}
            </Typography>
          </Card>
          <Card className={classes.cardstyle}>
            <Typography className={classes.labelstyle}>Alamat</Typography>
            <Typography className={classes.infostyle}>
              {props.user?.profile?.address ?? '-'}
            </Typography>
          </Card>
          <Card className={classes.cardstyle}>
            <Typography className={classes.labelstyle}>Domisili</Typography>
            <Typography className={classes.infostyle}>
              {props.user?.profile?.domicile ?? '-'}
            </Typography>
          </Card>
          <Card className={classes.cardstyle}>
            <Typography className={classes.labelstyle}>Agama</Typography>
            <Typography className={classes.infostyle}>
              {props.user?.profile?.religionText ?? '-'}
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card className={classes.cardstyle}>
            <Typography className={classes.labelstyle}>Golongan Darah</Typography>
            <Typography className={classes.infostyle}>
              {props.user?.profile?.bloodType ?? '-'}
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
            <Typography className={classes.labelstyle}>Status Pernikahan</Typography>
            <Typography className={classes.infostyle}>
              {props.user?.profile?.martialStatusText ?? '-'}
            </Typography>
          </Card>
          <Card className={classes.cardstyle}>
            <Typography className={classes.labelstyle}>Pendidikan</Typography>
            <Typography className={classes.infostyle}>
              {props.user?.profile?.educationText ?? '-'}
            </Typography>
          </Card>
          <Card className={classes.cardstyle}>
            <Typography className={classes.labelstyle}>Pekerjaan</Typography>
            <Typography className={classes.infostyle}>
              {props.user?.profile?.occupationText ?? '-'}
            </Typography>
          </Card>
          <Card className={classes.cardstyle}>
            <Typography className={classes.labelstyle}>
              Jumlah Orang yang Tinggal di Rumah
            </Typography>
            <Typography className={classes.infostyle}>
              {props.user?.profile?.housematesNumber ?? '0'}
            </Typography>
          </Card>
          <Card className={classes.cardstyle}>
            <Typography className={classes.labelstyle}>Kepemilikan Rumah</Typography>
            <Typography className={classes.infostyle}>
              {props.user?.profile?.houseOwnershipText ?? '-'}
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default ProfileComponent;
