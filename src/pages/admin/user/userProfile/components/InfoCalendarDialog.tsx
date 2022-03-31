import { Dialog, DialogContent, DialogTitle, TextField } from '@material-ui/core';

interface InfoProps {
  label: string;
  info: string;
}

const Info = ({ label, info }: InfoProps) => (
  <TextField
    label={label}
    defaultValue={info}
    InputProps={{
      readOnly: true,
    }}
    variant="outlined"
    style={{ width: '100%', marginBottom: '32px' }}
  />
);

interface InfoCalendarDialogProps {
  open: boolean;
  onClose: () => void;
  data: ICalendar | undefined;
}

const InfoCalendarDialog = (props: InfoCalendarDialogProps) => {
  const { open, onClose, data } = props;

  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>Informasi Diary ASI</DialogTitle>

      {data && (
        <DialogContent style={{ flex: 1 }}>
          <Info label="Frekuensi memberikan ASI" info={data.numberOfBreastfeed} />
          <Info label="Lama rata-rata pemberian ASI" info={data.averageTimeFeeding} />
          <Info
            label="Apakah memberikan makanan lain selain ASI ? "
            info={data.isFeedingFood ? 'Ya' : 'Tidak'}
          />
          <Info
            label="Frekuensi memberikan susu formula hari ini"
            info={data.numberOfFormulaMilk}
          />
          <Info
            label="Lama rata-rata pemberian susu formula"
            info={
              data.averageTimeFeedingFormulaMilk !== '' ? data.averageTimeFeedingFormulaMilk : '-'
            }
          />
        </DialogContent>
      )}
    </Dialog>
  );
};

export default InfoCalendarDialog;
