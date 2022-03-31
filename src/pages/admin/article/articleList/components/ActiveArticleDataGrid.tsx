import { DataGrid, GridCellParams, GridColDef } from '@material-ui/data-grid';
import { useEffect, useMemo, useState } from 'react';
import PromptDialog from '@components/PromptDialog';
import ActionButton from '@components/ActionButton';
import { useDispatch, useSelector } from 'react-redux';
import { requestArticleList, deleteArticle } from '@redux/actions/articleListActions';
import { RootState } from '@redux/reducers';

interface IRowActiveArticle {
  id: number;
  no: number;
  title: string;
  createdAt: string;
  postedAt: string | null;
  status: string;
}

const ActionButtons = (onDelete: (id: IArticle['id']) => any) => (params: GridCellParams) => (
  <div style={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}>
    <ActionButton label="Lihat" to={`/admin/article/show/${params.getValue('id')}`} />
    <ActionButton label="Edit" to={`/admin/article/edit/${params.getValue('id')}`} />
    <ActionButton label="Hapus" onClick={() => onDelete(params.getValue('id') as number)} noLink />
  </div>
);

const columns = (onDelete: (id: IArticle['id']) => any): GridColDef[] => [
  { field: 'id', headerName: 'ID', hide: true },
  { field: 'no', headerName: 'No.', width: 75, hide: true },
  { field: 'title', headerName: 'Judul', flex: 1 },
  { field: 'createdAt', headerName: 'Dibuat pada', width: 150 },
  { field: 'status', headerName: 'Status', width: 128 },
  { field: 'postedAt', headerName: 'Dipublikasikan pada', width: 150 },
  {
    field: 'action',
    headerName: 'Aksi',
    width: 240,
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
    renderCell: ActionButtons(onDelete),
  },
];

const ActiveArticleDataGrid = () => {
  const [openDeletePrompt, setOpenDeletePrompt] = useState(false);
  const [selectedId, setSelectedId] = useState(-1);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestArticleList());
  }, []);

  const { payload, isLoading } = useSelector((state: RootState) => state.articleList);

  const rows = useMemo(
    () =>
      payload.data.map(
        (article, index): IRowActiveArticle => ({
          id: article.id,
          no: index + 1,
          title: article.title,
          createdAt: article.createdAt,
          postedAt: article.postedAt ?? '-',
          status: article.status,
        }),
      ),
    [payload],
  );

  const handleDelete = (id: IArticle['id']) => {
    setOpenDeletePrompt(true);
    setSelectedId(id);
  };

  return (
    <>
      <DataGrid
        autoHeight
        rows={rows}
        columns={columns(handleDelete)}
        pageSize={20}
        checkboxSelection={false}
        loading={isLoading}
      />
      <PromptDialog
        open={openDeletePrompt}
        onClose={() => {
          setOpenDeletePrompt(false);
        }}
        onClickYes={() => {
          dispatch(deleteArticle(selectedId));
        }}
        title="Anda yakin untuk menghapus artikel?"
        content="Artikel yang sudah dihapus akan muncul di tab sampah."
      />
    </>
  );
};

export default ActiveArticleDataGrid;
