// import { Typography, Grid, makeStyles } from '@material-ui/core';
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import { useQuery } from 'react-query';
import { getTopDiaryUser } from '@services/StatisticServices';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
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
}));

const TopUserCalendar = () => {
  const classes = useStyles();
  // const userGroup = props;

  const TopDiaryUserQuery = useQuery('topdiaryuser', () => {
    return getTopDiaryUser();
  });

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', hide: true },
    { field: 'nama', headerName: 'Nama', flex: 2, sortable: false, filterable: false },
    { field: 'jumlah', headerName: 'Jumlah Diary', flex: 1, sortable: false, filterable: false },
  ];

  const rows = TopDiaryUserQuery.data?.payload;

  return (
    <>
      {TopDiaryUserQuery.isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <Typography variant="h5" align="center" className={classes.paddingbot}>
            Pengguna Diary Terbanyak
          </Typography>
          <DataGrid
            rows={rows}
            columns={columns}
            // pageSize={5}
            // rowsPerPageOptions={[5]}
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

export default TopUserCalendar;
