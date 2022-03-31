import { GridColDef } from '@material-ui/data-grid';

export const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'No',
    width: 75,
    hide: true,
  },
  { field: 'number', headerName: 'No', width: 75 },
  { field: 'createdAt', headerName: 'Waktu', flex: 2 },
  { field: 'eventName', headerName: 'Aktivitas', flex: 3 },
];

export interface IActivityRow {
  id: number;
  number: number;
  createdAt: string;
  eventName: string;
}
