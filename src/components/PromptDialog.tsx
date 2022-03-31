import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';

interface PromptDialogProps {
  open: boolean;
  onClose: () => void;
  onClickYes?: () => any;
  title: string;
  content?: string;
  yesLabel?: string;
  noLabel?: string;
}

const PromptDialog = (props: PromptDialogProps) => {
  const {
    open,
    onClose,
    title,
    content,
    onClickYes,
    yesLabel = 'Yakin',
    noLabel = 'Batalkan',
  } = props;

  const handleYes = () => {
    if (onClickYes) {
      onClickYes();
    }
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">{content}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          {noLabel}
        </Button>
        <Button onClick={handleYes} color="primary" autoFocus>
          {yesLabel}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PromptDialog;
