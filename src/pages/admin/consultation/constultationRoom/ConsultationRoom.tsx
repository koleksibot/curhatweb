import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { requestConsultation } from '@redux/actions/consultationActions';
import { RootState } from '@redux/reducers';
import ContentLayout from '@components/ContentLayout';
import ChatContainer from './components/ChatContainer';

const ConsultationRoom = () => {
  const { id } = useParams<{ id: string }>();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestConsultation(id));
  }, []);

  const consultation = useSelector((state: RootState) => state.consultation);

  // TODO: add loading when dispatching

  return (
    <ContentLayout
      levelOneLabel="Konsultasi"
      levelOneTo="/admin/consultation"
      levelTwoLabel={`${consultation?.user?.fullName || 'Belum mengisi profile'} (${
        consultation.description
      })`}
      noContainer
    >
      <ChatContainer />
    </ContentLayout>
  );
};

export default ConsultationRoom;
