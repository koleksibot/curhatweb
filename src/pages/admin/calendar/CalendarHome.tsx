import { Tabs, Tab, Box, makeStyles } from '@material-ui/core';
import { useState } from 'react';
import Calendar from './Calendar';
import CalendarDashboard from './dashboard/CalendarDashboard';

const useStyles = makeStyles(() => ({
  tabStyle: {
    background: 'white',
    marginBottom: 20,
  },
}));

const CalendarHome = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleTabs = (event: any, val: number) => {
    setValue(val);
  };
  return (
    <>
      <Tabs
        value={value}
        onChange={handleTabs}
        className={classes.tabStyle}
        indicatorColor="primary"
        variant="fullWidth"
      >
        <Tab label="Dashboard Diary Asi" />
        <Tab label="Data Diary Asi" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <CalendarDashboard />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Calendar />
      </TabPanel>
    </>
  );
};

function TabPanel(props: any) {
  const { children, value, index } = props;
  return <div>{value === index && <Box>{children}</Box>}</div>;
}

export default CalendarHome;
