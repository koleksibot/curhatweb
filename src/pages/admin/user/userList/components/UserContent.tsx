import { useMemo, useState } from 'react';
import { Button, Tab, Tabs } from '@material-ui/core';
import UserGroup from '@constants/UserGroupEnum';
import { RootState } from '@redux/reducers';
import { useSelector } from 'react-redux';
import TabPanel from '@components/TabPanel';
import { getUserDownload } from '@services/UserServices';
import FileSaver from 'file-saver';
import UserDataGrid from './UserDataGrid';

const tabsData: { label: string; type: UserGroup; level: number }[] = [
  { label: 'Ibu', type: UserGroup.Mommies, level: 6 },
  { label: 'Kader', type: UserGroup.Cadre, level: 5 },
  { label: 'Bidan', type: UserGroup.Midwife, level: 4 },
  { label: 'Konselor', type: UserGroup.Conselor, level: 3 },
  { label: 'Dokter Umum', type: UserGroup.DoctorGeneral, level: 2 },
  { label: 'Dokter Spesialis', type: UserGroup.DoctorSpecialist, level: 1 },
  { label: 'Administrator', type: UserGroup.Administrator, level: 0 },
];

const UserContent = () => {
  const [value, setValue] = useState(0);

  const selfUser = useSelector((state: RootState) => state.selfUser.payload);

  const filteredTab = useMemo(
    () => tabsData.filter((tab) => tab.level >= selfUser.userGroup.level),
    [selfUser],
  );

  const handleChange = (_event: any, newValue: number) => {
    setValue(newValue);
  };

  const a11yProps = (index: number) => ({
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  });

  const handleDownload = async (userGroup: UserGroup) => {
    const response = await getUserDownload(userGroup);
    FileSaver.saveAs(response as Blob);
  };

  const renderTabs = () =>
    filteredTab.map((tab, index) => <Tab label={tab.label} {...a11yProps(index)} key={index} />);

  const renderTabPanels = () =>
    filteredTab.map((tab, index) => (
      <TabPanel value={value} index={index} key={index}>
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={() => handleDownload(tab.type)}
          disableElevation
        >
          Download
        </Button>
        <UserDataGrid type={tab.type} />
      </TabPanel>
    ));

  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        variant="scrollable"
        scrollButtons="auto"
        aria-label="tabs user"
      >
        {renderTabs()}
      </Tabs>
      {renderTabPanels()}
    </>
  );
};

export default UserContent;
