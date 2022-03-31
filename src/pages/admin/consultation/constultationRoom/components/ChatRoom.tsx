import { Button, makeStyles, Theme } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/reducers';
import { useQuery } from 'react-query';
import { getConsultationPost } from '@services/ConsultationServices';
import { useParams } from 'react-router-dom';
import FileSaver from 'file-saver';
import ChatBubble from './ChatBubble';
import { getConsultationPostsDownload } from '../../../../../services/ConsultationServices';

const useStyles = makeStyles((theme: Theme) => ({
  chatRoom: {
    // position: 'relative',
    overflowY: 'scroll',
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    '&>*': {
      marginBottom: theme.spacing(2),
    },
  },
  buttonWrapper: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row-reverse',
  },
  downloadButton: {
    position: 'fixed',
  },
}));

const ChatRoom = () => {
  const { id } = useParams<{ id: string }>();

  const classes = useStyles();

  const { isSuccess, data } = useQuery(['consultation', id], () => getConsultationPost(id));

  const user = useSelector((state: RootState) => state.selfUser.payload);

  const handleDownload = async () => {
    const response = await getConsultationPostsDownload(id);
    FileSaver.saveAs(response);
  };

  const getNameWithPosition = (post: IConsultationPost) => {
    if (post.user?.fullName) {
      return `${post.user.fullName} - ${post.user.userGroup.name}`;
    }
    return 'Belum mengisi Profile';
  };

  const renderPosts = () =>
    data?.map((post: IConsultationPost) => (
      <ChatBubble
        key={post.id}
        message={post.message}
        imageUri={post.picture?.original}
        voiceNoteUri={post.voiceNote?.original}
        name={getNameWithPosition(post)}
        time={post.createdAt}
        opposite={post.userId === user.id}
      />
    ));

  return (
    <div className={classes.chatRoom}>
      {isSuccess && (
        <>
          <div className={classes.buttonWrapper}>
            <Button
              className={classes.downloadButton}
              onClick={handleDownload}
              variant="contained"
              color="primary"
              disableElevation
            >
              Download
            </Button>
          </div>
          {renderPosts()}{' '}
        </>
      )}
    </div>
  );
};

export default ChatRoom;
