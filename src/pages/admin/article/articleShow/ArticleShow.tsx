import { ChangeEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CircularProgress, Tabs } from '@material-ui/core';
import parse from 'html-react-parser';
import ContentLayout from '@components/ContentLayout';
import Tab from '@components/Tab';
import TabPanel from '@components/TabPanel';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@redux/reducers';
import { requestArticle } from '@redux/actions/articleShowActions';
import ArticleRatingDataGrid from './components/ArticleRatingDataGrid';

const ArticleShow = () => {
  const [value, setValue] = useState(0);

  const { id } = useParams<{ id: string }>();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestArticle(id));
  }, []);

  const { payload, isLoading } = useSelector((state: RootState) => state.articleShow);

  const handleChange = (_event: ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return !isLoading && payload ? (
    <ContentLayout
      levelOneLabel="Daftar Artikel"
      levelOneTo="/admin/article"
      levelTwoLabel={payload.title}
    >
      <Tabs
        value={value}
        indicatorColor="primary"
        variant="scrollable"
        scrollButtons="auto"
        aria-label="tabs article"
        onChange={handleChange}
      >
        <Tab label="Pratinjau" index={0} />
        <Tab label="Statistik" index={1} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <div>
          <span>
            {`Dapat dilihat oleh : ${payload.articleScopes.map((scope) => scope.name).join(', ')}`}
          </span>
        </div>
        {parse(payload.content)}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <span>{`Jumlah kali dibaca : ${payload.viewCount} kali`}</span>
        <br />
        <span>{`Rata-rata penilaian : ${payload.averageRating ?? '-'}`}</span>
        <br />
        <span>{`Jumlah yang menilai : ${payload.rates.length} orang`}</span>
        <ArticleRatingDataGrid />
      </TabPanel>
    </ContentLayout>
  ) : (
    <CircularProgress />
  );
};

export default ArticleShow;
