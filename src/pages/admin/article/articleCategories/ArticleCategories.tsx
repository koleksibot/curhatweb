import Typography from '@material-ui/core/Typography';
import { Button, makeStyles, Theme, Card } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { useState } from 'react';
import ArticleCategoriesDataGrid from './components/ArticleCategoriesDatagrid';
import CategoryDialog from './components/CategoryDialog';

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

const ArticleCategories = () => {
  const classes = useStyle();

  const [openAddCategory, setOpenAddCategory] = useState(false);

  return (
    <>
      <Card className={classes.cardstyle}>
        <div className={classes.headerContainer}>
          <Typography variant="h4" className={classes.header}>
            Daftar Kategori Artikel
          </Typography>
          <div>
            <Button
              onClick={() => {
                setOpenAddCategory(true);
              }}
              className={classes.buttonstyle}
            >
              <AddIcon className={classes.iconstyle} />
              <Typography variant="h6">Tambah Kategori</Typography>
            </Button>
          </div>
        </div>
        <div>
          <ArticleCategoriesDataGrid />
        </div>
        <CategoryDialog
          title="Tambah Kategori"
          open={openAddCategory}
          handleClose={() => {
            setOpenAddCategory(false);
          }}
        />
      </Card>
    </>
  );
};

export default ArticleCategories;
