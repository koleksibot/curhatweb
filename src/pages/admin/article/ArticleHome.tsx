import { Tabs, Tab, Box, makeStyles } from '@material-ui/core';
import { useState } from 'react';
import ArticleCategories from './articleCategories/ArticleCategories';
import ArticleDashboard from './articleDashboard/ArticleDashboard';
import ArticleList from './articleList/ArticleList';

const useStyles = makeStyles(() => ({
  tabStyle: {
    background: 'white',
    marginBottom: 20,
  },
}));

const ArticleHome = () => {
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
        <Tab label="Dashboard Artikel" />
        <Tab label="Daftar Artikel" />
        <Tab label="Kategori Artikel" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <ArticleDashboard />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ArticleList />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ArticleCategories />
      </TabPanel>
    </>
  );
};

function TabPanel(props: any) {
  const { children, value, index } = props;
  return <div>{value === index && <Box>{children}</Box>}</div>;
}

export default ArticleHome;
