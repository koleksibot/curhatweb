import { GridColDef } from '@material-ui/data-grid';

export const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'No',
    width: 75,
    hide: true,
  },
  { field: 'number', headerName: 'No', width: 75 },
  { field: 'calenderDate', headerName: 'Tanggal', width: 125 },
  { field: 'numberOfBreastfeed', headerName: 'Frekuensi Pemberian ASI', width: 125 },
  { field: 'averageTimeFeeding', headerName: 'Lama Pemberian ASI', width: 160 },
  { field: 'isFeedingFood', headerName: 'Makanan lain selain ASI', width: 125 },
  { field: 'numberOfFormulaMilk', headerName: 'Frekuensi Pemberian Susu Formula', width: 125 },
  {
    field: 'averageTimeFeedingFormulaMilk',
    headerName: 'Lama Pemberian Susu Formula',
    width: 125,
  },
];

export interface IDiaryASIRow
  extends Omit<ICalendar, keyof TimeStamp | 'userId' | 'isFeedingFood'> {
  number: number;
  isFeedingFood: string;
}
