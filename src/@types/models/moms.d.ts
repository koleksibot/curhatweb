interface IMoms extends IUser {
  profile?: IMomsProfile;
}

interface IMomsProfile {
  id: number;
  pictureId?: number;
  villageId: string;
  occupationId: number;
  nik?: string;
  jkn?: string;
  name?: string;
  pob?: string;
  dob?: string;
  address?: string;
  bloodType?: string;
  religion?: string;
  education?: string;
  maritalStatus?: string;
  housemate?: string;
  houseOwnership?: string;
  housematesNumber?: number;
  fullAddress?: string;
  occupationName?: string;
  religionText?: string;
  educationText?: string;
  maritalStatusText?: string;
  housemateText?: string;
  houseOwnershipText?: string;
  age?: number;
  domicile?: string;
  imageResource?: string;
  village?: IVillage;
  occupation?: IOccupation;
  husband: IHusband;
  baby: IBaby;
  pregnancy?: IPregnancy;
  picture: null;
}
