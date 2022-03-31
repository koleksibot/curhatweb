interface LocationAction<T> {
  type: string;
  payload: T;
  error?: {};
}

interface LocationState<T> {
  payload?: T;
  isLoading: boolean;
  error?: Record;
}

type VillagesAction = LocationAction<IVillage[]>;
type SubDistrictsAction = LocationAction<ISubDistrict[]>;
type DistrictsAction = LocationAction<IDistrict[]>;
type ProvincesAction = LocationAction<IProvince[]>;

type VillagesState = LocationState<IVillage[]>;
type SubDistrictsState = LocationState<ISubDistrict[]>;
type DistrictsState = LocationState<IDistrict[]>;
type ProvincesState = LocationState<IProvince[]>;
