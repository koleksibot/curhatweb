import { Autocomplete, AutocompleteRenderInputParams } from 'formik-material-ui-lab';
import { Field, FieldAttributes, useFormikContext } from 'formik';
import { styled, TextField } from '@material-ui/core';

interface CustomAutocompleteProps extends FieldAttributes<any> {
  label: string;
}

const AutocompleteTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

const CustomAutocomplete = (props: CustomAutocompleteProps) => {
  const { label, onChange, ...rest } = props;

  const { setFieldValue } = useFormikContext();

  const handleChange = (e: any, value: any) => {
    setFieldValue(props.name, value || '');
    if (onChange) {
      onChange(e, value);
    }
  };

  return (
    <Field
      component={Autocomplete}
      onChange={handleChange}
      renderInput={(params: AutocompleteRenderInputParams) => {
        const { inputProps } = params;
        Object.assign(inputProps, { autoComplete: 'new-password' });
        return (
          <AutocompleteTextField
            {...params}
            inputProps={inputProps}
            label={label}
            variant="standard"
          />
        );
      }}
      {...rest}
    />
  );
};

export default CustomAutocomplete;
