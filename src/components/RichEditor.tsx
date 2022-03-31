import { IUploadPictureResponse, postUploadPicture } from '@services/PictureServices';
import { Editor, IAllProps } from '@tinymce/tinymce-react';
import { TINY_MCE_API_KEY } from '@utils/config';

const RichEditor = (props: IAllProps) => {
  const handleImageUpload = async (blobInfo: any, success: (url: string) => any) => {
    try {
      const res: IUploadPictureResponse = await postUploadPicture({
        image: blobInfo.blob(),
      });
      success(res.asset);
    } catch (err) {
      // TODO : handle error
      // eslint-disable-next-line no-console
      console.error(err);
    }

    success('http://moxiecode.cachefly.net/tinymce/v9/images/logo.png');
  };

  return (
    <div style={{ height: props.init?.height ?? 500 }}>
      <Editor
        apiKey={TINY_MCE_API_KEY}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount',
          ],
          images_upload_credentials: true,
          images_upload_handler: handleImageUpload,
          automatic_uploads: true,
          file_picker_types: 'image',
          toolbar:
            'undo redo | formatselect | bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | media image link | bullist numlist outdent indent | removeformat searchreplace | preview help ',
        }}
        {...props}
      />
    </div>
  );
};

export default RichEditor;
