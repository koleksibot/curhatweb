// import { Typography, Grid, makeStyles } from '@material-ui/core';
import { DataGrid, GridColDef, GridCellParams } from '@material-ui/data-grid';
import { useQuery } from 'react-query';
import { getLatestDiaryUser } from '@services/StatisticServices';
import { Typography, makeStyles, Button, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  numberStyle: {
    // paddingTop: 10,
    // paddingBottom: 10,
    paddingRight: 10,
    color: '#4AB117 ',
    fontSize: 30,
    fontWeight: 'bold',
  },
  paddingtop: {
    paddingTop: 10,
  },
  paddingbot: {
    paddingBottom: 10,
  },
  buttonstyle: {
    background: theme.palette.secondary.main,
    color: 'white',
    // borderRadius: 100,
    textTransform: 'none',
    '&:hover': {
      background: theme.palette.secondary.dark,
    },
  },
}));

const LatestDiaryUser = () => {
  const classes = useStyles();
  // const userGroup = props;

  const LatestDiaryUserQuery = useQuery('latestdiaryuser', () => {
    return getLatestDiaryUser();
  });

  const ViewButton = (params: GridCellParams) => (
    <Button
      href={`/admin/user/${params.getValue('userId')}`}
      variant="contained"
      color="secondary"
      size="small"
      disableElevation
      className={classes.buttonstyle}
    >
      Lihat
    </Button>
  );

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', hide: true },
    { field: 'name', headerName: 'Nama', flex: 3, sortable: false, filterable: false },
    {
      field: 'timeCreated',
      headerName: 'Waktu Penggunaan',
      flex: 2,
      sortable: false,
      filterable: false,
    },
    {
      field: 'userId',
      headerName: 'Aksi',
      flex: 1,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      renderCell: ViewButton,
    },
  ];

  const rows = LatestDiaryUserQuery.data?.payload;

  return (
    <>
      {LatestDiaryUserQuery.isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <Typography variant="h5" align="center" className={classes.paddingbot}>
            Pengguna Diary Terbaru
          </Typography>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            hideFooter
            autoHeight
            autoPageSize
            disableSelectionOnClick
            disableColumnFilter
            disableColumnMenu
            disableColumnSelector
            disableDensitySelector
          />
        </div>
      )}
    </>
  );
};

export default LatestDiaryUser;
