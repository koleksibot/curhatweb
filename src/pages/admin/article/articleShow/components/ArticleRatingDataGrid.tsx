import { DataGrid, GridColDef } from '@material-ui/data-grid';
import { RootState } from '@redux/reducers';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';

interface IRowArticleRating {
  id: number;
  no: number;
  name: string;
  userGroup: string;
  rating: number;
}

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', hide: true },
  { field: 'no', headerName: 'No.', width: 75 },
  { field: 'name', headerName: 'Nama', flex: 1 },
  { field: 'userGroup', headerName: 'Tingkatan Pengguna', width: 200 },
  { field: 'rating', headerName: 'Nilai', width: 128 },
];

const ArticleRatingDataGrid = () => {
  const rates = useSelector((state: RootState) => state.articleShow.payload?.rates);

  const rows = useMemo(
    () =>
      rates?.map(
        (rate, index): IRowArticleRating => ({
          id: rate.id,
          no: index + 1,
          name: rate.user.fullName ?? '',
          rating: rate.rate,
          userGroup: rate.user.userGroup.name,
        }),
      ),
    [],
  );

  return rows ? (
    <DataGrid autoHeight rows={rows} columns={columns} pageSize={20} checkboxSelection={false} />
  ) : (
    <div />
  );
};

export default ArticleRatingDataGrid;
