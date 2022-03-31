import { useState } from 'react';
import { Tab, Tabs, Box } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/reducers';
// import Info from '@pages/admin/consultation/constultationRoom/components/Info';
// import TabPanel, { InfoList } from './TabPanel';
// import { babyInfo, consultantProfile, husbandInfo, momsProfile, pregnancyInfo } from './data';
import ActivityInfo from '../tabs/ActivityInfo';
import DiaryASI from '../tabs/DiaryASI';
import BabyComponent from './BabyComponent';
import PregnancyComponent from './PregnancyComponent';
import HouseholdComponent from './HouseholdComponent';
import ProfileComponent from './ProfileComponent';

// const useStyles = makeStyles((_theme: Theme) => ({
//   tab: {
//     minWidth: 120,
//     padding: '8px 24px',
//   },
// }));

// interface TabsInfoProps {
//   consultant: boolean;
// }

const TabsInfo = () => {
  const [value, setValue] = useState(0);

  // const classes = useStyles();

  // const existTab = consultant ? 1 : 2;

  const user = useSelector((state: RootState) => state.userProfile.payload);

  // const momTabsData: { label: string; infoList: InfoList }[] = [
  //   { label: 'Profil', infoList: momsProfile(user) },
  //   { label: 'Kehamilan', infoList: pregnancyInfo(user?.profile?.pregnancy) },
  //   { label: 'Bayi', infoList: babyInfo(user?.profile?.baby) },
  //   { label: 'Anggota Keluarga Lain', infoList: husbandInfo(user?.profile?.husband) },
  // ];

  // const consultantTabsData: { label: string; infoList: InfoList }[] = [
  //   { label: 'Profil', infoList: consultantProfile(user) },
  // ];

  // const tabsData = consultant ? consultantTabsData : momTabsData;

  const handleChange = (_event: any, newValue: number) => {
    setValue(newValue);
  };

  // const a11yProps = (index: number) => ({
  //   id: `scrollable-auto-tab-${index}`,
  //   'aria-controls': `scrollable-auto-tabpanel-${index}`,
  // });

  // const renderTabs = () =>
  //   tabsData.map((tab, index) => (
  //     <Tab
  //       className={classes.tab}
  //       label={tab.label}
  //       {...a11yProps(index + existTab)}
  //       key={index + existTab}
  //     />
  //   ));

  // const renderTabPanels = () =>
  //   tabsData.map((tab, index) => (
  //     <TabPanel value={value} index={index + existTab} key={index + existTab}>
  //       {renderInfoList(tab.infoList)}
  //     </TabPanel>
  //   ));

  // const renderInfoList = (infoList: InfoList) =>
  //   Object.keys(infoList).map((key, i) => <Info key={i} label={key} info={infoList[key]} />);

  return (
    <>
      {user?.userGroupId === 'mommy' ? (
        <>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            variant="fullWidth"
            scrollButtons="auto"
            aria-label="tabs user"
          >
            <Tab label="Profil" />
            <Tab label="Aktivitas" />
            <Tab label="Bayi" />
            <Tab label="Kehamilan" />
            <Tab label="Diary ASI" />
            <Tab label="Anggota Keluarga Lain" />

            {/* <Tab className={classes.tab} label="Aktivitas" {...a11yProps(0)} />
        {!consultant && <Tab className={classes.tab} label="Diary ASI" {...a11yProps(1)} />}
        {renderTabs()} */}
          </Tabs>

          <TabPanel value={value} index={0}>
            <Box mt={2}>
              <ProfileComponent user={user} />
            </Box>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Box mt={2}>
              <ActivityInfo />
            </Box>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Box mt={2}>
              <BabyComponent user={user} />
            </Box>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Box mt={2}>
              <PregnancyComponent user={user} />
            </Box>
          </TabPanel>
          <TabPanel value={value} index={4}>
            <Box mt={2}>
              <DiaryASI />
            </Box>
          </TabPanel>
          <TabPanel value={value} index={5}>
            <Box mt={2}>
              <HouseholdComponent user={user} />
            </Box>
          </TabPanel>
        </>
      ) : (
        <>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            variant="fullWidth"
            scrollButtons="auto"
            aria-label="tabs user"
          >
            <Tab label="Profil" />
            <Tab label="Aktivitas" />
          </Tabs>
          <TabPanel value={value} index={0}>
            <Box mt={2}>
              <ProfileComponent user={user} />
            </Box>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Box mt={2}>
              <ActivityInfo />
            </Box>
          </TabPanel>
        </>
      )}
      {/* {renderTabPanels()} */}
    </>
  );
};

function TabPanel(props: any) {
  const { children, value, index } = props;
  return <div>{value === index && <Box>{children}</Box>}</div>;
}

export default TabsInfo;
