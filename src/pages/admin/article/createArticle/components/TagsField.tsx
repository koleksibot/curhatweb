import CustomAutocomplete from '@components/CustomAutocomplete';
import { createFilterOptions } from '@material-ui/lab/useAutocomplete';
import { FieldAttributes } from 'formik';

const mockData: { title: string }[] = [{ title: 'Halo' }, { title: 'Halo 1' }, { title: 'Halo 2' }];

const filter = createFilterOptions<{ title: string; inputValue?: string }>();

const TagsField = (props: FieldAttributes<any>) => {
  return (
    <CustomAutocomplete
      label="Tag"
      name="tags"
      multiple
      options={mockData}
      getOptionLabel={(option: any) => {
        if (typeof option === 'string') {
          return option;
        }
        if (option.inputValue) {
          return option.inputValue;
        }
        return option.title;
      }}
      renderOption={(option: any) => option.title}
      filterOptions={(options: any, params: any) => {
        const filtered = filter(options, params) as { title: string; inputValue?: string }[];

        if (params.inputValue !== '') {
          filtered.push({
            inputValue: params.inputValue,
            title: `Tambahkan "${params.inputValue}"`,
          });
        }

        return filtered;
      }}
      {...props}
    />
  );
};

export default TagsField;
