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
    width: 130,
    flex: 1,
  },
  { field: 'phoneNumber', headerName: 'Nomor HP', width: 130 },
  { field: 'age', headerName: 'Usia', width: 90 },
  {
    field: 'domicile',
    headerName: 'Domisili',
    width: 200,
    flex: 1,
  },
  { field: 'registrationDate', headerName: 'Tanggal Pendaftaran', width: 200 },
  {
    field: 'action',
    headerName: 'Aksi',
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
    renderCell: ViewButton,
  },
];

export interface IUserListRow {
  id: number;
  no: number;
  name: string;
  phoneNumber: string;
  age: number;
  domicile: string;
  registrationDate: string;
}
