import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@redux/reducers';
import { requestUserProfile } from '@redux/actions/userProfileActions';
// import UserGroup from '@constants/UserGroupEnum';
import ContentLayout from '@components/ContentLayout';
import { CircularProgress } from '@material-ui/core';
import Header from './components/Header';
import TabsInfo from './components/TabsInfo';

const ShowUser = () => {
  const { id } = useParams<{ id: string }>();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestUserProfile(parseInt(id, 10)));
  }, []);

  const { payload, isLoading } = useSelector((state: RootState) => state.userProfile);

  return !isLoading ? (
    <ContentLayout
      levelOneLabel="Pengguna"
      levelOneTo="/admin/user"
      levelTwoLabel={payload?.fullName || 'Belum mengisi profile'}
    >
      <Header />
      <TabsInfo />
    </ContentLayout>
  ) : (
    <CircularProgress />
  );
};

export default ShowUser;
