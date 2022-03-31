import { GridCellParams, GridColDef } from '@material-ui/data-grid';
import Button from '@components/LinkButton';

const ViewButton = (params: GridCellParams) => (
  <Button
    to={`/admin/consultation/${params.getValue('id')}`}
    variant="contained"
    color="secondary"
    size="small"
    disableElevation
  >
    Lihat
  </Button>
);

export const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', hide: true },
  { field: 'no', headerName: 'No.', width: 75 },
  { field: 'openBy', headerName: 'Diminta oleh', width: 200 },
  { field: 'problem', headerName: 'Keluhan', width: 350 },
  { field: 'createdAt', headerName: 'Dibuat tanggal', width: 200 },
  {
    field: 'action',
    headerName: 'Aksi',
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
    renderCell: ViewButton,
  },
];

export interface IRowConsultation {
  id: string;
  no: number;
  openBy: string;
  problem: string;
  createdAt: string;
}
