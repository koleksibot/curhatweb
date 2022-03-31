import Button from '@components/LinkButton';
import { GridCellParams, GridColDef } from '@material-ui/data-grid';

const ViewButton = (params: GridCellParams) => (
  <Button
    to={`/admin/user/${params.getValue('id')}`}
    variant="contained"
    color="secondary"
    size="small"
    disableElevation
  >
    Lihat
  </Button>
);

export const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
    width: 75,
    hide: true,
  },
  {
    field: 'no',
    headerName: 'No.',
    width: 75,
  },
  {
    field: 'name',
    headerName: 'Nama',
    width: 180,
  },
  { field: 'start', headerName: 'Mulai ASI Eksklusif', width: 180 },
  { field: 'end', headerName: 'Akhir ASI Eksklusif', width: 180 },
  { field: 'total', headerName: 'Total Mengisi', width: 90 },
  {
    field: 'action',
    headerName: 'Aksi',
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
    renderCell: ViewButton,
  },
];

export interface ICalendarRow {
  id: number;
  no: number;
  name: string;
  start: string;
  end: string;
  total: number;
}
