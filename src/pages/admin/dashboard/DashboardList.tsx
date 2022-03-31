import { Grid, Card, Tabs, Tab, makeStyles } from '@material-ui/core';
import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/reducers';
import UserGroup from '@constants/UserGroupEnum';
import LineChart from './components/LineChart';

import NumberOfUsers from './components/NumberOfUsers';
import DoughnutChart from './components/BarChartUsia';
import DoughnutChartDaerah from './components/PieChartDaerah';
import UserAddition from './components/UserAddition';
import NumberOfEmptyUser from './components/NumberOfEmptyProfile';

const useStyles = makeStyles(() => ({
  asd: {
    background: 'white',
    marginBottom: 20,
  },
  cardstyle: {
    background: 'white',
    borderRadius: 10,
    borderStyle: 'none',
    boxShadow: 'none',
    padding: 20,
  },
}));

const tabsData: { label: string; type: UserGroup; level: number }[] = [
  { label: 'Ibu', type: UserGroup.Mommies, level: 6 },
  { label: 'Kader', type: UserGroup.Cadre, level: 5 },
  { label: 'Bidan', type: UserGroup.Midwife, level: 4 },
  { label: 'Konselor', type: UserGroup.Conselor, level: 3 },
  { label: 'Dokter Umum', type: UserGroup.DoctorGeneral, level: 2 },
  { label: 'Dokter Spesialis', type: UserGroup.DoctorSpecialist, level: 1 },
  { label: 'Administrator', type: UserGroup.Administrator, level: 0 },
];

const DashboardComponent = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const selfUser = useSelector((state: RootState) => state.selfUser.payload);

  const handleTabs = (event: any, val: number) => {
    console.warn(val);
    setValue(val);
  };

  const filteredTab = useMemo(
    () => tabsData.filter((tab) => tab.level >= selfUser.userGroup.level),
    [selfUser],
  );

  const a11yProps = (index: number) => ({
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  });

  const renderTabs = () =>
    filteredTab.map((tab, index) => <Tab label={tab.label} {...a11yProps(index)} key={index} />);

  return (
    <>
      {/* <AppBar position="static"> */}
      <Tabs
        value={value}
        className={classes.asd}
        onChange={handleTabs}
        indicatorColor="primary"
        variant="scrollable"
        scrollButtons="auto"
        aria-label="tabs user"
      >
        {renderTabs()}
      </Tabs>
      {/* </AppBar> */}
      <TabPanel value={value} index={0} userGroup={UserGroup.Mommies} />
      <TabPanel value={value} index={1} userGroup={UserGroup.Cadre} />
      <TabPanel value={value} index={2} userGroup={UserGroup.Midwife} />
      <TabPanel value={value} index={3} userGroup={UserGroup.Conselor} />
      <TabPanel value={value} index={4} userGroup={UserGroup.DoctorGeneral} />
      <TabPanel value={value} index={5} userGroup={UserGroup.DoctorSpecialist} />
      <TabPanel value={value} index={6} userGroup={UserGroup.Administrator} />
    </>
  );
};
function TabPanel(props: any) {
  const classes = useStyles();
  const { value, index, userGroup } = props;
  return (
    <div>
      {value === index && (
        <Grid container spacing={3} alignItems="stretch">
          <Grid item xs={4}>
            <Card className={classes.cardstyle}>
              <NumberOfUsers user={userGroup} />
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card className={classes.cardstyle}>
              <UserAddition user={userGroup} />
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card className={classes.cardstyle}>
              <NumberOfEmptyUser user={userGroup} />
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card className={classes.cardstyle}>
              <LineChart user={userGroup} />
            </Card>
          </Grid>

          <Grid item xs={6}>
            <Card className={classes.cardstyle}>
              <DoughnutChart user={userGroup} />
            </Card>
          </Grid>

          <Grid item xs={6}>
            <Card className={classes.cardstyle}>
              <DoughnutChartDaerah user={userGroup} />
            </Card>
          </Grid>
        </Grid>
      )}
    </div>
  );
}
export default DashboardComponent;
