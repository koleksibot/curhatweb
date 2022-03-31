import post from '@utils/axios/post';
import * as Config from '@utils/axios/axiosConfig';

interface IUploadPictureRequest {
  image: Blob;
}

export interface IUploadPictureResponse {
  asset: string;
}

export const postUploadPicture = (request: IUploadPictureRequest) =>
  post<IUploadPictureResponse>('api/pictures/upload', request, Config.withToken());
