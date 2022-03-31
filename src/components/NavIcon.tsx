import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import ForumIcon from '@material-ui/icons/Forum';
import TodayIcon from '@material-ui/icons/Today';
import DescriptionIcon from '@material-ui/icons/Description';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';

const NavIcon = (props: any) => {
  let icon;
  if (props.primary === 'Dashboard') {
    icon = <DashboardIcon color="inherit" />;
  }
  if (props.primary === 'Pengguna') {
    icon = <PeopleAltIcon />;
  }
  if (props.primary === 'Konsultasi') {
    icon = <ForumIcon />;
  }
  if (props.primary === 'Artikel') {
    icon = <DescriptionIcon />;
  }
  if (props.primary === 'Diary ASI') {
    icon = <TodayIcon />;
  }
  if (props.primary === 'Keluar') {
    icon = <MeetingRoomIcon />;
  }
  return (
    <>
      <div>{icon}</div>
    </>
  );
};

export default NavIcon;
