import { Dialog, DialogTitle } from '@material-ui/core';
import AddCategoryForm from './AddCategoryForm';

interface CategoryDialogProps {
  open: boolean;
  handleClose: () => void;
  title: string;
}

const CategoryDialog = ({ open, handleClose, title }: CategoryDialogProps) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle id="form-dialog-title">{title}</DialogTitle>
      <AddCategoryForm handleClose={handleClose} />
    </Dialog>
  );
};

export default CategoryDialog;
