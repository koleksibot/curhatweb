import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/reducers';
import { useHistory } from 'react-router-dom';
import ContentLayout from '@components/ContentLayout';
import AddUserForm from './components/AddUserForm';

const AddUser = () => {
  const { isSubmitted } = useSelector((state: RootState) => state.addUser);

  const history = useHistory();

  useEffect(() => {
    if (isSubmitted) {
      history.push('/admin');
    }
  }, [isSubmitted]);

  return (
    <ContentLayout
      levelOneLabel="Pengguna"
      levelOneTo="/admin/user"
      levelTwoLabel="Tambahkan pengguna"
    >
      <AddUserForm />
    </ContentLayout>
  );
};

export default AddUser;
