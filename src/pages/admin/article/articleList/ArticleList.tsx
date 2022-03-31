import { ChangeEvent, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Tabs, Theme, Card } from '@material-ui/core';
import Button from '@components/LinkButton';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/reducers';
import PostAddIcon from '@material-ui/icons/PostAdd';
import Tab from '@components/Tab';
import TabPanel from '@components/TabPanel';
import ActiveArticleDataGrid from './components/ActiveArticleDataGrid';
import TrashArticleDataGrid from './components/TrashArticleDataGrid';

const useStyle = makeStyles((theme: Theme) => ({
  header: {
    marginBottom: theme.spacing(3),
  },
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(3),
  },
  cardstyle: {
    background: 'white',
    borderRadius: 10,
    borderStyle: 'none',
    boxShadow: 'none',
    padding: 20,
  },
  buttonstyle: {
    background: theme.palette.secondary.main,
    color: 'white',
    borderRadius: 100,
    textTransform: 'none',
    paddingRight: 20,
    '&:hover': {
      background: theme.palette.secondary.dark,
    },
  },
  iconstyle: {
    margin: 10,
  },
}));

const ArticleList = () => {
  const classes = useStyle();

  const [value, setValue] = useState(0);

  const { level } = useSelector((state: RootState) => state.selfUser.payload.userGroup);

  const handleChange = (_event: ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Card className={classes.cardstyle}>
        <div className={classes.headerContainer}>
          <Typography variant="h4" className={classes.header}>
            Daftar Artikel
          </Typography>
          {level === 0 && (
            <Button to="./article/add" className={classes.buttonstyle}>
              <PostAddIcon className={classes.iconstyle} />
              <Typography variant="h6">Buat artikel</Typography>
            </Button>
          )}
        </div>
        <div>
          <Tabs
            value={value}
            indicatorColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="tabs article"
            onChange={handleChange}
          >
            <Tab label="Aktif" index={0} />
            <Tab label="Sampah" index={1} />
          </Tabs>
          <TabPanel value={value} index={0}>
            <ActiveArticleDataGrid />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <TrashArticleDataGrid />
          </TabPanel>
        </div>
      </Card>
    </>
  );
};

export default ArticleList;
