import { Tabs, Tab, Box, makeStyles } from '@material-ui/core';
import { useState } from 'react';
import ConsultationDashboard from './consultationDashboard/ConsultationDashboard';
import Consultation from './consultationList/ConsultationList';

const useStyles = makeStyles(() => ({
  tabStyle: {
    background: 'white',
    marginBottom: 20,
  },
}));

const ConsultationHome = () => {
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
        <Tab label="Dashboard Konsultasi" />
        <Tab label="Data Konsultasi" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <ConsultationDashboard />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Consultation />
      </TabPanel>
    </>
  );
};

function TabPanel(props: any) {
  const { children, value, index } = props;
  return <div>{value === index && <Box>{children}</Box>}</div>;
}

export default ConsultationHome;
