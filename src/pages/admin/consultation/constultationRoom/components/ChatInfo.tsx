import { makeStyles, Theme } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/reducers';
import Info from './Info';
import Participant from './Participant';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    overflowY: 'scroll',
    flex: 1,
  },
  itemGap: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  generalInfo: {
    extend: 'itemGap',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  header: {
    marginLeft: theme.spacing(2),
    fontSize: 14,
    color: theme.palette.primary.main,
  },
  participant: {
    extend: 'itemGap',
    '& > span': {
      extend: 'header',
    },
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    borderStyle: 'solid',
    borderColor: theme.palette.background.default,
    borderWidth: '8px 0',
  },
  information: {
    extend: 'itemGap',
    '& > span': {
      extend: 'header',
    },
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

const ChatInfo = () => {
  const classes = useStyles();

  const consultation = useSelector((state: RootState) => state.consultation);

  const infoList: Record<string, string | undefined> = {
    'Usia Bayi': `${consultation.info?.age ?? '-'} bulan`,
    'Berat Badan Bayi': `${consultation.info?.weight ?? '0'} kg`,
    'Panjang/Tinggi Badan Bayi': `${consultation.info?.height ?? '0'} cm`,
    'Rata-rata BAK Bayi': `${consultation.info?.bak ?? '-'} kali/hari`,
    'Rata-rata BAB Bayi': `${consultation.info?.bab ?? '-'} kali/minggu`,
    // TODO: Buat constant buat feed
    'Asupan Bayi': consultation.info?.feed,
    'Alat Pemberian ASI': consultation.info?.feedUsing ?? '-',
    'Makanan Lain yang diberikan': consultation.info?.otherFoodGiven ? 'Ada' : 'Tidak ada',
  };

  const renderInfo = () =>
    Object.keys(infoList).map((key, index) => (
      <Info label={key} info={infoList[key]} key={index} />
    ));

  const renderParticipant = () =>
    consultation.members.map((member) => (
      <Participant
        key={member.id}
        id={member.id}
        name={member.fullName || 'Belum mengisi profile'}
        phoneNumber={member.username || '-'}
      />
    ));

  return (
    <div className={classes.root}>
      <div className={classes.generalInfo}>
        <Info label="Waktu dibuat" info={consultation.createdAt} />
        <Info label="Waktu ditutup" info={consultation.closedAt || '-'} />
      </div>
      <div className={classes.participant}>
        <span>Partisipan</span>
        {/* TODO: add avatar props */}
        {renderParticipant()}
      </div>
      <div className={classes.information}>
        <span>Informasi Umum</span>
        {renderInfo()}
      </div>
    </div>
  );
};

export default ChatInfo;
