import { useMemo, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { Button, makeStyles, Theme, Card } from '@material-ui/core';
import { DataGrid, GridPageChangeParams } from '@material-ui/data-grid';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/reducers';
import FileSaver from 'file-saver';
import { getConsultations, getConsultationsDownload } from '@services/ConsultationServices';
import { useQuery } from 'react-query';
import CustomLoadingOverlay from '@components/CustomLoadingOverlay';
import { columns, IRowConsultation } from './dataGridOptions';

const useStyle = makeStyles((theme: Theme) => ({
  header: {
    marginBottom: theme.spacing(3),
  },
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(3),
  },
  cardstyle: {
    background: 'white',
    borderRadius: 10,
    borderStyle: 'none',
    boxShadow: 'none',
    padding: 20,
  },
}));

const Consultations = () => {
  const classes = useStyle();

  const { level } = useSelector((state: RootState) => state.selfUser.payload.userGroup);

  const [page, setPage] = useState(1);

  const { isLoading, data } = useQuery(['consultations', page], () => getConsultations(page));

  const rows: IRowConsultation[] = useMemo(
    () =>
      data
        ? data.payload.data.map((consultation, index) => ({
            id: consultation.id,
            no: index + 1 + 30 * (page - 1),
            openBy: consultation.user?.fullName || 'Belum mengisi profil',
            problem: consultation.description,
            createdAt: consultation.createdAt,
          }))
        : [],
    [data],
  );

  const handleDownload = async () => {
    const response = await getConsultationsDownload();
    FileSaver.saveAs(response);
  };

  const handlePageChange = (params: GridPageChangeParams) => {
    setPage(params.page + 1);
  };

  return (
    <>
      <Card className={classes.cardstyle}>
        <div className={classes.headerContainer}>
          <Typography variant="h4" className={classes.header}>
            Daftar Konsultasi
          </Typography>
          {level === 0 && (
            <div>
              <Button onClick={handleDownload} variant="contained" color="secondary">
                Download Excel
              </Button>
            </div>
          )}
        </div>
        <DataGrid
          autoHeight
          pagination
          rows={rows}
          columns={columns}
          onPageChange={handlePageChange}
          pageSize={30}
          rowCount={data?.payload.total ?? 0}
          loading={isLoading}
          paginationMode="server"
          checkboxSelection={false}
          components={{
            LoadingOverlay: CustomLoadingOverlay,
          }}
        />
      </Card>
    </>
  );
};

export default Consultations;
