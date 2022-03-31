import { DataGrid, GridColDef, GridValueFormatterParams } from '@material-ui/data-grid';

interface IRowArticleReader {
  id: string;
  no: number;
  name: string;
  userGroup: string;
  readCount: number;
}

const mockRows: IRowArticleReader[] = [
  {
    id: '1',
    no: 1,
    name: 'Mira Suryani',
    userGroup: 'Ibu',
    readCount: 13,
  },
];

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', hide: true },
  { field: 'no', headerName: 'No.', width: 75 },
  { field: 'name', headerName: 'Nama', flex: 1 },
  { field: 'userGroup', headerName: 'Tingkatan Pengguna', width: 200 },
  {
    field: 'readCount',
    headerName: 'Nilai',
    width: 128,
    valueFormatter: (params: GridValueFormatterParams) => `${params.value} kali`,
  },
];

const ArticleReaderDataGrid = () => {
  return (
    <DataGrid
      autoHeight
      rows={mockRows}
      columns={columns}
      pageSize={20}
      checkboxSelection={false}
    />
  );
};

export default ArticleReaderDataGrid;
