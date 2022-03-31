interface IVillage {
  id: string;
  name: string;
  subDistrictId: ISubDistrict['id'];
  subDistrict: ISubDistrict;
}
