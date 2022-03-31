import { DataGrid, GridCellParams, GridColDef } from '@material-ui/data-grid';
import ActionButton from '@components/ActionButton';
import { useEffect, useMemo, useState } from 'react';
import PromptDialog from '@components/PromptDialog';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@redux/reducers';
import { requestArticleCategories } from '@redux/actions/articleCategoriesActions';
import CategoryDialog from './CategoryDialog';

interface IRowCategories {
  id: number;
  no: number;
  name: string;
}

interface ActionButtonsProps {
  onDelete: () => any;
  onEdit: () => any;
}

const ActionButtons = ({ onDelete, onEdit }: ActionButtonsProps) => (_params: GridCellParams) => (
  <div style={{ display: 'flex', flex: 1, justifyContent: 'space-around' }}>
    <ActionButton label="Edit" onClick={onEdit} noLink />
    <ActionButton label="Hapus" onClick={onDelete} noLink />
  </div>
);

const columns = (props: ActionButtonsProps): GridColDef[] => [
  { field: 'id', headerName: 'ID', hide: true },
  { field: 'no', headerName: 'No.', width: 75 },
  { field: 'name', headerName: 'Judul', flex: 1 },
  {
    field: 'action',
    headerName: 'Aksi',
    width: 175,
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
    renderCell: ActionButtons(props),
  },
];

const ArticleCategoriesDataGrid = () => {
  const [openEditCategory, setOpenEditCategory] = useState(false);
  const [openDeleteCategory, setOpenDeleteCategory] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestArticleCategories());
  }, []);

  const { payload, isLoading } = useSelector((state: RootState) => state.articleCategories);

  const rows = useMemo(
    () =>
      payload.data.map(
        (category, index): IRowCategories => ({
          id: category.id,
          no: index + 1,
          name: category.name,
        }),
      ),
    [payload],
  );

  const handleDelete = () => {
    setOpenDeleteCategory(true);
  };

  const handleEdit = () => {
    setOpenEditCategory(true);
  };

  return (
    <>
      <DataGrid
        autoHeight
        rows={rows}
        columns={columns({ onDelete: handleDelete, onEdit: handleEdit })}
        pageSize={20}
        checkboxSelection={false}
        loading={isLoading}
      />
      <CategoryDialog
        title="Edit kategori"
        open={openEditCategory}
        handleClose={() => {
          setOpenEditCategory(false);
        }}
      />
      <PromptDialog
        open={openDeleteCategory}
        onClose={() => {
          setOpenDeleteCategory(false);
        }}
        title="Anda yakin untuk menghapus kategori?"
        content="Artikel dengan kategori tersebut akan kehilangan kategori."
      />
    </>
  );
};

export default ArticleCategoriesDataGrid;
