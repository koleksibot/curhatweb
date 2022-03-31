interface IConsultant extends IUser {
  profile?: IConsultantProfile;
}

interface IConsultantProfile {
  id: number;
  pictureId?: number;
  villageId: string;
  name?: string;
  occupationId: number;
  pob?: string;
  dob?: string;
  address?: string;
  age?: number;
  domicile?: string;
  imageResource?: string;
  village?: IVillage;
  picture: null;
}
